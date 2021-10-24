import Modification from 'mdx-m3-viewer/dist/cjs/parsers/w3x/w3u/modification';
import { OEContainer } from '../container';
import { war3ToTS, tsToWar3 } from '../utils';
import * as objects from './unitsdata.json';

export interface Unit {
  requiredAnimationNames: string;
  iconGameInterface: string;
  requiredAnimationNamesAttachments: string;
  requiredAttachmentLinkNames: string;
  requiredBoneNames: string;
  structuresBuilt: string;
  buttonPositionX: number;
  buttonPositionY: number;
  casterUpgradeArt: string;
  casterUpgradeNames: string;
  casterUpgradeTips: string;
  dependencyEquivalents: string;
  description: string;
  nameEditorSuffix: string;
  hotkey: string;
  loopingFadeInRate: number;
  loopingFadeOutRate: number;
  attack1ProjectileArc: number;
  attack2ProjectileArc: number;
  attack1ProjectileArt: string;
  attack2ProjectileArt: string;
  attack1ProjectileHomingEnabled: boolean;
  attack2ProjectileHomingEnabled: boolean;
  attack1ProjectileSpeed: number;
  attack2ProjectileSpeed: number;
  movement: string;
  name: string;
  random: string;
  requirements: string;
  requirementsLevels: string;
  iconScoreScreen: string;
  itemsSold: string;
  unitsSold: string;
  special: string;
  target: string;
  tooltipBasic: string;
  tooltipExtended: string;
  normal: string;
  defaultActiveAbility: string;
  buildTime: number;
  goldBountyAwardedNumberOfDice: number;
  goldBountyAwardedBase: number;
  goldBountyAwardedSidesPerDie: number;
  lumberBountyAwardedNumberOfDice: number;
  lumberBountyAwardedBase: number;
  lumberBountyAwardedSidesPerDie: number;
  collisionSize: number;
  defenseBase: number;
  defenseType: string;
  defenseUpgradeBonus: number;
  foodProduced: number;
  foodCost: number;
  goldCost: number;
  repairGoldCost: number;
  hitPointsMaximumBase: number;
  isABuilding: boolean;
  level: number;
  lumberCost: number;
  repairLumberCost: number;
  manaInitialAmount: number;
  manaMaximum: number;
  speedMaximum: number;
  speedMinimum: number;
  sightRadiusNight: number;
  hitPointsRegenerationRate: number;
  manaRegeneration: number;
  hitPointsRegenerationType: string;
  repairTime: number;
  groupSeparationEnabled: boolean;
  groupSeparationGroupNumber: number;
  groupSeparationParameter: number;
  groupSeparationPriority: number;
  sightRadiusDay: number;
  speedBase: number;
  stockMaximum: number;
  stockReplenishInterval: number;
  stockStartDelay: number;
  stockInitialAfterStartDelay: number;
  tilesets: string;
  unitClassification: string;
  upgradesUsed: string;
  aIPlacementRadius: number;
  aIPlacementType: string;
  canFlee: boolean;
  sleeps: boolean;
  transportedSize: number;
  deathTimeSeconds: number;
  deathType: string;
  useExtendedLineOfSight: boolean;
  formationRank: number;
  heightMinimum: number;
  height: number;
  type: string;
  orientationInterpolation: number;
  pointValue: number;
  priority: number;
  propulsionWindowDegrees: number;
  race: string;
  targetedAs: string;
  turnRate: number;
  armorType: string;
  animationBlendTimeSeconds: number;
  tintingColor3Blue: number;
  shadowTextureBuilding: string;
  categorizationCampaign: boolean;
  allowCustomTeamColor: boolean;
  canDropItemsOnDeath: boolean;
  elevationSamplePoints: number;
  elevationSampleRadius: number;
  modelFile: string;
  modelFileExtraVersions: string;
  fogOfWarSampleRadius: number;
  tintingColor2Green: number;
  displayAsNeutralHostile: boolean;
  placeableInEditor: boolean;
  maximumPitchAngleDegrees: number;
  maximumRollAngleDegrees: number;
  scalingValue: number;
  hideMinimapDisplay: boolean;
  occluderHeight: number;
  tintingColor1Red: number;
  animationRunSpeed: number;
  selectionScale: number;
  scaleProjectiles: boolean;
  selectionCircleOnWater: boolean;
  selectionCircleHeight: number;
  shadowImageHeight: number;
  hasWaterShadow: boolean;
  shadowImageWidth: number;
  shadowImageCenterX: number;
  shadowImageCenterY: number;
  categorizationSpecial: boolean;
  teamColor: string;
  hasTilesetSpecificData: boolean;
  shadowImageUnit: string;
  unitSoundSet: string;
  useClickHelper: boolean;
  animationWalkSpeed: number;
  acquisitionRange: number;
  attack1AttackType: string;
  attack2AttackType: string;
  attack1AnimationBackswingPoint: number;
  attack2AnimationBackswingPoint: number;
  animationCastBackswing: number;
  animationCastPoint: number;
  attack1CooldownTime: number;
  attack2CooldownTime: number;
  attack1DamageLossFactor: number;
  attack2DamageLossFactor: number;
  attack1DamageNumberOfDice: number;
  attack2DamageNumberOfDice: number;
  attack1DamageBase: number;
  attack2DamageBase: number;
  attack1AnimationDamagePoint: number;
  attack2AnimationDamagePoint: number;
  attack1DamageUpgradeAmount: number;
  attack2DamageUpgradeAmount: number;
  attack1AreaOfEffectFullDamage: number;
  attack2AreaOfEffectFullDamage: number;
  attack1AreaOfEffectMediumDamage: number;
  attack2AreaOfEffectMediumDamage: number;
  attack1DamageFactorMedium: number;
  attack2DamageFactorMedium: number;
  projectileImpactZSwimming: number;
  projectileImpactZ: number;
  projectileLaunchZSwimming: number;
  projectileLaunchX: number;
  projectileLaunchY: number;
  projectileLaunchZ: number;
  minimumAttackRange: number;
  attack1AreaOfEffectSmallDamage: number;
  attack2AreaOfEffectSmallDamage: number;
  attack1DamageFactorSmall: number;
  attack2DamageFactorSmall: number;
  attack1Range: number;
  attack2Range: number;
  attack1RangeMotionBuffer: number;
  attack2RangeMotionBuffer: number;
  attack1ShowUI: boolean;
  attack2ShowUI: boolean;
  attack1DamageSidesPerDie: number;
  attack2DamageSidesPerDie: number;
  attack1DamageSpillDistance: number;
  attack2DamageSpillDistance: number;
  attack1DamageSpillRadius: number;
  attack2DamageSpillRadius: number;
  attack1AreaOfEffectTargets: string;
  attack2AreaOfEffectTargets: string;
  attack1MaximumNumberOfTargets: number;
  attack2MaximumNumberOfTargets: number;
  attack1TargetsAllowed: string;
  attack2TargetsAllowed: string;
  attacksEnabled: string;
  attack1WeaponType: string;
  attack2WeaponType: string;
  attack1WeaponSound: string;
  attack2WeaponSound: string;
  normalSkin: string;
  heroSkin: string;
}

export enum Units {
  AHero = 'HERO',
  Abomination = 'uabo',
  Abominationcinematic = 'uabc',
  Acolyte = 'uaco',
  Admiralproudmoore = 'Hapm',
  Airbarge = 'uarb',
  Akama = 'Naka',
  Albatross = 'nalb',
  Alchemist = 'Nalc',
  AlchemistMorphLevel1 = 'Nalm',
  AlchemistMorphLevel2 = 'Nal2',
  AlchemistMorphLevel3 = 'Nal3',
  AltarOfDarkness = 'uaod',
  AltarOfElders = 'eate',
  AltarOfKings = 'halt',
  AltarOfStorms = 'oalt',
  Altarofthedepths = 'nnad',
  AncestralGuardian = 'oang',
  AncientHydra = 'nahy',
  AncientOfLore = 'eaoe',
  AncientOfWar = 'eaom',
  AncientOfWind = 'eaow',
  AncientOfWonders = 'eden',
  AncientProtector = 'etrp',
  AncientSasquatch = 'nsqa',
  AncientWendigo = 'nwna',
  Antonidus = 'Hant',
  Anubarak = 'Uanb',
  ApprenticeWizard = 'nwiz',
  ArachnathidEarthBorer = 'nane',
  ArcaneSanctum = 'hars',
  ArcaneTower = 'hatw',
  ArcaneVault = 'hvlt',
  Arcaneobservatory = 'haro',
  Archer = 'earc',
  Archimonde = 'Uwar',
  Archmage = 'Hamg',
  Archmage2 = 'Hjas',
  Arthas = 'Hart',
  Arthaswithfrostmourne = 'Harf',
  Assassin = 'nass',
  AvatarOfVengeance = 'espv',
  Azurelordfrostwyrm = 'ubdd',
  Azureloredragon = 'ubdr',
  Baine = 'obai',
  Balnazzar = 'Ubal',
  Bandit = 'nban',
  BanditLord = 'nbld',
  Banshee = 'uban',
  BarbedArachnathid = 'nanb',
  BarbedArachnathid2 = 'nanm',
  Barracks = 'hbar',
  Barracks2 = 'obar',
  Barrowden = 'nbwd',
  Batrider = 'otbr',
  BattleGolem = 'narg',
  Battleship = 'nbsp',
  BearLevel1 = 'ngz1',
  Beastiary = 'obea',
  Beastmaster = 'Nbst',
  BerserkElemental = 'nelb',
  BerserkWildkin = 'nowk',
  Berserker = 'otbk',
  Bindstonese = 'nbse',
  Bindstonesw = 'nbsw',
  BlackCitadel = 'unp2',
  BlackDragon = 'nbwm',
  BlackDragonRoost = 'ndrk',
  BlackDragonWhelp = 'nbdr',
  BlackDrake = 'nbdk',
  BlackSpider = 'nspb',
  Blackrockblademaster = 'Nbbc',
  Blacksmith = 'hbla',
  Blademaster = 'Obla',
  BloodMage = 'Hblm',
  BloodWizard = 'nwzw',
  Bloodelfengineer = 'nbee',
  Bloodelflieutenant = 'nbel',
  Bloodelfwagon = 'hbew',
  Bloodelfworker = 'nhew',
  Bloodfiend = 'nfgb',
  Bloodfountain = 'nbfl',
  BlueDragon = 'nadr',
  BlueDragonRoost = 'ndru',
  BlueDragonWhelp = 'nadw',
  BlueDragonspawnApprentice = 'nbda',
  BlueDragonspawnMeddler = 'nbdm',
  BlueDragonspawnOverseer = 'nbdo',
  BlueDragonspawnSorcerer = 'nbds',
  BlueDragonspawnWarrior = 'nbdw',
  BlueDrake = 'nadk',
  Boneyard = 'ubon',
  Bookofsummoning = 'nbsm',
  Bouldertower = 'nbt1',
  Bouldertowerupgrade = 'nbt2',
  Brewmaster = 'Npbm',
  Brigand = 'nbrg',
  BronzeDragon = 'nbzd',
  BronzeDragonRoost = 'ndrz',
  BronzeDragonWhelp = 'nbzw',
  BronzeDrake = 'nbzk',
  BroodMother = 'nsbm',
  BurningArcher = 'nskf',
  Burrow = 'otrb',
  BurrowedBarbedArachnathid = 'nbnb',
  BurrowedCarrionBeetleLevel2 = 'ucsB',
  BurrowedCarrionBeetleLevel3 = 'ucsC',
  BurrowedCryptFiend = 'ucrm',
  Cairnebloodhoof = 'Ocbh',
  Cairnebloodhoofcinematic = 'Otcc',
  Cairnebloodhoofexp = 'Ocb2',
  Campaignturtle = 'nhyc',
  CannonTower = 'hctw',
  CarrionBeetleLevel1 = 'ucs1',
  CarrionBeetleLevel2 = 'ucs2',
  CarrionBeetleLevel3 = 'ucs3',
  Castle = 'hcas',
  Cenarius = 'Ecen',
  CentaurArcher = 'ncea',
  CentaurArcher2 = 'ncef',
  CentaurDrudge = 'ncer',
  CentaurImpaler = 'ncim',
  CentaurImpaler2 = 'ncif',
  CentaurKhan = 'ncnk',
  CentaurOutrunner = 'ncen',
  CentaurSorcerer = 'ncks',
  CentaurSorcerer2 = 'nckf',
  CentaurTent = 'ncnt',
  CentaurTent2 = 'nct1',
  CentaurTent3 = 'nct2',
  Chaosgrunt = 'nchg',
  Chaoskotobeast = 'nckb',
  Chaosorcburrow = 'ocbw',
  Chaospeon = 'ncpn',
  Chaosspaceorc = 'zcso',
  Chaoswarlock = 'nchw',
  Chaoswarlord = 'owar',
  Chaoswolfrider = 'nchr',
  Chaplain = 'nchp',
  Chicken = 'nech',
  Child = 'nvlk',
  Child2 = 'nvk2',
  Chimaera = 'echm',
  ChimaeraRoost = 'edos',
  CircleOfPower = 'ncop',
  CircleOfPowerLarge = 'ncp3',
  CircleOfPowerMedium = 'ncp2',
  CityBuilding0 = 'ncb0',
  CityBuilding1 = 'ncb1',
  CityBuilding10 = 'ncba',
  CityBuilding11 = 'ncbb',
  CityBuilding12 = 'ncbc',
  CityBuilding13 = 'ncbd',
  CityBuilding14 = 'ncbe',
  CityBuilding15 = 'ncbf',
  CityBuilding2 = 'ncb2',
  CityBuilding3 = 'ncb3',
  CityBuilding4 = 'ncb4',
  CityBuilding5 = 'ncb5',
  CityBuilding6 = 'ncb6',
  CityBuilding7 = 'ncb7',
  CityBuilding8 = 'ncb8',
  CityBuilding9 = 'ncb9',
  ClockwerkGoblin = 'ncg1',
  ClockwerkGoblin2 = 'ncg2',
  ClockwerkGoblin3 = 'ncg3',
  ClockwerkGoblin4 = 'ncgb',
  Coldtower = 'ndt1',
  Coldtowerupgrade = 'ndt2',
  Coralbed = 'nnfm',
  CorruptedTreant = 'nenc',
  Corruptedancientofwar = 'ncaw',
  Corruptedancientprotector = 'ncap',
  Corruptedmoonwell = 'ncmw',
  Corruptedtreeofages = 'ncta',
  Corruptedtreeofeternity = 'ncte',
  Corruptedtreeoflife = 'nctl',
  Crab = 'ncrb',
  Crypt = 'usep',
  CryptFiend = 'ucry',
  CryptLord = 'Ucrl',
  CrystalArachnathid = 'nanc',
  Dagren = 'Hdgo',
  Dalaranguardtower = 'ndgt',
  Dalaranmutant = 'ndmu',
  Dalaranreject = 'ndrj',
  DarkMinion = 'ndr2',
  DarkRanger = 'Nbrn',
  DarkTroll = 'ndtr',
  DarkTrollBerserker = 'ndtb',
  DarkTrollHighPriest = 'ndth',
  DarkTrollShadowPriest = 'ndtp',
  DarkTrollTrapper = 'ndtt',
  DarkTrollWarlord = 'ndtw',
  DarkWizard = 'nwzd',
  Darkportalse = 'ndke',
  Darkportalsw = 'ndkw',
  DeathKnight = 'Udea',
  DeathKnight2 = 'Uart',
  DeathKnight3 = 'Udef',
  DeathRevenant = 'nrvd',
  Deathtower = 'ntt1',
  Deathtowerupgrade = 'ntx2',
  Deceiver = 'nhdc',
  DeeplordRevenant = 'nlrv',
  DefenderGolem = 'nggd',
  Defiledfountainoflife = 'ndfl',
  Demolisher = 'ocat',
  Demolisherdraenei = 'ncat',
  DemonHunter = 'Edem',
  DemonHunterDemonForm = 'Edmm',
  DemonHuntress = 'Edef',
  DemonHuntressDemonForm = 'Edmf',
  Demongate = 'ndmg',
  Destroyer = 'ubsp',
  Detheroc = 'Udth',
  DiabloCart = 'nccd',
  DireFrostWolf = 'nwwd',
  DireMammoth = 'nmdr',
  DireQuilbeastLevel2 = 'nqb2',
  DireWolf = 'nwld',
  DireWolfLevel2 = 'osw2',
  DiseaseCloud = 'uplg',
  Dog = 'ndog',
  DoomGuardStandard = 'nbal',
  DoomGuardSummoned = 'nba2',
  DraeneiChieftainsHut = 'ndch',
  DraeneiDarkslayer = 'ndrd',
  DraeneiDisciple = 'ndrm',
  DraeneiGuardian = 'ndrf',
  DraeneiHarbinger = 'ndrh',
  DraeneiHut = 'ndh0',
  DraeneiHut2 = 'ndh1',
  DraeneiProtector = 'ndrp',
  DraeneiSeer = 'ndrs',
  DraeneiStalker = 'ndrt',
  DraeneiVindicator = 'ndrn',
  DraeneiWatcher = 'ndrw',
  Draeneihaven = 'ndh2',
  Draeneilaborer = 'ndrl',
  Draeneisalamander = 'ndsa',
  Draeneiseerden = 'ndh4',
  Draeneiwarriorshall = 'ndh3',
  DragonHawk = 'nws1',
  DragonTurtle = 'ntrd',
  Dragonbuilding = 'ndrb',
  DragonhawkRider = 'hdhw',
  Drakthul = 'odkt',
  Dreadlord = 'Udre',
  Drekthar = 'Odrt',
  DruidOfTheClawBearForm = 'edcm',
  DruidOfTheClawNightElfForm = 'edoc',
  DruidOfTheTalonNightElfForm = 'edot',
  DruidOfTheTalonStormCrowForm = 'edtm',
  Dryad = 'edry',
  DuneWorm = 'ndwm',
  DwarfCart = 'nccr',
  Earth = 'npn3',
  Earthfurytower = 'negf',
  ElderHydra = 'nehy',
  ElderJungleStalker = 'njga',
  ElderSasquatch = 'nsqe',
  ElderVoidwalker = 'nvde',
  ElderWendigo = 'nwnr',
  Elvenfarm = 'nefm',
  Elvenfarm0 = 'nef0',
  Elvenfarm1 = 'nef1',
  Elvenfarm2 = 'nef2',
  Elvenfarm3 = 'nef3',
  Elvenfarm4 = 'nef4',
  Elvenfarm5 = 'nef5',
  Elvenfarm6 = 'nef6',
  Elvenfarm7 = 'nef7',
  Elvenfishingvillage0 = 'nfv0',
  Elvenfishingvillage1 = 'nfv1',
  Elvenfishingvillage2 = 'nfv2',
  Elvenfishingvillage3 = 'nfv3',
  Elvenfishingvillage4 = 'nfv4',
  Elvenguardtower = 'negt',
  Emissary = 'nemi',
  Energytower = 'net1',
  Energytowerupgrade = 'net2',
  Enforcer = 'nenf',
  Engineergazlowe = 'negz',
  EnragedElemental = 'nele',
  EnragedJungleStalker = 'njgb',
  EnragedWildkin = 'nowe',
  EntangledGoldMine = 'egol',
  EredarDiabolist = 'nerd',
  EredarSorcerer = 'ners',
  EredarWarlock = 'nerw',
  Evilarthas = 'Uear',
  Evilillidan = 'Eevi',
  Evilillidandemonform = 'Eevm',
  Evilsylvanas = 'Usyl',
  FacelessOneDeathbringer = 'nfod',
  FacelessOneTerror = 'nfot',
  FacelessOneTrickster = 'nfor',
  FaerieDragon = 'efdr',
  FallenPriest = 'nhfp',
  FarSeer = 'Ofar',
  FarSeer2 = 'Ofth',
  Farm = 'hhou',
  FelBeast = 'npfl',
  FelBoar = 'nfbr',
  FelRavager = 'npfm',
  FelStalker = 'nfel',
  Felguard = 'nfgu',
  Fire = 'npn1',
  FireRevenant = 'nrvf',
  Firelord = 'Nfir',
  Flametower = 'nft1',
  Flametowerupgrade = 'nft2',
  Fleshgolem = 'nfgl',
  FlyingMachine = 'hgyr',
  FlyingSheep = 'nshf',
  Footman = 'hfoo',
  ForestSpider = 'nspg',
  ForestTroll = 'nftr',
  ForestTrollBerserker = 'nftb',
  ForestTrollHighPriest = 'nfsh',
  ForestTrollHut = 'nfh0',
  ForestTrollHut2 = 'nfh1',
  ForestTrollShadowPriest = 'nfsp',
  ForestTrollTrapper = 'nftt',
  ForestTrollWarlord = 'nftk',
  ForgottenOne = 'nfgo',
  Fortress = 'ofrt',
  FountainOfHealth = 'nfoh',
  FountainOfMana = 'nmoo',
  Frog = 'nfro',
  FrostRevenant = 'nrvs',
  FrostWolf = 'nwwf',
  FrostWyrm = 'ufro',
  Frostmourne = 'nfrm',
  Fruitstand = 'nfrt',
  Furbolg = 'nfrl',
  FurbolgChampion = 'nfrg',
  FurbolgElderShaman = 'nfre',
  FurbolgHut = 'nfr2',
  FurbolgHut2 = 'nfr1',
  FurbolgShaman = 'nfrs',
  FurbolgTracker = 'nfrb',
  FurbolgUrsaWarrior = 'nfra',
  Furion = 'Efur',
  GargantuanSeaTurtle = 'ntrg',
  Gargoyle = 'ugar',
  Garthok = 'ogrk',
  Gemstoneobelisk = 'ngob',
  Ghost = 'ngh1',
  Ghostlyarchmage = 'Hgam',
  Ghoul = 'ugho',
  GiantFrostWolf = 'nwwg',
  GiantPolarBear = 'nplg',
  GiantSeaTurtle = 'ntrt',
  GiantSkeletonWarrior = 'nskg',
  GiantSpider = 'nsgt',
  GiantWolf = 'nwlg',
  GlaiveThrower = 'ebal',
  Gnoll = 'ngno',
  GnollAssassin = 'ngns',
  GnollBrute = 'ngnb',
  GnollHut = 'ngnh',
  GnollHut2 = 'ngt2',
  GnollOverseer = 'ngnv',
  GnollPoacher = 'ngna',
  GnollWarden = 'ngnw',
  GnollWarlord = 'ngow',
  GoblinLaboratory = 'ngad',
  GoblinLandMine = 'nglm',
  GoblinMerchant = 'ngme',
  GoblinShipyard = 'nshp',
  Goblinblaster = 'ngbl',
  GoldMine = 'ngol',
  GrainWarehouse = 'ngwr',
  GraniteGolem = 'nggr',
  Graveyard = 'ugrv',
  GreatHall = 'ogre',
  GreaterDarkMinion = 'ndr3',
  GreaterVoidwalker = 'nvdg',
  GreenDragon = 'ngrd',
  GreenDragonRoost = 'ndrg',
  GreenDragonWhelp = 'ngrw',
  GreenDrake = 'ngdk',
  Gromhellscream = 'Ogrh',
  Grunt = 'ogru',
  GryphonAviary = 'hgra',
  GryphonRider = 'hgry',
  GuardDog = 'ngog',
  GuardTower = 'hgtw',
  GuardianGolem = 'nggg',
  Guldan = 'Ogld',
  Halahk = 'Hhkl',
  HallsOfTheDead = 'unp1',
  HarpyNest = 'nhns',
  HarpyNest2 = 'nhn2',
  HarpyQueen = 'nhrq',
  HarpyRogue = 'nhrr',
  HarpyScout = 'nhar',
  HarpyStormHag = 'nhrh',
  HarpyWindwitch = 'nhrw',
  HauntedGoldMine = 'ugol',
  HawkLevel1 = 'nwe1',
  Headhunter = 'ohun',
  HealingWard = 'ohwd',
  Heretic = 'nhhr',
  HermitCrab = 'nhmc',
  HighElfArchmage = 'Haah',
  HighKing = 'Hssa',
  Highelfbarracks = 'nheb',
  Highelvenarcher = 'nhea',
  Highelvenfemale = 'nhef',
  Highelvenmale = 'nhem',
  Highelvenswordsman = 'hhes',
  Hippogryph = 'ehip',
  HippogryphRider = 'ehpr',
  Hornofcenarius = 'nhcn',
  HumanBattleship = 'hbsh',
  HumanFrigate = 'hdes',
  HumanShipyard = 'hshy',
  HumanTransportShip = 'hbot',
  HuntersHall = 'edob',
  Huntress = 'esen',
  Hydra = 'nhyd',
  HydraHatchling = 'nhyh',
  Hydralisk = 'zhyd',
  Hydromancer = 'nhym',
  IceRevenant = 'nrvi',
  IceTroll = 'nitr',
  IceTrollBerserker = 'nits',
  IceTrollHighPriest = 'nith',
  IceTrollHut = 'nth1',
  IceTrollHut2 = 'nth0',
  IceTrollPriest = 'nitp',
  IceTrollTrapper = 'nitt',
  IceTrollWarlord = 'nitw',
  Icecrownobelisk = 'nico',
  IcetuskMammoth = 'nmit',
  IcyTreasureBox = 'nitb',
  Illidan = 'Eill',
  Illidandemonform = 'Eidm',
  Illidanmorphed = 'Eilm',
  Illidanwagon = 'eilw',
  InfectedGranary = 'ngni',
  Infernal = 'ninf',
  InfernalContraption = 'ninc',
  InfernalJuggernaut = 'nina',
  InfernalMachine = 'ninm',
  Jailorkassan = 'njks',
  Jaina = 'Hjai',
  Juggernaut = 'ojgn',
  JungleStalker = 'njg1',
  Kael = 'Hkal',
  Keep = 'hkee',
  KeeperOfTheGrove = 'Ekee',
  KeeperOfTheGrove2 = 'Ekce',
  Keeperofthegroveghost = 'Ekgg',
  Kelthuzadghost = 'uktg',
  Kelthuzadlich = 'Uktl',
  Kelthuzadlichcinematic = 'Uclc',
  Kelthuzadnecro = 'uktn',
  Kiljaeden = 'Nklj',
  Kiljaedencinematic = 'Nkjx',
  Knight = 'hkni',
  Kobold = 'nkob',
  KoboldGeomancer = 'nkog',
  KoboldTaskmaster = 'nkol',
  KoboldTunneler = 'nkot',
  KodoBeast = 'okod',
  Kotobeastnorider = 'oosc',
  Ladyvashj = 'Hvsh',
  LavaSpawnLevel1 = 'nlv1',
  LavaSpawnLevel2 = 'nlv2',
  LavaSpawnLevel3 = 'nlv3',
  LesserDarkMinion = 'ndr1',
  LesserVoidwalker = 'nvdl',
  Lich = 'Ulic',
  Lichking = 'nzlc',
  LightningLizard = 'nltl',
  LightningRevenant = 'nrvl',
  Locust = 'uloc',
  Lordgarithos = 'Hlgr',
  LumberMill = 'hlum',
  MagicVault = 'nmgv',
  MagnataurDestroyer = 'nmgd',
  MagnataurReaver = 'nmgr',
  MagnataurWarrior = 'nmgw',
  Magtheridon = 'Nmag',
  MaidenOfPain = 'ndqp',
  Maiev = 'Ewrd',
  MakruraDeepseer = 'nlds',
  MakruraPooldweller = 'nlpd',
  MakruraPrawn = 'nlpr',
  MakruraSnapper = 'nlsn',
  MakruraTidalLord = 'nlkl',
  MakruraTidecaller = 'nltc',
  Malfurion = 'Emfr',
  Malfurionnostag = 'Emns',
  Malganis = 'Umal',
  Mammoth = 'nmam',
  Mannoroth = 'Nman',
  Margoth = 'Hmgd',
  Marine = 'zmar',
  Marketplace = 'nmrk',
  MasterSwordsman = 'Hddt',
  Mathog = 'omtg',
  MeatWagon = 'umtw',
  Medivh = 'nmed',
  Medivhmorphed = 'nmdm',
  MercenaryCampAshenvale = 'nmr5',
  MercenaryCampBarrens = 'nmr4',
  MercenaryCampBlackCitadel = 'nmrf',
  MercenaryCampCityscape = 'nmr8',
  MercenaryCampDalaran = 'nmr9',
  MercenaryCampDungeon = 'nmra',
  MercenaryCampFelwood = 'nmr6',
  MercenaryCampIcecrownGlacier = 'nmrd',
  MercenaryCampLordaeronFall = 'nmr2',
  MercenaryCampLordaeronSummer = 'nmer',
  MercenaryCampLordaeronWinter = 'nmr3',
  MercenaryCampNorthrend = 'nmr7',
  MercenaryCampOutland = 'nmre',
  MercenaryCampSunkenRuins = 'nmrc',
  MercenaryCampUnderground = 'nmrb',
  MercenaryCampVillage = 'nmr0',
  Militia = 'hmil',
  Misha = 'nmsh',
  Misha1 = 'ngzc',
  Misha2 = 'ngzd',
  Misha3 = 'ngza',
  Misha4 = 'ngz4',
  MonsterLure = 'nlur',
  MoonWell = 'emow',
  MortarTeam = 'hmtm',
  MossCoveredGraniteGolem = 'nggm',
  MountainGiant = 'emtg',
  MountainKing = 'Hmkg',
  MudGolem = 'ngrk',
  Muradinbronzebeard = 'Hmbr',
  MurgulBloodGill = 'nmbg',
  MurgulCliffrunner = 'nmcf',
  MurgulHut0 = 'nmg0',
  MurgulHut1 = 'nmg1',
  MurgulMarauder = 'nmrv',
  MurgulShadowcaster = 'nmsc',
  MurgulSnarecaster = 'nmsn',
  MurgulTidewarrior = 'nmtw',
  Murgulslave = 'nmpe',
  MurlocFlesheater = 'nmfs',
  MurlocHuntsman = 'nmrr',
  MurlocHut0 = 'nmh0',
  MurlocHut1 = 'nmh1',
  MurlocHut2 = 'nmg2',
  MurlocMutant = 'nmmu',
  MurlocNightcrawler = 'nmrm',
  MurlocPlaguebearer = 'nmpg',
  MurlocTiderunner = 'nmrl',
  Murlocsorcerer = 'Nmsr',
  Nagacoutl = 'nwgs',
  Nagamurgul = 'nnmg',
  Nagamyrmidon = 'nmyr',
  Nagamyrmidonmorph = 'nmys',
  Nagaroyalguard = 'nnrg',
  Nagaroyalguardmorph = 'nnrs',
  Naisha = 'ensh',
  Nazgrel = 'onzg',
  Necromancer = 'unec',
  Necropolis = 'unpl',
  NerubianQueen = 'nnwq',
  NerubianSeer = 'nnwr',
  NerubianSpiderLord = 'nnws',
  NerubianTower = 'uzg2',
  NerubianWarrior = 'nnwa',
  NerubianWebspinner = 'nnwl',
  NerubianZiggurat = 'nnzg',
  NetherDragon = 'nndr',
  NetherDragonHatchling = 'nnht',
  NetherDragonRoost = 'ndro',
  NetherDrake = 'nndk',
  NightElfBattleship = 'ebsh',
  NightElfFrigate = 'edes',
  NightElfShipyard = 'eshy',
  NightElfTransportShip = 'etrs',
  Nightelfassassin = 'nssn',
  Nightelfrunner = 'enec',
  ObsidianStatue = 'uobs',
  OgreLord = 'nogl',
  OgreMagi = 'nomg',
  OgreMauler = 'nogm',
  OgreWarrior = 'nogr',
  Oldpitlord = 'Npld',
  OrcCart = 'ncco',
  OrcFrigate = 'odes',
  OrcShipyard = 'oshy',
  OrcTransportShip = 'obot',
  Orcjuggernaut = 'zjug',
  Overlord = 'nfov',
  OverlordArachnathid = 'nano',
  OwlScoutLevel1 = 'nowl',
  OwlScoutLevel2 = 'now2',
  OwlScoutLevel3 = 'now3',
  Packhorse = 'hrdh',
  Paladin = 'Hpal',
  Paladinboss1 = 'Hpb1',
  Paladinboss2 = 'Hpb2',
  Panda4 = 'npn4',
  Panda5 = 'npn5',
  Panda6 = 'npn6',
  Peasant = 'hpea',
  Penguin = 'npng',
  PenguinWaterborne = 'npnw',
  Peon = 'opeo',
  Phoenix = 'hphx',
  PhoenixEgg = 'hpxe',
  Pig = 'npig',
  Pigfarm = 'npgf',
  PitLord = 'Nplh',
  PlagueTreant = 'nepl',
  PocketFactoryLevel1 = 'nfac',
  PocketFactoryLevel2 = 'nfa1',
  PocketFactoryLevel3 = 'nfa2',
  PoisonTreant = 'nenp',
  PolarBear = 'nplb',
  PolarFurbolg = 'nfpl',
  PolarFurbolgChampion = 'nfpc',
  PolarFurbolgElderShaman = 'nfpe',
  PolarFurbolgShaman = 'nfps',
  PolarFurbolgTracker = 'nfpt',
  PolarFurbolgUrsaWarrior = 'nfpu',
  Possessedgromhellscream = 'Opgh',
  Powergenerator = 'npgr',
  Priest = 'hmpr',
  PriestessOfTheMoon = 'Emoo',
  PrimalPandaren = 'nfrp',
  Purplefountain = 'nfnp',
  QueenOfSuffering = 'ndqs',
  QuilbeastLevel1 = 'nqb1',
  Quillbeast4 = 'nqb4',
  Quillboar = 'nrzt',
  QuillboarHunter = 'nqbh',
  Rabbit = 'necr',
  Raccoon = 'nrac',
  RagingBearLevel2 = 'ngz2',
  RagingQuilbeastLevel3 = 'nqb3',
  Raider = 'orai',
  Ranger = 'Hjnd',
  Rat = 'nrat',
  RazormaneBrute = 'nrzb',
  RazormaneChieftain = 'nrzg',
  RazormaneMedicineMan = 'nrzm',
  RazormaneScout = 'nrzs',
  RedDragon = 'nrwm',
  RedDragonRoost = 'ndrr',
  RedDragonWhelp = 'nrdk',
  RedDrake = 'nrdr',
  ReefElemental = 'nrel',
  ReinforcedBurrow = 'orbr',
  RenegadeWizard = 'nwzg',
  RevenantOfTheDepths = 'ndrv',
  RevenantOfTheSeas = 'nsrv',
  RevenantOfTheTides = 'ntrv',
  Rexxar = 'Orex',
  Riderlesshorse = 'hhdl',
  Riderlesswyvern = 'ownr',
  Rifleman = 'hrif',
  RockGolem = 'ngst',
  Rogue = 'nrog',
  RogueWizard = 'nwzr',
  Rokhan = 'Orkn',
  Ruinedelvenfishingvillage0 = 'nvr0',
  Ruinedelvenfishingvillage1 = 'nvr1',
  Ruinedelvenfishingvillage2 = 'nvr2',
  RunnerHighElf = 'hrrh',
  SacrificialPit = 'usap',
  Salamander = 'nslr',
  SalamanderHatchling = 'nslh',
  SalamanderLord = 'nsll',
  SalamanderVizier = 'nslv',
  Sammycube = 'zsmc',
  Samuro = 'Osam',
  Sapper = 'ngsp',
  Sasquatch = 'nsqt',
  SasquatchOracle = 'nsqo',
  Satyr = 'nsty',
  SatyrHellcaller = 'nsth',
  SatyrShadowdancer = 'nsts',
  SatyrShadowdancer2 = 'nstf',
  SatyrSoulstealer = 'nstl',
  SatyrTrickster = 'nsat',
  ScoutTower = 'hwtw',
  SeaElemental = 'nsel',
  SeaGiant = 'nsgn',
  SeaGiantBehemoth = 'nsgb',
  SeaGiantHunter = 'nsgh',
  SeaTurtle = 'ntrs',
  SeaTurtleHatchling = 'ntrh',
  SeaWitch = 'Nngs',
  Seal = 'nsea',
  Searinox = 'nser',
  Seawitch2 = 'Nswt',
  SentryWard = 'oeye',
  SerpentWardLevel1 = 'osp1',
  SerpentWardLevel2 = 'osp2',
  SerpentWardLevel3 = 'osp3',
  Serpentward4 = 'osp4',
  Shade = 'ushd',
  ShadowHunter = 'Oshd',
  ShadowWolfLevel3 = 'osw3',
  Shaman = 'oshm',
  Shandris = 'eshd',
  Sheep = 'nshe',
  SheepAmphibious = 'nsha',
  SheepWaterborne = 'nshw',
  Shimmeringportal = 'hprt',
  Shredder = 'ngir',
  Shrine = 'nshr',
  Shrineofazshara = 'nnsa',
  SiegeEngine = 'hmtt',
  SiegeEngineBarrage = 'hrtt',
  SiegeGolem = 'nsgg',
  Sinjostormstout = 'Nsjs',
  Siren = 'nnsw',
  SkeletalMage = 'uskm',
  SkeletalMarksman = 'nskm',
  SkeletalOrc = 'nsko',
  SkeletalOrcChampion = 'nsoc',
  SkeletalOrcGrunt = 'nsog',
  SkeletonArcher = 'nsca',
  SkeletonArcher2 = 'nska',
  SkeletonWarrior = 'uske',
  SkeletonWarrior2 = 'nsce',
  SkeletonWarrior3 = 'nske',
  Skink = 'nskk',
  Skyfurytower = 'negm',
  Slaughterhouse = 'uslh',
  SlaveMaster = 'owad',
  SludgeFlinger = 'nslf',
  SludgeMinion = 'nslm',
  SludgeMonstrosity = 'nsln',
  Snapdragon = 'nsnp',
  Snapdragonmorph = 'nsbs',
  SnarlmaneTheBloodgorger = 'ngos',
  SnowyOwl = 'nsno',
  Sorceress = 'hsor',
  Spawninggrounds = 'nnsg',
  Spellbreaker = 'hspt',
  Spider = 'nspr',
  SpiderCrabBehemoth = 'nsc3',
  SpiderCrabLimbripper = 'nsc2',
  SpiderCrabShorecrawler = 'nscb',
  Spiderling = 'nspd',
  SpiritBearLevel3 = 'ngz3',
  SpiritHawkLevel3 = 'nwe3',
  SpiritLodge = 'osld',
  SpiritOfVengeance = 'even',
  SpiritPig = 'nspp',
  SpiritTower = 'uzg1',
  SpiritWalker = 'ospw',
  SpiritWalkerEthereal = 'ospm',
  SpiritWolfLevel1 = 'osw1',
  Spiritbeast = 'nsw1',
  Spiritbeast2 = 'nsw2',
  Spiritbeast3 = 'nsw3',
  Spiritwyvern = 'oswy',
  SpittingSpider = 'nssp',
  Stag = 'nder',
  StasisTrap = 'otot',
  StoneFormGargoyle = 'ugrm',
  StonemaulMagi = 'nogn',
  StonemaulOgre = 'nogo',
  StonemaulWarchief = 'noga',
  Storm = 'npn2',
  StormWyrm = 'nstw',
  StormreaverApprentice = 'nsra',
  StormreaverHermit = 'nsrh',
  StormreaverNecrolyte = 'nsrn',
  StormreaverWarlock = 'nsrw',
  Stronghold = 'ostr',
  Succubus = 'ndqn',
  SummonedPrawn = 'nlps',
  Summoner = 'nnsu',
  Supportcolumn = 'nspc',
  Sylvanusbanshee = 'uswb',
  Sylvanuswindrunner = 'Hvwd',
  Tauren = 'otau',
  TaurenChieftain = 'Otch',
  TaurenTent = 'ntnt',
  TaurenTent2 = 'ntt2',
  TaurenTotem = 'otto',
  Tavern = 'ntav',
  TempleOfTheDamned = 'utod',
  Templeoftides = 'nntt',
  Tent = 'nten',
  Tent2 = 'ntn2',
  Tent3 = 'ntn3',
  Tentacle = 'nfgt',
  Tharifas = 'nthr',
  Thecaptain = 'hcth',
  Theshoveler = 'zshv',
  Thrall = 'Othr',
  ThrallUnmounted = 'Oths',
  ThunderHawkLevel2 = 'nwe2',
  ThunderLizard2 = 'nthl',
  Tichondrius = 'Utic',
  Tidalguardian = 'nntg',
  TimberWolf = 'nwlt',
  Tinker = 'Nrob',
  Tinker2 = 'Ntin',
  TombOfRelics = 'utom',
  Tornado = 'ntor',
  TownHall = 'htow',
  TransportShip = 'nbot',
  Treant = 'efon',
  TreeOfAges = 'etoa',
  TreeOfEternity = 'etoe',
  TreeOfLife = 'etol',
  TuskarrChieftain = 'ntkc',
  TuskarrFighter = 'ntkf',
  TuskarrHealer = 'ntkh',
  TuskarrSorcerer = 'ntks',
  TuskarrSpearman = 'ntka',
  TuskarrTrapper = 'ntkt',
  TuskarrWarrior = 'ntkw',
  Tyrande = 'Etyr',
  UnbrokenDarkhunter = 'nubk',
  UnbrokenDarkweaver = 'nubw',
  UnbrokenRager = 'nubr',
  UndeadBattleship = 'uubs',
  UndeadCart = 'nccu',
  UndeadFrigate = 'udes',
  UndeadTransportShip = 'ubot',
  Undeadshipyard = 'ushp',
  Uther = 'Huth',
  Varimathras = 'Uvar',
  Vengyr = 'Uvng',
  VileTemptress = 'ndqt',
  VileTormentor = 'ndqv',
  VillagerFemale = 'nvlw',
  VillagerMale = 'nvil',
  VillagerMale2 = 'nvl2',
  Voidwalker = 'nvdw',
  Voljin = 'ovlj',
  VoodooLounge = 'ovln',
  VorpalBlades = 'Aimp',
  Vulture = 'nvul',
  War2warlock = 'nw2w',
  WarGolem = 'nwrg',
  WarMill = 'ofor',
  WarWagon = 'nwar',
  Warden = 'Ewar',
  WarriorArachnathid = 'nanw',
  WatchTower = 'owtw',
  Watcher = 'nwat',
  WatcherWard = 'nwad',
  WaterElementalLevel1 = 'hwat',
  WaterElementalLevel2 = 'hwt2',
  WaterElementalLevel3 = 'hwt3',
  WateryMinionLevel1 = 'ncfs',
  WateryMinionLevel2 = 'ntws',
  WateryMinionLevel3 = 'nsns',
  WayGate = 'nwgt',
  Wendigo = 'nwen',
  WendigoShaman = 'nwns',
  Wildkin = 'nowb',
  WindRider = 'owyv',
  WindRiderCage1 = 'nwc1',
  WindRiderCage2 = 'nwc2',
  WindRiderCage3 = 'nwc3',
  WindRiderCage4 = 'nwc4',
  Wisp = 'ewsp',
  WitchDoctor = 'odoc',
  Workshop = 'harm',
  Wraith = 'ngh2',
  Ydeng = 'Y425',
  Zeppelin = 'nzep',
  Zergling = 'zzrg',
  Ziggurat = 'uzig',
  Zombie = 'nzom',
  ZombieFemale = 'nzof',
  Zoneindicator = 'nzin',
}

type MapUnit = { oldId: string, newId: string } & Unit;

export class UnitContainer extends OEContainer<Unit> {
  override game = <{[key in Units]: Unit}>objects;
  override map: {[key: string]: MapUnit } = {};
  override loadModification(object: MapUnit, modification: Modification) {
    const { id, value } = modification;

    switch(id) {
      case 'uani': object.requiredAnimationNames = war3ToTS('stringList', value); return;
      case 'uico': object.iconGameInterface = war3ToTS('icon', value); return;
      case 'uaap': object.requiredAnimationNamesAttachments = war3ToTS('stringList', value); return;
      case 'ualp': object.requiredAttachmentLinkNames = war3ToTS('stringList', value); return;
      case 'ubpr': object.requiredBoneNames = war3ToTS('stringList', value); return;
      case 'ubui': object.structuresBuilt = war3ToTS('unitList', value); return;
      case 'ubpx': object.buttonPositionX = war3ToTS('int', value); return;
      case 'ubpy': object.buttonPositionY = war3ToTS('int', value); return;
      case 'ucua': object.casterUpgradeArt = war3ToTS('icon', value); return;
      case 'ucun': object.casterUpgradeNames = war3ToTS('stringList', value); return;
      case 'ucut': object.casterUpgradeTips = war3ToTS('stringList', value); return;
      case 'udep': object.dependencyEquivalents = war3ToTS('unitList', value); return;
      case 'ides': object.description = war3ToTS('string', value); return;
      case 'unsf': object.nameEditorSuffix = war3ToTS('string', value); return;
      case 'uhot': object.hotkey = war3ToTS('char', value); return;
      case 'ulfi': object.loopingFadeInRate = war3ToTS('int', value); return;
      case 'ulfo': object.loopingFadeOutRate = war3ToTS('int', value); return;
      case 'uma1': object.attack1ProjectileArc = war3ToTS('unreal', value); return;
      case 'uma2': object.attack2ProjectileArc = war3ToTS('unreal', value); return;
      case 'ua1m': object.attack1ProjectileArt = war3ToTS('model', value); return;
      case 'ua2m': object.attack2ProjectileArt = war3ToTS('model', value); return;
      case 'umh1': object.attack1ProjectileHomingEnabled = war3ToTS('bool', value); return;
      case 'umh2': object.attack2ProjectileHomingEnabled = war3ToTS('bool', value); return;
      case 'ua1z': object.attack1ProjectileSpeed = war3ToTS('int', value); return;
      case 'ua2z': object.attack2ProjectileSpeed = war3ToTS('int', value); return;
      case 'umsl': object.movement = war3ToTS('soundLabel', value); return;
      case 'unam': object.name = war3ToTS('string', value); return;
      case 'ursl': object.random = war3ToTS('soundLabel', value); return;
      case 'ureq': object.requirements = war3ToTS('techList', value); return;
      case 'urqa': object.requirementsLevels = war3ToTS('intList', value); return;
      case 'ussi': object.iconScoreScreen = war3ToTS('icon', value); return;
      case 'usei': object.itemsSold = war3ToTS('itemList', value); return;
      case 'useu': object.unitsSold = war3ToTS('unitList', value); return;
      case 'uspa': object.special = war3ToTS('modelList', value); return;
      case 'utaa': object.target = war3ToTS('modelList', value); return;
      case 'utip': object.tooltipBasic = war3ToTS('string', value); return;
      case 'utub': object.tooltipExtended = war3ToTS('string', value); return;
      case 'uabi': object.normal = war3ToTS('abilityList', value); return;
      case 'udaa': object.defaultActiveAbility = war3ToTS('abilCode', value); return;
      case 'ubld': object.buildTime = war3ToTS('int', value); return;
      case 'ubdi': object.goldBountyAwardedNumberOfDice = war3ToTS('int', value); return;
      case 'ubba': object.goldBountyAwardedBase = war3ToTS('int', value); return;
      case 'ubsi': object.goldBountyAwardedSidesPerDie = war3ToTS('int', value); return;
      case 'ulbd': object.lumberBountyAwardedNumberOfDice = war3ToTS('int', value); return;
      case 'ulba': object.lumberBountyAwardedBase = war3ToTS('int', value); return;
      case 'ulbs': object.lumberBountyAwardedSidesPerDie = war3ToTS('int', value); return;
      case 'ucol': object.collisionSize = war3ToTS('unreal', value); return;
      case 'udef': object.defenseBase = war3ToTS('int', value); return;
      case 'udty': object.defenseType = war3ToTS('defenseType', value); return;
      case 'udup': object.defenseUpgradeBonus = war3ToTS('int', value); return;
      case 'ufma': object.foodProduced = war3ToTS('int', value); return;
      case 'ufoo': object.foodCost = war3ToTS('int', value); return;
      case 'ugol': object.goldCost = war3ToTS('int', value); return;
      case 'ugor': object.repairGoldCost = war3ToTS('int', value); return;
      case 'uhpm': object.hitPointsMaximumBase = war3ToTS('int', value); return;
      case 'ubdg': object.isABuilding = war3ToTS('bool', value); return;
      case 'ulev': object.level = war3ToTS('int', value); return;
      case 'ulum': object.lumberCost = war3ToTS('int', value); return;
      case 'ulur': object.repairLumberCost = war3ToTS('int', value); return;
      case 'umpi': object.manaInitialAmount = war3ToTS('int', value); return;
      case 'umpm': object.manaMaximum = war3ToTS('int', value); return;
      case 'umas': object.speedMaximum = war3ToTS('int', value); return;
      case 'umis': object.speedMinimum = war3ToTS('int', value); return;
      case 'usin': object.sightRadiusNight = war3ToTS('int', value); return;
      case 'uhpr': object.hitPointsRegenerationRate = war3ToTS('unreal', value); return;
      case 'umpr': object.manaRegeneration = war3ToTS('unreal', value); return;
      case 'uhrt': object.hitPointsRegenerationType = war3ToTS('regenType', value); return;
      case 'urtm': object.repairTime = war3ToTS('int', value); return;
      case 'urpo': object.groupSeparationEnabled = war3ToTS('bool', value); return;
      case 'urpg': object.groupSeparationGroupNumber = war3ToTS('int', value); return;
      case 'urpp': object.groupSeparationParameter = war3ToTS('int', value); return;
      case 'urpr': object.groupSeparationPriority = war3ToTS('int', value); return;
      case 'usid': object.sightRadiusDay = war3ToTS('int', value); return;
      case 'umvs': object.speedBase = war3ToTS('int', value); return;
      case 'usma': object.stockMaximum = war3ToTS('int', value); return;
      case 'usrg': object.stockReplenishInterval = war3ToTS('int', value); return;
      case 'usst': object.stockStartDelay = war3ToTS('int', value); return;
      case 'usit': object.stockInitialAfterStartDelay = war3ToTS('int', value); return;
      case 'util': object.tilesets = war3ToTS('tilesetList', value); return;
      case 'utyp': object.unitClassification = war3ToTS('unitClass', value); return;
      case 'upgr': object.upgradesUsed = war3ToTS('upgradeList', value); return;
      case 'uabr': object.aIPlacementRadius = war3ToTS('unreal', value); return;
      case 'uabt': object.aIPlacementType = war3ToTS('aiBuffer', value); return;
      case 'ufle': object.canFlee = war3ToTS('bool', value); return;
      case 'usle': object.sleeps = war3ToTS('bool', value); return;
      case 'ucar': object.transportedSize = war3ToTS('int', value); return;
      case 'udtm': object.deathTimeSeconds = war3ToTS('unreal', value); return;
      case 'udea': object.deathType = war3ToTS('deathType', value); return;
      case 'ulos': object.useExtendedLineOfSight = war3ToTS('bool', value); return;
      case 'ufor': object.formationRank = war3ToTS('int', value); return;
      case 'umvf': object.heightMinimum = war3ToTS('unreal', value); return;
      case 'umvh': object.height = war3ToTS('unreal', value); return;
      case 'umvt': object.type = war3ToTS('moveType', value); return;
      case 'uori': object.orientationInterpolation = war3ToTS('int', value); return;
      case 'upoi': object.pointValue = war3ToTS('int', value); return;
      case 'upri': object.priority = war3ToTS('int', value); return;
      case 'uprw': object.propulsionWindowDegrees = war3ToTS('unreal', value); return;
      case 'urac': object.race = war3ToTS('unitRace', value); return;
      case 'utar': object.targetedAs = war3ToTS('targetList', value); return;
      case 'umvr': object.turnRate = war3ToTS('unreal', value); return;
      case 'uarm': object.armorType = war3ToTS('armorType', value); return;
      case 'uble': object.animationBlendTimeSeconds = war3ToTS('real', value); return;
      case 'uclb': object.tintingColor3Blue = war3ToTS('int', value); return;
      case 'ushb': object.shadowTextureBuilding = war3ToTS('shadowTexture', value); return;
      case 'ucam': object.categorizationCampaign = war3ToTS('bool', value); return;
      case 'utcc': object.allowCustomTeamColor = war3ToTS('bool', value); return;
      case 'udro': object.canDropItemsOnDeath = war3ToTS('bool', value); return;
      case 'uept': object.elevationSamplePoints = war3ToTS('int', value); return;
      case 'uerd': object.elevationSampleRadius = war3ToTS('real', value); return;
      case 'umdl': object.modelFile = war3ToTS('model', value); return;
      case 'uver': object.modelFileExtraVersions = war3ToTS('versionFlags', value); return;
      case 'ufrd': object.fogOfWarSampleRadius = war3ToTS('real', value); return;
      case 'uclg': object.tintingColor2Green = war3ToTS('int', value); return;
      case 'uhos': object.displayAsNeutralHostile = war3ToTS('bool', value); return;
      case 'uine': object.placeableInEditor = war3ToTS('bool', value); return;
      case 'umxp': object.maximumPitchAngleDegrees = war3ToTS('real', value); return;
      case 'umxr': object.maximumRollAngleDegrees = war3ToTS('real', value); return;
      case 'usca': object.scalingValue = war3ToTS('real', value); return;
      case 'uhom': object.hideMinimapDisplay = war3ToTS('bool', value); return;
      case 'uocc': object.occluderHeight = war3ToTS('unreal', value); return;
      case 'uclr': object.tintingColor1Red = war3ToTS('int', value); return;
      case 'urun': object.animationRunSpeed = war3ToTS('real', value); return;
      case 'ussc': object.selectionScale = war3ToTS('real', value); return;
      case 'uscb': object.scaleProjectiles = war3ToTS('bool', value); return;
      case 'usew': object.selectionCircleOnWater = war3ToTS('bool', value); return;
      case 'uslz': object.selectionCircleHeight = war3ToTS('real', value); return;
      case 'ushh': object.shadowImageHeight = war3ToTS('real', value); return;
      case 'ushr': object.hasWaterShadow = war3ToTS('bool', value); return;
      case 'ushw': object.shadowImageWidth = war3ToTS('real', value); return;
      case 'ushx': object.shadowImageCenterX = war3ToTS('real', value); return;
      case 'ushy': object.shadowImageCenterY = war3ToTS('real', value); return;
      case 'uspe': object.categorizationSpecial = war3ToTS('bool', value); return;
      case 'utco': object.teamColor = war3ToTS('teamColor', value); return;
      case 'utss': object.hasTilesetSpecificData = war3ToTS('bool', value); return;
      case 'ushu': object.shadowImageUnit = war3ToTS('shadowImage', value); return;
      case 'usnd': object.unitSoundSet = war3ToTS('unitSound', value); return;
      case 'uuch': object.useClickHelper = war3ToTS('bool', value); return;
      case 'uwal': object.animationWalkSpeed = war3ToTS('real', value); return;
      case 'uacq': object.acquisitionRange = war3ToTS('unreal', value); return;
      case 'ua1t': object.attack1AttackType = war3ToTS('attackType', value); return;
      case 'ua2t': object.attack2AttackType = war3ToTS('attackType', value); return;
      case 'ubs1': object.attack1AnimationBackswingPoint = war3ToTS('unreal', value); return;
      case 'ubs2': object.attack2AnimationBackswingPoint = war3ToTS('unreal', value); return;
      case 'ucbs': object.animationCastBackswing = war3ToTS('unreal', value); return;
      case 'ucpt': object.animationCastPoint = war3ToTS('unreal', value); return;
      case 'ua1c': object.attack1CooldownTime = war3ToTS('unreal', value); return;
      case 'ua2c': object.attack2CooldownTime = war3ToTS('unreal', value); return;
      case 'udl1': object.attack1DamageLossFactor = war3ToTS('unreal', value); return;
      case 'udl2': object.attack2DamageLossFactor = war3ToTS('unreal', value); return;
      case 'ua1d': object.attack1DamageNumberOfDice = war3ToTS('int', value); return;
      case 'ua2d': object.attack2DamageNumberOfDice = war3ToTS('int', value); return;
      case 'ua1b': object.attack1DamageBase = war3ToTS('int', value); return;
      case 'ua2b': object.attack2DamageBase = war3ToTS('int', value); return;
      case 'udp1': object.attack1AnimationDamagePoint = war3ToTS('unreal', value); return;
      case 'udp2': object.attack2AnimationDamagePoint = war3ToTS('unreal', value); return;
      case 'udu1': object.attack1DamageUpgradeAmount = war3ToTS('int', value); return;
      case 'udu2': object.attack2DamageUpgradeAmount = war3ToTS('int', value); return;
      case 'ua1f': object.attack1AreaOfEffectFullDamage = war3ToTS('int', value); return;
      case 'ua2f': object.attack2AreaOfEffectFullDamage = war3ToTS('int', value); return;
      case 'ua1h': object.attack1AreaOfEffectMediumDamage = war3ToTS('int', value); return;
      case 'ua2h': object.attack2AreaOfEffectMediumDamage = war3ToTS('int', value); return;
      case 'uhd1': object.attack1DamageFactorMedium = war3ToTS('unreal', value); return;
      case 'uhd2': object.attack2DamageFactorMedium = war3ToTS('unreal', value); return;
      case 'uisz': object.projectileImpactZSwimming = war3ToTS('unreal', value); return;
      case 'uimz': object.projectileImpactZ = war3ToTS('unreal', value); return;
      case 'ulsz': object.projectileLaunchZSwimming = war3ToTS('unreal', value); return;
      case 'ulpx': object.projectileLaunchX = war3ToTS('unreal', value); return;
      case 'ulpy': object.projectileLaunchY = war3ToTS('unreal', value); return;
      case 'ulpz': object.projectileLaunchZ = war3ToTS('unreal', value); return;
      case 'uamn': object.minimumAttackRange = war3ToTS('int', value); return;
      case 'ua1q': object.attack1AreaOfEffectSmallDamage = war3ToTS('int', value); return;
      case 'ua2q': object.attack2AreaOfEffectSmallDamage = war3ToTS('int', value); return;
      case 'uqd1': object.attack1DamageFactorSmall = war3ToTS('unreal', value); return;
      case 'uqd2': object.attack2DamageFactorSmall = war3ToTS('unreal', value); return;
      case 'ua1r': object.attack1Range = war3ToTS('int', value); return;
      case 'ua2r': object.attack2Range = war3ToTS('int', value); return;
      case 'urb1': object.attack1RangeMotionBuffer = war3ToTS('unreal', value); return;
      case 'urb2': object.attack2RangeMotionBuffer = war3ToTS('unreal', value); return;
      case 'uwu1': object.attack1ShowUI = war3ToTS('bool', value); return;
      case 'uwu2': object.attack2ShowUI = war3ToTS('bool', value); return;
      case 'ua1s': object.attack1DamageSidesPerDie = war3ToTS('int', value); return;
      case 'ua2s': object.attack2DamageSidesPerDie = war3ToTS('int', value); return;
      case 'usd1': object.attack1DamageSpillDistance = war3ToTS('unreal', value); return;
      case 'usd2': object.attack2DamageSpillDistance = war3ToTS('unreal', value); return;
      case 'usr1': object.attack1DamageSpillRadius = war3ToTS('unreal', value); return;
      case 'usr2': object.attack2DamageSpillRadius = war3ToTS('unreal', value); return;
      case 'ua1p': object.attack1AreaOfEffectTargets = war3ToTS('targetList', value); return;
      case 'ua2p': object.attack2AreaOfEffectTargets = war3ToTS('targetList', value); return;
      case 'utc1': object.attack1MaximumNumberOfTargets = war3ToTS('int', value); return;
      case 'utc2': object.attack2MaximumNumberOfTargets = war3ToTS('int', value); return;
      case 'ua1g': object.attack1TargetsAllowed = war3ToTS('targetList', value); return;
      case 'ua2g': object.attack2TargetsAllowed = war3ToTS('targetList', value); return;
      case 'uaen': object.attacksEnabled = war3ToTS('attackBits', value); return;
      case 'ua1w': object.attack1WeaponType = war3ToTS('weaponType', value); return;
      case 'ua2w': object.attack2WeaponType = war3ToTS('weaponType', value); return;
      case 'ucs1': object.attack1WeaponSound = war3ToTS('combatSound', value); return;
      case 'ucs2': object.attack2WeaponSound = war3ToTS('combatSound', value); return;
      case 'uabs': object.normalSkin = war3ToTS('abilitySkinList', value); return;
      case 'uhas': object.heroSkin = war3ToTS('abilitySkinList', value); return;
      default: throw Error(`Unknown modification: ${id}`);
    }
  }
  override saveModifications(gameObject: Unit, object: MapUnit): Modification[] {
    const modifications: Modification[] = [];

    // if (object.abilities !== gameObject.abilities) { modifications.push(tsToWar3('iabi', 'string', object.abilities)); }

    return modifications;
  }
}