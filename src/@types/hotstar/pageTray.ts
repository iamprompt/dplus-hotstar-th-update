export type HSResponse = {
  body: Body
  statusCodeValue: number
  statusCode: string
}

export type Body = {
  results: Results
}

export type Results = {
  uri: string
  pageType: string
  responseType: string
  trays: Trays
  item?: AssetsItem
}

export type Trays = {
  items: TraysItem[]
  totalResults: number
  offset: number
  size: number
  totalPages: number
  totalPageResults: number
}

export type TraysItem = {
  title: string
  engTitle?: string
  uri?: string
  id: number
  traySource: TraySource
  layoutType?: LayoutType
  addIdentifier: string
  assets?: Assets
  trayTypeId: number
  traySourceId: number
  uqId: string
  globalId: string
}

export type Assets = {
  items: AssetsItem[]
  totalResults: number
  offset: number
  size: number
  totalPages: number
  totalPageResults: number
}

export type AssetsItem = {
  title: string
  engTitle?: string
  categoryId?: number
  contentId: number
  uri: string
  id: number
  entityType: EntityType
  assetType: AssetType
  genre: ChannelName[]
  lang: Lang[]
  channelName?: ChannelName
  episodeCnt?: number
  premium: boolean
  vip: boolean
  line2?: string
  line3?: string
  images: Images
  imageSets: ImageSets
  studioName?: StudioName
  langObjs: LangObj[]
  genreObjs: Obj[]
  channelObj?: Obj
  labels?: Label[]
  trailers?: string[]
  parentalRating: number
  parentalRatingName?: ParentalRatingName
  isSocialEnabled: boolean
  loginNudgeStatus: LoginNudgeStatus
  autoplayObjs?: AutoplayObj[]
  archived?: boolean
  isSubTagged: boolean
  duration?: number
  contentType?: ContentType
  contentProvider?: ContentProvider
  cpDisplayName?: ContentProvider
  cpLogoUrl?: string
  live?: boolean
  hboContent?: boolean
  encrypted?: boolean
  startDate?: number
  endDate?: number
  year?: number
  playbackUri?: string
  studioId?: number
  contentDownloadable?: boolean
  offlineStorageTime?: number
  offlinePlaybackTime?: number
  playbackType?: PlaybackType
  monetisable?: boolean
  languageSelector?: number
  drmClass?: DRMClass
  downloadDrmClass?: DRMClass
  contentStartPointSeconds?: number
  badges?: Badge[]
  clipType?: ClipType
  orientation?: LayoutType
  collections?: Collection[]
  detail?: string
  trailerParents?: string[]
  crisp?: Crisp
  liveStartTime?: number
  broadCastDate?: number
  shortTitle?: string
  description?: string
  channelId?: number
  seasonCnt?: number
  clipCnt?: number
  features?: Feature[]
  unifiedFeaturesObject?: UnifiedFeaturesObject
  seasonNo?: number
  episodeNo?: number
  supportSimulcast?: boolean
  showName?: string
  showId?: number
  showContentId?: string
  showShortTitle?: string
  seasonName?: string
  productionHouse?: string
}

export enum AssetType {
  Movie = 'MOVIE',
  Show = 'SHOW',
  Video = 'VIDEO',
}

export type AutoplayObj = {
  contentId: string
  playbackType: PlaybackType
  orientation: LayoutType
}

export enum LayoutType {
  Horizontal = 'HORIZONTAL',
  Masthead = 'MASTHEAD',
  Vertical = 'VERTICAL',
}

export enum PlaybackType {
  Internal = 'INTERNAL',
}

export enum Badge {
  NP = 'NP',
}

export enum ChannelName {
  ABCStudios = 'ABC Studios',
  Action = 'Action',
  Biopic = 'Biopic',
  Comedy = 'Comedy',
  ConcertFilm = 'Concert Film',
  Crime = 'Crime',
  Disney = 'Disney',
  DisneyJunior = 'Disney Junior',
  Docudrama = 'Docudrama',
  Documentary = 'Documentary',
  Drama = 'Drama',
  Family = 'Family',
  FoxLife = 'Fox Life',
  Horror = 'Horror',
  Kids = 'Kids',
  Marvel = 'Marvel',
  Music = 'Music',
  Musical = 'Musical',
  NatGeo = 'Nat Geo',
  Pixar = 'Pixar',
  Reality = 'Reality',
  Romance = 'Romance',
  Science = 'Science',
  Sport = 'Sport',
  StarWars = 'Star Wars',
  StarWorld = 'Star World',
  Superhero = 'Superhero',
  TalkShow = 'Talk Show',
  Teen = 'Teen',
  Thriller = 'Thriller',
  Travel = 'Travel',
  Wildlife = 'Wildlife',
}

export type Obj = {
  id: number
  name: ChannelName
  detailUrl: string
}

export enum ClipType {
  VOD = 'VOD',
}

export type Collection = {
  name: Name
}

export enum Name {
  BoxOffice = 'Box_Office',
  Disney = 'Disney+',
}

export enum ContentProvider {
  AmercentFilms = 'Amercent Films',
  BlueSkyStudios = 'Blue Sky Studios',
  CherninEntertainment = 'Chernin Entertainment',
  ContentProvider20ThCenturyFox = '20th Century-Fox',
  ContentProviderTouchstonePicturesDreamWorksPictures = 'Touchstone Pictures,DreamWorks Pictures',
  Fox2000Pictures = 'Fox 2000 Pictures',
  Fox2000PicturesColumbiaPictures = 'Fox 2000 PicturesColumbia Pictures',
  Fox2000PicturesSunsweptEntertainment = 'Fox 2000 Pictures, Sunswept Entertainment',
  Fox2000PicturesTempleHill = 'Fox 2000 Pictures, Temple Hill',
  FoxSearchlightCherninEntertainment = 'Fox Searchlight Chernin Entertainment',
  FoxSearchlightIndianPaintbrushAmericanEmpirical = 'FoxSearchlight,IndianPaintbrush,AmericanEmpirical',
  HollywoodPictures = 'Hollywood Pictures',
  Hotstar = 'Hotstar',
  LawrenceGordonProductions = 'Lawrence Gordon Productions',
  Ngc = 'NGC',
  Novi = 'Novi',
  NoviDigital = 'Novi Digital',
  RobertWiseProductions = 'Robert Wise Productions',
  SamuelGoldwynFilms = 'Samuel Goldwyn Films',
  SurinderFilms = 'Surinder Films',
  TSGEntertainment = 'TSG Entertainment',
  TenThirteenProductions = 'Ten Thirteen Productions',
  The20ThCenturyFox = '20th Century Fox',
  The20ThCenturyFoxAnimation = '20th Century Fox Animation',
  TouchstonePictures = 'Touchstone Pictures',
  TouchstonePicturesDreamWorksPictures = 'Touchstone Pictures, DreamWorks Pictures',
  TouchstonePicturesSpyglassEntertainment = 'Touchstone Pictures Spyglass Entertainment',
  TouchstonePicturesWaltDisneyPictures = 'Touchstone Pictures (Walt Disney Pictures)',
  TwentiethCenturyFOXFilmCorporation = 'Twentieth century FOX film Corporation',
  TwentiethCenturyFox = 'Twentieth Century Fox',
  TwentiethCenturyFoxLBIEntertainment = 'Twentieth Century Fox, LBI Entertainment',
  Unknown = 'Unknown',
  WaltDisneyFeatureAnimation = 'Walt Disney Feature Animation',
  WaltDisneyStudiosMotionPictures = 'Walt Disney Studios Motion Pictures',
}

export enum ContentType {
  Clips = 'CLIPS',
  Movie = 'MOVIE',
}

export enum Crisp {
  DrugUsageLanguage = 'Drug Usage, Language',
  Horror = 'Horror',
  Language = 'Language',
  MatureTheme = 'Mature Theme',
  SexLanguage = 'Sex, Language',
  SexViolence = 'Sex, Violence',
  SexViolenceLanguage = 'Sex, Violence, Language',
  SuitableForAll = 'Suitable for All',
  Violence = 'Violence',
  ViolenceHorror = 'Violence, Horror',
  ViolenceLanguage = 'Violence, Language',
  ViolenceLanguageHorror = 'Violence, Language, Horror',
  ViolenceLanguageMatureTheme = 'Violence, Language, Mature Theme',
}

export enum DRMClass {
  BestEffort = 'BEST_EFFORT',
  NoCompromise = 'NO_COMPROMISE',
}

export enum EntityType {
  Clip = 'CLIP',
  Movie = 'MOVIE',
  Show = 'SHOW',
  Episode = 'EPISODE',
}

export type ImageSets = {
  DEFAULT: Images
}

export type Images = {
  v?: string
  h: string
  m?: string
  t?: string
  i?: string
}

export enum Label {
  Premium = 'PREMIUM',
}

export enum Lang {
  Bengali = 'Bengali',
  Cantonese = 'Cantonese',
  Dutch = 'Dutch',
  English = 'English',
  Hindi = 'Hindi',
  Indonesian = 'Indonesian',
  Japanese = 'Japanese',
  Korean = 'Korean',
  Malay = 'Malay',
  Mandarin = 'Mandarin',
  Tamil = 'Tamil',
  Telugu = 'Telugu',
  Thai = 'Thai',
}

export type LangObj = {
  hide: boolean
  id: number
  name: Lang
  iso3code: Iso3Code
  detailUrl: string
  displayName: DisplayName
}

export enum DisplayName {
  Cantonese = 'Cantonese',
  Dutch = 'Dutch',
  English = 'English',
  Indonesian = 'Indonesian',
  Japanese = 'Japanese',
  Korean = 'Korean',
  Malay = 'Malay',
  Mandarin = 'Mandarin',
  हिंदी = 'हिंदी',
  বাংলা = 'বাংলা',
  தமிழ் = 'தமிழ்',
  తెలుగు = 'తెలుగు',
  ไทย = 'ไทย',
}

export enum Iso3Code {
  Ben = 'ben',
  Cmn = 'cmn',
  Eng = 'eng',
  Hin = 'hin',
  Ind = 'ind',
  Jpn = 'jpn',
  Kor = 'kor',
  MSA = 'msa',
  Nld = 'nld',
  Tam = 'tam',
  Tel = 'tel',
  Tha = 'tha',
  Yue = 'yue',
}

export enum LoginNudgeStatus {
  Default = 'DEFAULT',
}

export enum ParentalRatingName {
  All = 'ALL',
  G = 'G',
  PG = 'PG',
  The13 = '13+',
  The15 = '15+',
  The18 = '18+',
  The20 = '20+',
}

export enum StudioName {
  ABCStudios = 'ABC Studios',
  Act2Pictures = 'Act2pictures',
  AddOilFilmsPteLtd = 'Add Oil Films Pte Ltd',
  BeijingEnlightPicturesCoLtd = 'Beijing Enlight Pictures, Co. Ltd',
  BuenaVista = 'Buena Vista',
  China3D = 'China 3D',
  CloverFilmsDistributionPteLtd = 'Clover Films Distribution Pte Ltd',
  Disney = 'Disney',
  ESPNFilms = 'ESPN Films',
  EdkoFilmsLtd = 'EDKO FILMS LTD',
  Falcon = 'Falcon',
  Fng = 'FNG',
  Fox = 'FOX',
  Freeform = 'Freeform',
  Fx = 'FX',
  Gdh = 'GDH',
  GreenFilmProduction = 'Green Film Production',
  InfocusAsia = 'Infocus Asia',
  Kantana = 'Kantana',
  Karga7 = 'Karga 7',
  KumanPictures = 'Kuman Pictures',
  LucasFilm = 'LucasFilm',
  MDPictures = 'MD pictures',
  Marvel = 'Marvel',
  Mm2 = 'MM2',
  NatGeo = 'Nat Geo',
  Pixar = 'Pixar',
  PrimeworksFilms = 'Primeworks Films',
  RedFilms = 'Red Films',
  RoadsideAttractions = 'Roadside Attractions',
  SCM = 'SCM',
  SKOPProductions = 'SKOP Productions',
  Sahamongol = 'Sahamongol',
  Star = 'STAR',
  StarWorld = 'Star World',
  TBSEntertainment = 'TBS Entertainment',
  The20ThCenturyStudios = '20th Century Studios',
  TouchstonePictures = 'Touchstone Pictures',
}

export enum TraySource {
  Catalog = 'CATALOG',
  Gravity = 'GRAVITY',
}

export type UnifiedFeaturesObject = {
  languages: LangObj[]
  videos: Video[]
  audioChannels: AudioChannel[]
}

export type Video = {
  resolution: AudioChannel
  dynamicRanges: AudioChannel[]
}

export type AudioChannel = {
  hide: boolean
  code: string
  label: string
  logoUrl: string
  lightLogoUrl?: string
}

export type Feature = {
  subType: string
  languages: LangObj[]
  videos: Video[]
  audioChannels: AudioChannel[]
}
