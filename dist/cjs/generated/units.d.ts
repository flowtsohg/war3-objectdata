import Modification from 'mdx-m3-viewer/dist/cjs/parsers/w3x/w3u/modification';
import { OEContainer } from '../container';
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
export declare enum Units {
    AHero = "HERO",
    Abomination = "uabo",
    Abominationcinematic = "uabc",
    Acolyte = "uaco",
    Admiralproudmoore = "Hapm",
    Airbarge = "uarb",
    Akama = "Naka",
    Albatross = "nalb",
    Alchemist = "Nalc",
    AlchemistMorphLevel1 = "Nalm",
    AlchemistMorphLevel2 = "Nal2",
    AlchemistMorphLevel3 = "Nal3",
    AltarOfDarkness = "uaod",
    AltarOfElders = "eate",
    AltarOfKings = "halt",
    AltarOfStorms = "oalt",
    Altarofthedepths = "nnad",
    AncestralGuardian = "oang",
    AncientHydra = "nahy",
    AncientOfLore = "eaoe",
    AncientOfWar = "eaom",
    AncientOfWind = "eaow",
    AncientOfWonders = "eden",
    AncientProtector = "etrp",
    AncientSasquatch = "nsqa",
    AncientWendigo = "nwna",
    Antonidus = "Hant",
    Anubarak = "Uanb",
    ApprenticeWizard = "nwiz",
    ArachnathidEarthBorer = "nane",
    ArcaneSanctum = "hars",
    ArcaneTower = "hatw",
    ArcaneVault = "hvlt",
    Arcaneobservatory = "haro",
    Archer = "earc",
    Archimonde = "Uwar",
    Archmage = "Hamg",
    Archmage2 = "Hjas",
    Arthas = "Hart",
    Arthaswithfrostmourne = "Harf",
    Assassin = "nass",
    AvatarOfVengeance = "espv",
    Azurelordfrostwyrm = "ubdd",
    Azureloredragon = "ubdr",
    Baine = "obai",
    Balnazzar = "Ubal",
    Bandit = "nban",
    BanditLord = "nbld",
    Banshee = "uban",
    BarbedArachnathid = "nanb",
    BarbedArachnathid2 = "nanm",
    Barracks = "hbar",
    Barracks2 = "obar",
    Barrowden = "nbwd",
    Batrider = "otbr",
    BattleGolem = "narg",
    Battleship = "nbsp",
    BearLevel1 = "ngz1",
    Beastiary = "obea",
    Beastmaster = "Nbst",
    BerserkElemental = "nelb",
    BerserkWildkin = "nowk",
    Berserker = "otbk",
    Bindstonese = "nbse",
    Bindstonesw = "nbsw",
    BlackCitadel = "unp2",
    BlackDragon = "nbwm",
    BlackDragonRoost = "ndrk",
    BlackDragonWhelp = "nbdr",
    BlackDrake = "nbdk",
    BlackSpider = "nspb",
    Blackrockblademaster = "Nbbc",
    Blacksmith = "hbla",
    Blademaster = "Obla",
    BloodMage = "Hblm",
    BloodWizard = "nwzw",
    Bloodelfengineer = "nbee",
    Bloodelflieutenant = "nbel",
    Bloodelfwagon = "hbew",
    Bloodelfworker = "nhew",
    Bloodfiend = "nfgb",
    Bloodfountain = "nbfl",
    BlueDragon = "nadr",
    BlueDragonRoost = "ndru",
    BlueDragonWhelp = "nadw",
    BlueDragonspawnApprentice = "nbda",
    BlueDragonspawnMeddler = "nbdm",
    BlueDragonspawnOverseer = "nbdo",
    BlueDragonspawnSorcerer = "nbds",
    BlueDragonspawnWarrior = "nbdw",
    BlueDrake = "nadk",
    Boneyard = "ubon",
    Bookofsummoning = "nbsm",
    Bouldertower = "nbt1",
    Bouldertowerupgrade = "nbt2",
    Brewmaster = "Npbm",
    Brigand = "nbrg",
    BronzeDragon = "nbzd",
    BronzeDragonRoost = "ndrz",
    BronzeDragonWhelp = "nbzw",
    BronzeDrake = "nbzk",
    BroodMother = "nsbm",
    BurningArcher = "nskf",
    Burrow = "otrb",
    BurrowedBarbedArachnathid = "nbnb",
    BurrowedCarrionBeetleLevel2 = "ucsB",
    BurrowedCarrionBeetleLevel3 = "ucsC",
    BurrowedCryptFiend = "ucrm",
    Cairnebloodhoof = "Ocbh",
    Cairnebloodhoofcinematic = "Otcc",
    Cairnebloodhoofexp = "Ocb2",
    Campaignturtle = "nhyc",
    CannonTower = "hctw",
    CarrionBeetleLevel1 = "ucs1",
    CarrionBeetleLevel2 = "ucs2",
    CarrionBeetleLevel3 = "ucs3",
    Castle = "hcas",
    Cenarius = "Ecen",
    CentaurArcher = "ncea",
    CentaurArcher2 = "ncef",
    CentaurDrudge = "ncer",
    CentaurImpaler = "ncim",
    CentaurImpaler2 = "ncif",
    CentaurKhan = "ncnk",
    CentaurOutrunner = "ncen",
    CentaurSorcerer = "ncks",
    CentaurSorcerer2 = "nckf",
    CentaurTent = "ncnt",
    CentaurTent2 = "nct1",
    CentaurTent3 = "nct2",
    Chaosgrunt = "nchg",
    Chaoskotobeast = "nckb",
    Chaosorcburrow = "ocbw",
    Chaospeon = "ncpn",
    Chaosspaceorc = "zcso",
    Chaoswarlock = "nchw",
    Chaoswarlord = "owar",
    Chaoswolfrider = "nchr",
    Chaplain = "nchp",
    Chicken = "nech",
    Child = "nvlk",
    Child2 = "nvk2",
    Chimaera = "echm",
    ChimaeraRoost = "edos",
    CircleOfPower = "ncop",
    CircleOfPowerLarge = "ncp3",
    CircleOfPowerMedium = "ncp2",
    CityBuilding0 = "ncb0",
    CityBuilding1 = "ncb1",
    CityBuilding10 = "ncba",
    CityBuilding11 = "ncbb",
    CityBuilding12 = "ncbc",
    CityBuilding13 = "ncbd",
    CityBuilding14 = "ncbe",
    CityBuilding15 = "ncbf",
    CityBuilding2 = "ncb2",
    CityBuilding3 = "ncb3",
    CityBuilding4 = "ncb4",
    CityBuilding5 = "ncb5",
    CityBuilding6 = "ncb6",
    CityBuilding7 = "ncb7",
    CityBuilding8 = "ncb8",
    CityBuilding9 = "ncb9",
    ClockwerkGoblin = "ncg1",
    ClockwerkGoblin2 = "ncg2",
    ClockwerkGoblin3 = "ncg3",
    ClockwerkGoblin4 = "ncgb",
    Coldtower = "ndt1",
    Coldtowerupgrade = "ndt2",
    Coralbed = "nnfm",
    CorruptedTreant = "nenc",
    Corruptedancientofwar = "ncaw",
    Corruptedancientprotector = "ncap",
    Corruptedmoonwell = "ncmw",
    Corruptedtreeofages = "ncta",
    Corruptedtreeofeternity = "ncte",
    Corruptedtreeoflife = "nctl",
    Crab = "ncrb",
    Crypt = "usep",
    CryptFiend = "ucry",
    CryptLord = "Ucrl",
    CrystalArachnathid = "nanc",
    Dagren = "Hdgo",
    Dalaranguardtower = "ndgt",
    Dalaranmutant = "ndmu",
    Dalaranreject = "ndrj",
    DarkMinion = "ndr2",
    DarkRanger = "Nbrn",
    DarkTroll = "ndtr",
    DarkTrollBerserker = "ndtb",
    DarkTrollHighPriest = "ndth",
    DarkTrollShadowPriest = "ndtp",
    DarkTrollTrapper = "ndtt",
    DarkTrollWarlord = "ndtw",
    DarkWizard = "nwzd",
    Darkportalse = "ndke",
    Darkportalsw = "ndkw",
    DeathKnight = "Udea",
    DeathKnight2 = "Uart",
    DeathKnight3 = "Udef",
    DeathRevenant = "nrvd",
    Deathtower = "ntt1",
    Deathtowerupgrade = "ntx2",
    Deceiver = "nhdc",
    DeeplordRevenant = "nlrv",
    DefenderGolem = "nggd",
    Defiledfountainoflife = "ndfl",
    Demolisher = "ocat",
    Demolisherdraenei = "ncat",
    DemonHunter = "Edem",
    DemonHunterDemonForm = "Edmm",
    DemonHuntress = "Edef",
    DemonHuntressDemonForm = "Edmf",
    Demongate = "ndmg",
    Destroyer = "ubsp",
    Detheroc = "Udth",
    DiabloCart = "nccd",
    DireFrostWolf = "nwwd",
    DireMammoth = "nmdr",
    DireQuilbeastLevel2 = "nqb2",
    DireWolf = "nwld",
    DireWolfLevel2 = "osw2",
    DiseaseCloud = "uplg",
    Dog = "ndog",
    DoomGuardStandard = "nbal",
    DoomGuardSummoned = "nba2",
    DraeneiChieftainsHut = "ndch",
    DraeneiDarkslayer = "ndrd",
    DraeneiDisciple = "ndrm",
    DraeneiGuardian = "ndrf",
    DraeneiHarbinger = "ndrh",
    DraeneiHut = "ndh0",
    DraeneiHut2 = "ndh1",
    DraeneiProtector = "ndrp",
    DraeneiSeer = "ndrs",
    DraeneiStalker = "ndrt",
    DraeneiVindicator = "ndrn",
    DraeneiWatcher = "ndrw",
    Draeneihaven = "ndh2",
    Draeneilaborer = "ndrl",
    Draeneisalamander = "ndsa",
    Draeneiseerden = "ndh4",
    Draeneiwarriorshall = "ndh3",
    DragonHawk = "nws1",
    DragonTurtle = "ntrd",
    Dragonbuilding = "ndrb",
    DragonhawkRider = "hdhw",
    Drakthul = "odkt",
    Dreadlord = "Udre",
    Drekthar = "Odrt",
    DruidOfTheClawBearForm = "edcm",
    DruidOfTheClawNightElfForm = "edoc",
    DruidOfTheTalonNightElfForm = "edot",
    DruidOfTheTalonStormCrowForm = "edtm",
    Dryad = "edry",
    DuneWorm = "ndwm",
    DwarfCart = "nccr",
    Earth = "npn3",
    Earthfurytower = "negf",
    ElderHydra = "nehy",
    ElderJungleStalker = "njga",
    ElderSasquatch = "nsqe",
    ElderVoidwalker = "nvde",
    ElderWendigo = "nwnr",
    Elvenfarm = "nefm",
    Elvenfarm0 = "nef0",
    Elvenfarm1 = "nef1",
    Elvenfarm2 = "nef2",
    Elvenfarm3 = "nef3",
    Elvenfarm4 = "nef4",
    Elvenfarm5 = "nef5",
    Elvenfarm6 = "nef6",
    Elvenfarm7 = "nef7",
    Elvenfishingvillage0 = "nfv0",
    Elvenfishingvillage1 = "nfv1",
    Elvenfishingvillage2 = "nfv2",
    Elvenfishingvillage3 = "nfv3",
    Elvenfishingvillage4 = "nfv4",
    Elvenguardtower = "negt",
    Emissary = "nemi",
    Energytower = "net1",
    Energytowerupgrade = "net2",
    Enforcer = "nenf",
    Engineergazlowe = "negz",
    EnragedElemental = "nele",
    EnragedJungleStalker = "njgb",
    EnragedWildkin = "nowe",
    EntangledGoldMine = "egol",
    EredarDiabolist = "nerd",
    EredarSorcerer = "ners",
    EredarWarlock = "nerw",
    Evilarthas = "Uear",
    Evilillidan = "Eevi",
    Evilillidandemonform = "Eevm",
    Evilsylvanas = "Usyl",
    FacelessOneDeathbringer = "nfod",
    FacelessOneTerror = "nfot",
    FacelessOneTrickster = "nfor",
    FaerieDragon = "efdr",
    FallenPriest = "nhfp",
    FarSeer = "Ofar",
    FarSeer2 = "Ofth",
    Farm = "hhou",
    FelBeast = "npfl",
    FelBoar = "nfbr",
    FelRavager = "npfm",
    FelStalker = "nfel",
    Felguard = "nfgu",
    Fire = "npn1",
    FireRevenant = "nrvf",
    Firelord = "Nfir",
    Flametower = "nft1",
    Flametowerupgrade = "nft2",
    Fleshgolem = "nfgl",
    FlyingMachine = "hgyr",
    FlyingSheep = "nshf",
    Footman = "hfoo",
    ForestSpider = "nspg",
    ForestTroll = "nftr",
    ForestTrollBerserker = "nftb",
    ForestTrollHighPriest = "nfsh",
    ForestTrollHut = "nfh0",
    ForestTrollHut2 = "nfh1",
    ForestTrollShadowPriest = "nfsp",
    ForestTrollTrapper = "nftt",
    ForestTrollWarlord = "nftk",
    ForgottenOne = "nfgo",
    Fortress = "ofrt",
    FountainOfHealth = "nfoh",
    FountainOfMana = "nmoo",
    Frog = "nfro",
    FrostRevenant = "nrvs",
    FrostWolf = "nwwf",
    FrostWyrm = "ufro",
    Frostmourne = "nfrm",
    Fruitstand = "nfrt",
    Furbolg = "nfrl",
    FurbolgChampion = "nfrg",
    FurbolgElderShaman = "nfre",
    FurbolgHut = "nfr2",
    FurbolgHut2 = "nfr1",
    FurbolgShaman = "nfrs",
    FurbolgTracker = "nfrb",
    FurbolgUrsaWarrior = "nfra",
    Furion = "Efur",
    GargantuanSeaTurtle = "ntrg",
    Gargoyle = "ugar",
    Garthok = "ogrk",
    Gemstoneobelisk = "ngob",
    Ghost = "ngh1",
    Ghostlyarchmage = "Hgam",
    Ghoul = "ugho",
    GiantFrostWolf = "nwwg",
    GiantPolarBear = "nplg",
    GiantSeaTurtle = "ntrt",
    GiantSkeletonWarrior = "nskg",
    GiantSpider = "nsgt",
    GiantWolf = "nwlg",
    GlaiveThrower = "ebal",
    Gnoll = "ngno",
    GnollAssassin = "ngns",
    GnollBrute = "ngnb",
    GnollHut = "ngnh",
    GnollHut2 = "ngt2",
    GnollOverseer = "ngnv",
    GnollPoacher = "ngna",
    GnollWarden = "ngnw",
    GnollWarlord = "ngow",
    GoblinLaboratory = "ngad",
    GoblinLandMine = "nglm",
    GoblinMerchant = "ngme",
    GoblinShipyard = "nshp",
    Goblinblaster = "ngbl",
    GoldMine = "ngol",
    GrainWarehouse = "ngwr",
    GraniteGolem = "nggr",
    Graveyard = "ugrv",
    GreatHall = "ogre",
    GreaterDarkMinion = "ndr3",
    GreaterVoidwalker = "nvdg",
    GreenDragon = "ngrd",
    GreenDragonRoost = "ndrg",
    GreenDragonWhelp = "ngrw",
    GreenDrake = "ngdk",
    Gromhellscream = "Ogrh",
    Grunt = "ogru",
    GryphonAviary = "hgra",
    GryphonRider = "hgry",
    GuardDog = "ngog",
    GuardTower = "hgtw",
    GuardianGolem = "nggg",
    Guldan = "Ogld",
    Halahk = "Hhkl",
    HallsOfTheDead = "unp1",
    HarpyNest = "nhns",
    HarpyNest2 = "nhn2",
    HarpyQueen = "nhrq",
    HarpyRogue = "nhrr",
    HarpyScout = "nhar",
    HarpyStormHag = "nhrh",
    HarpyWindwitch = "nhrw",
    HauntedGoldMine = "ugol",
    HawkLevel1 = "nwe1",
    Headhunter = "ohun",
    HealingWard = "ohwd",
    Heretic = "nhhr",
    HermitCrab = "nhmc",
    HighElfArchmage = "Haah",
    HighKing = "Hssa",
    Highelfbarracks = "nheb",
    Highelvenarcher = "nhea",
    Highelvenfemale = "nhef",
    Highelvenmale = "nhem",
    Highelvenswordsman = "hhes",
    Hippogryph = "ehip",
    HippogryphRider = "ehpr",
    Hornofcenarius = "nhcn",
    HumanBattleship = "hbsh",
    HumanFrigate = "hdes",
    HumanShipyard = "hshy",
    HumanTransportShip = "hbot",
    HuntersHall = "edob",
    Huntress = "esen",
    Hydra = "nhyd",
    HydraHatchling = "nhyh",
    Hydralisk = "zhyd",
    Hydromancer = "nhym",
    IceRevenant = "nrvi",
    IceTroll = "nitr",
    IceTrollBerserker = "nits",
    IceTrollHighPriest = "nith",
    IceTrollHut = "nth1",
    IceTrollHut2 = "nth0",
    IceTrollPriest = "nitp",
    IceTrollTrapper = "nitt",
    IceTrollWarlord = "nitw",
    Icecrownobelisk = "nico",
    IcetuskMammoth = "nmit",
    IcyTreasureBox = "nitb",
    Illidan = "Eill",
    Illidandemonform = "Eidm",
    Illidanmorphed = "Eilm",
    Illidanwagon = "eilw",
    InfectedGranary = "ngni",
    Infernal = "ninf",
    InfernalContraption = "ninc",
    InfernalJuggernaut = "nina",
    InfernalMachine = "ninm",
    Jailorkassan = "njks",
    Jaina = "Hjai",
    Juggernaut = "ojgn",
    JungleStalker = "njg1",
    Kael = "Hkal",
    Keep = "hkee",
    KeeperOfTheGrove = "Ekee",
    KeeperOfTheGrove2 = "Ekce",
    Keeperofthegroveghost = "Ekgg",
    Kelthuzadghost = "uktg",
    Kelthuzadlich = "Uktl",
    Kelthuzadlichcinematic = "Uclc",
    Kelthuzadnecro = "uktn",
    Kiljaeden = "Nklj",
    Kiljaedencinematic = "Nkjx",
    Knight = "hkni",
    Kobold = "nkob",
    KoboldGeomancer = "nkog",
    KoboldTaskmaster = "nkol",
    KoboldTunneler = "nkot",
    KodoBeast = "okod",
    Kotobeastnorider = "oosc",
    Ladyvashj = "Hvsh",
    LavaSpawnLevel1 = "nlv1",
    LavaSpawnLevel2 = "nlv2",
    LavaSpawnLevel3 = "nlv3",
    LesserDarkMinion = "ndr1",
    LesserVoidwalker = "nvdl",
    Lich = "Ulic",
    Lichking = "nzlc",
    LightningLizard = "nltl",
    LightningRevenant = "nrvl",
    Locust = "uloc",
    Lordgarithos = "Hlgr",
    LumberMill = "hlum",
    MagicVault = "nmgv",
    MagnataurDestroyer = "nmgd",
    MagnataurReaver = "nmgr",
    MagnataurWarrior = "nmgw",
    Magtheridon = "Nmag",
    MaidenOfPain = "ndqp",
    Maiev = "Ewrd",
    MakruraDeepseer = "nlds",
    MakruraPooldweller = "nlpd",
    MakruraPrawn = "nlpr",
    MakruraSnapper = "nlsn",
    MakruraTidalLord = "nlkl",
    MakruraTidecaller = "nltc",
    Malfurion = "Emfr",
    Malfurionnostag = "Emns",
    Malganis = "Umal",
    Mammoth = "nmam",
    Mannoroth = "Nman",
    Margoth = "Hmgd",
    Marine = "zmar",
    Marketplace = "nmrk",
    MasterSwordsman = "Hddt",
    Mathog = "omtg",
    MeatWagon = "umtw",
    Medivh = "nmed",
    Medivhmorphed = "nmdm",
    MercenaryCampAshenvale = "nmr5",
    MercenaryCampBarrens = "nmr4",
    MercenaryCampBlackCitadel = "nmrf",
    MercenaryCampCityscape = "nmr8",
    MercenaryCampDalaran = "nmr9",
    MercenaryCampDungeon = "nmra",
    MercenaryCampFelwood = "nmr6",
    MercenaryCampIcecrownGlacier = "nmrd",
    MercenaryCampLordaeronFall = "nmr2",
    MercenaryCampLordaeronSummer = "nmer",
    MercenaryCampLordaeronWinter = "nmr3",
    MercenaryCampNorthrend = "nmr7",
    MercenaryCampOutland = "nmre",
    MercenaryCampSunkenRuins = "nmrc",
    MercenaryCampUnderground = "nmrb",
    MercenaryCampVillage = "nmr0",
    Militia = "hmil",
    Misha = "nmsh",
    Misha1 = "ngzc",
    Misha2 = "ngzd",
    Misha3 = "ngza",
    Misha4 = "ngz4",
    MonsterLure = "nlur",
    MoonWell = "emow",
    MortarTeam = "hmtm",
    MossCoveredGraniteGolem = "nggm",
    MountainGiant = "emtg",
    MountainKing = "Hmkg",
    MudGolem = "ngrk",
    Muradinbronzebeard = "Hmbr",
    MurgulBloodGill = "nmbg",
    MurgulCliffrunner = "nmcf",
    MurgulHut0 = "nmg0",
    MurgulHut1 = "nmg1",
    MurgulMarauder = "nmrv",
    MurgulShadowcaster = "nmsc",
    MurgulSnarecaster = "nmsn",
    MurgulTidewarrior = "nmtw",
    Murgulslave = "nmpe",
    MurlocFlesheater = "nmfs",
    MurlocHuntsman = "nmrr",
    MurlocHut0 = "nmh0",
    MurlocHut1 = "nmh1",
    MurlocHut2 = "nmg2",
    MurlocMutant = "nmmu",
    MurlocNightcrawler = "nmrm",
    MurlocPlaguebearer = "nmpg",
    MurlocTiderunner = "nmrl",
    Murlocsorcerer = "Nmsr",
    Nagacoutl = "nwgs",
    Nagamurgul = "nnmg",
    Nagamyrmidon = "nmyr",
    Nagamyrmidonmorph = "nmys",
    Nagaroyalguard = "nnrg",
    Nagaroyalguardmorph = "nnrs",
    Naisha = "ensh",
    Nazgrel = "onzg",
    Necromancer = "unec",
    Necropolis = "unpl",
    NerubianQueen = "nnwq",
    NerubianSeer = "nnwr",
    NerubianSpiderLord = "nnws",
    NerubianTower = "uzg2",
    NerubianWarrior = "nnwa",
    NerubianWebspinner = "nnwl",
    NerubianZiggurat = "nnzg",
    NetherDragon = "nndr",
    NetherDragonHatchling = "nnht",
    NetherDragonRoost = "ndro",
    NetherDrake = "nndk",
    NightElfBattleship = "ebsh",
    NightElfFrigate = "edes",
    NightElfShipyard = "eshy",
    NightElfTransportShip = "etrs",
    Nightelfassassin = "nssn",
    Nightelfrunner = "enec",
    ObsidianStatue = "uobs",
    OgreLord = "nogl",
    OgreMagi = "nomg",
    OgreMauler = "nogm",
    OgreWarrior = "nogr",
    Oldpitlord = "Npld",
    OrcCart = "ncco",
    OrcFrigate = "odes",
    OrcShipyard = "oshy",
    OrcTransportShip = "obot",
    Orcjuggernaut = "zjug",
    Overlord = "nfov",
    OverlordArachnathid = "nano",
    OwlScoutLevel1 = "nowl",
    OwlScoutLevel2 = "now2",
    OwlScoutLevel3 = "now3",
    Packhorse = "hrdh",
    Paladin = "Hpal",
    Paladinboss1 = "Hpb1",
    Paladinboss2 = "Hpb2",
    Panda4 = "npn4",
    Panda5 = "npn5",
    Panda6 = "npn6",
    Peasant = "hpea",
    Penguin = "npng",
    PenguinWaterborne = "npnw",
    Peon = "opeo",
    Phoenix = "hphx",
    PhoenixEgg = "hpxe",
    Pig = "npig",
    Pigfarm = "npgf",
    PitLord = "Nplh",
    PlagueTreant = "nepl",
    PocketFactoryLevel1 = "nfac",
    PocketFactoryLevel2 = "nfa1",
    PocketFactoryLevel3 = "nfa2",
    PoisonTreant = "nenp",
    PolarBear = "nplb",
    PolarFurbolg = "nfpl",
    PolarFurbolgChampion = "nfpc",
    PolarFurbolgElderShaman = "nfpe",
    PolarFurbolgShaman = "nfps",
    PolarFurbolgTracker = "nfpt",
    PolarFurbolgUrsaWarrior = "nfpu",
    Possessedgromhellscream = "Opgh",
    Powergenerator = "npgr",
    Priest = "hmpr",
    PriestessOfTheMoon = "Emoo",
    PrimalPandaren = "nfrp",
    Purplefountain = "nfnp",
    QueenOfSuffering = "ndqs",
    QuilbeastLevel1 = "nqb1",
    Quillbeast4 = "nqb4",
    Quillboar = "nrzt",
    QuillboarHunter = "nqbh",
    Rabbit = "necr",
    Raccoon = "nrac",
    RagingBearLevel2 = "ngz2",
    RagingQuilbeastLevel3 = "nqb3",
    Raider = "orai",
    Ranger = "Hjnd",
    Rat = "nrat",
    RazormaneBrute = "nrzb",
    RazormaneChieftain = "nrzg",
    RazormaneMedicineMan = "nrzm",
    RazormaneScout = "nrzs",
    RedDragon = "nrwm",
    RedDragonRoost = "ndrr",
    RedDragonWhelp = "nrdk",
    RedDrake = "nrdr",
    ReefElemental = "nrel",
    ReinforcedBurrow = "orbr",
    RenegadeWizard = "nwzg",
    RevenantOfTheDepths = "ndrv",
    RevenantOfTheSeas = "nsrv",
    RevenantOfTheTides = "ntrv",
    Rexxar = "Orex",
    Riderlesshorse = "hhdl",
    Riderlesswyvern = "ownr",
    Rifleman = "hrif",
    RockGolem = "ngst",
    Rogue = "nrog",
    RogueWizard = "nwzr",
    Rokhan = "Orkn",
    Ruinedelvenfishingvillage0 = "nvr0",
    Ruinedelvenfishingvillage1 = "nvr1",
    Ruinedelvenfishingvillage2 = "nvr2",
    RunnerHighElf = "hrrh",
    SacrificialPit = "usap",
    Salamander = "nslr",
    SalamanderHatchling = "nslh",
    SalamanderLord = "nsll",
    SalamanderVizier = "nslv",
    Sammycube = "zsmc",
    Samuro = "Osam",
    Sapper = "ngsp",
    Sasquatch = "nsqt",
    SasquatchOracle = "nsqo",
    Satyr = "nsty",
    SatyrHellcaller = "nsth",
    SatyrShadowdancer = "nsts",
    SatyrShadowdancer2 = "nstf",
    SatyrSoulstealer = "nstl",
    SatyrTrickster = "nsat",
    ScoutTower = "hwtw",
    SeaElemental = "nsel",
    SeaGiant = "nsgn",
    SeaGiantBehemoth = "nsgb",
    SeaGiantHunter = "nsgh",
    SeaTurtle = "ntrs",
    SeaTurtleHatchling = "ntrh",
    SeaWitch = "Nngs",
    Seal = "nsea",
    Searinox = "nser",
    Seawitch2 = "Nswt",
    SentryWard = "oeye",
    SerpentWardLevel1 = "osp1",
    SerpentWardLevel2 = "osp2",
    SerpentWardLevel3 = "osp3",
    Serpentward4 = "osp4",
    Shade = "ushd",
    ShadowHunter = "Oshd",
    ShadowWolfLevel3 = "osw3",
    Shaman = "oshm",
    Shandris = "eshd",
    Sheep = "nshe",
    SheepAmphibious = "nsha",
    SheepWaterborne = "nshw",
    Shimmeringportal = "hprt",
    Shredder = "ngir",
    Shrine = "nshr",
    Shrineofazshara = "nnsa",
    SiegeEngine = "hmtt",
    SiegeEngineBarrage = "hrtt",
    SiegeGolem = "nsgg",
    Sinjostormstout = "Nsjs",
    Siren = "nnsw",
    SkeletalMage = "uskm",
    SkeletalMarksman = "nskm",
    SkeletalOrc = "nsko",
    SkeletalOrcChampion = "nsoc",
    SkeletalOrcGrunt = "nsog",
    SkeletonArcher = "nsca",
    SkeletonArcher2 = "nska",
    SkeletonWarrior = "uske",
    SkeletonWarrior2 = "nsce",
    SkeletonWarrior3 = "nske",
    Skink = "nskk",
    Skyfurytower = "negm",
    Slaughterhouse = "uslh",
    SlaveMaster = "owad",
    SludgeFlinger = "nslf",
    SludgeMinion = "nslm",
    SludgeMonstrosity = "nsln",
    Snapdragon = "nsnp",
    Snapdragonmorph = "nsbs",
    SnarlmaneTheBloodgorger = "ngos",
    SnowyOwl = "nsno",
    Sorceress = "hsor",
    Spawninggrounds = "nnsg",
    Spellbreaker = "hspt",
    Spider = "nspr",
    SpiderCrabBehemoth = "nsc3",
    SpiderCrabLimbripper = "nsc2",
    SpiderCrabShorecrawler = "nscb",
    Spiderling = "nspd",
    SpiritBearLevel3 = "ngz3",
    SpiritHawkLevel3 = "nwe3",
    SpiritLodge = "osld",
    SpiritOfVengeance = "even",
    SpiritPig = "nspp",
    SpiritTower = "uzg1",
    SpiritWalker = "ospw",
    SpiritWalkerEthereal = "ospm",
    SpiritWolfLevel1 = "osw1",
    Spiritbeast = "nsw1",
    Spiritbeast2 = "nsw2",
    Spiritbeast3 = "nsw3",
    Spiritwyvern = "oswy",
    SpittingSpider = "nssp",
    Stag = "nder",
    StasisTrap = "otot",
    StoneFormGargoyle = "ugrm",
    StonemaulMagi = "nogn",
    StonemaulOgre = "nogo",
    StonemaulWarchief = "noga",
    Storm = "npn2",
    StormWyrm = "nstw",
    StormreaverApprentice = "nsra",
    StormreaverHermit = "nsrh",
    StormreaverNecrolyte = "nsrn",
    StormreaverWarlock = "nsrw",
    Stronghold = "ostr",
    Succubus = "ndqn",
    SummonedPrawn = "nlps",
    Summoner = "nnsu",
    Supportcolumn = "nspc",
    Sylvanusbanshee = "uswb",
    Sylvanuswindrunner = "Hvwd",
    Tauren = "otau",
    TaurenChieftain = "Otch",
    TaurenTent = "ntnt",
    TaurenTent2 = "ntt2",
    TaurenTotem = "otto",
    Tavern = "ntav",
    TempleOfTheDamned = "utod",
    Templeoftides = "nntt",
    Tent = "nten",
    Tent2 = "ntn2",
    Tent3 = "ntn3",
    Tentacle = "nfgt",
    Tharifas = "nthr",
    Thecaptain = "hcth",
    Theshoveler = "zshv",
    Thrall = "Othr",
    ThrallUnmounted = "Oths",
    ThunderHawkLevel2 = "nwe2",
    ThunderLizard2 = "nthl",
    Tichondrius = "Utic",
    Tidalguardian = "nntg",
    TimberWolf = "nwlt",
    Tinker = "Nrob",
    Tinker2 = "Ntin",
    TombOfRelics = "utom",
    Tornado = "ntor",
    TownHall = "htow",
    TransportShip = "nbot",
    Treant = "efon",
    TreeOfAges = "etoa",
    TreeOfEternity = "etoe",
    TreeOfLife = "etol",
    TuskarrChieftain = "ntkc",
    TuskarrFighter = "ntkf",
    TuskarrHealer = "ntkh",
    TuskarrSorcerer = "ntks",
    TuskarrSpearman = "ntka",
    TuskarrTrapper = "ntkt",
    TuskarrWarrior = "ntkw",
    Tyrande = "Etyr",
    UnbrokenDarkhunter = "nubk",
    UnbrokenDarkweaver = "nubw",
    UnbrokenRager = "nubr",
    UndeadBattleship = "uubs",
    UndeadCart = "nccu",
    UndeadFrigate = "udes",
    UndeadTransportShip = "ubot",
    Undeadshipyard = "ushp",
    Uther = "Huth",
    Varimathras = "Uvar",
    Vengyr = "Uvng",
    VileTemptress = "ndqt",
    VileTormentor = "ndqv",
    VillagerFemale = "nvlw",
    VillagerMale = "nvil",
    VillagerMale2 = "nvl2",
    Voidwalker = "nvdw",
    Voljin = "ovlj",
    VoodooLounge = "ovln",
    VorpalBlades = "Aimp",
    Vulture = "nvul",
    War2warlock = "nw2w",
    WarGolem = "nwrg",
    WarMill = "ofor",
    WarWagon = "nwar",
    Warden = "Ewar",
    WarriorArachnathid = "nanw",
    WatchTower = "owtw",
    Watcher = "nwat",
    WatcherWard = "nwad",
    WaterElementalLevel1 = "hwat",
    WaterElementalLevel2 = "hwt2",
    WaterElementalLevel3 = "hwt3",
    WateryMinionLevel1 = "ncfs",
    WateryMinionLevel2 = "ntws",
    WateryMinionLevel3 = "nsns",
    WayGate = "nwgt",
    Wendigo = "nwen",
    WendigoShaman = "nwns",
    Wildkin = "nowb",
    WindRider = "owyv",
    WindRiderCage1 = "nwc1",
    WindRiderCage2 = "nwc2",
    WindRiderCage3 = "nwc3",
    WindRiderCage4 = "nwc4",
    Wisp = "ewsp",
    WitchDoctor = "odoc",
    Workshop = "harm",
    Wraith = "ngh2",
    Ydeng = "Y425",
    Zeppelin = "nzep",
    Zergling = "zzrg",
    Ziggurat = "uzig",
    Zombie = "nzom",
    ZombieFemale = "nzof",
    Zoneindicator = "nzin"
}
declare type MapUnit = {
    oldId: string;
    newId: string;
} & Unit;
export declare class UnitContainer extends OEContainer<Unit> {
    game: {
        HERO: Unit;
        uabo: Unit;
        uabc: Unit;
        uaco: Unit;
        Hapm: Unit;
        uarb: Unit;
        Naka: Unit;
        nalb: Unit;
        Nalc: Unit;
        Nalm: Unit;
        Nal2: Unit;
        Nal3: Unit;
        uaod: Unit;
        eate: Unit;
        halt: Unit;
        oalt: Unit;
        nnad: Unit;
        oang: Unit;
        nahy: Unit;
        eaoe: Unit;
        eaom: Unit;
        eaow: Unit;
        eden: Unit;
        etrp: Unit;
        nsqa: Unit;
        nwna: Unit;
        Hant: Unit;
        Uanb: Unit;
        nwiz: Unit;
        nane: Unit;
        hars: Unit;
        hatw: Unit;
        hvlt: Unit;
        haro: Unit;
        earc: Unit;
        Uwar: Unit;
        Hamg: Unit;
        Hjas: Unit;
        Hart: Unit;
        Harf: Unit;
        nass: Unit;
        espv: Unit;
        ubdd: Unit;
        ubdr: Unit;
        obai: Unit;
        Ubal: Unit;
        nban: Unit;
        nbld: Unit;
        uban: Unit;
        nanb: Unit;
        nanm: Unit;
        hbar: Unit;
        obar: Unit;
        nbwd: Unit;
        otbr: Unit;
        narg: Unit;
        nbsp: Unit;
        ngz1: Unit;
        obea: Unit;
        Nbst: Unit;
        nelb: Unit;
        nowk: Unit;
        otbk: Unit;
        nbse: Unit;
        nbsw: Unit;
        unp2: Unit;
        nbwm: Unit;
        ndrk: Unit;
        nbdr: Unit;
        nbdk: Unit;
        nspb: Unit;
        Nbbc: Unit;
        hbla: Unit;
        Obla: Unit;
        Hblm: Unit;
        nwzw: Unit;
        nbee: Unit;
        nbel: Unit;
        hbew: Unit;
        nhew: Unit;
        nfgb: Unit;
        nbfl: Unit;
        nadr: Unit;
        ndru: Unit;
        nadw: Unit;
        nbda: Unit;
        nbdm: Unit;
        nbdo: Unit;
        nbds: Unit;
        nbdw: Unit;
        nadk: Unit;
        ubon: Unit;
        nbsm: Unit;
        nbt1: Unit;
        nbt2: Unit;
        Npbm: Unit;
        nbrg: Unit;
        nbzd: Unit;
        ndrz: Unit;
        nbzw: Unit;
        nbzk: Unit;
        nsbm: Unit;
        nskf: Unit;
        otrb: Unit;
        nbnb: Unit;
        ucsB: Unit;
        ucsC: Unit;
        ucrm: Unit;
        Ocbh: Unit;
        Otcc: Unit;
        Ocb2: Unit;
        nhyc: Unit;
        hctw: Unit;
        ucs1: Unit;
        ucs2: Unit;
        ucs3: Unit;
        hcas: Unit;
        Ecen: Unit;
        ncea: Unit;
        ncef: Unit;
        ncer: Unit;
        ncim: Unit;
        ncif: Unit;
        ncnk: Unit;
        ncen: Unit;
        ncks: Unit;
        nckf: Unit;
        ncnt: Unit;
        nct1: Unit;
        nct2: Unit;
        nchg: Unit;
        nckb: Unit;
        ocbw: Unit;
        ncpn: Unit;
        zcso: Unit;
        nchw: Unit;
        owar: Unit;
        nchr: Unit;
        nchp: Unit;
        nech: Unit;
        nvlk: Unit;
        nvk2: Unit;
        echm: Unit;
        edos: Unit;
        ncop: Unit;
        ncp3: Unit;
        ncp2: Unit;
        ncb0: Unit;
        ncb1: Unit;
        ncba: Unit;
        ncbb: Unit;
        ncbc: Unit;
        ncbd: Unit;
        ncbe: Unit;
        ncbf: Unit;
        ncb2: Unit;
        ncb3: Unit;
        ncb4: Unit;
        ncb5: Unit;
        ncb6: Unit;
        ncb7: Unit;
        ncb8: Unit;
        ncb9: Unit;
        ncg1: Unit;
        ncg2: Unit;
        ncg3: Unit;
        ncgb: Unit;
        ndt1: Unit;
        ndt2: Unit;
        nnfm: Unit;
        nenc: Unit;
        ncaw: Unit;
        ncap: Unit;
        ncmw: Unit;
        ncta: Unit;
        ncte: Unit;
        nctl: Unit;
        ncrb: Unit;
        usep: Unit;
        ucry: Unit;
        Ucrl: Unit;
        nanc: Unit;
        Hdgo: Unit;
        ndgt: Unit;
        ndmu: Unit;
        ndrj: Unit;
        ndr2: Unit;
        Nbrn: Unit;
        ndtr: Unit;
        ndtb: Unit;
        ndth: Unit;
        ndtp: Unit;
        ndtt: Unit;
        ndtw: Unit;
        nwzd: Unit;
        ndke: Unit;
        ndkw: Unit;
        Udea: Unit;
        Uart: Unit;
        Udef: Unit;
        nrvd: Unit;
        ntt1: Unit;
        ntx2: Unit;
        nhdc: Unit;
        nlrv: Unit;
        nggd: Unit;
        ndfl: Unit;
        ocat: Unit;
        ncat: Unit;
        Edem: Unit;
        Edmm: Unit;
        Edef: Unit;
        Edmf: Unit;
        ndmg: Unit;
        ubsp: Unit;
        Udth: Unit;
        nccd: Unit;
        nwwd: Unit;
        nmdr: Unit;
        nqb2: Unit;
        nwld: Unit;
        osw2: Unit;
        uplg: Unit;
        ndog: Unit;
        nbal: Unit;
        nba2: Unit;
        ndch: Unit;
        ndrd: Unit;
        ndrm: Unit;
        ndrf: Unit;
        ndrh: Unit;
        ndh0: Unit;
        ndh1: Unit;
        ndrp: Unit;
        ndrs: Unit;
        ndrt: Unit;
        ndrn: Unit;
        ndrw: Unit;
        ndh2: Unit;
        ndrl: Unit;
        ndsa: Unit;
        ndh4: Unit;
        ndh3: Unit;
        nws1: Unit;
        ntrd: Unit;
        ndrb: Unit;
        hdhw: Unit;
        odkt: Unit;
        Udre: Unit;
        Odrt: Unit;
        edcm: Unit;
        edoc: Unit;
        edot: Unit;
        edtm: Unit;
        edry: Unit;
        ndwm: Unit;
        nccr: Unit;
        npn3: Unit;
        negf: Unit;
        nehy: Unit;
        njga: Unit;
        nsqe: Unit;
        nvde: Unit;
        nwnr: Unit;
        nefm: Unit;
        nef0: Unit;
        nef1: Unit;
        nef2: Unit;
        nef3: Unit;
        nef4: Unit;
        nef5: Unit;
        nef6: Unit;
        nef7: Unit;
        nfv0: Unit;
        nfv1: Unit;
        nfv2: Unit;
        nfv3: Unit;
        nfv4: Unit;
        negt: Unit;
        nemi: Unit;
        net1: Unit;
        net2: Unit;
        nenf: Unit;
        negz: Unit;
        nele: Unit;
        njgb: Unit;
        nowe: Unit;
        egol: Unit;
        nerd: Unit;
        ners: Unit;
        nerw: Unit;
        Uear: Unit;
        Eevi: Unit;
        Eevm: Unit;
        Usyl: Unit;
        nfod: Unit;
        nfot: Unit;
        nfor: Unit;
        efdr: Unit;
        nhfp: Unit;
        Ofar: Unit;
        Ofth: Unit;
        hhou: Unit;
        npfl: Unit;
        nfbr: Unit;
        npfm: Unit;
        nfel: Unit;
        nfgu: Unit;
        npn1: Unit;
        nrvf: Unit;
        Nfir: Unit;
        nft1: Unit;
        nft2: Unit;
        nfgl: Unit;
        hgyr: Unit;
        nshf: Unit;
        hfoo: Unit;
        nspg: Unit;
        nftr: Unit;
        nftb: Unit;
        nfsh: Unit;
        nfh0: Unit;
        nfh1: Unit;
        nfsp: Unit;
        nftt: Unit;
        nftk: Unit;
        nfgo: Unit;
        ofrt: Unit;
        nfoh: Unit;
        nmoo: Unit;
        nfro: Unit;
        nrvs: Unit;
        nwwf: Unit;
        ufro: Unit;
        nfrm: Unit;
        nfrt: Unit;
        nfrl: Unit;
        nfrg: Unit;
        nfre: Unit;
        nfr2: Unit;
        nfr1: Unit;
        nfrs: Unit;
        nfrb: Unit;
        nfra: Unit;
        Efur: Unit;
        ntrg: Unit;
        ugar: Unit;
        ogrk: Unit;
        ngob: Unit;
        ngh1: Unit;
        Hgam: Unit;
        ugho: Unit;
        nwwg: Unit;
        nplg: Unit;
        ntrt: Unit;
        nskg: Unit;
        nsgt: Unit;
        nwlg: Unit;
        ebal: Unit;
        ngno: Unit;
        ngns: Unit;
        ngnb: Unit;
        ngnh: Unit;
        ngt2: Unit;
        ngnv: Unit;
        ngna: Unit;
        ngnw: Unit;
        ngow: Unit;
        ngad: Unit;
        nglm: Unit;
        ngme: Unit;
        nshp: Unit;
        ngbl: Unit;
        ngol: Unit;
        ngwr: Unit;
        nggr: Unit;
        ugrv: Unit;
        ogre: Unit;
        ndr3: Unit;
        nvdg: Unit;
        ngrd: Unit;
        ndrg: Unit;
        ngrw: Unit;
        ngdk: Unit;
        Ogrh: Unit;
        ogru: Unit;
        hgra: Unit;
        hgry: Unit;
        ngog: Unit;
        hgtw: Unit;
        nggg: Unit;
        Ogld: Unit;
        Hhkl: Unit;
        unp1: Unit;
        nhns: Unit;
        nhn2: Unit;
        nhrq: Unit;
        nhrr: Unit;
        nhar: Unit;
        nhrh: Unit;
        nhrw: Unit;
        ugol: Unit;
        nwe1: Unit;
        ohun: Unit;
        ohwd: Unit;
        nhhr: Unit;
        nhmc: Unit;
        Haah: Unit;
        Hssa: Unit;
        nheb: Unit;
        nhea: Unit;
        nhef: Unit;
        nhem: Unit;
        hhes: Unit;
        ehip: Unit;
        ehpr: Unit;
        nhcn: Unit;
        hbsh: Unit;
        hdes: Unit;
        hshy: Unit;
        hbot: Unit;
        edob: Unit;
        esen: Unit;
        nhyd: Unit;
        nhyh: Unit;
        zhyd: Unit;
        nhym: Unit;
        nrvi: Unit;
        nitr: Unit;
        nits: Unit;
        nith: Unit;
        nth1: Unit;
        nth0: Unit;
        nitp: Unit;
        nitt: Unit;
        nitw: Unit;
        nico: Unit;
        nmit: Unit;
        nitb: Unit;
        Eill: Unit;
        Eidm: Unit;
        Eilm: Unit;
        eilw: Unit;
        ngni: Unit;
        ninf: Unit;
        ninc: Unit;
        nina: Unit;
        ninm: Unit;
        njks: Unit;
        Hjai: Unit;
        ojgn: Unit;
        njg1: Unit;
        Hkal: Unit;
        hkee: Unit;
        Ekee: Unit;
        Ekce: Unit;
        Ekgg: Unit;
        uktg: Unit;
        Uktl: Unit;
        Uclc: Unit;
        uktn: Unit;
        Nklj: Unit;
        Nkjx: Unit;
        hkni: Unit;
        nkob: Unit;
        nkog: Unit;
        nkol: Unit;
        nkot: Unit;
        okod: Unit;
        oosc: Unit;
        Hvsh: Unit;
        nlv1: Unit;
        nlv2: Unit;
        nlv3: Unit;
        ndr1: Unit;
        nvdl: Unit;
        Ulic: Unit;
        nzlc: Unit;
        nltl: Unit;
        nrvl: Unit;
        uloc: Unit;
        Hlgr: Unit;
        hlum: Unit;
        nmgv: Unit;
        nmgd: Unit;
        nmgr: Unit;
        nmgw: Unit;
        Nmag: Unit;
        ndqp: Unit;
        Ewrd: Unit;
        nlds: Unit;
        nlpd: Unit;
        nlpr: Unit;
        nlsn: Unit;
        nlkl: Unit;
        nltc: Unit;
        Emfr: Unit;
        Emns: Unit;
        Umal: Unit;
        nmam: Unit;
        Nman: Unit;
        Hmgd: Unit;
        zmar: Unit;
        nmrk: Unit;
        Hddt: Unit;
        omtg: Unit;
        umtw: Unit;
        nmed: Unit;
        nmdm: Unit;
        nmr5: Unit;
        nmr4: Unit;
        nmrf: Unit;
        nmr8: Unit;
        nmr9: Unit;
        nmra: Unit;
        nmr6: Unit;
        nmrd: Unit;
        nmr2: Unit;
        nmer: Unit;
        nmr3: Unit;
        nmr7: Unit;
        nmre: Unit;
        nmrc: Unit;
        nmrb: Unit;
        nmr0: Unit;
        hmil: Unit;
        nmsh: Unit;
        ngzc: Unit;
        ngzd: Unit;
        ngza: Unit;
        ngz4: Unit;
        nlur: Unit;
        emow: Unit;
        hmtm: Unit;
        nggm: Unit;
        emtg: Unit;
        Hmkg: Unit;
        ngrk: Unit;
        Hmbr: Unit;
        nmbg: Unit;
        nmcf: Unit;
        nmg0: Unit;
        nmg1: Unit;
        nmrv: Unit;
        nmsc: Unit;
        nmsn: Unit;
        nmtw: Unit;
        nmpe: Unit;
        nmfs: Unit;
        nmrr: Unit;
        nmh0: Unit;
        nmh1: Unit;
        nmg2: Unit;
        nmmu: Unit;
        nmrm: Unit;
        nmpg: Unit;
        nmrl: Unit;
        Nmsr: Unit;
        nwgs: Unit;
        nnmg: Unit;
        nmyr: Unit;
        nmys: Unit;
        nnrg: Unit;
        nnrs: Unit;
        ensh: Unit;
        onzg: Unit;
        unec: Unit;
        unpl: Unit;
        nnwq: Unit;
        nnwr: Unit;
        nnws: Unit;
        uzg2: Unit;
        nnwa: Unit;
        nnwl: Unit;
        nnzg: Unit;
        nndr: Unit;
        nnht: Unit;
        ndro: Unit;
        nndk: Unit;
        ebsh: Unit;
        edes: Unit;
        eshy: Unit;
        etrs: Unit;
        nssn: Unit;
        enec: Unit;
        uobs: Unit;
        nogl: Unit;
        nomg: Unit;
        nogm: Unit;
        nogr: Unit;
        Npld: Unit;
        ncco: Unit;
        odes: Unit;
        oshy: Unit;
        obot: Unit;
        zjug: Unit;
        nfov: Unit;
        nano: Unit;
        nowl: Unit;
        now2: Unit;
        now3: Unit;
        hrdh: Unit;
        Hpal: Unit;
        Hpb1: Unit;
        Hpb2: Unit;
        npn4: Unit;
        npn5: Unit;
        npn6: Unit;
        hpea: Unit;
        npng: Unit;
        npnw: Unit;
        opeo: Unit;
        hphx: Unit;
        hpxe: Unit;
        npig: Unit;
        npgf: Unit;
        Nplh: Unit;
        nepl: Unit;
        nfac: Unit;
        nfa1: Unit;
        nfa2: Unit;
        nenp: Unit;
        nplb: Unit;
        nfpl: Unit;
        nfpc: Unit;
        nfpe: Unit;
        nfps: Unit;
        nfpt: Unit;
        nfpu: Unit;
        Opgh: Unit;
        npgr: Unit;
        hmpr: Unit;
        Emoo: Unit;
        nfrp: Unit;
        nfnp: Unit;
        ndqs: Unit;
        nqb1: Unit;
        nqb4: Unit;
        nrzt: Unit;
        nqbh: Unit;
        necr: Unit;
        nrac: Unit;
        ngz2: Unit;
        nqb3: Unit;
        orai: Unit;
        Hjnd: Unit;
        nrat: Unit;
        nrzb: Unit;
        nrzg: Unit;
        nrzm: Unit;
        nrzs: Unit;
        nrwm: Unit;
        ndrr: Unit;
        nrdk: Unit;
        nrdr: Unit;
        nrel: Unit;
        orbr: Unit;
        nwzg: Unit;
        ndrv: Unit;
        nsrv: Unit;
        ntrv: Unit;
        Orex: Unit;
        hhdl: Unit;
        ownr: Unit;
        hrif: Unit;
        ngst: Unit;
        nrog: Unit;
        nwzr: Unit;
        Orkn: Unit;
        nvr0: Unit;
        nvr1: Unit;
        nvr2: Unit;
        hrrh: Unit;
        usap: Unit;
        nslr: Unit;
        nslh: Unit;
        nsll: Unit;
        nslv: Unit;
        zsmc: Unit;
        Osam: Unit;
        ngsp: Unit;
        nsqt: Unit;
        nsqo: Unit;
        nsty: Unit;
        nsth: Unit;
        nsts: Unit;
        nstf: Unit;
        nstl: Unit;
        nsat: Unit;
        hwtw: Unit;
        nsel: Unit;
        nsgn: Unit;
        nsgb: Unit;
        nsgh: Unit;
        ntrs: Unit;
        ntrh: Unit;
        Nngs: Unit;
        nsea: Unit;
        nser: Unit;
        Nswt: Unit;
        oeye: Unit;
        osp1: Unit;
        osp2: Unit;
        osp3: Unit;
        osp4: Unit;
        ushd: Unit;
        Oshd: Unit;
        osw3: Unit;
        oshm: Unit;
        eshd: Unit;
        nshe: Unit;
        nsha: Unit;
        nshw: Unit;
        hprt: Unit;
        ngir: Unit;
        nshr: Unit;
        nnsa: Unit;
        hmtt: Unit;
        hrtt: Unit;
        nsgg: Unit;
        Nsjs: Unit;
        nnsw: Unit;
        uskm: Unit;
        nskm: Unit;
        nsko: Unit;
        nsoc: Unit;
        nsog: Unit;
        nsca: Unit;
        nska: Unit;
        uske: Unit;
        nsce: Unit;
        nske: Unit;
        nskk: Unit;
        negm: Unit;
        uslh: Unit;
        owad: Unit;
        nslf: Unit;
        nslm: Unit;
        nsln: Unit;
        nsnp: Unit;
        nsbs: Unit;
        ngos: Unit;
        nsno: Unit;
        hsor: Unit;
        nnsg: Unit;
        hspt: Unit;
        nspr: Unit;
        nsc3: Unit;
        nsc2: Unit;
        nscb: Unit;
        nspd: Unit;
        ngz3: Unit;
        nwe3: Unit;
        osld: Unit;
        even: Unit;
        nspp: Unit;
        uzg1: Unit;
        ospw: Unit;
        ospm: Unit;
        osw1: Unit;
        nsw1: Unit;
        nsw2: Unit;
        nsw3: Unit;
        oswy: Unit;
        nssp: Unit;
        nder: Unit;
        otot: Unit;
        ugrm: Unit;
        nogn: Unit;
        nogo: Unit;
        noga: Unit;
        npn2: Unit;
        nstw: Unit;
        nsra: Unit;
        nsrh: Unit;
        nsrn: Unit;
        nsrw: Unit;
        ostr: Unit;
        ndqn: Unit;
        nlps: Unit;
        nnsu: Unit;
        nspc: Unit;
        uswb: Unit;
        Hvwd: Unit;
        otau: Unit;
        Otch: Unit;
        ntnt: Unit;
        ntt2: Unit;
        otto: Unit;
        ntav: Unit;
        utod: Unit;
        nntt: Unit;
        nten: Unit;
        ntn2: Unit;
        ntn3: Unit;
        nfgt: Unit;
        nthr: Unit;
        hcth: Unit;
        zshv: Unit;
        Othr: Unit;
        Oths: Unit;
        nwe2: Unit;
        nthl: Unit;
        Utic: Unit;
        nntg: Unit;
        nwlt: Unit;
        Nrob: Unit;
        Ntin: Unit;
        utom: Unit;
        ntor: Unit;
        htow: Unit;
        nbot: Unit;
        efon: Unit;
        etoa: Unit;
        etoe: Unit;
        etol: Unit;
        ntkc: Unit;
        ntkf: Unit;
        ntkh: Unit;
        ntks: Unit;
        ntka: Unit;
        ntkt: Unit;
        ntkw: Unit;
        Etyr: Unit;
        nubk: Unit;
        nubw: Unit;
        nubr: Unit;
        uubs: Unit;
        nccu: Unit;
        udes: Unit;
        ubot: Unit;
        ushp: Unit;
        Huth: Unit;
        Uvar: Unit;
        Uvng: Unit;
        ndqt: Unit;
        ndqv: Unit;
        nvlw: Unit;
        nvil: Unit;
        nvl2: Unit;
        nvdw: Unit;
        ovlj: Unit;
        ovln: Unit;
        Aimp: Unit;
        nvul: Unit;
        nw2w: Unit;
        nwrg: Unit;
        ofor: Unit;
        nwar: Unit;
        Ewar: Unit;
        nanw: Unit;
        owtw: Unit;
        nwat: Unit;
        nwad: Unit;
        hwat: Unit;
        hwt2: Unit;
        hwt3: Unit;
        ncfs: Unit;
        ntws: Unit;
        nsns: Unit;
        nwgt: Unit;
        nwen: Unit;
        nwns: Unit;
        nowb: Unit;
        owyv: Unit;
        nwc1: Unit;
        nwc2: Unit;
        nwc3: Unit;
        nwc4: Unit;
        ewsp: Unit;
        odoc: Unit;
        harm: Unit;
        ngh2: Unit;
        Y425: Unit;
        nzep: Unit;
        zzrg: Unit;
        uzig: Unit;
        nzom: Unit;
        nzof: Unit;
        nzin: Unit;
    };
    map: {
        [key: string]: MapUnit;
    };
    loadModification(object: MapUnit, modification: Modification): void;
}
export {};
