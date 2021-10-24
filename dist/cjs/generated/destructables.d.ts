import Modification from 'mdx-m3-viewer/dist/cjs/parsers/w3x/w3u/modification';
import { OEContainer } from '../container';
export interface Destructable {
    name: string;
    editorSuffix: string;
    category: string;
    tilesets: string;
    hasTilesetSpecificData: boolean;
    modelFile: string;
    modelFileHasLightweightModel: boolean;
    fatLineOfSight: boolean;
    replaceableTextureID: number;
    replaceableTextureFile: string;
    showHelperObjectForSelection: boolean;
    placeableOnCliffs: boolean;
    placeableOnWater: boolean;
    showDeadVersionInPalette: boolean;
    isWalkable: boolean;
    cliffHeight: number;
    targetedAs: string;
    armorType: string;
    modelFileVariations: number;
    hitPoints: number;
    occlusionHeight: number;
    flyOverHeight: number;
    fixedRotation: number;
    selectionSizeEditor: number;
    minimumScale: number;
    maximumScale: number;
    canPlaceRandomScale: boolean;
    maximumPitchAngleDegrees: number;
    maxRollAngleDegrees: number;
    elevationSampleRadius: number;
    fogRadius: number;
    fogVisibility: boolean;
    pathingTexture: string;
    pathingTextureDead: string;
    death: string;
    shadow: string;
    minimapShow: boolean;
    minimapColor1Red: number;
    minimapColor2Green: number;
    minimapColor3Blue: number;
    minimapUseCustomColor: boolean;
    buildTime: number;
    repairTime: number;
    repairGoldCost: number;
    repairLumberCost: number;
    onUserSpecifiedList: boolean;
    tintingColor1Red: number;
    tintingColor2Green: number;
    tintingColor3Blue: number;
    selectableInGame: boolean;
    selectionSizeGame: number;
    modelFilePortrait: string;
}
export declare enum Destructables {
    AshenvaleCanopyTree = "ATtc",
    AshenvaleTreeWall = "ATtr",
    Barrel = "LTbr",
    Barrel2 = "LTbx",
    Barrel3 = "LTbs",
    BarrelOfExplosives = "LTex",
    BarrensCanopyTree = "BTtc",
    BarrensTreeWall = "BTtw",
    Barricade = "LTba",
    BlackCitadelTreeWall = "KTtw",
    BridgeDestroyed = "YSdb",
    BridgeDestroyed2 = "YSdc",
    Building = "XTbd",
    Cage = "LOcg",
    CityEntrance = "YTce",
    CityEntrance2 = "YTcx",
    CityscapeFallTreeWall = "YTft",
    CityscapeRuinedTreeWall = "JTct",
    CityscapeSnowyTreeWall = "YTst",
    CityscapeSummerTreeWall = "YTct",
    CityscapeWinterTreeWall = "YTwt",
    CliffCaveGate = "DTc1",
    CliffCaveGate2 = "DTc2",
    Crates = "LTcr",
    DalaranRuinsTreeWall = "JTtw",
    DalaranVioletCitadel = "XTvt",
    DemonStorm = "OTds",
    DemonicGate = "ATg1",
    DemonicGate2 = "ATg2",
    DemonicGate3 = "ATg3",
    DemonicGate4 = "ATg4",
    DungeonGate = "DTg1",
    DungeonGate2 = "DTg2",
    DungeonGate3 = "DTg3",
    DungeonGate4 = "DTg4",
    DungeonSpikes = "DTsp",
    DungeonTreeWall = "DTsh",
    EggSack = "DTes",
    Elevator = "DTrf",
    Elevator2 = "DTrx",
    ElevatorWall = "DTep",
    ElvenBridge = "YT67",
    ElvenGate = "LTe1",
    ElvenGate2 = "LTe2",
    ElvenGate3 = "LTe3",
    ElvenGate4 = "LTe4",
    ExtraWideNaturalBridge = "YT48",
    ExtraWideNaturalBridge2 = "YT49",
    ExtraWideNaturalBridge3 = "YT50",
    ExtraWideNaturalBridge4 = "YT51",
    FallTreeWall = "FTtw",
    FelwoodCanopyTree = "CTtc",
    FelwoodTreeWall = "CTtr",
    FootSwitch = "DTfp",
    FootSwitch2 = "DTfx",
    ForceBridge = "DTs0",
    ForceBridge2 = "DTs1",
    ForceBridge3 = "DTs2",
    ForceBridge4 = "DTs3",
    ForceWall = "Dofw",
    ForceWall2 = "Dofv",
    FrozenThroneGate = "ITtg",
    Gate = "LTg1",
    Gate2 = "LTg2",
    Gate3 = "LTg3",
    Gate4 = "LTg4",
    IceBridge = "ITib",
    IceBridge2 = "ITi2",
    IceBridge3 = "ITi3",
    IceBridge4 = "ITi4",
    IceFloe = "ITf1",
    IceFloe2 = "ITf2",
    IceFloe3 = "ITf3",
    IceFloe4 = "ITf4",
    IceRockGate = "ITx1",
    IceRockGate2 = "ITx2",
    IceRockGate3 = "ITx3",
    IceRockGate4 = "ITx4",
    IcecrownCanopyTree = "ITtc",
    IcecrownCitadelEntrance = "YTc1",
    IcecrownThrone = "IOt0",
    IcecrownThroneDiagonal1 = "IOt1",
    IcecrownThroneDiagonal12 = "IOt2",
    IcecrownTreeWall = "ITtw",
    IceyRock = "ITcr",
    IcyGate = "ITg1",
    IcyGate2 = "ITg2",
    IcyGate3 = "ITg3",
    IcyGate4 = "ITg4",
    Igloo = "ITig",
    InvisiblePlatform = "OTip",
    InvisiblePlatformSmall = "OTis",
    IronGate = "DTg5",
    IronGate2 = "DTg6",
    IronGate3 = "DTg7",
    IronGate4 = "DTg8",
    KingsThrone = "XOkt",
    KingsThroneDiagonal1 = "XOk1",
    KingsThroneDiagonal12 = "XOk2",
    LastHopeBridge = "LTtc",
    LastHopeBridge2 = "LTtx",
    Lever = "DTlv",
    LineOfSightBlocker = "YTlb",
    LineOfSightBlockerLarge = "Ytlc",
    LionStatue = "BTs2",
    LionStatueDestroyed = "BTs3",
    LongElvenBridge = "EB04",
    LongElvenBridge2 = "EB05",
    LongElvenBridge3 = "EB06",
    LongElvenBridge4 = "EB07",
    LongNaturalBridge = "YT04",
    LongNaturalBridge2 = "YT05",
    LongNaturalBridge3 = "YT06",
    LongNaturalBridge4 = "YT07",
    LongNaturalBridge5 = "YT28",
    LongNaturalBridge6 = "YT29",
    LongNaturalBridge7 = "YT30",
    LongNaturalBridge8 = "YT31",
    LongNightElvenWoodenBridge = "NB04",
    LongNightElvenWoodenBridge2 = "NB05",
    LongNightElvenWoodenBridge3 = "NB06",
    LongNightElvenWoodenBridge4 = "NB07",
    LongOvergrownBridge = "OG04",
    LongOvergrownBridge2 = "OG05",
    LongOvergrownBridge3 = "OG06",
    LongOvergrownBridge4 = "OG07",
    LongRicketyWoodenBridge = "RW04",
    LongRicketyWoodenBridge2 = "RW05",
    LongRicketyWoodenBridge3 = "RW06",
    LongRicketyWoodenBridge4 = "RW07",
    LongStoneBridge = "YT16",
    LongStoneBridge2 = "YT17",
    LongStoneBridge3 = "YT18",
    LongStoneBridge4 = "YT19",
    LongStoneBridge5 = "YT40",
    LongStoneBridge6 = "YT41",
    LongStoneBridge7 = "YT42",
    LongStoneBridge8 = "YT43",
    LongStratholmeBridge = "YY16",
    LongStratholmeBridge2 = "YY17",
    LongStratholmeBridge3 = "YY18",
    LongStratholmeBridge4 = "YY19",
    LongWoodenBridge = "LT04",
    LongWoodenBridge2 = "LT05",
    LongWoodenBridge3 = "LT06",
    LongWoodenBridge4 = "LT07",
    LordaeronCityDome = "XTv1",
    LordaeronCityDomeDestroyed = "XTv2",
    LordaeronCityMainBuilding = "XTv3",
    LordaeronCityMainBuildingDestroyed = "XTv4",
    LordaeronCityMainGate = "YTc2",
    LordaeronCityMainGateColumn = "BTsk",
    LordaeronCityMainGateColumnDestroyed = "BTs1",
    LordaeronCityMainGateDestroyed = "YTc4",
    LordaeronCitySpire = "BTs4",
    LordaeronCitySpireDestroyed = "BTs5",
    MagicalPen = "XTmp",
    MagicalPen2 = "XTm5",
    MagicalPenWall = "XTmx",
    MagicalPenWall2 = "XTx5",
    MassiveRuinedGate = "ZTsg",
    MassiveRuinedGate2 = "ZTsx",
    NorthrendCanopyTree = "NTtc",
    NorthrendIcyTreeWall = "NTiw",
    NorthrendTreeWall = "NTtw",
    OrgrimmarGate = "YTcn",
    OrgrimmarTowerCompleted = "XTv8",
    OrgrimmarTowerUnderConstruction = "XTv7",
    OrgrimmarWallSegmentCompleted = "XTv6",
    OrgrimmarWallSegmentUnderConstruction = "XTv5",
    OutlandTreeWall = "OTtw",
    PathingBlockerAir = "YTab",
    PathingBlockerAirLarge = "YTac",
    PathingBlockerBoth = "YTfb",
    PathingBlockerBothLarge = "YTfc",
    PathingBlockerGround = "YTpb",
    PathingBlockerGroundLarge = "YTpc",
    PyrewoodVillagePineTree = "LFpt",
    RampNagaSmallBottom = "ZTr3",
    RampNagaSmallLeft = "ZTr0",
    RampNagaSmallRight = "ZTr2",
    RampNagaSmallTop = "ZTr1",
    ResurrectionStone = "BTrs",
    ResurrectionStone2 = "BTrx",
    RockChunks = "DTrc",
    RockChunks2 = "LTrc",
    RockChunks3 = "LTrt",
    RockinArthas = "ITag",
    RollingStoneDoor = "ITd4",
    RollingStoneDoor2 = "ZTd2",
    RollingStoneDoor3 = "ZTd3",
    RollingStoneDoor4 = "ZTd4",
    RollingStoneDoor5 = "ZTd5",
    RollingStoneDoor6 = "ZTd6",
    RollingStoneDoor7 = "ZTd7",
    RollingStoneDoor8 = "ZTd8",
    RollingStoneDoor9 = "ITd1",
    RuinedGate = "ZTg1",
    RuinedGate2 = "ZTg2",
    RuinedGate3 = "ZTg3",
    RuinedGate4 = "ZTg4",
    RuinsCanopyTree = "ZTtc",
    RuinsNagaCircle = "ZTnc",
    RuinsTreeWall = "ZTtw",
    ScorchedTreeWall = "Ytsc",
    ScorchedTreeWall2 = "YTsc",
    ShimmeringPortal = "OTsp",
    Ship = "NTbd",
    ShortElvenBridge = "EB00",
    ShortElvenBridge2 = "EB01",
    ShortElvenBridge3 = "EB02",
    ShortElvenBridge4 = "EB03",
    ShortNaturalBridge = "YT00",
    ShortNaturalBridge2 = "YT01",
    ShortNaturalBridge3 = "YT02",
    ShortNaturalBridge4 = "YT03",
    ShortNaturalBridge5 = "YT24",
    ShortNaturalBridge6 = "YT25",
    ShortNaturalBridge7 = "YT26",
    ShortNaturalBridge8 = "YT27",
    ShortNightElvenWoodenBridge = "NB00",
    ShortNightElvenWoodenBridge2 = "NB01",
    ShortNightElvenWoodenBridge3 = "NB02",
    ShortNightElvenWoodenBridge4 = "NB03",
    ShortOvergrownBridge = "OG00",
    ShortOvergrownBridge2 = "OG01",
    ShortOvergrownBridge3 = "OG02",
    ShortOvergrownBridge4 = "OG03",
    ShortRicketyWoodenBridge = "RW00",
    ShortRicketyWoodenBridge2 = "RW01",
    ShortRicketyWoodenBridge3 = "RW02",
    ShortRicketyWoodenBridge4 = "RW03",
    ShortStoneBridge = "YT12",
    ShortStoneBridge2 = "YT13",
    ShortStoneBridge3 = "YT14",
    ShortStoneBridge4 = "YT15",
    ShortStoneBridge5 = "YT36",
    ShortStoneBridge6 = "YT37",
    ShortStoneBridge7 = "YT38",
    ShortStoneBridge8 = "YT39",
    ShortStratholmeBridge = "YY12",
    ShortStratholmeBridge2 = "YY13",
    ShortStratholmeBridge3 = "YY14",
    ShortStratholmeBridge4 = "YY15",
    ShortWoodenBridge = "LT00",
    ShortWoodenBridge2 = "LT01",
    ShortWoodenBridge3 = "LT02",
    ShortWoodenBridge4 = "LT03",
    SilvermoonTree = "Yts1",
    SilvermoonTree2 = "STlt",
    SilvermoonTreeBlight = "Yts2",
    SilvermoonTreeDead = "Yts3",
    SnowyTreeWall = "WTst",
    SpecialIceBridge = "YT66",
    StoneRamp = "LTs8",
    StoneRamp2 = "LTr2",
    StoneRamp3 = "LTr3",
    StoneRamp4 = "LTr4",
    StoneRamp5 = "LTr5",
    StoneRamp6 = "LTr6",
    StoneRamp7 = "LTr7",
    StoneRamp8 = "LTr8",
    StoneRamp9 = "LTs1",
    StoneWall = "ITw3",
    StoneWall2 = "LTw1",
    StoneWall3 = "LTw2",
    StoneWall4 = "LTw3",
    StoneWall5 = "ZTw0",
    StoneWall6 = "ZTw1",
    StoneWall7 = "ZTw2",
    StoneWall8 = "ZTw3",
    StoneWall9 = "ITw0",
    SummerTreeWall = "LTlt",
    SupportColumn = "BTsc",
    TreeBridge = "LTt0",
    TreeBridge2 = "LTt1",
    TreeBridge3 = "LTt2",
    TreeBridge4 = "LTt3",
    TreeBridge5 = "LTt4",
    TreeBridge6 = "ATt0",
    TreeBridge7 = "ATt1",
    TreeBridge8 = "LTt5",
    UndergroundTreeWall = "GTsh",
    VillageTreeWall = "VTlt",
    Volcano = "Volc",
    WaygateRamp = "WGTR",
    Wharf = "ATwf",
    WideElvenBridge = "EB08",
    WideElvenBridge2 = "EB09",
    WideElvenBridge3 = "EB10",
    WideElvenBridge4 = "EB11",
    WideNaturalBridge = "YT08",
    WideNaturalBridge2 = "YT09",
    WideNaturalBridge3 = "YT10",
    WideNaturalBridge4 = "YT11",
    WideNaturalBridge5 = "YT32",
    WideNaturalBridge6 = "YT33",
    WideNaturalBridge7 = "YT34",
    WideNaturalBridge8 = "YT35",
    WideNightElvenWoodenBridge = "NB08",
    WideNightElvenWoodenBridge2 = "NB09",
    WideNightElvenWoodenBridge3 = "NB10",
    WideNightElvenWoodenBridge4 = "NB11",
    WideOvergrownBridge = "OG08",
    WideOvergrownBridge2 = "OG09",
    WideOvergrownBridge3 = "OG10",
    WideOvergrownBridge4 = "OG11",
    WideRicketyWoodenBridge = "RW08",
    WideRicketyWoodenBridge2 = "RW09",
    WideRicketyWoodenBridge3 = "RW10",
    WideRicketyWoodenBridge4 = "RW11",
    WideStoneBridge = "YT20",
    WideStoneBridge2 = "YT21",
    WideStoneBridge3 = "YT22",
    WideStoneBridge4 = "YT23",
    WideStoneBridge5 = "YT44",
    WideStoneBridge6 = "YT45",
    WideStoneBridge7 = "YT46",
    WideStoneBridge8 = "YT47",
    WideStratholmeBridge = "YY20",
    WideStratholmeBridge2 = "YY21",
    WideStratholmeBridge3 = "YY22",
    WideStratholmeBridge4 = "YY23",
    WideWoodenBridge = "LT08",
    WideWoodenBridge2 = "LT09",
    WideWoodenBridge3 = "LT10",
    WideWoodenBridge4 = "LT11",
    WinterTreeWall = "WTtw",
    Ydeng = "Y425"
}
declare type MapDestructable = {
    oldId: string;
    newId: string;
} & Destructable;
export declare class DestructableContainer extends OEContainer<Destructable> {
    game: {
        ATtc: Destructable;
        ATtr: Destructable;
        LTbr: Destructable;
        LTbx: Destructable;
        LTbs: Destructable;
        LTex: Destructable;
        BTtc: Destructable;
        BTtw: Destructable;
        LTba: Destructable;
        KTtw: Destructable;
        YSdb: Destructable;
        YSdc: Destructable;
        XTbd: Destructable;
        LOcg: Destructable;
        YTce: Destructable;
        YTcx: Destructable;
        YTft: Destructable;
        JTct: Destructable;
        YTst: Destructable;
        YTct: Destructable;
        YTwt: Destructable;
        DTc1: Destructable;
        DTc2: Destructable;
        LTcr: Destructable;
        JTtw: Destructable;
        XTvt: Destructable;
        OTds: Destructable;
        ATg1: Destructable;
        ATg2: Destructable;
        ATg3: Destructable;
        ATg4: Destructable;
        DTg1: Destructable;
        DTg2: Destructable;
        DTg3: Destructable;
        DTg4: Destructable;
        DTsp: Destructable;
        DTsh: Destructable;
        DTes: Destructable;
        DTrf: Destructable;
        DTrx: Destructable;
        DTep: Destructable;
        YT67: Destructable;
        LTe1: Destructable;
        LTe2: Destructable;
        LTe3: Destructable;
        LTe4: Destructable;
        YT48: Destructable;
        YT49: Destructable;
        YT50: Destructable;
        YT51: Destructable;
        FTtw: Destructable;
        CTtc: Destructable;
        CTtr: Destructable;
        DTfp: Destructable;
        DTfx: Destructable;
        DTs0: Destructable;
        DTs1: Destructable;
        DTs2: Destructable;
        DTs3: Destructable;
        Dofw: Destructable;
        Dofv: Destructable;
        ITtg: Destructable;
        LTg1: Destructable;
        LTg2: Destructable;
        LTg3: Destructable;
        LTg4: Destructable;
        ITib: Destructable;
        ITi2: Destructable;
        ITi3: Destructable;
        ITi4: Destructable;
        ITf1: Destructable;
        ITf2: Destructable;
        ITf3: Destructable;
        ITf4: Destructable;
        ITx1: Destructable;
        ITx2: Destructable;
        ITx3: Destructable;
        ITx4: Destructable;
        ITtc: Destructable;
        YTc1: Destructable;
        IOt0: Destructable;
        IOt1: Destructable;
        IOt2: Destructable;
        ITtw: Destructable;
        ITcr: Destructable;
        ITg1: Destructable;
        ITg2: Destructable;
        ITg3: Destructable;
        ITg4: Destructable;
        ITig: Destructable;
        OTip: Destructable;
        OTis: Destructable;
        DTg5: Destructable;
        DTg6: Destructable;
        DTg7: Destructable;
        DTg8: Destructable;
        XOkt: Destructable;
        XOk1: Destructable;
        XOk2: Destructable;
        LTtc: Destructable;
        LTtx: Destructable;
        DTlv: Destructable;
        YTlb: Destructable;
        Ytlc: Destructable;
        BTs2: Destructable;
        BTs3: Destructable;
        EB04: Destructable;
        EB05: Destructable;
        EB06: Destructable;
        EB07: Destructable;
        YT04: Destructable;
        YT05: Destructable;
        YT06: Destructable;
        YT07: Destructable;
        YT28: Destructable;
        YT29: Destructable;
        YT30: Destructable;
        YT31: Destructable;
        NB04: Destructable;
        NB05: Destructable;
        NB06: Destructable;
        NB07: Destructable;
        OG04: Destructable;
        OG05: Destructable;
        OG06: Destructable;
        OG07: Destructable;
        RW04: Destructable;
        RW05: Destructable;
        RW06: Destructable;
        RW07: Destructable;
        YT16: Destructable;
        YT17: Destructable;
        YT18: Destructable;
        YT19: Destructable;
        YT40: Destructable;
        YT41: Destructable;
        YT42: Destructable;
        YT43: Destructable;
        YY16: Destructable;
        YY17: Destructable;
        YY18: Destructable;
        YY19: Destructable;
        LT04: Destructable;
        LT05: Destructable;
        LT06: Destructable;
        LT07: Destructable;
        XTv1: Destructable;
        XTv2: Destructable;
        XTv3: Destructable;
        XTv4: Destructable;
        YTc2: Destructable;
        BTsk: Destructable;
        BTs1: Destructable;
        YTc4: Destructable;
        BTs4: Destructable;
        BTs5: Destructable;
        XTmp: Destructable;
        XTm5: Destructable;
        XTmx: Destructable;
        XTx5: Destructable;
        ZTsg: Destructable;
        ZTsx: Destructable;
        NTtc: Destructable;
        NTiw: Destructable;
        NTtw: Destructable;
        YTcn: Destructable;
        XTv8: Destructable;
        XTv7: Destructable;
        XTv6: Destructable;
        XTv5: Destructable;
        OTtw: Destructable;
        YTab: Destructable;
        YTac: Destructable;
        YTfb: Destructable;
        YTfc: Destructable;
        YTpb: Destructable;
        YTpc: Destructable;
        LFpt: Destructable;
        ZTr3: Destructable;
        ZTr0: Destructable;
        ZTr2: Destructable;
        ZTr1: Destructable;
        BTrs: Destructable;
        BTrx: Destructable;
        DTrc: Destructable;
        LTrc: Destructable;
        LTrt: Destructable;
        ITag: Destructable;
        ITd4: Destructable;
        ZTd2: Destructable;
        ZTd3: Destructable;
        ZTd4: Destructable;
        ZTd5: Destructable;
        ZTd6: Destructable;
        ZTd7: Destructable;
        ZTd8: Destructable;
        ITd1: Destructable;
        ZTg1: Destructable;
        ZTg2: Destructable;
        ZTg3: Destructable;
        ZTg4: Destructable;
        ZTtc: Destructable;
        ZTnc: Destructable;
        ZTtw: Destructable;
        Ytsc: Destructable;
        YTsc: Destructable;
        OTsp: Destructable;
        NTbd: Destructable;
        EB00: Destructable;
        EB01: Destructable;
        EB02: Destructable;
        EB03: Destructable;
        YT00: Destructable;
        YT01: Destructable;
        YT02: Destructable;
        YT03: Destructable;
        YT24: Destructable;
        YT25: Destructable;
        YT26: Destructable;
        YT27: Destructable;
        NB00: Destructable;
        NB01: Destructable;
        NB02: Destructable;
        NB03: Destructable;
        OG00: Destructable;
        OG01: Destructable;
        OG02: Destructable;
        OG03: Destructable;
        RW00: Destructable;
        RW01: Destructable;
        RW02: Destructable;
        RW03: Destructable;
        YT12: Destructable;
        YT13: Destructable;
        YT14: Destructable;
        YT15: Destructable;
        YT36: Destructable;
        YT37: Destructable;
        YT38: Destructable;
        YT39: Destructable;
        YY12: Destructable;
        YY13: Destructable;
        YY14: Destructable;
        YY15: Destructable;
        LT00: Destructable;
        LT01: Destructable;
        LT02: Destructable;
        LT03: Destructable;
        Yts1: Destructable;
        STlt: Destructable;
        Yts2: Destructable;
        Yts3: Destructable;
        WTst: Destructable;
        YT66: Destructable;
        LTs8: Destructable;
        LTr2: Destructable;
        LTr3: Destructable;
        LTr4: Destructable;
        LTr5: Destructable;
        LTr6: Destructable;
        LTr7: Destructable;
        LTr8: Destructable;
        LTs1: Destructable;
        ITw3: Destructable;
        LTw1: Destructable;
        LTw2: Destructable;
        LTw3: Destructable;
        ZTw0: Destructable;
        ZTw1: Destructable;
        ZTw2: Destructable;
        ZTw3: Destructable;
        ITw0: Destructable;
        LTlt: Destructable;
        BTsc: Destructable;
        LTt0: Destructable;
        LTt1: Destructable;
        LTt2: Destructable;
        LTt3: Destructable;
        LTt4: Destructable;
        ATt0: Destructable;
        ATt1: Destructable;
        LTt5: Destructable;
        GTsh: Destructable;
        VTlt: Destructable;
        Volc: Destructable;
        WGTR: Destructable;
        ATwf: Destructable;
        EB08: Destructable;
        EB09: Destructable;
        EB10: Destructable;
        EB11: Destructable;
        YT08: Destructable;
        YT09: Destructable;
        YT10: Destructable;
        YT11: Destructable;
        YT32: Destructable;
        YT33: Destructable;
        YT34: Destructable;
        YT35: Destructable;
        NB08: Destructable;
        NB09: Destructable;
        NB10: Destructable;
        NB11: Destructable;
        OG08: Destructable;
        OG09: Destructable;
        OG10: Destructable;
        OG11: Destructable;
        RW08: Destructable;
        RW09: Destructable;
        RW10: Destructable;
        RW11: Destructable;
        YT20: Destructable;
        YT21: Destructable;
        YT22: Destructable;
        YT23: Destructable;
        YT44: Destructable;
        YT45: Destructable;
        YT46: Destructable;
        YT47: Destructable;
        YY20: Destructable;
        YY21: Destructable;
        YY22: Destructable;
        YY23: Destructable;
        LT08: Destructable;
        LT09: Destructable;
        LT10: Destructable;
        LT11: Destructable;
        WTtw: Destructable;
        Y425: Destructable;
    };
    map: {
        [key: string]: MapDestructable;
    };
    loadModification(object: MapDestructable, modification: Modification): void;
}
export {};
