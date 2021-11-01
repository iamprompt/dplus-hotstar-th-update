import {
  Asset,
  AssetLang,
  Lang,
  AssetTray,
  Tray,
  Studio,
  Channel,
} from '@prisma/client'
import dayjs from '../utils/dayjs'
import { EmbedFieldData, MessageEmbed } from 'discord.js'
import { webhook } from '../utils/discord'

export enum NOTI_TYPE {
  NEW = 'New',
  UPDATE = 'Update',
}

type AssetAll = Asset & {
  AssetLang: (AssetLang & {
    lang: Lang
  })[]
  AssetTray: (AssetTray & {
    tray: Tray
  })[]
  studio: Studio | null
  channel: Channel | null
  assetParent: Asset[]
}

export const sendUpdate = async (
  typeOfNotification: NOTI_TYPE,
  newAsset: AssetAll,
  oldAsset?: AssetAll
) => {
  // console.log(newAsset)
  // console.log(oldAsset)

  const embed = new MessageEmbed()

  embed.setTitle(embedTitleFormat(typeOfNotification, newAsset))
  embed.setURL(`https://www.hotstar.com/th/${newAsset.contentId}`)
  embed.setDescription(
    embedDescriptionFormat({
      'Content ID': newAsset.contentId,
      Type: newAsset.entityType,
      Genres: newAsset.genre.sort().join(', '),
    })
  )

  embed.addFields(embedFieldFormat(newAsset, oldAsset))

  newAsset.images &&
    embed.setImage(
      `https://img1.hotstarext.com/image/upload/f_auto/${newAsset.images}`
    )

  webhook.send({ embeds: [embed] })
}

const embedTitleFormat = (typeOfNotification: NOTI_TYPE, asset: AssetAll) => {
  let s = [`[${typeOfNotification}]`]
  asset.seasonNo &&
    asset.episodeNo &&
    s.push(`S${asset.seasonNo}E${asset.episodeNo}`)
  asset.assetParent[0] && s.push(asset.assetParent[0].title, '-')
  asset.title && s.push(asset.title)
  return s.join(' ')
}

const embedDescriptionFormat = (m: { [key: string]: string | number }) => {
  let s = ''
  for (const [k, v] of Object.entries(m)) {
    s += `**${k} :** \`${v}\`\n`
  }
  return s.trim()
}

const embedFieldFormat = (newAsset: AssetAll, oldAsset?: AssetAll) => {
  const fields: EmbedFieldData[] = []

  newAsset.episodeCnt &&
    fields.push({
      name: 'Episode Count',
      value: compareFieldValueFormat(newAsset.episodeCnt, oldAsset?.episodeCnt),
      inline: true,
    })
  newAsset.studio &&
    fields.push({
      name: 'Studio',
      value: compareFieldValueFormat(
        newAsset.studio.name,
        newAsset?.studio.name
      ),
      inline: true,
    })
  newAsset.duration &&
    fields.push({
      name: 'Duration',
      value: compareFieldValueFormat(
        `${dayjs.duration(newAsset.duration * 1000).format('HH:mm:ss')}`,
        oldAsset?.duration &&
          `${dayjs.duration(oldAsset.duration * 1000).format('HH:mm:ss')}`
      ),
      inline: true,
    })

  newAsset.description &&
    fields.push({
      name: 'Summary',
      value: compareFieldValueFormat(
        newAsset.description,
        oldAsset?.description
      ).substring(0, 500),
    })
  newAsset.year &&
    fields.push({
      name: 'Year',
      value: compareFieldValueFormat(newAsset.year, oldAsset?.year),
      inline: true,
    })
  newAsset.startDate &&
    newAsset.endDate &&
    fields.push(
      {
        name: 'Start Date',
        value: compareFieldValueFormat(
          `${dayjs(newAsset.startDate).format('D MMM YYYY HH:mm')}`,
          oldAsset?.startDate &&
            `${dayjs(oldAsset.startDate).format('D MMM YYYY HH:mm')}`
        ),
        inline: true,
      },
      {
        name: 'End Date',
        value: compareFieldValueFormat(
          `${dayjs(newAsset.endDate).format('D MMM YYYY HH:mm')}`,
          oldAsset?.endDate &&
            `${dayjs(oldAsset.endDate).format('D MMM YYYY HH:mm')}`
        ),
        inline: true,
      }
    )

  newAsset.AssetLang &&
    fields.push({
      name: 'Language',
      value: compareFieldValueFormat(
        newAsset.AssetLang.map((l) => l.lang.displayName)
          .sort()
          .join(', '),
        oldAsset?.AssetLang.map((l) => l.lang.displayName)
          .sort()
          .join(', ')
      ),
    })

  return fields
}

const compareFieldValueFormat = (
  m: string | number,
  n?: string | number | null
) => {
  let s = `**${m}**`
  if (n && n !== m) s += ` (~~${n}~~)`
  return s
}
