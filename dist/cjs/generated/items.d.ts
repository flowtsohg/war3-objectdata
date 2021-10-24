import Modification from 'mdx-m3-viewer/dist/cjs/parsers/w3x/w3u/modification';
import { OEContainer } from '../container';
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
export declare enum Items {
    AlleriasFluteOfAccuracy = "afac",
    AmuletOfRecall = "amrc",
    AmuletOfSpellShield = "spsh",
    AmuletOfTheWild = "wild",
    AnAltar = "TALT",
    AncestralStaff = "axas",
    AncientFigurine = "anfg",
    AncientJanggoOfEndurance = "ajen",
    AnkhOfReincarnation = "ankh",
    AntiMagicPotion = "pams",
    ArcaneScroll = "arsc",
    ArcaniteShield = "arsh",
    AssassinsBlade = "asbl",
    Bash = "AIbx",
    BattleStandard = "btst",
    BeltOfGiantStrengthPlus6 = "bgst",
    Berserk = "AIxk",
    BladebaneArmor = "blba",
    BlightPlacement = "Ablp",
    BlinkItemVersion = "AIbk",
    BloodKey = "kybl",
    BloodfeathersHeart = "bfhr",
    BlueDrakeEgg = "fgbd",
    BookOfTheDead = "fgsk",
    BootsOfQuelThalasPlus6 = "belv",
    BootsOfSpeed = "bspd",
    BracerOfAgility = "brag",
    BuildTinyAltarOfKings = "AIbh",
    BuildTinyBarracks = "AIbs",
    BuildTinyBlacksmith = "AIbb",
    BuildTinyCastle = "AIbl",
    BuildTinyFarm = "AIbf",
    BuildTinyGreatHall = "AIbg",
    BuildTinyLumberMill = "AIbr",
    BuildTinyScoutTower = "AIbt",
    BundleOfLumber = "lmbr",
    BundleOfLumber2 = "AIlu",
    CastleOrFortressOrTreeOfEternityOrBlackCitadel = "TWN3",
    CelestialOrbOfSouls = "cosl",
    ChainLightning = "AIcl",
    ChangeTimeOfDay = "AIct",
    Cheese = "ches",
    ChestOfGold = "AIgo",
    CircletOfNobility = "cnob",
    ClarityPotion = "pclr",
    ClarityPotion2 = "AIpr",
    ClawsOfAttackPlus12 = "ratc",
    ClawsOfAttackPlus15 = "ratf",
    ClawsOfAttackPlus3 = "rat3",
    ClawsOfAttackPlus5 = "rat6",
    ClawsOfAttackPlus9 = "rat9",
    CloakOfFlames = "clfm",
    CloakOfShadows = "clsd",
    ClockworkPenguin = "stpg",
    CloudOfFog = "AIfg",
    ControlMagic = "AIcm",
    CriticalStrike = "AIcs",
    CrownOfKingsPlus5 = "ckng",
    CrownOfTheDeathlord = "crdt",
    CrystalBall = "crys",
    Cyclone = "AIcy",
    DarkSummoning = "AUds",
    DeathPact = "AIdp",
    DefendPassiveDefense = "AIdd",
    DemonicFigurine = "fgdg",
    DiamondOfSummoning = "dsum",
    DrektharsSpellbook = "dtsb",
    DruidPouch = "drph",
    DustOfAppearance = "dust",
    DustOfAppearance2 = "AItb",
    EmptyVial = "bzbe",
    EnchantedGemstone = "engs",
    EnchantedShield = "shen",
    EnchantedVial = "envl",
    EngravedScale = "engr",
    EssenceOfAszune = "esaz",
    Evasion = "AIev",
    FingerOfDeath = "AIfz",
    FirehandGauntlets = "frhg",
    FlareGun = "fgun",
    FlareGun2 = "AIfa",
    FlyingCarpet = "AIfc",
    FrostWyrmSkullShield = "fwss",
    Frostguard = "frgd",
    FullVial = "bzbf",
    GauntletsOfOgreStrengthPlus3 = "rst1",
    GemFragment = "gmfr",
    GemOfTrueSeeing = "gemt",
    GenericItemRejuvEffect = "AIp1",
    GenericItemRejuvEffect2 = "AIp2",
    GenericItemRejuvEffect3 = "AIp3",
    GenericItemRejuvEffect4 = "AIp4",
    GenericItemRejuvEffect5 = "AIp5",
    GenericItemRejuvEffect6 = "AIp6",
    GerardsLostLedger = "ledg",
    GhostKey = "kygh",
    GlovesOfHaste = "gcel",
    GlovesOfSpellMastery = "gvsm",
    GlyphOfFortification = "gfor",
    GlyphOfOmniscience = "gomn",
    GlyphOfPurification = "gopr",
    GlyphOfUltravision = "guvi",
    GoblinLandMines = "gobm",
    GoblinNightScope = "tels",
    GoldCoins = "gold",
    GreaterReplenishmentPotion = "rej4",
    GreaterRuneResurrection = "APrr",
    GreaterScrollOfReplenishment = "rej6",
    GrimoireOfSouls = "grsl",
    HealingSalve = "hslv",
    HealingSalve2 = "AIrl",
    HealingWard = "AIhw",
    HealingWards = "whwd",
    HealthStone = "hlst",
    HeartOfAszune = "azhr",
    HelmOfBattlethirst = "hbth",
    HelmOfValor = "hval",
    HolyLight = "AIhl",
    HoodOfCunning = "hcun",
    HornOfCenarius = "cnhn",
    HornOfTheClouds = "sfog",
    HumanFlag = "flag",
    IceShard = "shar",
    IdolOfTheWild = "iotw",
    InfernoStone = "infs",
    IronwoodBranch = "iwbr",
    ItemAgilityGain = "AIam",
    ItemAgilityGain2 = "AIgm",
    ItemAnimateDead = "AIan",
    ItemAntiMagicShell = "AIxs",
    ItemAntiMagicShell2 = "Aami",
    ItemAreaDetection = "AIta",
    ItemAreaHealOrManaRegain = "AIra",
    ItemAreaHealing = "AIha",
    ItemAreaHealing2 = "AIhb",
    ItemAreaManaRegain = "AImr",
    ItemAreaTreeOrWallDamage = "AIdm",
    ItemArmorBonus = "AIde",
    ItemArmorBonus2 = "AId1",
    ItemArmorBonus3 = "AId5",
    ItemArmorBonus4 = "AId8",
    ItemArmorBonus5 = "AId7",
    ItemArmorBonus6 = "AId0",
    ItemArmorBonus7 = "AId2",
    ItemArmorBonus8 = "AId3",
    ItemArmorBonus9 = "AId4",
    ItemAttackBlackArrowBonus = "AIdf",
    ItemAttackCorruptionBonus = "AIcb",
    ItemAttackFireBonus = "AIfb",
    ItemAttackFireBonus2 = "AIgd",
    ItemAttackFrostBonus = "AIob",
    ItemAttackHealReductionBonus = "AIf2",
    ItemAttackLightningBonus = "AIlb",
    ItemAttackLightningBonusNew = "AIll",
    ItemAttackPoisonBonus = "AIpb",
    ItemAttackSlowBonus = "AIsb",
    ItemAttackSpeedBonus = "AIas",
    ItemAttackSpeedBonus2 = "AIsx",
    ItemAttackSpeedBonus3 = "AIs2",
    ItemBlackArrow = "ANbs",
    ItemBlueDragonspawnOverseerSummon = "AIff",
    ItemBlueDrakeSummon = "AIfd",
    ItemCaptureTheFlag = "AIfl",
    ItemCaptureTheFlag2 = "AIfm",
    ItemCaptureTheFlag3 = "AIfn",
    ItemCaptureTheFlag4 = "AIfo",
    ItemCaptureTheFlag5 = "AIfe",
    ItemChainDispel = "AIdc",
    ItemCommand = "AIco",
    ItemDamageBonus = "AItx",
    ItemDamageBonus2 = "AIt6",
    ItemDamageBonus3 = "AIt9",
    ItemDamageBonus4 = "AItc",
    ItemDamageBonus5 = "AItf",
    ItemDamageBonus6 = "AItg",
    ItemDamageBonus7 = "AIth",
    ItemDamageBonus8 = "AIti",
    ItemDamageBonus9 = "AItj",
    ItemDispel = "AIdi",
    ItemDispel2 = "AIds",
    ItemDivineShield = "AIdv",
    ItemDoomGuardSummon = "AIfu",
    ItemExperienceGain = "AIem",
    ItemExperienceGain2 = "AIe2",
    ItemFelStalkerSummon = "AIfh",
    ItemFirebolt = "AIfi",
    ItemFreezeDamageBonus = "AIzb",
    ItemFurbolgTrackerSummon = "AIut",
    ItemHealOrManaRegain = "AIre",
    ItemHealing = "AIhe",
    ItemHealing2 = "AIh1",
    ItemHealing3 = "AIh2",
    ItemHealing4 = "AIhx",
    ItemHeroStatBonus = "AIi5",
    ItemHeroStatBonus2 = "AIa6",
    ItemHeroStatBonus3 = "AIaz",
    ItemHeroStatBonus4 = "AIi6",
    ItemHeroStatBonus5 = "AIx2",
    ItemHeroStatBonus6 = "AIx5",
    ItemHeroStatBonus7 = "AIa1",
    ItemHeroStatBonus8 = "AIx1",
    ItemHeroStatBonus9 = "AIs1",
    ItemIceRevenantSummon = "AIir",
    ItemIllusions = "AIil",
    ItemImmolation = "AIcf",
    ItemIntOrAgiOrStrGain = "AIxm",
    ItemIntelligenceGain = "AIim",
    ItemIntelligenceGain2 = "AItm",
    ItemLevelGain = "AIlm",
    ItemLifeBonus = "AIl2",
    ItemLifeBonus2 = "AIml",
    ItemLifeBonus3 = "AIlz",
    ItemLifeBonus4 = "AIlf",
    ItemLifeBonus5 = "AIl1",
    ItemLifeRegeneration = "Arel",
    ItemLifeRegeneration2 = "Arll",
    ItemLifeSteal = "AIva",
    ItemManaBonus = "AImm",
    ItemManaBonus100 = "AImz",
    ItemManaBonus2 = "AImb",
    ItemManaBonus200 = "AI2m",
    ItemManaBonus3 = "AIbm",
    ItemManaBonus75 = "AImv",
    ItemManaRegain = "AIma",
    ItemManaRegain2 = "AIm1",
    ItemManaRegain3 = "AIm2",
    ItemManaRegeneration = "AIrm",
    ItemMoveSpeedBonus = "AIms",
    ItemOrcishBattleStandard = "AIfx",
    ItemPermanentDamageGainItemAttackDamageGain = "AIaa",
    ItemPermanentLifeGain = "AImh",
    ItemPermanentLifeGain2 = "AIpx",
    ItemPermanentLifeGainItemLifeGain = "AImi",
    ItemPlaceGoblinLandMine = "AIpm",
    ItemPurge = "AIpg",
    ItemPurge2 = "AIps",
    ItemPurge3 = "AIlp",
    ItemRecall = "AIrt",
    ItemReincarnation = "AIrc",
    ItemResurrection = "AIrs",
    ItemResurrection2 = "AIrx",
    ItemRevealEntireMap = "AIrv",
    ItemRockGolemSummon = "AIfr",
    ItemSightRangeBonus = "AIsi",
    ItemSilence = "AIse",
    ItemSkeletonSummon = "AIfs",
    ItemSlow = "AIos",
    ItemSoulPossession = "Asou",
    ItemSoulTheft = "AIso",
    ItemStrengthGain = "AIsm",
    ItemStrengthGain2 = "AInm",
    ItemTemporaryAreaArmorBonus = "AIda",
    ItemTemporaryAreaArmorBonus2 = "AIdb",
    ItemTemporaryInvisibility = "AIvi",
    ItemTemporaryInvisibility2 = "AIv1",
    ItemTemporaryInvisibility3 = "AIv2",
    ItemTemporaryInvulnerability = "AIvu",
    ItemTemporaryInvulnerability2 = "AIvl",
    ItemTemporaryInvulnerability3 = "AIvg",
    ItemTemporarySpeedBonus = "AIsp",
    ItemTownPortal = "AItp",
    ItemTransmute = "AIts",
    ItemUrsaWarriorSummon = "AIuw",
    ItemWeb = "AIwb",
    IvoryTower = "tsct",
    JadeRing = "jdrn",
    KeepOrStrongholdOrTreeOfAgesOrHallsOfTheDead = "TWN2",
    KegOfAle = "kgal",
    KegOfThunderwater = "dkfw",
    KelensDaggerOfEscape = "desc",
    KeyOfThreeMoons = "k3m3",
    KhadgarsGemOfHealth = "rhth",
    KhadgarsPipeOfInsight = "kpin",
    Killmaim = "klmm",
    LeastHealing = "AIh3",
    LegionDoomHorn = "lgdh",
    LesserClarityPotion = "plcl",
    LesserClarityPotion2 = "AIpl",
    LesserReplenishmentPotion = "rej2",
    LesserRuneResurrection = "APrl",
    LesserScrollOfReplenishment = "rej5",
    LightningShield = "AIls",
    LionsRing = "lnrn",
    MagicKeyChain = "mgtk",
    ManaStone = "mnst",
    MantleOfIntelligencePlus3 = "rin1",
    ManualOfHealth = "manh",
    MaskOfDeath = "modt",
    MaulOfStrength = "mlst",
    MechanicalCritter = "mcri",
    MechanicalCritter2 = "Amec",
    MedallionOfCourage = "mcou",
    MedusaPebble = "mdpb",
    MeleeColdDamageBonus = "AIft",
    MeleeFireDamageBonus = "AIfw",
    MeleeLightningDamageBonus = "AIlx",
    Mindstaff = "mnsf",
    MinorReplenishmentPotion = "rej1",
    MogrinsReport = "mort",
    MonsterLure = "lure",
    MonsterLure2 = "AImo",
    MoonKey = "kymn",
    Mooncrystal = "k3m1",
    Moonstone = "moon",
    NecklaceOfSpellImmunity = "nspi",
    NightElfFlag = "nflg",
    NoteToJainaProudmoore = "jpnt",
    OrbOfCorruption = "ocor",
    OrbOfDarkness = "odef",
    OrbOfFire = "ofir",
    OrbOfFire2 = "ofr2",
    OrbOfFrost = "ofro",
    OrbOfKiljaeden = "gldo",
    OrbOfLightning = "oli2",
    OrbOfLightning2 = "olig",
    OrbOfSlow = "oslo",
    OrbOfVenom = "oven",
    OrcFlag = "oflg",
    PartialKeyOfTheThreeMoons = "k3m2",
    PendantOfEnergy = "penr",
    PendantOfMana = "pmna",
    PenguinSqueek = "AIpz",
    PeriaptOfVitality = "prvt",
    PhatLewt = "phlt",
    PotionOfDivinity = "pdi2",
    PotionOfDivinity2 = "pdiv",
    PotionOfGreaterHealing = "pghe",
    PotionOfGreaterInvisibility = "pgin",
    PotionOfGreaterMana = "pgma",
    PotionOfHealing = "phea",
    PotionOfInvisibility = "pinv",
    PotionOfInvulnerability = "pnvu",
    PotionOfLesserInvulnerability = "pnvl",
    PotionOfMana = "pman",
    PotionOfOmniscience = "pomn",
    PotionOfRestoration = "pres",
    PotionOfSpeed = "pspd",
    PowerupAreaHealing = "APh2",
    PowerupAreaHealingGreater = "APh3",
    PowerupAreaHealingLesser = "APh1",
    PowerupDispel = "APdi",
    RaiseDeadItem = "AIrd",
    RandomItem = "AIri",
    Reanimation = "AInd",
    Rebirth = "AIrb",
    RedDrakeEgg = "fgrd",
    RegenerationAura = "AIgx",
    ReplenishmentPotion = "rej3",
    RingOfProtectionPlus1 = "rde0",
    RingOfProtectionPlus2 = "rde1",
    RingOfProtectionPlus3 = "rde2",
    RingOfProtectionPlus4 = "rde3",
    RingOfProtectionPlus5 = "rde4",
    RingOfRegeneration = "rlif",
    RingOfSuperiority = "rnsp",
    RingOfTheArchmagi = "ram4",
    RingOfTheArchmagi2 = "ram3",
    RingOfTheArchmagi3 = "ram2",
    RingOfTheArchmagi4 = "ram1",
    RitualDagger = "ritd",
    RitualDagger2 = "AIdg",
    RitualDagger3 = "AIg2",
    Roar = "AIrr",
    RobeOfTheMagiPlus6 = "ciri",
    RodOfNecromancy = "rnec",
    RuneAreaHealOrManaRegain = "APra",
    RuneAreaManaRegain = "APmr",
    RuneAreaManaRegainGreater = "APmg",
    RuneOfDispelMagic = "rdis",
    RuneOfGreaterHealing = "rhe3",
    RuneOfGreaterMana = "rma2",
    RuneOfGreaterResurrection = "rre2",
    RuneOfHealing = "rhe2",
    RuneOfLesserHealing = "rhe1",
    RuneOfLesserResurrection = "rre1",
    RuneOfMana = "rman",
    RuneOfRebirth = "rreb",
    RuneOfRestoration = "rres",
    RuneOfShielding = "rsps",
    RuneOfSpeed = "rspd",
    RuneOfSpeed2 = "APsa",
    RuneOfSpiritLink = "rspl",
    RuneOfTheWatcher = "rwat",
    RuneOfTheWatcher2 = "APwt",
    RunedBracers = "brac",
    RunedGauntlets = "rugt",
    RustyMiningPick = "rump",
    SacredRelic = "horl",
    SacrificialSkull = "skul",
    ScepterOfAvarice = "scav",
    ScepterOfHealing = "schl",
    ScepterOfMastery = "ccmd",
    ScepterOfTheSea = "rots",
    ScourgeBoneChimes = "sbch",
    ScrollOfAnimateDead = "sand",
    ScrollOfHaste = "AIsa",
    ScrollOfHealing = "shea",
    ScrollOfMana = "sman",
    ScrollOfProtection = "spro",
    ScrollOfRegeneration = "sreg",
    ScrollOfRegeneration2 = "AIsl",
    ScrollOfRestoration = "sres",
    ScrollOfResurrection = "srrc",
    ScrollOfSpeed = "shas",
    ScrollOfTheBeast = "sror",
    ScrollOfTheUnholyLegion = "scul",
    ScrollOfTownPortal = "stwp",
    SearingBlade = "srbd",
    SecretLevelPowerup = "sclp",
    SeedOfExpulsion = "sxpl",
    SentryWard = "AIsw",
    SentryWards = "wswd",
    Serathil = "srtl",
    ShadowOrbAbility = "AIdn",
    ShadowOrbFragment = "sorf",
    ShadowOrbPlus1 = "sor1",
    ShadowOrbPlus10 = "sora",
    ShadowOrbPlus2 = "sor2",
    ShadowOrbPlus3 = "sor3",
    ShadowOrbPlus4 = "sor4",
    ShadowOrbPlus5 = "sor5",
    ShadowOrbPlus6 = "sor6",
    ShadowOrbPlus7 = "sor7",
    ShadowOrbPlus8 = "sor8",
    ShadowOrbPlus9 = "sor9",
    ShamanClaws = "shcw",
    ShamanicTotem = "shtm",
    ShieldOfHonor = "shhn",
    ShieldOfTheDeathlord = "shdt",
    ShimmerglazeRoast = "shrs",
    Shimmerweed = "shwd",
    SkeletalArtifact = "skrt",
    SkullOfGuldan = "glsk",
    SkullShield = "sksh",
    SlippersOfAgilityPlus3 = "rag1",
    SlowPoison = "AIsz",
    SobiMask = "rwiz",
    Soul = "soul",
    SoulGem = "gsou",
    SpellBook = "sbok",
    SpellBook2 = "Aspb",
    SpellDamageReduction = "AIsr",
    SpellImmunity = "AImx",
    SpellShield = "ANss",
    SpellShield2 = "ANse",
    SpiderRing = "sprn",
    SpiderSilkBroach = "silk",
    SpikedCollar = "fgfh",
    SpiritLink = "Aspp",
    StaffOfNegation = "sneg",
    StaffOfPreservation = "spre",
    StaffOfPreservation2 = "ANpr",
    StaffOfReanimation = "stre",
    StaffOfSanctuary = "ssan",
    StaffOfSanctuary2 = "ANsa",
    StaffOfSilence = "ssil",
    StaffOfTeleportation = "stel",
    StaffOfTeleportation2 = "AImt",
    Steal = "Aste",
    StoneToken = "fgrg",
    SturdyWarAxe = "stwa",
    SummonHeadhunter = "AIsh",
    SunKey = "kysn",
    TalismanOfEvasion = "evtl",
    TalismanOfTheWild = "totw",
    TheHeartOfSearinox = "sehr",
    TheLionHornOfStormwind = "lhst",
    ThunderLizardEgg = "thle",
    ThunderPhoenixEgg = "dphe",
    ThunderbloomBulb = "dthb",
    ThunderlizardDiamond = "thdm",
    TinyAltarOfKings = "tbak",
    TinyBarracks = "tbar",
    TinyBlacksmith = "tbsm",
    TinyCastle = "tcas",
    TinyFarm = "tfar",
    TinyGreatHall = "tgrh",
    TinyLumberMill = "tlum",
    TomeOfAgility = "tdex",
    TomeOfAgilityPlus2 = "tdx2",
    TomeOfExperience = "texp",
    TomeOfGreaterExperience = "tgxp",
    TomeOfIntelligence = "tint",
    TomeOfIntelligencePlus2 = "tin2",
    TomeOfKnowledge = "tpow",
    TomeOfPower = "tkno",
    TomeOfRetraining = "tret",
    TomeOfRetraining2 = "Aret",
    TomeOfSacrifices = "tmsc",
    TomeOfStrength = "tstr",
    TomeOfStrengthPlus2 = "tst2",
    TotemOfMight = "tmmt",
    TownHallOrGreatHallOrTreeOfLifeOrNecropolis = "TWN1",
    Ultravision = "AIuv",
    UndeadFlag = "uflg",
    UnholyFrenzy = "AIuf",
    UrnOfKingTerenas = "ktrm",
    VampiricPotion = "vamp",
    VampiricPotion2 = "AIpv",
    VineOfPurification = "vpur",
    VoodooDoll = "vddl",
    WandOfIllusion = "will",
    WandOfLightningShield = "wlsd",
    WandOfManaStealing = "woms",
    WandOfNegation = "wneg",
    WandOfNeutralization = "wneu",
    WandOfShadowsight = "wshs",
    WandOfShadowsight2 = "Ashs",
    WandOfTheWind = "wcyc",
    WarsongBattleDrums = "war2",
    WarsongBattleDrums2 = "ward",
    WateryMinion = "AIwm",
    WirtsLeg = "wtlg",
    WirtsOtherLeg = "wolg",
    Ydeng = "Y425"
}
declare type MapItem = {
    oldId: string;
    newId: string;
} & Item;
export declare class ItemContainer extends OEContainer<Item> {
    game: {
        afac: Item;
        amrc: Item;
        spsh: Item;
        wild: Item;
        TALT: Item;
        axas: Item;
        anfg: Item;
        ajen: Item;
        ankh: Item;
        pams: Item;
        arsc: Item;
        arsh: Item;
        asbl: Item;
        AIbx: Item;
        btst: Item;
        bgst: Item;
        AIxk: Item;
        blba: Item;
        Ablp: Item;
        AIbk: Item;
        kybl: Item;
        bfhr: Item;
        fgbd: Item;
        fgsk: Item;
        belv: Item;
        bspd: Item;
        brag: Item;
        AIbh: Item;
        AIbs: Item;
        AIbb: Item;
        AIbl: Item;
        AIbf: Item;
        AIbg: Item;
        AIbr: Item;
        AIbt: Item;
        lmbr: Item;
        AIlu: Item;
        TWN3: Item;
        cosl: Item;
        AIcl: Item;
        AIct: Item;
        ches: Item;
        AIgo: Item;
        cnob: Item;
        pclr: Item;
        AIpr: Item;
        ratc: Item;
        ratf: Item;
        rat3: Item;
        rat6: Item;
        rat9: Item;
        clfm: Item;
        clsd: Item;
        stpg: Item;
        AIfg: Item;
        AIcm: Item;
        AIcs: Item;
        ckng: Item;
        crdt: Item;
        crys: Item;
        AIcy: Item;
        AUds: Item;
        AIdp: Item;
        AIdd: Item;
        fgdg: Item;
        dsum: Item;
        dtsb: Item;
        drph: Item;
        dust: Item;
        AItb: Item;
        bzbe: Item;
        engs: Item;
        shen: Item;
        envl: Item;
        engr: Item;
        esaz: Item;
        AIev: Item;
        AIfz: Item;
        frhg: Item;
        fgun: Item;
        AIfa: Item;
        AIfc: Item;
        fwss: Item;
        frgd: Item;
        bzbf: Item;
        rst1: Item;
        gmfr: Item;
        gemt: Item;
        AIp1: Item;
        AIp2: Item;
        AIp3: Item;
        AIp4: Item;
        AIp5: Item;
        AIp6: Item;
        ledg: Item;
        kygh: Item;
        gcel: Item;
        gvsm: Item;
        gfor: Item;
        gomn: Item;
        gopr: Item;
        guvi: Item;
        gobm: Item;
        tels: Item;
        gold: Item;
        rej4: Item;
        APrr: Item;
        rej6: Item;
        grsl: Item;
        hslv: Item;
        AIrl: Item;
        AIhw: Item;
        whwd: Item;
        hlst: Item;
        azhr: Item;
        hbth: Item;
        hval: Item;
        AIhl: Item;
        hcun: Item;
        cnhn: Item;
        sfog: Item;
        flag: Item;
        shar: Item;
        iotw: Item;
        infs: Item;
        iwbr: Item;
        AIam: Item;
        AIgm: Item;
        AIan: Item;
        AIxs: Item;
        Aami: Item;
        AIta: Item;
        AIra: Item;
        AIha: Item;
        AIhb: Item;
        AImr: Item;
        AIdm: Item;
        AIde: Item;
        AId1: Item;
        AId5: Item;
        AId8: Item;
        AId7: Item;
        AId0: Item;
        AId2: Item;
        AId3: Item;
        AId4: Item;
        AIdf: Item;
        AIcb: Item;
        AIfb: Item;
        AIgd: Item;
        AIob: Item;
        AIf2: Item;
        AIlb: Item;
        AIll: Item;
        AIpb: Item;
        AIsb: Item;
        AIas: Item;
        AIsx: Item;
        AIs2: Item;
        ANbs: Item;
        AIff: Item;
        AIfd: Item;
        AIfl: Item;
        AIfm: Item;
        AIfn: Item;
        AIfo: Item;
        AIfe: Item;
        AIdc: Item;
        AIco: Item;
        AItx: Item;
        AIt6: Item;
        AIt9: Item;
        AItc: Item;
        AItf: Item;
        AItg: Item;
        AIth: Item;
        AIti: Item;
        AItj: Item;
        AIdi: Item;
        AIds: Item;
        AIdv: Item;
        AIfu: Item;
        AIem: Item;
        AIe2: Item;
        AIfh: Item;
        AIfi: Item;
        AIzb: Item;
        AIut: Item;
        AIre: Item;
        AIhe: Item;
        AIh1: Item;
        AIh2: Item;
        AIhx: Item;
        AIi5: Item;
        AIa6: Item;
        AIaz: Item;
        AIi6: Item;
        AIx2: Item;
        AIx5: Item;
        AIa1: Item;
        AIx1: Item;
        AIs1: Item;
        AIir: Item;
        AIil: Item;
        AIcf: Item;
        AIxm: Item;
        AIim: Item;
        AItm: Item;
        AIlm: Item;
        AIl2: Item;
        AIml: Item;
        AIlz: Item;
        AIlf: Item;
        AIl1: Item;
        Arel: Item;
        Arll: Item;
        AIva: Item;
        AImm: Item;
        AImz: Item;
        AImb: Item;
        AI2m: Item;
        AIbm: Item;
        AImv: Item;
        AIma: Item;
        AIm1: Item;
        AIm2: Item;
        AIrm: Item;
        AIms: Item;
        AIfx: Item;
        AIaa: Item;
        AImh: Item;
        AIpx: Item;
        AImi: Item;
        AIpm: Item;
        AIpg: Item;
        AIps: Item;
        AIlp: Item;
        AIrt: Item;
        AIrc: Item;
        AIrs: Item;
        AIrx: Item;
        AIrv: Item;
        AIfr: Item;
        AIsi: Item;
        AIse: Item;
        AIfs: Item;
        AIos: Item;
        Asou: Item;
        AIso: Item;
        AIsm: Item;
        AInm: Item;
        AIda: Item;
        AIdb: Item;
        AIvi: Item;
        AIv1: Item;
        AIv2: Item;
        AIvu: Item;
        AIvl: Item;
        AIvg: Item;
        AIsp: Item;
        AItp: Item;
        AIts: Item;
        AIuw: Item;
        AIwb: Item;
        tsct: Item;
        jdrn: Item;
        TWN2: Item;
        kgal: Item;
        dkfw: Item;
        desc: Item;
        k3m3: Item;
        rhth: Item;
        kpin: Item;
        klmm: Item;
        AIh3: Item;
        lgdh: Item;
        plcl: Item;
        AIpl: Item;
        rej2: Item;
        APrl: Item;
        rej5: Item;
        AIls: Item;
        lnrn: Item;
        mgtk: Item;
        mnst: Item;
        rin1: Item;
        manh: Item;
        modt: Item;
        mlst: Item;
        mcri: Item;
        Amec: Item;
        mcou: Item;
        mdpb: Item;
        AIft: Item;
        AIfw: Item;
        AIlx: Item;
        mnsf: Item;
        rej1: Item;
        mort: Item;
        lure: Item;
        AImo: Item;
        kymn: Item;
        k3m1: Item;
        moon: Item;
        nspi: Item;
        nflg: Item;
        jpnt: Item;
        ocor: Item;
        odef: Item;
        ofir: Item;
        ofr2: Item;
        ofro: Item;
        gldo: Item;
        oli2: Item;
        olig: Item;
        oslo: Item;
        oven: Item;
        oflg: Item;
        k3m2: Item;
        penr: Item;
        pmna: Item;
        AIpz: Item;
        prvt: Item;
        phlt: Item;
        pdi2: Item;
        pdiv: Item;
        pghe: Item;
        pgin: Item;
        pgma: Item;
        phea: Item;
        pinv: Item;
        pnvu: Item;
        pnvl: Item;
        pman: Item;
        pomn: Item;
        pres: Item;
        pspd: Item;
        APh2: Item;
        APh3: Item;
        APh1: Item;
        APdi: Item;
        AIrd: Item;
        AIri: Item;
        AInd: Item;
        AIrb: Item;
        fgrd: Item;
        AIgx: Item;
        rej3: Item;
        rde0: Item;
        rde1: Item;
        rde2: Item;
        rde3: Item;
        rde4: Item;
        rlif: Item;
        rnsp: Item;
        ram4: Item;
        ram3: Item;
        ram2: Item;
        ram1: Item;
        ritd: Item;
        AIdg: Item;
        AIg2: Item;
        AIrr: Item;
        ciri: Item;
        rnec: Item;
        APra: Item;
        APmr: Item;
        APmg: Item;
        rdis: Item;
        rhe3: Item;
        rma2: Item;
        rre2: Item;
        rhe2: Item;
        rhe1: Item;
        rre1: Item;
        rman: Item;
        rreb: Item;
        rres: Item;
        rsps: Item;
        rspd: Item;
        APsa: Item;
        rspl: Item;
        rwat: Item;
        APwt: Item;
        brac: Item;
        rugt: Item;
        rump: Item;
        horl: Item;
        skul: Item;
        scav: Item;
        schl: Item;
        ccmd: Item;
        rots: Item;
        sbch: Item;
        sand: Item;
        AIsa: Item;
        shea: Item;
        sman: Item;
        spro: Item;
        sreg: Item;
        AIsl: Item;
        sres: Item;
        srrc: Item;
        shas: Item;
        sror: Item;
        scul: Item;
        stwp: Item;
        srbd: Item;
        sclp: Item;
        sxpl: Item;
        AIsw: Item;
        wswd: Item;
        srtl: Item;
        AIdn: Item;
        sorf: Item;
        sor1: Item;
        sora: Item;
        sor2: Item;
        sor3: Item;
        sor4: Item;
        sor5: Item;
        sor6: Item;
        sor7: Item;
        sor8: Item;
        sor9: Item;
        shcw: Item;
        shtm: Item;
        shhn: Item;
        shdt: Item;
        shrs: Item;
        shwd: Item;
        skrt: Item;
        glsk: Item;
        sksh: Item;
        rag1: Item;
        AIsz: Item;
        rwiz: Item;
        soul: Item;
        gsou: Item;
        sbok: Item;
        Aspb: Item;
        AIsr: Item;
        AImx: Item;
        ANss: Item;
        ANse: Item;
        sprn: Item;
        silk: Item;
        fgfh: Item;
        Aspp: Item;
        sneg: Item;
        spre: Item;
        ANpr: Item;
        stre: Item;
        ssan: Item;
        ANsa: Item;
        ssil: Item;
        stel: Item;
        AImt: Item;
        Aste: Item;
        fgrg: Item;
        stwa: Item;
        AIsh: Item;
        kysn: Item;
        evtl: Item;
        totw: Item;
        sehr: Item;
        lhst: Item;
        thle: Item;
        dphe: Item;
        dthb: Item;
        thdm: Item;
        tbak: Item;
        tbar: Item;
        tbsm: Item;
        tcas: Item;
        tfar: Item;
        tgrh: Item;
        tlum: Item;
        tdex: Item;
        tdx2: Item;
        texp: Item;
        tgxp: Item;
        tint: Item;
        tin2: Item;
        tpow: Item;
        tkno: Item;
        tret: Item;
        Aret: Item;
        tmsc: Item;
        tstr: Item;
        tst2: Item;
        tmmt: Item;
        TWN1: Item;
        AIuv: Item;
        uflg: Item;
        AIuf: Item;
        ktrm: Item;
        vamp: Item;
        AIpv: Item;
        vpur: Item;
        vddl: Item;
        will: Item;
        wlsd: Item;
        woms: Item;
        wneg: Item;
        wneu: Item;
        wshs: Item;
        Ashs: Item;
        wcyc: Item;
        war2: Item;
        ward: Item;
        AIwm: Item;
        wtlg: Item;
        wolg: Item;
        Y425: Item;
    };
    map: {
        [key: string]: MapItem;
    };
    loadModification(object: MapItem, modification: Modification): void;
}
export {};
