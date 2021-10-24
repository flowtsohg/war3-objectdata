import Modification from 'mdx-m3-viewer/dist/cjs/parsers/w3x/w3u/modification';
import { OEContainer } from '../container';
export interface Doodad {
    name: string;
    category: string;
    tilesets: string;
    hasTilesetSpecificData: boolean;
    modelFile: string;
    loopingSound: string;
    selectionSize: number;
    defaultScale: number;
    minimumScale: number;
    maximumScale: number;
    canPlaceRandomScale: boolean;
    useClickHelper: boolean;
    ignoreModelClicks: boolean;
    maximumPitchAngleDegrees: number;
    maxRollAngleDegrees: number;
    visibilityRadius: number;
    walkable: boolean;
    variations: number;
    placeableOnCliffs: boolean;
    placeableOnWater: boolean;
    floats: boolean;
    hasAShadow: boolean;
    showInFog: boolean;
    animateInFog: boolean;
    fixedRotation: number;
    pathingTexture: string;
    minimapShow: boolean;
    minimapUseCustomColor: boolean;
    minimapColor1Red: number;
    minimapColor2Green: number;
    minimapColor3Blue: number;
    tintingColor1Red: number;
    tintingColor2Green: number;
    tintingColor3Blue: number;
    onUserSpecifiedList: boolean;
}
export declare enum Doodads {
    AlonsusChapel = "YOsb",
    Altar = "OOal",
    AndrohalClockTower = "ACt0",
    AndrohalClockTowerDestroyed = "ACtd",
    ArcheryTarget = "LOar",
    Archway = "CSra",
    Archway2 = "NSra",
    Archway3 = "YSaw",
    Archway4 = "DSar",
    Archway5 = "GSar",
    Archway6 = "ZSas",
    Archway7 = "ZSab",
    ArchwayAngled = "CSr1",
    ArchwayAngled2 = "NSr1",
    ArchwayAngled3 = "YSa1",
    ArchwayAngled4 = "DSa1",
    ArchwayAngled5 = "GSa1",
    ArchwayAngled6 = "ZSs1",
    ArchwayAngled7 = "ZSb1",
    ArchwayAngledIcecrownStone = "ISs1",
    ArchwayAngledIcy = "ISa1",
    ArchwayAngledNatural = "ZSa1",
    ArchwayAngledOutland = "OSa1",
    ArchwayAngledStone = "DSa2",
    ArchwayAngledStone2 = "GSa2",
    ArchwayEntrance = "YSa2",
    ArchwayEntranceAngled = "YSa3",
    ArchwayIcecrownStone = "ISsr",
    ArchwayIcy = "ISar",
    ArchwayNatural = "ZSar",
    ArchwayOutland = "OSar",
    ArchwayRuined = "JSar",
    ArchwayRuined2 = "JSax",
    ArchwayStandardDimension = "ASd0",
    ArchwayStone = "DSah",
    ArchwayStone2 = "GSah",
    BannerHuman = "LOh1",
    BannerLongBlue = "YObb",
    BannerLongWhite = "YOwb",
    BannerOrc = "LOo1",
    BannerTutorialOrc = "LOo2",
    Barn = "LSba",
    BarnScorched = "LSsb",
    BarrensTreeIndestructible = "BPtw",
    Bats = "NObt",
    Bench = "DObh",
    BenchAngledStone = "YOsa",
    BenchAngledWood = "YOwa",
    BenchStone = "YObs",
    BenchWood = "YObw",
    Birds = "AObd",
    BlightedMist = "CObl",
    BlocksRuined = "ASHB",
    BlocksRuined2 = "CSbl",
    Bones = "BObo",
    Bones2 = "NObo",
    BonesRib = "LOrb",
    Bookshelf = "DObk",
    BookshelfAngled = "DOab",
    BookshelfLarge = "DOkb",
    BookshelfLong = "DObw",
    Brazier = "LObr",
    BrazierGlowing = "LObz",
    BrazierSkull = "AObr",
    BrillClockTower = "BCt0",
    BrokenColumn = "ASbc",
    BrokenColumn2 = "CSbc",
    Bubbles = "ZWbg",
    BubblesSteam = "IWbg",
    Building = "VSvb",
    BuildingA = "BA00",
    BuildingB = "BB00",
    BuildingC = "BC00",
    Bush = "APbs",
    Bush2 = "CPbs",
    Bush3 = "YPbs",
    Cactus = "BPca",
    CageEmpty = "LOce",
    CageTrashed = "LOct",
    CameraProp = "YOcp",
    Cathedral = "YSca",
    CathedralRuined = "YScr",
    Cattail = "APct",
    Cattail2 = "CPct",
    Cattail3 = "ZPru",
    CauldronWithHeads = "LOca",
    CaveCityCliffEast = "YCc4",
    CaveCityCliffNorthLeft = "YCc2",
    CaveCityCliffNorthRight = "YCc1",
    CaveCityCliffWest = "YCc3",
    CaveNaturalCliffEast = "YCr4",
    CaveNaturalCliffNorthLeft = "YCr2",
    CaveNaturalCliffNorthRight = "YCr1",
    CaveNaturalCliffWest = "YCr3",
    ChainPost = "DOcp",
    Chains = "DOch",
    Chair = "DOcr",
    Chair2 = "IOch",
    ChairIcey = "IOic",
    CityBuildingBaseRuined = "JSr6",
    CityBuildingDiagonal1Green = "YS01",
    CityBuildingDiagonal1Purple = "YS02",
    CityBuildingDiagonal1Red = "YS00",
    CityBuildingDiagonal2Blue = "YS08",
    CityBuildingDiagonal2Green = "YS07",
    CityBuildingDiagonal2Purple = "YS06",
    CityBuildingHorizontalBlue = "YS03",
    CityBuildingHorizontalGreen = "YS04",
    CityBuildingHorizontalRed = "YS05",
    CityBuildingLargeBaseRuined = "JSrc",
    CityBuildingLargeDiagonal1Red = "YS13",
    CityBuildingLargeDiagonal2Blue = "YS15",
    CityBuildingLargeHorizontalGreen = "YS14",
    CityBuildingLargeRuinedDiagonal1Red = "YSrd",
    CityBuildingLargeRuinedDiagonal2Blue = "YSrf",
    CityBuildingLargeRuinedHorizontalGreen = "YSre",
    CityBuildingLargeRuinedVerticalPurple = "YSrc",
    CityBuildingLargeVerticalPurple = "YS12",
    CityBuildingRowGroup1 = "YSbr",
    CityBuildingRowGroup2 = "YSb1",
    CityBuildingRowGroup3 = "YSb2",
    CityBuildingRuinedDiagonal1Green = "YSr1",
    CityBuildingRuinedDiagonal1Purple = "YSr2",
    CityBuildingRuinedDiagonal1Red = "YSr0",
    CityBuildingRuinedDiagonal2Blue = "YSr8",
    CityBuildingRuinedDiagonal2Green = "YSr7",
    CityBuildingRuinedDiagonal2Purple = "YSr6",
    CityBuildingRuinedHorizontalBlue = "YSr3",
    CityBuildingRuinedHorizontalGreen = "YSr4",
    CityBuildingRuinedHorizontalRed = "YSr5",
    CityBuildingRuinedVerticalBlue = "YSrb",
    CityBuildingRuinedVerticalGreen = "YSr9",
    CityBuildingRuinedVerticalRed = "YSra",
    CityBuildingVerticalBlue = "YS11",
    CityBuildingVerticalGreen = "YS09",
    CityBuildingVerticalRed = "YS10",
    CityTower = "YOmb",
    CliffCave = "LCc0",
    CliffCave2 = "LCc2",
    ColumnAngledDouble = "YSc5",
    ColumnBroken = "NObc",
    ColumnDouble = "YScd",
    ColumnRuined = "JSco",
    ColumnRuinedWithCap = "JScx",
    ColumnSemiCircle = "YScs",
    ColumnSemiCircle2 = "YSc2",
    ColumnSemiCircle3 = "YSc3",
    ColumnSemiCircle4 = "YSc4",
    ColumnSemiCircleRuined = "JScs",
    ColumnSemiCircleRuined2 = "JSc2",
    ColumnSemiCircleRuined3 = "JSc3",
    ColumnSemiCircleRuined4 = "JSc4",
    ColumnSingle = "YSco",
    Coral = "ZWcl",
    CoralArch = "ZWca",
    Corn = "LPcr",
    CorpseImpaled = "LOic",
    CorpseOfGulDan = "CGd0",
    CorpseSitting = "LOsc",
    Crater = "BRcr",
    CraterFiery = "DRfc",
    CraterFiery2 = "GRfc",
    CratesEmpty = "YOec",
    Crypt = "NSct",
    Crystal = "IRcy",
    DalaranVioletCitadelRuined = "ZOvr",
    Dust = "ZZcd",
    ElvenBuilding = "LSeb",
    EnclaveHouse = "EH00",
    EnclaveHouseB = "EHb0",
    EnclaveMainStructure = "EMs0",
    EnclaveSpire = "ES00",
    EnclaveTurret = "ET01",
    EnergyField = "YZef",
    ExteriorGate = "EG00",
    ExteriorMainTower = "EMt0",
    ExteriorTower = "ET00",
    ExteriorWall = "EW00",
    EyeOfSargeras = "ZZys",
    FarmScorched = "LSsf",
    Fence = "NOfl",
    FenceAngled = "NOal",
    FenceAngledLong = "VOal",
    FenceAngledShort = "VOas",
    FenceLong = "VOfl",
    FenceShort = "VOfs",
    Fire = "YOtf",
    FireBlue = "YOfb",
    FireGust = "YOf3",
    FirePit = "NOfp",
    FirePitTrashed = "NOft",
    FirePitWithPig = "NOfg",
    FireSmall = "YOfs",
    Fish = "AWfs",
    FishDead = "COdf",
    FishGreen = "ZWfs",
    FishSchool = "ZWsf",
    Fissure = "BRfs",
    Fissure2 = "CRfs",
    Fissure3 = "NRfs",
    FlameGrate = "OOgr",
    Flies = "LOfl",
    FloatingBox = "NWfb",
    FloatingPanel = "NWpa",
    FloatingPlank = "NWfp",
    FlowerBedAngled = "YPfa",
    FlowerBedStraight = "YPfs",
    Flowers = "ZPfw",
    FootprintsDemonic = "ZZdt",
    Fountain = "YOfn",
    FountainRuined = "YOfr",
    Geyser = "BRgs",
    Glacier = "IRgc",
    GlowingRunes = "JOgr",
    GrainScorched = "LPcw",
    Granary = "LSgr",
    GranaryScorched = "LSgs",
    Grave = "LOgr",
    GraveCityscape = "YOgr",
    GravePeasant = "LOpg",
    GraveStone = "NOgv",
    GuldansRunes = "ZZgr",
    Hay = "LOhb",
    HayCart = "LOch",
    HayCartBroken = "LOcb",
    HayCartBrokenInfected = "LOxx",
    HayCartInfected = "LOrc",
    HayClump = "LOhc",
    HayInfected = "LOrh",
    HeadOnSpear = "LOsh",
    HearthglenAbbey = "HA00",
    HighElfCrestHangingBanners = "HEch",
    HighElfCrestStandingBanners = "HEcs",
    IceBlock = "IRic",
    IceClaws = "NRic",
    IceFloating = "IWie",
    IceFloe = "NWf1",
    IceFloe2 = "NWf2",
    IceFloe3 = "NWf3",
    IceFloe4 = "NWf4",
    IceSpiderOnPedestal = "IOss",
    Iceberg = "NWi1",
    Iceberg2 = "NWi2",
    Iceberg3 = "NWi3",
    Iceberg4 = "NWi4",
    IcyWaterfall = "IWw0",
    Inn = "LSin",
    InnScorched = "LSsi",
    InvulnerabilityField = "JZif",
    IronGate = "YOig",
    IronGate2 = "YOi1",
    IronMaiden = "DOim",
    KingTerenasStatue = "YOss",
    LavaCracks = "DOlc",
    LavaCracks2 = "GOlc",
    LightningBolt = "YOlb",
    LilyPad = "CPlp",
    LilyPad2 = "LPlp",
    LilyPad3 = "ZPlp",
    LilyPads = "AWlp",
    LilyPadsFloating = "AWfl",
    LilyPadsFloating2 = "LPfp",
    LogAngled = "AOla",
    LogAngled2 = "COla",
    LogStraight = "AOlg",
    LogStraight2 = "COlg",
    MagicalLantern = "XOcl",
    MagicalRunes = "XOmr",
    MagusConservatory = "MC00",
    MagusHighrise = "MH00",
    MagusTurret = "MT00",
    MarketItemBaubles = "YOm2",
    MarketItemBaublesAlt = "YOm3",
    MarketItemProduce = "YOm4",
    MarketItemProduceAlt = "YOm5",
    MarketItemTextiles = "YOm6",
    MarketItemTextilesAlt = "YOm7",
    MarketStallLarge = "YOms",
    MarketStallSmall = "YOm1",
    MineCart = "DOmc",
    MineCartEmpty = "DOme",
    MushroomBlue = "GPsh",
    Mushrooms = "APms",
    Mushrooms2 = "CPms",
    Mushrooms3 = "ZPms",
    NightElfFishingVillage = "ASv0",
    NightElfFishingVillage2 = "ASv1",
    NightElfFishingVillage3 = "ASv2",
    NightElfFishingVillage4 = "ASv3",
    NightElfFishingVillage5 = "ASv4",
    NightElfFishingVillageRuined = "ASx0",
    NightElfFishingVillageRuined2 = "ASx1",
    NightElfFishingVillageRuined3 = "ASx2",
    Obelisk = "AOsk",
    Obelisk2 = "COob",
    Obelisk3 = "NOok",
    Obelisk4 = "YOob",
    Obelisk5 = "DOob",
    Obelisk6 = "GOob",
    Obelisk7 = "IOob",
    ObeliskBroken = "AObo",
    ObeliskBroken2 = "CObo",
    ObeliskBroken3 = "NObk",
    ObeliskGlowing = "AOob",
    Obstacle = "OOob",
    OutlandPlants = "OPop",
    PierPier = "ASpr",
    PierRuined = "ASpt",
    PileOfJunk = "DOjp",
    PileOfTreasure = "DOtp",
    Pillar = "IOpr",
    PostHitching = "LOhp",
    PostLantern = "LOlp",
    PostLantern2 = "YOlp",
    PostSign = "LOsp",
    PottedPlant = "YPpp",
    PowerGenerator = "XOcs",
    PyrewoodVillageClockTowerDestroyed = "PVct",
    RackArmor = "LOam",
    RackWeapon = "LOwp",
    RemainsScorched = "AOsr",
    RisingWater = "IZrw",
    RisingWaterWide = "IZww",
    RiverRushes = "LPrs",
    RockArchway = "ASra",
    RockArchway2 = "BSra",
    RockArchway3 = "LSra",
    RockArchwayDiagonal = "ASr1",
    RockArchwayDiagonal2 = "BSr1",
    RockArchwayDiagonal3 = "LSr1",
    RockMagma = "ORmk",
    RockPillar = "BRrp",
    RockSpires = "BRrs",
    RockSpires2 = "CRrs",
    RockSpires3 = "ZRrs",
    RockSpires4 = "ORrs",
    RockSpiresCinematic = "BRrc",
    RockSpiresSmall = "BRsp",
    RockSpiresSmall2 = "ZRsp",
    Rocks = "ORrk",
    Rocks2 = "BRrk",
    Rocks3 = "LRrk",
    Rocks4 = "NRrk",
    Rocks5 = "CRrk",
    Rocks6 = "DRrk",
    Rocks7 = "GRrk",
    Rocks8 = "IRrk",
    Rocks9 = "ZRrk",
    RocksClusterFloating = "OZfc",
    RocksFloating = "ORfk",
    RocksWebbed = "NRwr",
    Rowboat = "NWrw",
    RowboatDestroyed = "NWrd",
    Rubble = "ASbr",
    Rubble2 = "CSbr",
    Rubble3 = "NSrb",
    Rubble4 = "ORrr",
    Rubble5 = "ISrb",
    RubbleLarge = "ZRbd",
    RubbleSmall = "ZRbs",
    RuinedArch = "BSar",
    RuinedChunk = "BSrc",
    RuinedCityCliffEast = "YCd2",
    RuinedCityCliffNorth = "YCd1",
    RuinedCityCliffShortEast = "YCt2",
    RuinedCityCliffShortNorth = "YCt1",
    RuinedCityCliffShortSouth = "YCt3",
    RuinedCityCliffShortWest = "YCt4",
    RuinedCityCliffSouth = "YCd3",
    RuinedCityCliffWest = "YCd4",
    RuinedCrystalTower = "ZOrc",
    RuinedCurvedWall = "BSrv",
    RuinedDoubleBase = "ZOtb",
    RuinedDoubleBase2 = "ZOt2",
    RuinedGoblinShipyard = "LSrg",
    RuinedGround2x2 = "YCx1",
    RuinedGround2x22 = "YCx2",
    RuinedGround2x23 = "YCx3",
    RuinedGround2x24 = "YCx4",
    RuinedGround4x2 = "YCx7",
    RuinedGround4x22 = "YCx8",
    RuinedGround4x4 = "YCx5",
    RuinedGround4x42 = "YCx6",
    RuinedNaturalCliffEast = "YCp2",
    RuinedNaturalCliffNorth = "YCp1",
    RuinedNaturalCliffShortEast = "YCl2",
    RuinedNaturalCliffShortNorth = "YCl1",
    RuinedNaturalCliffShortSouth = "YCl3",
    RuinedNaturalCliffShortWest = "YCl4",
    RuinedNaturalCliffSouth = "YCp3",
    RuinedNaturalCliffWest = "YCp4",
    RuinedShip = "AZrf",
    RuinedTower = "ZOdt",
    RuinedTower2 = "ZOd2",
    RuinedTowerBase = "ZOrb",
    RuinedWall = "BSrw",
    Ruins = "ZSrb",
    RuinsBloodyAltar = "ZOba",
    RuinsBrazier = "ZObz",
    RuinsBrokenStatue = "ZOsb",
    RuinsFirepot = "ZOfp",
    RuinsFountain = "ZOfo",
    RuinsLibraryShelf = "ZOls",
    RuinsObelisk = "ZOob",
    RuinsPillars = "ZOrp",
    RuinsStatue = "ZOst",
    RuinsStones = "ZOss",
    RuinsThrone = "ZOrt",
    RuinsTrash = "ZOtr",
    Runes = "KOdr",
    RuneweaverSquareFountain = "RSf0",
    Seaweed = "ZWsw",
    SewerVents = "DOsv",
    SewerWallpipes = "DOsw",
    Shells = "ZOsh",
    ShimmeringPortal = "OZsp",
    Ship = "NWsp",
    ShipDestroyed = "NWsd",
    Shrub = "ZPsh",
    SignBobsGuns = "YObg",
    SignTavern = "YOts",
    SignTraceysArmory = "YOta",
    SilvermoonArchway = "SA00",
    SilvermoonArchway45 = "SA01",
    SilvermoonArchwayEntrance = "SAe0",
    SilvermoonArchwayEntrance45 = "SAe1",
    SilvermoonBuildingsDiagonal1 = "SRbc",
    SilvermoonBuildingsDiagonal2 = "SRbe",
    SilvermoonBuildingsHorizontal = "SRbh",
    SilvermoonBuildingsVertical = "SRbv",
    SilvermoonTowerLarge = "STdl",
    SilvermoonTowerMedium = "STdm",
    SilvermoonTowerSmall = "STds",
    SilvermoonTowerXLarge = "LSt0",
    SilvermoonWall = "SWs0",
    SilvermoonWallCorner = "SWc0",
    SilvermoonWallDoor = "SWsd",
    SilvermoonWallDoorShort = "SWse",
    SilvermoonWallEndcap = "SWe0",
    SilvermoonWallLong = "SWsl",
    SilvermoonWallShort = "SWss",
    SilvermoonWall_T = "SWt0",
    Skull = "OOsk",
    SkullPile = "LOsk",
    SkullTorch = "IOst",
    SkullsOnSticks = "LOss",
    SlideCityCliffEast = "YCs2",
    SlideCityCliffNorth = "YCs1",
    SlideCityCliffShortEast = "YCo2",
    SlideCityCliffShortNorth = "YCo1",
    SlideCityCliffShortSouth = "YCo3",
    SlideCityCliffShortWest = "YCo4",
    SlideCityCliffSouth = "YCs3",
    SlideCityCliffWest = "YCs4",
    SlideNaturalCliffEast = "YCg2",
    SlideNaturalCliffNorth = "YCg1",
    SlideNaturalCliffShortEast = "YCu2",
    SlideNaturalCliffShortNorth = "YCu1",
    SlideNaturalCliffShortSouth = "YCu3",
    SlideNaturalCliffShortWest = "YCu4",
    SlideNaturalCliffSouth = "YCg3",
    SlideNaturalCliffWest = "YCg4",
    SmokeSmudge = "LOsm",
    Snowman = "IOsm",
    SnowyRock = "IRrs",
    Stake = "OOst",
    Stalagmite = "DRst",
    Stalagmite2 = "GRst",
    Standard = "OOsd",
    Statue = "YOst",
    StatueBlackCitadel = "KOst",
    StatueGuardianOfAszune = "AOgs",
    StatueIceSpider = "IOsl",
    StatueKeeper = "AOks",
    StatueOfAzshara = "DOas",
    StatueOfAzshara2 = "SA02",
    StatueShieldless = "YOks",
    StatueWhite = "YOws",
    StrahnbradClockTower = "SCt0",
    StrahnbradLargeTree = "SLt0",
    StumpHollow = "AOhs",
    StumpHollow2 = "COhs",
    SunWell = "YOsw",
    SunfurySpireMainTower = "SSmt",
    SunfurySpireSideTower = "SSst",
    SunkenRuinsTreeIndestructible = "ZPtw",
    SunreaverArchway = "SA03",
    SunreaverDome = "SD00",
    SunreaverDomeSmall = "SDs0",
    SunreaverSpire = "SS00",
    Table = "DOtb",
    TableAndChair = "DOtc",
    TableTorture = "DOtt",
    Tavern = "YSta",
    TheFrozenThrone = "IZft",
    ThrallsHut = "LZth",
    Throne = "BOth",
    Throne2 = "YOth",
    Tombstone = "NOtb",
    Torch = "LOth",
    TorchGlowing = "LOtz",
    TotemCentaur = "BOct",
    TotemLantern = "AOnt",
    TotemTauren = "BOtt",
    TowerScorched = "LSst",
    TrapFire = "YOf2",
    TrapFrost = "YOr2",
    TrapSideFire = "YOf1",
    TrapSideFrost = "YOr1",
    Trash = "LOt1",
    TreePlanter = "YPtp",
    Trough = "LOtr",
    Tulips = "ZPf0",
    UndergroundDome = "JZud",
    VinesCliffside = "ZCv1",
    VinesCliffside2 = "ZCv2",
    VinesThorny = "APtv",
    VinesThorny2 = "NPth",
    VinyPlant = "ZPvp",
    VioletHoldArchwayEndpiece = "VHae",
    VioletHoldMainStructure = "VHms",
    VioletHoldSpire = "VHs0",
    VioletHoldSpireSmall = "VHss",
    Wall90Degree = "WD00",
    WallBarredLarge = "DSp9",
    WallBarredLarge2 = "GSp9",
    WallBarredSmall = "DSp0",
    WallBarredSmall2 = "GSp0",
    WallCorner = "YSw4",
    WallCornerAlt = "YSw7",
    WallDoor = "YSwD",
    WallDoorShort = "YSwE",
    WallEndLantern = "YSll",
    WallEndLanternNoLight = "YSlx",
    WallEndShort = "YSls",
    WallEndTall = "YSlt",
    WallEndcap = "YSw5",
    WallEndcap2 = "WE00",
    WallEndcapEntrance = "YSwC",
    WallFountain = "LOwf",
    WallLowDiagonal1 = "YSw1",
    WallLowDiagonal2 = "YSw3",
    WallLowHorizontal = "YSw0",
    WallLowVertical = "YSw2",
    WallSpire = "WS01",
    WallSpireAlt = "WSa0",
    WallStone = "LOsw",
    WallStraight = "YSw6",
    WallStraight2 = "WS00",
    WallStraightLong = "YSw8",
    WallStraightLong2 = "WSl0",
    WallStraightShort = "YSw9",
    WallStraightShort2 = "WSs0",
    WallStraightTee = "YSwA",
    WallStraightTeeAlt = "YSwB",
    WallT = "WT00",
    WallTAlt = "WTa0",
    Waterfall = "LWw0",
    Well = "LSwl",
    Whale = "NWwh",
    Wheat = "LPwh",
    WheatBunch = "LPwb",
    Wheelbarrow = "LOwb",
    WheelbarrowBroken = "LOwr",
    Windmill = "LSwm",
    WindmillBurned = "LSwb",
    WorldTree = "ASwt"
}
declare type MapDoodad = {
    oldId: string;
    newId: string;
} & Doodad;
export declare class DoodadContainer extends OEContainer<Doodad> {
    game: {
        YOsb: Doodad;
        OOal: Doodad;
        ACt0: Doodad;
        ACtd: Doodad;
        LOar: Doodad;
        CSra: Doodad;
        NSra: Doodad;
        YSaw: Doodad;
        DSar: Doodad;
        GSar: Doodad;
        ZSas: Doodad;
        ZSab: Doodad;
        CSr1: Doodad;
        NSr1: Doodad;
        YSa1: Doodad;
        DSa1: Doodad;
        GSa1: Doodad;
        ZSs1: Doodad;
        ZSb1: Doodad;
        ISs1: Doodad;
        ISa1: Doodad;
        ZSa1: Doodad;
        OSa1: Doodad;
        DSa2: Doodad;
        GSa2: Doodad;
        YSa2: Doodad;
        YSa3: Doodad;
        ISsr: Doodad;
        ISar: Doodad;
        ZSar: Doodad;
        OSar: Doodad;
        JSar: Doodad;
        JSax: Doodad;
        ASd0: Doodad;
        DSah: Doodad;
        GSah: Doodad;
        LOh1: Doodad;
        YObb: Doodad;
        YOwb: Doodad;
        LOo1: Doodad;
        LOo2: Doodad;
        LSba: Doodad;
        LSsb: Doodad;
        BPtw: Doodad;
        NObt: Doodad;
        DObh: Doodad;
        YOsa: Doodad;
        YOwa: Doodad;
        YObs: Doodad;
        YObw: Doodad;
        AObd: Doodad;
        CObl: Doodad;
        ASHB: Doodad;
        CSbl: Doodad;
        BObo: Doodad;
        NObo: Doodad;
        LOrb: Doodad;
        DObk: Doodad;
        DOab: Doodad;
        DOkb: Doodad;
        DObw: Doodad;
        LObr: Doodad;
        LObz: Doodad;
        AObr: Doodad;
        BCt0: Doodad;
        ASbc: Doodad;
        CSbc: Doodad;
        ZWbg: Doodad;
        IWbg: Doodad;
        VSvb: Doodad;
        BA00: Doodad;
        BB00: Doodad;
        BC00: Doodad;
        APbs: Doodad;
        CPbs: Doodad;
        YPbs: Doodad;
        BPca: Doodad;
        LOce: Doodad;
        LOct: Doodad;
        YOcp: Doodad;
        YSca: Doodad;
        YScr: Doodad;
        APct: Doodad;
        CPct: Doodad;
        ZPru: Doodad;
        LOca: Doodad;
        YCc4: Doodad;
        YCc2: Doodad;
        YCc1: Doodad;
        YCc3: Doodad;
        YCr4: Doodad;
        YCr2: Doodad;
        YCr1: Doodad;
        YCr3: Doodad;
        DOcp: Doodad;
        DOch: Doodad;
        DOcr: Doodad;
        IOch: Doodad;
        IOic: Doodad;
        JSr6: Doodad;
        YS01: Doodad;
        YS02: Doodad;
        YS00: Doodad;
        YS08: Doodad;
        YS07: Doodad;
        YS06: Doodad;
        YS03: Doodad;
        YS04: Doodad;
        YS05: Doodad;
        JSrc: Doodad;
        YS13: Doodad;
        YS15: Doodad;
        YS14: Doodad;
        YSrd: Doodad;
        YSrf: Doodad;
        YSre: Doodad;
        YSrc: Doodad;
        YS12: Doodad;
        YSbr: Doodad;
        YSb1: Doodad;
        YSb2: Doodad;
        YSr1: Doodad;
        YSr2: Doodad;
        YSr0: Doodad;
        YSr8: Doodad;
        YSr7: Doodad;
        YSr6: Doodad;
        YSr3: Doodad;
        YSr4: Doodad;
        YSr5: Doodad;
        YSrb: Doodad;
        YSr9: Doodad;
        YSra: Doodad;
        YS11: Doodad;
        YS09: Doodad;
        YS10: Doodad;
        YOmb: Doodad;
        LCc0: Doodad;
        LCc2: Doodad;
        YSc5: Doodad;
        NObc: Doodad;
        YScd: Doodad;
        JSco: Doodad;
        JScx: Doodad;
        YScs: Doodad;
        YSc2: Doodad;
        YSc3: Doodad;
        YSc4: Doodad;
        JScs: Doodad;
        JSc2: Doodad;
        JSc3: Doodad;
        JSc4: Doodad;
        YSco: Doodad;
        ZWcl: Doodad;
        ZWca: Doodad;
        LPcr: Doodad;
        LOic: Doodad;
        CGd0: Doodad;
        LOsc: Doodad;
        BRcr: Doodad;
        DRfc: Doodad;
        GRfc: Doodad;
        YOec: Doodad;
        NSct: Doodad;
        IRcy: Doodad;
        ZOvr: Doodad;
        ZZcd: Doodad;
        LSeb: Doodad;
        EH00: Doodad;
        EHb0: Doodad;
        EMs0: Doodad;
        ES00: Doodad;
        ET01: Doodad;
        YZef: Doodad;
        EG00: Doodad;
        EMt0: Doodad;
        ET00: Doodad;
        EW00: Doodad;
        ZZys: Doodad;
        LSsf: Doodad;
        NOfl: Doodad;
        NOal: Doodad;
        VOal: Doodad;
        VOas: Doodad;
        VOfl: Doodad;
        VOfs: Doodad;
        YOtf: Doodad;
        YOfb: Doodad;
        YOf3: Doodad;
        NOfp: Doodad;
        NOft: Doodad;
        NOfg: Doodad;
        YOfs: Doodad;
        AWfs: Doodad;
        COdf: Doodad;
        ZWfs: Doodad;
        ZWsf: Doodad;
        BRfs: Doodad;
        CRfs: Doodad;
        NRfs: Doodad;
        OOgr: Doodad;
        LOfl: Doodad;
        NWfb: Doodad;
        NWpa: Doodad;
        NWfp: Doodad;
        YPfa: Doodad;
        YPfs: Doodad;
        ZPfw: Doodad;
        ZZdt: Doodad;
        YOfn: Doodad;
        YOfr: Doodad;
        BRgs: Doodad;
        IRgc: Doodad;
        JOgr: Doodad;
        LPcw: Doodad;
        LSgr: Doodad;
        LSgs: Doodad;
        LOgr: Doodad;
        YOgr: Doodad;
        LOpg: Doodad;
        NOgv: Doodad;
        ZZgr: Doodad;
        LOhb: Doodad;
        LOch: Doodad;
        LOcb: Doodad;
        LOxx: Doodad;
        LOrc: Doodad;
        LOhc: Doodad;
        LOrh: Doodad;
        LOsh: Doodad;
        HA00: Doodad;
        HEch: Doodad;
        HEcs: Doodad;
        IRic: Doodad;
        NRic: Doodad;
        IWie: Doodad;
        NWf1: Doodad;
        NWf2: Doodad;
        NWf3: Doodad;
        NWf4: Doodad;
        IOss: Doodad;
        NWi1: Doodad;
        NWi2: Doodad;
        NWi3: Doodad;
        NWi4: Doodad;
        IWw0: Doodad;
        LSin: Doodad;
        LSsi: Doodad;
        JZif: Doodad;
        YOig: Doodad;
        YOi1: Doodad;
        DOim: Doodad;
        YOss: Doodad;
        DOlc: Doodad;
        GOlc: Doodad;
        YOlb: Doodad;
        CPlp: Doodad;
        LPlp: Doodad;
        ZPlp: Doodad;
        AWlp: Doodad;
        AWfl: Doodad;
        LPfp: Doodad;
        AOla: Doodad;
        COla: Doodad;
        AOlg: Doodad;
        COlg: Doodad;
        XOcl: Doodad;
        XOmr: Doodad;
        MC00: Doodad;
        MH00: Doodad;
        MT00: Doodad;
        YOm2: Doodad;
        YOm3: Doodad;
        YOm4: Doodad;
        YOm5: Doodad;
        YOm6: Doodad;
        YOm7: Doodad;
        YOms: Doodad;
        YOm1: Doodad;
        DOmc: Doodad;
        DOme: Doodad;
        GPsh: Doodad;
        APms: Doodad;
        CPms: Doodad;
        ZPms: Doodad;
        ASv0: Doodad;
        ASv1: Doodad;
        ASv2: Doodad;
        ASv3: Doodad;
        ASv4: Doodad;
        ASx0: Doodad;
        ASx1: Doodad;
        ASx2: Doodad;
        AOsk: Doodad;
        COob: Doodad;
        NOok: Doodad;
        YOob: Doodad;
        DOob: Doodad;
        GOob: Doodad;
        IOob: Doodad;
        AObo: Doodad;
        CObo: Doodad;
        NObk: Doodad;
        AOob: Doodad;
        OOob: Doodad;
        OPop: Doodad;
        ASpr: Doodad;
        ASpt: Doodad;
        DOjp: Doodad;
        DOtp: Doodad;
        IOpr: Doodad;
        LOhp: Doodad;
        LOlp: Doodad;
        YOlp: Doodad;
        LOsp: Doodad;
        YPpp: Doodad;
        XOcs: Doodad;
        PVct: Doodad;
        LOam: Doodad;
        LOwp: Doodad;
        AOsr: Doodad;
        IZrw: Doodad;
        IZww: Doodad;
        LPrs: Doodad;
        ASra: Doodad;
        BSra: Doodad;
        LSra: Doodad;
        ASr1: Doodad;
        BSr1: Doodad;
        LSr1: Doodad;
        ORmk: Doodad;
        BRrp: Doodad;
        BRrs: Doodad;
        CRrs: Doodad;
        ZRrs: Doodad;
        ORrs: Doodad;
        BRrc: Doodad;
        BRsp: Doodad;
        ZRsp: Doodad;
        ORrk: Doodad;
        BRrk: Doodad;
        LRrk: Doodad;
        NRrk: Doodad;
        CRrk: Doodad;
        DRrk: Doodad;
        GRrk: Doodad;
        IRrk: Doodad;
        ZRrk: Doodad;
        OZfc: Doodad;
        ORfk: Doodad;
        NRwr: Doodad;
        NWrw: Doodad;
        NWrd: Doodad;
        ASbr: Doodad;
        CSbr: Doodad;
        NSrb: Doodad;
        ORrr: Doodad;
        ISrb: Doodad;
        ZRbd: Doodad;
        ZRbs: Doodad;
        BSar: Doodad;
        BSrc: Doodad;
        YCd2: Doodad;
        YCd1: Doodad;
        YCt2: Doodad;
        YCt1: Doodad;
        YCt3: Doodad;
        YCt4: Doodad;
        YCd3: Doodad;
        YCd4: Doodad;
        ZOrc: Doodad;
        BSrv: Doodad;
        ZOtb: Doodad;
        ZOt2: Doodad;
        LSrg: Doodad;
        YCx1: Doodad;
        YCx2: Doodad;
        YCx3: Doodad;
        YCx4: Doodad;
        YCx7: Doodad;
        YCx8: Doodad;
        YCx5: Doodad;
        YCx6: Doodad;
        YCp2: Doodad;
        YCp1: Doodad;
        YCl2: Doodad;
        YCl1: Doodad;
        YCl3: Doodad;
        YCl4: Doodad;
        YCp3: Doodad;
        YCp4: Doodad;
        AZrf: Doodad;
        ZOdt: Doodad;
        ZOd2: Doodad;
        ZOrb: Doodad;
        BSrw: Doodad;
        ZSrb: Doodad;
        ZOba: Doodad;
        ZObz: Doodad;
        ZOsb: Doodad;
        ZOfp: Doodad;
        ZOfo: Doodad;
        ZOls: Doodad;
        ZOob: Doodad;
        ZOrp: Doodad;
        ZOst: Doodad;
        ZOss: Doodad;
        ZOrt: Doodad;
        ZOtr: Doodad;
        KOdr: Doodad;
        RSf0: Doodad;
        ZWsw: Doodad;
        DOsv: Doodad;
        DOsw: Doodad;
        ZOsh: Doodad;
        OZsp: Doodad;
        NWsp: Doodad;
        NWsd: Doodad;
        ZPsh: Doodad;
        YObg: Doodad;
        YOts: Doodad;
        YOta: Doodad;
        SA00: Doodad;
        SA01: Doodad;
        SAe0: Doodad;
        SAe1: Doodad;
        SRbc: Doodad;
        SRbe: Doodad;
        SRbh: Doodad;
        SRbv: Doodad;
        STdl: Doodad;
        STdm: Doodad;
        STds: Doodad;
        LSt0: Doodad;
        SWs0: Doodad;
        SWc0: Doodad;
        SWsd: Doodad;
        SWse: Doodad;
        SWe0: Doodad;
        SWsl: Doodad;
        SWss: Doodad;
        SWt0: Doodad;
        OOsk: Doodad;
        LOsk: Doodad;
        IOst: Doodad;
        LOss: Doodad;
        YCs2: Doodad;
        YCs1: Doodad;
        YCo2: Doodad;
        YCo1: Doodad;
        YCo3: Doodad;
        YCo4: Doodad;
        YCs3: Doodad;
        YCs4: Doodad;
        YCg2: Doodad;
        YCg1: Doodad;
        YCu2: Doodad;
        YCu1: Doodad;
        YCu3: Doodad;
        YCu4: Doodad;
        YCg3: Doodad;
        YCg4: Doodad;
        LOsm: Doodad;
        IOsm: Doodad;
        IRrs: Doodad;
        OOst: Doodad;
        DRst: Doodad;
        GRst: Doodad;
        OOsd: Doodad;
        YOst: Doodad;
        KOst: Doodad;
        AOgs: Doodad;
        IOsl: Doodad;
        AOks: Doodad;
        DOas: Doodad;
        SA02: Doodad;
        YOks: Doodad;
        YOws: Doodad;
        SCt0: Doodad;
        SLt0: Doodad;
        AOhs: Doodad;
        COhs: Doodad;
        YOsw: Doodad;
        SSmt: Doodad;
        SSst: Doodad;
        ZPtw: Doodad;
        SA03: Doodad;
        SD00: Doodad;
        SDs0: Doodad;
        SS00: Doodad;
        DOtb: Doodad;
        DOtc: Doodad;
        DOtt: Doodad;
        YSta: Doodad;
        IZft: Doodad;
        LZth: Doodad;
        BOth: Doodad;
        YOth: Doodad;
        NOtb: Doodad;
        LOth: Doodad;
        LOtz: Doodad;
        BOct: Doodad;
        AOnt: Doodad;
        BOtt: Doodad;
        LSst: Doodad;
        YOf2: Doodad;
        YOr2: Doodad;
        YOf1: Doodad;
        YOr1: Doodad;
        LOt1: Doodad;
        YPtp: Doodad;
        LOtr: Doodad;
        ZPf0: Doodad;
        JZud: Doodad;
        ZCv1: Doodad;
        ZCv2: Doodad;
        APtv: Doodad;
        NPth: Doodad;
        ZPvp: Doodad;
        VHae: Doodad;
        VHms: Doodad;
        VHs0: Doodad;
        VHss: Doodad;
        WD00: Doodad;
        DSp9: Doodad;
        GSp9: Doodad;
        DSp0: Doodad;
        GSp0: Doodad;
        YSw4: Doodad;
        YSw7: Doodad;
        YSwD: Doodad;
        YSwE: Doodad;
        YSll: Doodad;
        YSlx: Doodad;
        YSls: Doodad;
        YSlt: Doodad;
        YSw5: Doodad;
        WE00: Doodad;
        YSwC: Doodad;
        LOwf: Doodad;
        YSw1: Doodad;
        YSw3: Doodad;
        YSw0: Doodad;
        YSw2: Doodad;
        WS01: Doodad;
        WSa0: Doodad;
        LOsw: Doodad;
        YSw6: Doodad;
        WS00: Doodad;
        YSw8: Doodad;
        WSl0: Doodad;
        YSw9: Doodad;
        WSs0: Doodad;
        YSwA: Doodad;
        YSwB: Doodad;
        WT00: Doodad;
        WTa0: Doodad;
        LWw0: Doodad;
        LSwl: Doodad;
        NWwh: Doodad;
        LPwh: Doodad;
        LPwb: Doodad;
        LOwb: Doodad;
        LOwr: Doodad;
        LSwm: Doodad;
        LSwb: Doodad;
        ASwt: Doodad;
    };
    map: {
        [key: string]: MapDoodad;
    };
    loadModification(object: MapDoodad, modification: Modification): void;
}
export {};
