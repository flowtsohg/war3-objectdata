import Modification from 'mdx-m3-viewer/dist/cjs/parsers/w3x/w3u/modification';
import { OEContainer } from '../container';
import { war3ToTS, tsToWar3 } from '../utils';
import * as objects from './itemsdata.json';

export interface Item {
  abilities: string;
  armorType: string;
  classification: string;
  tintingColor3Blue: number;
  tintingColor2Green: number;
  tintingColor1Red: number;
  cooldownGroup: string;
  droppedWhenCarrierDies: boolean;
  canBeDropped: boolean;
  modelUsed: string;
  goldCost: number;
  hitPoints: number;
  ignoreCooldown: boolean;
  level: number;
  lumberCost: number;
  validTargetForTransformation: boolean;
  levelUnclassified: number;
  perishable: boolean;
  includeAsRandomChoice: boolean;
  useAutomaticallyWhenAcquired: boolean;
  priority: number;
  scalingValue: number;
  selectionSizeEditor: number;
  canBeSoldByMerchants: boolean;
  canBeSoldToMerchants: boolean;
  stockMaximum: number;
  stockReplenishInterval: number;
  stockStartDelay: number;
  stockInitialAfterStartDelay: number;
  activelyUsed: boolean;
  numberOfCharges: number;
  maxStacks: number;
  interfaceIcon: string;
  buttonPositionX: number;
  buttonPositionY: number;
  description: string;
  hotkey: string;
  name: string;
  requirements: string;
  requirementsLevels: string;
  tooltipBasic: string;
  tooltipExtended: string;
}

export enum Items {
  AlleriasFluteOfAccuracy = 'afac',
  AmuletOfRecall = 'amrc',
  AmuletOfSpellShield = 'spsh',
  AmuletOfTheWild = 'wild',
  AnAltar = 'TALT',
  AncestralStaff = 'axas',
  AncientFigurine = 'anfg',
  AncientJanggoOfEndurance = 'ajen',
  AnkhOfReincarnation = 'ankh',
  AntiMagicPotion = 'pams',
  ArcaneScroll = 'arsc',
  ArcaniteShield = 'arsh',
  AssassinsBlade = 'asbl',
  Bash = 'AIbx',
  BattleStandard = 'btst',
  BeltOfGiantStrengthPlus6 = 'bgst',
  Berserk = 'AIxk',
  BladebaneArmor = 'blba',
  BlightPlacement = 'Ablp',
  BlinkItemVersion = 'AIbk',
  BloodKey = 'kybl',
  BloodfeathersHeart = 'bfhr',
  BlueDrakeEgg = 'fgbd',
  BookOfTheDead = 'fgsk',
  BootsOfQuelThalasPlus6 = 'belv',
  BootsOfSpeed = 'bspd',
  BracerOfAgility = 'brag',
  BuildTinyAltarOfKings = 'AIbh',
  BuildTinyBarracks = 'AIbs',
  BuildTinyBlacksmith = 'AIbb',
  BuildTinyCastle = 'AIbl',
  BuildTinyFarm = 'AIbf',
  BuildTinyGreatHall = 'AIbg',
  BuildTinyLumberMill = 'AIbr',
  BuildTinyScoutTower = 'AIbt',
  BundleOfLumber = 'lmbr',
  BundleOfLumber2 = 'AIlu',
  CastleOrFortressOrTreeOfEternityOrBlackCitadel = 'TWN3',
  CelestialOrbOfSouls = 'cosl',
  ChainLightning = 'AIcl',
  ChangeTimeOfDay = 'AIct',
  Cheese = 'ches',
  ChestOfGold = 'AIgo',
  CircletOfNobility = 'cnob',
  ClarityPotion = 'pclr',
  ClarityPotion2 = 'AIpr',
  ClawsOfAttackPlus12 = 'ratc',
  ClawsOfAttackPlus15 = 'ratf',
  ClawsOfAttackPlus3 = 'rat3',
  ClawsOfAttackPlus5 = 'rat6',
  ClawsOfAttackPlus9 = 'rat9',
  CloakOfFlames = 'clfm',
  CloakOfShadows = 'clsd',
  ClockworkPenguin = 'stpg',
  CloudOfFog = 'AIfg',
  ControlMagic = 'AIcm',
  CriticalStrike = 'AIcs',
  CrownOfKingsPlus5 = 'ckng',
  CrownOfTheDeathlord = 'crdt',
  CrystalBall = 'crys',
  Cyclone = 'AIcy',
  DarkSummoning = 'AUds',
  DeathPact = 'AIdp',
  DefendPassiveDefense = 'AIdd',
  DemonicFigurine = 'fgdg',
  DiamondOfSummoning = 'dsum',
  DrektharsSpellbook = 'dtsb',
  DruidPouch = 'drph',
  DustOfAppearance = 'dust',
  DustOfAppearance2 = 'AItb',
  EmptyVial = 'bzbe',
  EnchantedGemstone = 'engs',
  EnchantedShield = 'shen',
  EnchantedVial = 'envl',
  EngravedScale = 'engr',
  EssenceOfAszune = 'esaz',
  Evasion = 'AIev',
  FingerOfDeath = 'AIfz',
  FirehandGauntlets = 'frhg',
  FlareGun = 'fgun',
  FlareGun2 = 'AIfa',
  FlyingCarpet = 'AIfc',
  FrostWyrmSkullShield = 'fwss',
  Frostguard = 'frgd',
  FullVial = 'bzbf',
  GauntletsOfOgreStrengthPlus3 = 'rst1',
  GemFragment = 'gmfr',
  GemOfTrueSeeing = 'gemt',
  GenericItemRejuvEffect = 'AIp1',
  GenericItemRejuvEffect2 = 'AIp2',
  GenericItemRejuvEffect3 = 'AIp3',
  GenericItemRejuvEffect4 = 'AIp4',
  GenericItemRejuvEffect5 = 'AIp5',
  GenericItemRejuvEffect6 = 'AIp6',
  GerardsLostLedger = 'ledg',
  GhostKey = 'kygh',
  GlovesOfHaste = 'gcel',
  GlovesOfSpellMastery = 'gvsm',
  GlyphOfFortification = 'gfor',
  GlyphOfOmniscience = 'gomn',
  GlyphOfPurification = 'gopr',
  GlyphOfUltravision = 'guvi',
  GoblinLandMines = 'gobm',
  GoblinNightScope = 'tels',
  GoldCoins = 'gold',
  GreaterReplenishmentPotion = 'rej4',
  GreaterRuneResurrection = 'APrr',
  GreaterScrollOfReplenishment = 'rej6',
  GrimoireOfSouls = 'grsl',
  HealingSalve = 'hslv',
  HealingSalve2 = 'AIrl',
  HealingWard = 'AIhw',
  HealingWards = 'whwd',
  HealthStone = 'hlst',
  HeartOfAszune = 'azhr',
  HelmOfBattlethirst = 'hbth',
  HelmOfValor = 'hval',
  HolyLight = 'AIhl',
  HoodOfCunning = 'hcun',
  HornOfCenarius = 'cnhn',
  HornOfTheClouds = 'sfog',
  HumanFlag = 'flag',
  IceShard = 'shar',
  IdolOfTheWild = 'iotw',
  InfernoStone = 'infs',
  IronwoodBranch = 'iwbr',
  ItemAgilityGain = 'AIam',
  ItemAgilityGain2 = 'AIgm',
  ItemAnimateDead = 'AIan',
  ItemAntiMagicShell = 'AIxs',
  ItemAntiMagicShell2 = 'Aami',
  ItemAreaDetection = 'AIta',
  ItemAreaHealOrManaRegain = 'AIra',
  ItemAreaHealing = 'AIha',
  ItemAreaHealing2 = 'AIhb',
  ItemAreaManaRegain = 'AImr',
  ItemAreaTreeOrWallDamage = 'AIdm',
  ItemArmorBonus = 'AIde',
  ItemArmorBonus2 = 'AId1',
  ItemArmorBonus3 = 'AId5',
  ItemArmorBonus4 = 'AId8',
  ItemArmorBonus5 = 'AId7',
  ItemArmorBonus6 = 'AId0',
  ItemArmorBonus7 = 'AId2',
  ItemArmorBonus8 = 'AId3',
  ItemArmorBonus9 = 'AId4',
  ItemAttackBlackArrowBonus = 'AIdf',
  ItemAttackCorruptionBonus = 'AIcb',
  ItemAttackFireBonus = 'AIfb',
  ItemAttackFireBonus2 = 'AIgd',
  ItemAttackFrostBonus = 'AIob',
  ItemAttackHealReductionBonus = 'AIf2',
  ItemAttackLightningBonus = 'AIlb',
  ItemAttackLightningBonusNew = 'AIll',
  ItemAttackPoisonBonus = 'AIpb',
  ItemAttackSlowBonus = 'AIsb',
  ItemAttackSpeedBonus = 'AIas',
  ItemAttackSpeedBonus2 = 'AIsx',
  ItemAttackSpeedBonus3 = 'AIs2',
  ItemBlackArrow = 'ANbs',
  ItemBlueDragonspawnOverseerSummon = 'AIff',
  ItemBlueDrakeSummon = 'AIfd',
  ItemCaptureTheFlag = 'AIfl',
  ItemCaptureTheFlag2 = 'AIfm',
  ItemCaptureTheFlag3 = 'AIfn',
  ItemCaptureTheFlag4 = 'AIfo',
  ItemCaptureTheFlag5 = 'AIfe',
  ItemChainDispel = 'AIdc',
  ItemCommand = 'AIco',
  ItemDamageBonus = 'AItx',
  ItemDamageBonus2 = 'AIt6',
  ItemDamageBonus3 = 'AIt9',
  ItemDamageBonus4 = 'AItc',
  ItemDamageBonus5 = 'AItf',
  ItemDamageBonus6 = 'AItg',
  ItemDamageBonus7 = 'AIth',
  ItemDamageBonus8 = 'AIti',
  ItemDamageBonus9 = 'AItj',
  ItemDispel = 'AIdi',
  ItemDispel2 = 'AIds',
  ItemDivineShield = 'AIdv',
  ItemDoomGuardSummon = 'AIfu',
  ItemExperienceGain = 'AIem',
  ItemExperienceGain2 = 'AIe2',
  ItemFelStalkerSummon = 'AIfh',
  ItemFirebolt = 'AIfi',
  ItemFreezeDamageBonus = 'AIzb',
  ItemFurbolgTrackerSummon = 'AIut',
  ItemHealOrManaRegain = 'AIre',
  ItemHealing = 'AIhe',
  ItemHealing2 = 'AIh1',
  ItemHealing3 = 'AIh2',
  ItemHealing4 = 'AIhx',
  ItemHeroStatBonus = 'AIi5',
  ItemHeroStatBonus2 = 'AIa6',
  ItemHeroStatBonus3 = 'AIaz',
  ItemHeroStatBonus4 = 'AIi6',
  ItemHeroStatBonus5 = 'AIx2',
  ItemHeroStatBonus6 = 'AIx5',
  ItemHeroStatBonus7 = 'AIa1',
  ItemHeroStatBonus8 = 'AIx1',
  ItemHeroStatBonus9 = 'AIs1',
  ItemIceRevenantSummon = 'AIir',
  ItemIllusions = 'AIil',
  ItemImmolation = 'AIcf',
  ItemIntOrAgiOrStrGain = 'AIxm',
  ItemIntelligenceGain = 'AIim',
  ItemIntelligenceGain2 = 'AItm',
  ItemLevelGain = 'AIlm',
  ItemLifeBonus = 'AIl2',
  ItemLifeBonus2 = 'AIml',
  ItemLifeBonus3 = 'AIlz',
  ItemLifeBonus4 = 'AIlf',
  ItemLifeBonus5 = 'AIl1',
  ItemLifeRegeneration = 'Arel',
  ItemLifeRegeneration2 = 'Arll',
  ItemLifeSteal = 'AIva',
  ItemManaBonus = 'AImm',
  ItemManaBonus100 = 'AImz',
  ItemManaBonus2 = 'AImb',
  ItemManaBonus200 = 'AI2m',
  ItemManaBonus3 = 'AIbm',
  ItemManaBonus75 = 'AImv',
  ItemManaRegain = 'AIma',
  ItemManaRegain2 = 'AIm1',
  ItemManaRegain3 = 'AIm2',
  ItemManaRegeneration = 'AIrm',
  ItemMoveSpeedBonus = 'AIms',
  ItemOrcishBattleStandard = 'AIfx',
  ItemPermanentDamageGainItemAttackDamageGain = 'AIaa',
  ItemPermanentLifeGain = 'AImh',
  ItemPermanentLifeGain2 = 'AIpx',
  ItemPermanentLifeGainItemLifeGain = 'AImi',
  ItemPlaceGoblinLandMine = 'AIpm',
  ItemPurge = 'AIpg',
  ItemPurge2 = 'AIps',
  ItemPurge3 = 'AIlp',
  ItemRecall = 'AIrt',
  ItemReincarnation = 'AIrc',
  ItemResurrection = 'AIrs',
  ItemResurrection2 = 'AIrx',
  ItemRevealEntireMap = 'AIrv',
  ItemRockGolemSummon = 'AIfr',
  ItemSightRangeBonus = 'AIsi',
  ItemSilence = 'AIse',
  ItemSkeletonSummon = 'AIfs',
  ItemSlow = 'AIos',
  ItemSoulPossession = 'Asou',
  ItemSoulTheft = 'AIso',
  ItemStrengthGain = 'AIsm',
  ItemStrengthGain2 = 'AInm',
  ItemTemporaryAreaArmorBonus = 'AIda',
  ItemTemporaryAreaArmorBonus2 = 'AIdb',
  ItemTemporaryInvisibility = 'AIvi',
  ItemTemporaryInvisibility2 = 'AIv1',
  ItemTemporaryInvisibility3 = 'AIv2',
  ItemTemporaryInvulnerability = 'AIvu',
  ItemTemporaryInvulnerability2 = 'AIvl',
  ItemTemporaryInvulnerability3 = 'AIvg',
  ItemTemporarySpeedBonus = 'AIsp',
  ItemTownPortal = 'AItp',
  ItemTransmute = 'AIts',
  ItemUrsaWarriorSummon = 'AIuw',
  ItemWeb = 'AIwb',
  IvoryTower = 'tsct',
  JadeRing = 'jdrn',
  KeepOrStrongholdOrTreeOfAgesOrHallsOfTheDead = 'TWN2',
  KegOfAle = 'kgal',
  KegOfThunderwater = 'dkfw',
  KelensDaggerOfEscape = 'desc',
  KeyOfThreeMoons = 'k3m3',
  KhadgarsGemOfHealth = 'rhth',
  KhadgarsPipeOfInsight = 'kpin',
  Killmaim = 'klmm',
  LeastHealing = 'AIh3',
  LegionDoomHorn = 'lgdh',
  LesserClarityPotion = 'plcl',
  LesserClarityPotion2 = 'AIpl',
  LesserReplenishmentPotion = 'rej2',
  LesserRuneResurrection = 'APrl',
  LesserScrollOfReplenishment = 'rej5',
  LightningShield = 'AIls',
  LionsRing = 'lnrn',
  MagicKeyChain = 'mgtk',
  ManaStone = 'mnst',
  MantleOfIntelligencePlus3 = 'rin1',
  ManualOfHealth = 'manh',
  MaskOfDeath = 'modt',
  MaulOfStrength = 'mlst',
  MechanicalCritter = 'mcri',
  MechanicalCritter2 = 'Amec',
  MedallionOfCourage = 'mcou',
  MedusaPebble = 'mdpb',
  MeleeColdDamageBonus = 'AIft',
  MeleeFireDamageBonus = 'AIfw',
  MeleeLightningDamageBonus = 'AIlx',
  Mindstaff = 'mnsf',
  MinorReplenishmentPotion = 'rej1',
  MogrinsReport = 'mort',
  MonsterLure = 'lure',
  MonsterLure2 = 'AImo',
  MoonKey = 'kymn',
  Mooncrystal = 'k3m1',
  Moonstone = 'moon',
  NecklaceOfSpellImmunity = 'nspi',
  NightElfFlag = 'nflg',
  NoteToJainaProudmoore = 'jpnt',
  OrbOfCorruption = 'ocor',
  OrbOfDarkness = 'odef',
  OrbOfFire = 'ofir',
  OrbOfFire2 = 'ofr2',
  OrbOfFrost = 'ofro',
  OrbOfKiljaeden = 'gldo',
  OrbOfLightning = 'oli2',
  OrbOfLightning2 = 'olig',
  OrbOfSlow = 'oslo',
  OrbOfVenom = 'oven',
  OrcFlag = 'oflg',
  PartialKeyOfTheThreeMoons = 'k3m2',
  PendantOfEnergy = 'penr',
  PendantOfMana = 'pmna',
  PenguinSqueek = 'AIpz',
  PeriaptOfVitality = 'prvt',
  PhatLewt = 'phlt',
  PotionOfDivinity = 'pdi2',
  PotionOfDivinity2 = 'pdiv',
  PotionOfGreaterHealing = 'pghe',
  PotionOfGreaterInvisibility = 'pgin',
  PotionOfGreaterMana = 'pgma',
  PotionOfHealing = 'phea',
  PotionOfInvisibility = 'pinv',
  PotionOfInvulnerability = 'pnvu',
  PotionOfLesserInvulnerability = 'pnvl',
  PotionOfMana = 'pman',
  PotionOfOmniscience = 'pomn',
  PotionOfRestoration = 'pres',
  PotionOfSpeed = 'pspd',
  PowerupAreaHealing = 'APh2',
  PowerupAreaHealingGreater = 'APh3',
  PowerupAreaHealingLesser = 'APh1',
  PowerupDispel = 'APdi',
  RaiseDeadItem = 'AIrd',
  RandomItem = 'AIri',
  Reanimation = 'AInd',
  Rebirth = 'AIrb',
  RedDrakeEgg = 'fgrd',
  RegenerationAura = 'AIgx',
  ReplenishmentPotion = 'rej3',
  RingOfProtectionPlus1 = 'rde0',
  RingOfProtectionPlus2 = 'rde1',
  RingOfProtectionPlus3 = 'rde2',
  RingOfProtectionPlus4 = 'rde3',
  RingOfProtectionPlus5 = 'rde4',
  RingOfRegeneration = 'rlif',
  RingOfSuperiority = 'rnsp',
  RingOfTheArchmagi = 'ram4',
  RingOfTheArchmagi2 = 'ram3',
  RingOfTheArchmagi3 = 'ram2',
  RingOfTheArchmagi4 = 'ram1',
  RitualDagger = 'ritd',
  RitualDagger2 = 'AIdg',
  RitualDagger3 = 'AIg2',
  Roar = 'AIrr',
  RobeOfTheMagiPlus6 = 'ciri',
  RodOfNecromancy = 'rnec',
  RuneAreaHealOrManaRegain = 'APra',
  RuneAreaManaRegain = 'APmr',
  RuneAreaManaRegainGreater = 'APmg',
  RuneOfDispelMagic = 'rdis',
  RuneOfGreaterHealing = 'rhe3',
  RuneOfGreaterMana = 'rma2',
  RuneOfGreaterResurrection = 'rre2',
  RuneOfHealing = 'rhe2',
  RuneOfLesserHealing = 'rhe1',
  RuneOfLesserResurrection = 'rre1',
  RuneOfMana = 'rman',
  RuneOfRebirth = 'rreb',
  RuneOfRestoration = 'rres',
  RuneOfShielding = 'rsps',
  RuneOfSpeed = 'rspd',
  RuneOfSpeed2 = 'APsa',
  RuneOfSpiritLink = 'rspl',
  RuneOfTheWatcher = 'rwat',
  RuneOfTheWatcher2 = 'APwt',
  RunedBracers = 'brac',
  RunedGauntlets = 'rugt',
  RustyMiningPick = 'rump',
  SacredRelic = 'horl',
  SacrificialSkull = 'skul',
  ScepterOfAvarice = 'scav',
  ScepterOfHealing = 'schl',
  ScepterOfMastery = 'ccmd',
  ScepterOfTheSea = 'rots',
  ScourgeBoneChimes = 'sbch',
  ScrollOfAnimateDead = 'sand',
  ScrollOfHaste = 'AIsa',
  ScrollOfHealing = 'shea',
  ScrollOfMana = 'sman',
  ScrollOfProtection = 'spro',
  ScrollOfRegeneration = 'sreg',
  ScrollOfRegeneration2 = 'AIsl',
  ScrollOfRestoration = 'sres',
  ScrollOfResurrection = 'srrc',
  ScrollOfSpeed = 'shas',
  ScrollOfTheBeast = 'sror',
  ScrollOfTheUnholyLegion = 'scul',
  ScrollOfTownPortal = 'stwp',
  SearingBlade = 'srbd',
  SecretLevelPowerup = 'sclp',
  SeedOfExpulsion = 'sxpl',
  SentryWard = 'AIsw',
  SentryWards = 'wswd',
  Serathil = 'srtl',
  ShadowOrbAbility = 'AIdn',
  ShadowOrbFragment = 'sorf',
  ShadowOrbPlus1 = 'sor1',
  ShadowOrbPlus10 = 'sora',
  ShadowOrbPlus2 = 'sor2',
  ShadowOrbPlus3 = 'sor3',
  ShadowOrbPlus4 = 'sor4',
  ShadowOrbPlus5 = 'sor5',
  ShadowOrbPlus6 = 'sor6',
  ShadowOrbPlus7 = 'sor7',
  ShadowOrbPlus8 = 'sor8',
  ShadowOrbPlus9 = 'sor9',
  ShamanClaws = 'shcw',
  ShamanicTotem = 'shtm',
  ShieldOfHonor = 'shhn',
  ShieldOfTheDeathlord = 'shdt',
  ShimmerglazeRoast = 'shrs',
  Shimmerweed = 'shwd',
  SkeletalArtifact = 'skrt',
  SkullOfGuldan = 'glsk',
  SkullShield = 'sksh',
  SlippersOfAgilityPlus3 = 'rag1',
  SlowPoison = 'AIsz',
  SobiMask = 'rwiz',
  Soul = 'soul',
  SoulGem = 'gsou',
  SpellBook = 'sbok',
  SpellBook2 = 'Aspb',
  SpellDamageReduction = 'AIsr',
  SpellImmunity = 'AImx',
  SpellShield = 'ANss',
  SpellShield2 = 'ANse',
  SpiderRing = 'sprn',
  SpiderSilkBroach = 'silk',
  SpikedCollar = 'fgfh',
  SpiritLink = 'Aspp',
  StaffOfNegation = 'sneg',
  StaffOfPreservation = 'spre',
  StaffOfPreservation2 = 'ANpr',
  StaffOfReanimation = 'stre',
  StaffOfSanctuary = 'ssan',
  StaffOfSanctuary2 = 'ANsa',
  StaffOfSilence = 'ssil',
  StaffOfTeleportation = 'stel',
  StaffOfTeleportation2 = 'AImt',
  Steal = 'Aste',
  StoneToken = 'fgrg',
  SturdyWarAxe = 'stwa',
  SummonHeadhunter = 'AIsh',
  SunKey = 'kysn',
  TalismanOfEvasion = 'evtl',
  TalismanOfTheWild = 'totw',
  TheHeartOfSearinox = 'sehr',
  TheLionHornOfStormwind = 'lhst',
  ThunderLizardEgg = 'thle',
  ThunderPhoenixEgg = 'dphe',
  ThunderbloomBulb = 'dthb',
  ThunderlizardDiamond = 'thdm',
  TinyAltarOfKings = 'tbak',
  TinyBarracks = 'tbar',
  TinyBlacksmith = 'tbsm',
  TinyCastle = 'tcas',
  TinyFarm = 'tfar',
  TinyGreatHall = 'tgrh',
  TinyLumberMill = 'tlum',
  TomeOfAgility = 'tdex',
  TomeOfAgilityPlus2 = 'tdx2',
  TomeOfExperience = 'texp',
  TomeOfGreaterExperience = 'tgxp',
  TomeOfIntelligence = 'tint',
  TomeOfIntelligencePlus2 = 'tin2',
  TomeOfKnowledge = 'tpow',
  TomeOfPower = 'tkno',
  TomeOfRetraining = 'tret',
  TomeOfRetraining2 = 'Aret',
  TomeOfSacrifices = 'tmsc',
  TomeOfStrength = 'tstr',
  TomeOfStrengthPlus2 = 'tst2',
  TotemOfMight = 'tmmt',
  TownHallOrGreatHallOrTreeOfLifeOrNecropolis = 'TWN1',
  Ultravision = 'AIuv',
  UndeadFlag = 'uflg',
  UnholyFrenzy = 'AIuf',
  UrnOfKingTerenas = 'ktrm',
  VampiricPotion = 'vamp',
  VampiricPotion2 = 'AIpv',
  VineOfPurification = 'vpur',
  VoodooDoll = 'vddl',
  WandOfIllusion = 'will',
  WandOfLightningShield = 'wlsd',
  WandOfManaStealing = 'woms',
  WandOfNegation = 'wneg',
  WandOfNeutralization = 'wneu',
  WandOfShadowsight = 'wshs',
  WandOfShadowsight2 = 'Ashs',
  WandOfTheWind = 'wcyc',
  WarsongBattleDrums = 'war2',
  WarsongBattleDrums2 = 'ward',
  WateryMinion = 'AIwm',
  WirtsLeg = 'wtlg',
  WirtsOtherLeg = 'wolg',
  Ydeng = 'Y425',
}

type MapItem = { oldId: string, newId: string } & Item;

export class ItemContainer extends OEContainer<Item> {
  override game = <{[key in Items]: Item}>objects;
  override map: {[key: string]: MapItem } = {};
  override loadModification(object: MapItem, modification: Modification) {
    const { id, value } = modification;
    switch(id) {
      case 'iabi': object.abilities = war3ToTS('abilityList', value); return;
      case 'iarm': object.armorType = war3ToTS('armorType', value); return;
      case 'icla': object.classification = war3ToTS('itemClass', value); return;
      case 'iclb': object.tintingColor3Blue = war3ToTS('int', value); return;
      case 'iclg': object.tintingColor2Green = war3ToTS('int', value); return;
      case 'iclr': object.tintingColor1Red = war3ToTS('int', value); return;
      case 'icid': object.cooldownGroup = war3ToTS('abilCode', value); return;
      case 'idrp': object.droppedWhenCarrierDies = war3ToTS('bool', value); return;
      case 'idro': object.canBeDropped = war3ToTS('bool', value); return;
      case 'ifil': object.modelUsed = war3ToTS('model', value); return;
      case 'igol': object.goldCost = war3ToTS('int', value); return;
      case 'ihtp': object.hitPoints = war3ToTS('int', value); return;
      case 'iicd': object.ignoreCooldown = war3ToTS('bool', value); return;
      case 'ilev': object.level = war3ToTS('int', value); return;
      case 'ilum': object.lumberCost = war3ToTS('int', value); return;
      case 'imor': object.validTargetForTransformation = war3ToTS('bool', value); return;
      case 'ilvo': object.levelUnclassified = war3ToTS('int', value); return;
      case 'iper': object.perishable = war3ToTS('bool', value); return;
      case 'iprn': object.includeAsRandomChoice = war3ToTS('bool', value); return;
      case 'ipow': object.useAutomaticallyWhenAcquired = war3ToTS('bool', value); return;
      case 'ipri': object.priority = war3ToTS('int', value); return;
      case 'isca': object.scalingValue = war3ToTS('real', value); return;
      case 'issc': object.selectionSizeEditor = war3ToTS('real', value); return;
      case 'isel': object.canBeSoldByMerchants = war3ToTS('bool', value); return;
      case 'ipaw': object.canBeSoldToMerchants = war3ToTS('bool', value); return;
      case 'isto': object.stockMaximum = war3ToTS('int', value); return;
      case 'istr': object.stockReplenishInterval = war3ToTS('int', value); return;
      case 'isst': object.stockStartDelay = war3ToTS('int', value); return;
      case 'isit': object.stockInitialAfterStartDelay = war3ToTS('int', value); return;
      case 'iusa': object.activelyUsed = war3ToTS('bool', value); return;
      case 'iuse': object.numberOfCharges = war3ToTS('int', value); return;
      case 'ista': object.maxStacks = war3ToTS('int', value); return;
      case 'iico': object.interfaceIcon = war3ToTS('icon', value); return;
      case 'ubpx': object.buttonPositionX = war3ToTS('int', value); return;
      case 'ubpy': object.buttonPositionY = war3ToTS('int', value); return;
      case 'ides': object.description = war3ToTS('string', value); return;
      case 'uhot': object.hotkey = war3ToTS('char', value); return;
      case 'unam': object.name = war3ToTS('string', value); return;
      case 'ureq': object.requirements = war3ToTS('techList', value); return;
      case 'urqa': object.requirementsLevels = war3ToTS('intList', value); return;
      case 'utip': object.tooltipBasic = war3ToTS('string', value); return;
      case 'utub': object.tooltipExtended = war3ToTS('string', value); return;
      default: throw Error(`Unknown modification: ${id}`);
    }
  }
  override saveModifications(gameObject: Item, object: MapItem): Modification[] {
    const modifications: Modification[] = [];
    if (object.abilities !== gameObject.abilities) { modifications.push(tsToWar3('iabi', 'abilityList', object.abilities)); }
    if (object.armorType !== gameObject.armorType) { modifications.push(tsToWar3('iarm', 'armorType', object.armorType)); }
    if (object.classification !== gameObject.classification) { modifications.push(tsToWar3('icla', 'itemClass', object.classification)); }
    if (object.tintingColor3Blue !== gameObject.tintingColor3Blue) { modifications.push(tsToWar3('iclb', 'int', object.tintingColor3Blue)); }
    if (object.tintingColor2Green !== gameObject.tintingColor2Green) { modifications.push(tsToWar3('iclg', 'int', object.tintingColor2Green)); }
    if (object.tintingColor1Red !== gameObject.tintingColor1Red) { modifications.push(tsToWar3('iclr', 'int', object.tintingColor1Red)); }
    if (object.cooldownGroup !== gameObject.cooldownGroup) { modifications.push(tsToWar3('icid', 'abilCode', object.cooldownGroup)); }
    if (object.droppedWhenCarrierDies !== gameObject.droppedWhenCarrierDies) { modifications.push(tsToWar3('idrp', 'bool', object.droppedWhenCarrierDies)); }
    if (object.canBeDropped !== gameObject.canBeDropped) { modifications.push(tsToWar3('idro', 'bool', object.canBeDropped)); }
    if (object.modelUsed !== gameObject.modelUsed) { modifications.push(tsToWar3('ifil', 'model', object.modelUsed)); }
    if (object.goldCost !== gameObject.goldCost) { modifications.push(tsToWar3('igol', 'int', object.goldCost)); }
    if (object.hitPoints !== gameObject.hitPoints) { modifications.push(tsToWar3('ihtp', 'int', object.hitPoints)); }
    if (object.ignoreCooldown !== gameObject.ignoreCooldown) { modifications.push(tsToWar3('iicd', 'bool', object.ignoreCooldown)); }
    if (object.level !== gameObject.level) { modifications.push(tsToWar3('ilev', 'int', object.level)); }
    if (object.lumberCost !== gameObject.lumberCost) { modifications.push(tsToWar3('ilum', 'int', object.lumberCost)); }
    if (object.validTargetForTransformation !== gameObject.validTargetForTransformation) { modifications.push(tsToWar3('imor', 'bool', object.validTargetForTransformation)); }
    if (object.levelUnclassified !== gameObject.levelUnclassified) { modifications.push(tsToWar3('ilvo', 'int', object.levelUnclassified)); }
    if (object.perishable !== gameObject.perishable) { modifications.push(tsToWar3('iper', 'bool', object.perishable)); }
    if (object.includeAsRandomChoice !== gameObject.includeAsRandomChoice) { modifications.push(tsToWar3('iprn', 'bool', object.includeAsRandomChoice)); }
    if (object.useAutomaticallyWhenAcquired !== gameObject.useAutomaticallyWhenAcquired) { modifications.push(tsToWar3('ipow', 'bool', object.useAutomaticallyWhenAcquired)); }
    if (object.priority !== gameObject.priority) { modifications.push(tsToWar3('ipri', 'int', object.priority)); }
    if (object.scalingValue !== gameObject.scalingValue) { modifications.push(tsToWar3('isca', 'real', object.scalingValue)); }
    if (object.selectionSizeEditor !== gameObject.selectionSizeEditor) { modifications.push(tsToWar3('issc', 'real', object.selectionSizeEditor)); }
    if (object.canBeSoldByMerchants !== gameObject.canBeSoldByMerchants) { modifications.push(tsToWar3('isel', 'bool', object.canBeSoldByMerchants)); }
    if (object.canBeSoldToMerchants !== gameObject.canBeSoldToMerchants) { modifications.push(tsToWar3('ipaw', 'bool', object.canBeSoldToMerchants)); }
    if (object.stockMaximum !== gameObject.stockMaximum) { modifications.push(tsToWar3('isto', 'int', object.stockMaximum)); }
    if (object.stockReplenishInterval !== gameObject.stockReplenishInterval) { modifications.push(tsToWar3('istr', 'int', object.stockReplenishInterval)); }
    if (object.stockStartDelay !== gameObject.stockStartDelay) { modifications.push(tsToWar3('isst', 'int', object.stockStartDelay)); }
    if (object.stockInitialAfterStartDelay !== gameObject.stockInitialAfterStartDelay) { modifications.push(tsToWar3('isit', 'int', object.stockInitialAfterStartDelay)); }
    if (object.activelyUsed !== gameObject.activelyUsed) { modifications.push(tsToWar3('iusa', 'bool', object.activelyUsed)); }
    if (object.numberOfCharges !== gameObject.numberOfCharges) { modifications.push(tsToWar3('iuse', 'int', object.numberOfCharges)); }
    if (object.maxStacks !== gameObject.maxStacks) { modifications.push(tsToWar3('ista', 'int', object.maxStacks)); }
    if (object.interfaceIcon !== gameObject.interfaceIcon) { modifications.push(tsToWar3('iico', 'icon', object.interfaceIcon)); }
    if (object.buttonPositionX !== gameObject.buttonPositionX) { modifications.push(tsToWar3('ubpx', 'int', object.buttonPositionX)); }
    if (object.buttonPositionY !== gameObject.buttonPositionY) { modifications.push(tsToWar3('ubpy', 'int', object.buttonPositionY)); }
    if (object.description !== gameObject.description) { modifications.push(tsToWar3('ides', 'string', object.description)); }
    if (object.hotkey !== gameObject.hotkey) { modifications.push(tsToWar3('uhot', 'char', object.hotkey)); }
    if (object.name !== gameObject.name) { modifications.push(tsToWar3('unam', 'string', object.name)); }
    if (object.requirements !== gameObject.requirements) { modifications.push(tsToWar3('ureq', 'techList', object.requirements)); }
    if (object.requirementsLevels !== gameObject.requirementsLevels) { modifications.push(tsToWar3('urqa', 'intList', object.requirementsLevels)); }
    if (object.tooltipBasic !== gameObject.tooltipBasic) { modifications.push(tsToWar3('utip', 'string', object.tooltipBasic)); }
    if (object.tooltipExtended !== gameObject.tooltipExtended) { modifications.push(tsToWar3('utub', 'string', object.tooltipExtended)); }
    return modifications;
  }
}