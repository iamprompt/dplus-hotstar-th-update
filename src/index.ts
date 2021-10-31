import { UpdateList } from './core/updateTray'
import { HSPageNo } from './utils/config'
import { getDateTimeFormat, getDurationFormat } from './utils/dayjs'
import { prisma } from './utils/prisma'

async function main() {
  await prisma.$connect()
  const startTime = Date.now()
  console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`)
  console.log(
    `Hotstar Watcher:: Start Updating Hotstar Movie Lists at ${getDateTimeFormat(
      startTime
    )}`
  )
  await UpdateList(HSPageNo)
  // await UpdatePage(ParamsType.MOVIE_DETAIL, 1260052105, 'SHOW', 2)
  // await CheckList()
  const stopTime = Date.now()
  console.log(
    `Done Process at ${getDateTimeFormat(stopTime)} (${getDurationFormat(
      stopTime - startTime
    )})`
  )
  console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>`)
}

;(async () => {
  main()
    .catch((e) => {
      throw e
    })
    .finally(async () => {
      await prisma.$disconnect()
    })
  setInterval(async () => {
    main()
      .catch((e) => {
        throw e
      })
      .finally(async () => {
        await prisma.$disconnect()
      })
  }, 900000)
})()
