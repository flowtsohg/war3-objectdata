"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestructableContainer = exports.Destructables = void 0;
const container_1 = require("../container");
const utils_1 = require("../utils");
const objects = require("./destructablesdata.json");
var Destructables;
(function (Destructables) {
    Destructables["AshenvaleCanopyTree"] = "ATtc";
    Destructables["AshenvaleTreeWall"] = "ATtr";
    Destructables["Barrel"] = "LTbr";
    Destructables["Barrel2"] = "LTbx";
    Destructables["Barrel3"] = "LTbs";
    Destructables["BarrelOfExplosives"] = "LTex";
    Destructables["BarrensCanopyTree"] = "BTtc";
    Destructables["BarrensTreeWall"] = "BTtw";
    Destructables["Barricade"] = "LTba";
    Destructables["BlackCitadelTreeWall"] = "KTtw";
    Destructables["BridgeDestroyed"] = "YSdb";
    Destructables["BridgeDestroyed2"] = "YSdc";
    Destructables["Building"] = "XTbd";
    Destructables["Cage"] = "LOcg";
    Destructables["CityEntrance"] = "YTce";
    Destructables["CityEntrance2"] = "YTcx";
    Destructables["CityscapeFallTreeWall"] = "YTft";
    Destructables["CityscapeRuinedTreeWall"] = "JTct";
    Destructables["CityscapeSnowyTreeWall"] = "YTst";
    Destructables["CityscapeSummerTreeWall"] = "YTct";
    Destructables["CityscapeWinterTreeWall"] = "YTwt";
    Destructables["CliffCaveGate"] = "DTc1";
    Destructables["CliffCaveGate2"] = "DTc2";
    Destructables["Crates"] = "LTcr";
    Destructables["DalaranRuinsTreeWall"] = "JTtw";
    Destructables["DalaranVioletCitadel"] = "XTvt";
    Destructables["DemonStorm"] = "OTds";
    Destructables["DemonicGate"] = "ATg1";
    Destructables["DemonicGate2"] = "ATg2";
    Destructables["DemonicGate3"] = "ATg3";
    Destructables["DemonicGate4"] = "ATg4";
    Destructables["DungeonGate"] = "DTg1";
    Destructables["DungeonGate2"] = "DTg2";
    Destructables["DungeonGate3"] = "DTg3";
    Destructables["DungeonGate4"] = "DTg4";
    Destructables["DungeonSpikes"] = "DTsp";
    Destructables["DungeonTreeWall"] = "DTsh";
    Destructables["EggSack"] = "DTes";
    Destructables["Elevator"] = "DTrf";
    Destructables["Elevator2"] = "DTrx";
    Destructables["ElevatorWall"] = "DTep";
    Destructables["ElvenBridge"] = "YT67";
    Destructables["ElvenGate"] = "LTe1";
    Destructables["ElvenGate2"] = "LTe2";
    Destructables["ElvenGate3"] = "LTe3";
    Destructables["ElvenGate4"] = "LTe4";
    Destructables["ExtraWideNaturalBridge"] = "YT48";
    Destructables["ExtraWideNaturalBridge2"] = "YT49";
    Destructables["ExtraWideNaturalBridge3"] = "YT50";
    Destructables["ExtraWideNaturalBridge4"] = "YT51";
    Destructables["FallTreeWall"] = "FTtw";
    Destructables["FelwoodCanopyTree"] = "CTtc";
    Destructables["FelwoodTreeWall"] = "CTtr";
    Destructables["FootSwitch"] = "DTfp";
    Destructables["FootSwitch2"] = "DTfx";
    Destructables["ForceBridge"] = "DTs0";
    Destructables["ForceBridge2"] = "DTs1";
    Destructables["ForceBridge3"] = "DTs2";
    Destructables["ForceBridge4"] = "DTs3";
    Destructables["ForceWall"] = "Dofw";
    Destructables["ForceWall2"] = "Dofv";
    Destructables["FrozenThroneGate"] = "ITtg";
    Destructables["Gate"] = "LTg1";
    Destructables["Gate2"] = "LTg2";
    Destructables["Gate3"] = "LTg3";
    Destructables["Gate4"] = "LTg4";
    Destructables["IceBridge"] = "ITib";
    Destructables["IceBridge2"] = "ITi2";
    Destructables["IceBridge3"] = "ITi3";
    Destructables["IceBridge4"] = "ITi4";
    Destructables["IceFloe"] = "ITf1";
    Destructables["IceFloe2"] = "ITf2";
    Destructables["IceFloe3"] = "ITf3";
    Destructables["IceFloe4"] = "ITf4";
    Destructables["IceRockGate"] = "ITx1";
    Destructables["IceRockGate2"] = "ITx2";
    Destructables["IceRockGate3"] = "ITx3";
    Destructables["IceRockGate4"] = "ITx4";
    Destructables["IcecrownCanopyTree"] = "ITtc";
    Destructables["IcecrownCitadelEntrance"] = "YTc1";
    Destructables["IcecrownThrone"] = "IOt0";
    Destructables["IcecrownThroneDiagonal1"] = "IOt1";
    Destructables["IcecrownThroneDiagonal12"] = "IOt2";
    Destructables["IcecrownTreeWall"] = "ITtw";
    Destructables["IceyRock"] = "ITcr";
    Destructables["IcyGate"] = "ITg1";
    Destructables["IcyGate2"] = "ITg2";
    Destructables["IcyGate3"] = "ITg3";
    Destructables["IcyGate4"] = "ITg4";
    Destructables["Igloo"] = "ITig";
    Destructables["InvisiblePlatform"] = "OTip";
    Destructables["InvisiblePlatformSmall"] = "OTis";
    Destructables["IronGate"] = "DTg5";
    Destructables["IronGate2"] = "DTg6";
    Destructables["IronGate3"] = "DTg7";
    Destructables["IronGate4"] = "DTg8";
    Destructables["KingsThrone"] = "XOkt";
    Destructables["KingsThroneDiagonal1"] = "XOk1";
    Destructables["KingsThroneDiagonal12"] = "XOk2";
    Destructables["LastHopeBridge"] = "LTtc";
    Destructables["LastHopeBridge2"] = "LTtx";
    Destructables["Lever"] = "DTlv";
    Destructables["LineOfSightBlocker"] = "YTlb";
    Destructables["LineOfSightBlockerLarge"] = "Ytlc";
    Destructables["LionStatue"] = "BTs2";
    Destructables["LionStatueDestroyed"] = "BTs3";
    Destructables["LongElvenBridge"] = "EB04";
    Destructables["LongElvenBridge2"] = "EB05";
    Destructables["LongElvenBridge3"] = "EB06";
    Destructables["LongElvenBridge4"] = "EB07";
    Destructables["LongNaturalBridge"] = "YT04";
    Destructables["LongNaturalBridge2"] = "YT05";
    Destructables["LongNaturalBridge3"] = "YT06";
    Destructables["LongNaturalBridge4"] = "YT07";
    Destructables["LongNaturalBridge5"] = "YT28";
    Destructables["LongNaturalBridge6"] = "YT29";
    Destructables["LongNaturalBridge7"] = "YT30";
    Destructables["LongNaturalBridge8"] = "YT31";
    Destructables["LongNightElvenWoodenBridge"] = "NB04";
    Destructables["LongNightElvenWoodenBridge2"] = "NB05";
    Destructables["LongNightElvenWoodenBridge3"] = "NB06";
    Destructables["LongNightElvenWoodenBridge4"] = "NB07";
    Destructables["LongOvergrownBridge"] = "OG04";
    Destructables["LongOvergrownBridge2"] = "OG05";
    Destructables["LongOvergrownBridge3"] = "OG06";
    Destructables["LongOvergrownBridge4"] = "OG07";
    Destructables["LongRicketyWoodenBridge"] = "RW04";
    Destructables["LongRicketyWoodenBridge2"] = "RW05";
    Destructables["LongRicketyWoodenBridge3"] = "RW06";
    Destructables["LongRicketyWoodenBridge4"] = "RW07";
    Destructables["LongStoneBridge"] = "YT16";
    Destructables["LongStoneBridge2"] = "YT17";
    Destructables["LongStoneBridge3"] = "YT18";
    Destructables["LongStoneBridge4"] = "YT19";
    Destructables["LongStoneBridge5"] = "YT40";
    Destructables["LongStoneBridge6"] = "YT41";
    Destructables["LongStoneBridge7"] = "YT42";
    Destructables["LongStoneBridge8"] = "YT43";
    Destructables["LongStratholmeBridge"] = "YY16";
    Destructables["LongStratholmeBridge2"] = "YY17";
    Destructables["LongStratholmeBridge3"] = "YY18";
    Destructables["LongStratholmeBridge4"] = "YY19";
    Destructables["LongWoodenBridge"] = "LT04";
    Destructables["LongWoodenBridge2"] = "LT05";
    Destructables["LongWoodenBridge3"] = "LT06";
    Destructables["LongWoodenBridge4"] = "LT07";
    Destructables["LordaeronCityDome"] = "XTv1";
    Destructables["LordaeronCityDomeDestroyed"] = "XTv2";
    Destructables["LordaeronCityMainBuilding"] = "XTv3";
    Destructables["LordaeronCityMainBuildingDestroyed"] = "XTv4";
    Destructables["LordaeronCityMainGate"] = "YTc2";
    Destructables["LordaeronCityMainGateColumn"] = "BTsk";
    Destructables["LordaeronCityMainGateColumnDestroyed"] = "BTs1";
    Destructables["LordaeronCityMainGateDestroyed"] = "YTc4";
    Destructables["LordaeronCitySpire"] = "BTs4";
    Destructables["LordaeronCitySpireDestroyed"] = "BTs5";
    Destructables["MagicalPen"] = "XTmp";
    Destructables["MagicalPen2"] = "XTm5";
    Destructables["MagicalPenWall"] = "XTmx";
    Destructables["MagicalPenWall2"] = "XTx5";
    Destructables["MassiveRuinedGate"] = "ZTsg";
    Destructables["MassiveRuinedGate2"] = "ZTsx";
    Destructables["NorthrendCanopyTree"] = "NTtc";
    Destructables["NorthrendIcyTreeWall"] = "NTiw";
    Destructables["NorthrendTreeWall"] = "NTtw";
    Destructables["OrgrimmarGate"] = "YTcn";
    Destructables["OrgrimmarTowerCompleted"] = "XTv8";
    Destructables["OrgrimmarTowerUnderConstruction"] = "XTv7";
    Destructables["OrgrimmarWallSegmentCompleted"] = "XTv6";
    Destructables["OrgrimmarWallSegmentUnderConstruction"] = "XTv5";
    Destructables["OutlandTreeWall"] = "OTtw";
    Destructables["PathingBlockerAir"] = "YTab";
    Destructables["PathingBlockerAirLarge"] = "YTac";
    Destructables["PathingBlockerBoth"] = "YTfb";
    Destructables["PathingBlockerBothLarge"] = "YTfc";
    Destructables["PathingBlockerGround"] = "YTpb";
    Destructables["PathingBlockerGroundLarge"] = "YTpc";
    Destructables["PyrewoodVillagePineTree"] = "LFpt";
    Destructables["RampNagaSmallBottom"] = "ZTr3";
    Destructables["RampNagaSmallLeft"] = "ZTr0";
    Destructables["RampNagaSmallRight"] = "ZTr2";
    Destructables["RampNagaSmallTop"] = "ZTr1";
    Destructables["ResurrectionStone"] = "BTrs";
    Destructables["ResurrectionStone2"] = "BTrx";
    Destructables["RockChunks"] = "DTrc";
    Destructables["RockChunks2"] = "LTrc";
    Destructables["RockChunks3"] = "LTrt";
    Destructables["RockinArthas"] = "ITag";
    Destructables["RollingStoneDoor"] = "ITd4";
    Destructables["RollingStoneDoor2"] = "ZTd2";
    Destructables["RollingStoneDoor3"] = "ZTd3";
    Destructables["RollingStoneDoor4"] = "ZTd4";
    Destructables["RollingStoneDoor5"] = "ZTd5";
    Destructables["RollingStoneDoor6"] = "ZTd6";
    Destructables["RollingStoneDoor7"] = "ZTd7";
    Destructables["RollingStoneDoor8"] = "ZTd8";
    Destructables["RollingStoneDoor9"] = "ITd1";
    Destructables["RuinedGate"] = "ZTg1";
    Destructables["RuinedGate2"] = "ZTg2";
    Destructables["RuinedGate3"] = "ZTg3";
    Destructables["RuinedGate4"] = "ZTg4";
    Destructables["RuinsCanopyTree"] = "ZTtc";
    Destructables["RuinsNagaCircle"] = "ZTnc";
    Destructables["RuinsTreeWall"] = "ZTtw";
    Destructables["ScorchedTreeWall"] = "Ytsc";
    Destructables["ScorchedTreeWall2"] = "YTsc";
    Destructables["ShimmeringPortal"] = "OTsp";
    Destructables["Ship"] = "NTbd";
    Destructables["ShortElvenBridge"] = "EB00";
    Destructables["ShortElvenBridge2"] = "EB01";
    Destructables["ShortElvenBridge3"] = "EB02";
    Destructables["ShortElvenBridge4"] = "EB03";
    Destructables["ShortNaturalBridge"] = "YT00";
    Destructables["ShortNaturalBridge2"] = "YT01";
    Destructables["ShortNaturalBridge3"] = "YT02";
    Destructables["ShortNaturalBridge4"] = "YT03";
    Destructables["ShortNaturalBridge5"] = "YT24";
    Destructables["ShortNaturalBridge6"] = "YT25";
    Destructables["ShortNaturalBridge7"] = "YT26";
    Destructables["ShortNaturalBridge8"] = "YT27";
    Destructables["ShortNightElvenWoodenBridge"] = "NB00";
    Destructables["ShortNightElvenWoodenBridge2"] = "NB01";
    Destructables["ShortNightElvenWoodenBridge3"] = "NB02";
    Destructables["ShortNightElvenWoodenBridge4"] = "NB03";
    Destructables["ShortOvergrownBridge"] = "OG00";
    Destructables["ShortOvergrownBridge2"] = "OG01";
    Destructables["ShortOvergrownBridge3"] = "OG02";
    Destructables["ShortOvergrownBridge4"] = "OG03";
    Destructables["ShortRicketyWoodenBridge"] = "RW00";
    Destructables["ShortRicketyWoodenBridge2"] = "RW01";
    Destructables["ShortRicketyWoodenBridge3"] = "RW02";
    Destructables["ShortRicketyWoodenBridge4"] = "RW03";
    Destructables["ShortStoneBridge"] = "YT12";
    Destructables["ShortStoneBridge2"] = "YT13";
    Destructables["ShortStoneBridge3"] = "YT14";
    Destructables["ShortStoneBridge4"] = "YT15";
    Destructables["ShortStoneBridge5"] = "YT36";
    Destructables["ShortStoneBridge6"] = "YT37";
    Destructables["ShortStoneBridge7"] = "YT38";
    Destructables["ShortStoneBridge8"] = "YT39";
    Destructables["ShortStratholmeBridge"] = "YY12";
    Destructables["ShortStratholmeBridge2"] = "YY13";
    Destructables["ShortStratholmeBridge3"] = "YY14";
    Destructables["ShortStratholmeBridge4"] = "YY15";
    Destructables["ShortWoodenBridge"] = "LT00";
    Destructables["ShortWoodenBridge2"] = "LT01";
    Destructables["ShortWoodenBridge3"] = "LT02";
    Destructables["ShortWoodenBridge4"] = "LT03";
    Destructables["SilvermoonTree"] = "Yts1";
    Destructables["SilvermoonTree2"] = "STlt";
    Destructables["SilvermoonTreeBlight"] = "Yts2";
    Destructables["SilvermoonTreeDead"] = "Yts3";
    Destructables["SnowyTreeWall"] = "WTst";
    Destructables["SpecialIceBridge"] = "YT66";
    Destructables["StoneRamp"] = "LTs8";
    Destructables["StoneRamp2"] = "LTr2";
    Destructables["StoneRamp3"] = "LTr3";
    Destructables["StoneRamp4"] = "LTr4";
    Destructables["StoneRamp5"] = "LTr5";
    Destructables["StoneRamp6"] = "LTr6";
    Destructables["StoneRamp7"] = "LTr7";
    Destructables["StoneRamp8"] = "LTr8";
    Destructables["StoneRamp9"] = "LTs1";
    Destructables["StoneWall"] = "ITw3";
    Destructables["StoneWall2"] = "LTw1";
    Destructables["StoneWall3"] = "LTw2";
    Destructables["StoneWall4"] = "LTw3";
    Destructables["StoneWall5"] = "ZTw0";
    Destructables["StoneWall6"] = "ZTw1";
    Destructables["StoneWall7"] = "ZTw2";
    Destructables["StoneWall8"] = "ZTw3";
    Destructables["StoneWall9"] = "ITw0";
    Destructables["SummerTreeWall"] = "LTlt";
    Destructables["SupportColumn"] = "BTsc";
    Destructables["TreeBridge"] = "LTt0";
    Destructables["TreeBridge2"] = "LTt1";
    Destructables["TreeBridge3"] = "LTt2";
    Destructables["TreeBridge4"] = "LTt3";
    Destructables["TreeBridge5"] = "LTt4";
    Destructables["TreeBridge6"] = "ATt0";
    Destructables["TreeBridge7"] = "ATt1";
    Destructables["TreeBridge8"] = "LTt5";
    Destructables["UndergroundTreeWall"] = "GTsh";
    Destructables["VillageTreeWall"] = "VTlt";
    Destructables["Volcano"] = "Volc";
    Destructables["WaygateRamp"] = "WGTR";
    Destructables["Wharf"] = "ATwf";
    Destructables["WideElvenBridge"] = "EB08";
    Destructables["WideElvenBridge2"] = "EB09";
    Destructables["WideElvenBridge3"] = "EB10";
    Destructables["WideElvenBridge4"] = "EB11";
    Destructables["WideNaturalBridge"] = "YT08";
    Destructables["WideNaturalBridge2"] = "YT09";
    Destructables["WideNaturalBridge3"] = "YT10";
    Destructables["WideNaturalBridge4"] = "YT11";
    Destructables["WideNaturalBridge5"] = "YT32";
    Destructables["WideNaturalBridge6"] = "YT33";
    Destructables["WideNaturalBridge7"] = "YT34";
    Destructables["WideNaturalBridge8"] = "YT35";
    Destructables["WideNightElvenWoodenBridge"] = "NB08";
    Destructables["WideNightElvenWoodenBridge2"] = "NB09";
    Destructables["WideNightElvenWoodenBridge3"] = "NB10";
    Destructables["WideNightElvenWoodenBridge4"] = "NB11";
    Destructables["WideOvergrownBridge"] = "OG08";
    Destructables["WideOvergrownBridge2"] = "OG09";
    Destructables["WideOvergrownBridge3"] = "OG10";
    Destructables["WideOvergrownBridge4"] = "OG11";
    Destructables["WideRicketyWoodenBridge"] = "RW08";
    Destructables["WideRicketyWoodenBridge2"] = "RW09";
    Destructables["WideRicketyWoodenBridge3"] = "RW10";
    Destructables["WideRicketyWoodenBridge4"] = "RW11";
    Destructables["WideStoneBridge"] = "YT20";
    Destructables["WideStoneBridge2"] = "YT21";
    Destructables["WideStoneBridge3"] = "YT22";
    Destructables["WideStoneBridge4"] = "YT23";
    Destructables["WideStoneBridge5"] = "YT44";
    Destructables["WideStoneBridge6"] = "YT45";
    Destructables["WideStoneBridge7"] = "YT46";
    Destructables["WideStoneBridge8"] = "YT47";
    Destructables["WideStratholmeBridge"] = "YY20";
    Destructables["WideStratholmeBridge2"] = "YY21";
    Destructables["WideStratholmeBridge3"] = "YY22";
    Destructables["WideStratholmeBridge4"] = "YY23";
    Destructables["WideWoodenBridge"] = "LT08";
    Destructables["WideWoodenBridge2"] = "LT09";
    Destructables["WideWoodenBridge3"] = "LT10";
    Destructables["WideWoodenBridge4"] = "LT11";
    Destructables["WinterTreeWall"] = "WTtw";
    Destructables["Ydeng"] = "Y425";
})(Destructables = exports.Destructables || (exports.Destructables = {}));
class DestructableContainer extends container_1.OEContainer {
    constructor() {
        super(...arguments);
        this.game = objects;
        this.map = {};
    }
    loadModification(object, modification) {
        const { id, value } = modification;
        switch (id) {
            case 'bnam':
                object.name = (0, utils_1.war3ToTS)('string', value);
                return;
            case 'bsuf':
                object.editorSuffix = (0, utils_1.war3ToTS)('string', value);
                return;
            case 'bcat':
                object.category = (0, utils_1.war3ToTS)('destructableCategory', value);
                return;
            case 'btil':
                object.tilesets = (0, utils_1.war3ToTS)('tilesetList', value);
                return;
            case 'btsp':
                object.hasTilesetSpecificData = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'bfil':
                object.modelFile = (0, utils_1.war3ToTS)('model', value);
                return;
            case 'blit':
                object.modelFileHasLightweightModel = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'bflo':
                object.fatLineOfSight = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'btxi':
                object.replaceableTextureID = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'btxf':
                object.replaceableTextureFile = (0, utils_1.war3ToTS)('texture', value);
                return;
            case 'buch':
                object.showHelperObjectForSelection = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'bonc':
                object.placeableOnCliffs = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'bonw':
                object.placeableOnWater = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'bcpd':
                object.showDeadVersionInPalette = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'bwal':
                object.isWalkable = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'bclh':
                object.cliffHeight = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'btar':
                object.targetedAs = (0, utils_1.war3ToTS)('targetList', value);
                return;
            case 'barm':
                object.armorType = (0, utils_1.war3ToTS)('armorType', value);
                return;
            case 'bvar':
                object.modelFileVariations = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'bhps':
                object.hitPoints = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'boch':
                object.occlusionHeight = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'bflh':
                object.flyOverHeight = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'bfxr':
                object.fixedRotation = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'bsel':
                object.selectionSizeEditor = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'bmis':
                object.minimumScale = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'bmas':
                object.maximumScale = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'bcpr':
                object.canPlaceRandomScale = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'bmap':
                object.maximumPitchAngleDegrees = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'bmar':
                object.maxRollAngleDegrees = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'brad':
                object.elevationSampleRadius = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'bfra':
                object.fogRadius = (0, utils_1.war3ToTS)('unreal', value);
                return;
            case 'bfvi':
                object.fogVisibility = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'bptx':
                object.pathingTexture = (0, utils_1.war3ToTS)('pathingTexture', value);
                return;
            case 'bptd':
                object.pathingTextureDead = (0, utils_1.war3ToTS)('pathingTexture', value);
                return;
            case 'bdsn':
                object.death = (0, utils_1.war3ToTS)('soundLabel', value);
                return;
            case 'bshd':
                object.shadow = (0, utils_1.war3ToTS)('shadowTexture', value);
                return;
            case 'bsmm':
                object.minimapShow = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'bmmr':
                object.minimapColor1Red = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'bmmg':
                object.minimapColor2Green = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'bmmb':
                object.minimapColor3Blue = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'bumm':
                object.minimapUseCustomColor = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'bbut':
                object.buildTime = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'bret':
                object.repairTime = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'breg':
                object.repairGoldCost = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'brel':
                object.repairLumberCost = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'busr':
                object.onUserSpecifiedList = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'bvcr':
                object.tintingColor1Red = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'bvcg':
                object.tintingColor2Green = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'bvcb':
                object.tintingColor3Blue = (0, utils_1.war3ToTS)('int', value);
                return;
            case 'bgse':
                object.selectableInGame = (0, utils_1.war3ToTS)('bool', value);
                return;
            case 'bgsc':
                object.selectionSizeGame = (0, utils_1.war3ToTS)('real', value);
                return;
            case 'bgpm':
                object.modelFilePortrait = (0, utils_1.war3ToTS)('model', value);
                return;
            default: throw Error(`Unknown modification: ${id}`);
        }
    }
}
exports.DestructableContainer = DestructableContainer;
//# sourceMappingURL=destructables.js.map