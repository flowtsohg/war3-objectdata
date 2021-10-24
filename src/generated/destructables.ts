import Modification from 'mdx-m3-viewer/dist/cjs/parsers/w3x/w3u/modification';
import { OEContainer } from '../container';
import { war3ToTS, tsToWar3 } from '../utils';
import * as objects from './destructablesdata.json';

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

export enum Destructables {
  AshenvaleCanopyTree = 'ATtc',
  AshenvaleTreeWall = 'ATtr',
  Barrel = 'LTbr',
  Barrel2 = 'LTbx',
  Barrel3 = 'LTbs',
  BarrelOfExplosives = 'LTex',
  BarrensCanopyTree = 'BTtc',
  BarrensTreeWall = 'BTtw',
  Barricade = 'LTba',
  BlackCitadelTreeWall = 'KTtw',
  BridgeDestroyed = 'YSdb',
  BridgeDestroyed2 = 'YSdc',
  Building = 'XTbd',
  Cage = 'LOcg',
  CityEntrance = 'YTce',
  CityEntrance2 = 'YTcx',
  CityscapeFallTreeWall = 'YTft',
  CityscapeRuinedTreeWall = 'JTct',
  CityscapeSnowyTreeWall = 'YTst',
  CityscapeSummerTreeWall = 'YTct',
  CityscapeWinterTreeWall = 'YTwt',
  CliffCaveGate = 'DTc1',
  CliffCaveGate2 = 'DTc2',
  Crates = 'LTcr',
  DalaranRuinsTreeWall = 'JTtw',
  DalaranVioletCitadel = 'XTvt',
  DemonStorm = 'OTds',
  DemonicGate = 'ATg1',
  DemonicGate2 = 'ATg2',
  DemonicGate3 = 'ATg3',
  DemonicGate4 = 'ATg4',
  DungeonGate = 'DTg1',
  DungeonGate2 = 'DTg2',
  DungeonGate3 = 'DTg3',
  DungeonGate4 = 'DTg4',
  DungeonSpikes = 'DTsp',
  DungeonTreeWall = 'DTsh',
  EggSack = 'DTes',
  Elevator = 'DTrf',
  Elevator2 = 'DTrx',
  ElevatorWall = 'DTep',
  ElvenBridge = 'YT67',
  ElvenGate = 'LTe1',
  ElvenGate2 = 'LTe2',
  ElvenGate3 = 'LTe3',
  ElvenGate4 = 'LTe4',
  ExtraWideNaturalBridge = 'YT48',
  ExtraWideNaturalBridge2 = 'YT49',
  ExtraWideNaturalBridge3 = 'YT50',
  ExtraWideNaturalBridge4 = 'YT51',
  FallTreeWall = 'FTtw',
  FelwoodCanopyTree = 'CTtc',
  FelwoodTreeWall = 'CTtr',
  FootSwitch = 'DTfp',
  FootSwitch2 = 'DTfx',
  ForceBridge = 'DTs0',
  ForceBridge2 = 'DTs1',
  ForceBridge3 = 'DTs2',
  ForceBridge4 = 'DTs3',
  ForceWall = 'Dofw',
  ForceWall2 = 'Dofv',
  FrozenThroneGate = 'ITtg',
  Gate = 'LTg1',
  Gate2 = 'LTg2',
  Gate3 = 'LTg3',
  Gate4 = 'LTg4',
  IceBridge = 'ITib',
  IceBridge2 = 'ITi2',
  IceBridge3 = 'ITi3',
  IceBridge4 = 'ITi4',
  IceFloe = 'ITf1',
  IceFloe2 = 'ITf2',
  IceFloe3 = 'ITf3',
  IceFloe4 = 'ITf4',
  IceRockGate = 'ITx1',
  IceRockGate2 = 'ITx2',
  IceRockGate3 = 'ITx3',
  IceRockGate4 = 'ITx4',
  IcecrownCanopyTree = 'ITtc',
  IcecrownCitadelEntrance = 'YTc1',
  IcecrownThrone = 'IOt0',
  IcecrownThroneDiagonal1 = 'IOt1',
  IcecrownThroneDiagonal12 = 'IOt2',
  IcecrownTreeWall = 'ITtw',
  IceyRock = 'ITcr',
  IcyGate = 'ITg1',
  IcyGate2 = 'ITg2',
  IcyGate3 = 'ITg3',
  IcyGate4 = 'ITg4',
  Igloo = 'ITig',
  InvisiblePlatform = 'OTip',
  InvisiblePlatformSmall = 'OTis',
  IronGate = 'DTg5',
  IronGate2 = 'DTg6',
  IronGate3 = 'DTg7',
  IronGate4 = 'DTg8',
  KingsThrone = 'XOkt',
  KingsThroneDiagonal1 = 'XOk1',
  KingsThroneDiagonal12 = 'XOk2',
  LastHopeBridge = 'LTtc',
  LastHopeBridge2 = 'LTtx',
  Lever = 'DTlv',
  LineOfSightBlocker = 'YTlb',
  LineOfSightBlockerLarge = 'Ytlc',
  LionStatue = 'BTs2',
  LionStatueDestroyed = 'BTs3',
  LongElvenBridge = 'EB04',
  LongElvenBridge2 = 'EB05',
  LongElvenBridge3 = 'EB06',
  LongElvenBridge4 = 'EB07',
  LongNaturalBridge = 'YT04',
  LongNaturalBridge2 = 'YT05',
  LongNaturalBridge3 = 'YT06',
  LongNaturalBridge4 = 'YT07',
  LongNaturalBridge5 = 'YT28',
  LongNaturalBridge6 = 'YT29',
  LongNaturalBridge7 = 'YT30',
  LongNaturalBridge8 = 'YT31',
  LongNightElvenWoodenBridge = 'NB04',
  LongNightElvenWoodenBridge2 = 'NB05',
  LongNightElvenWoodenBridge3 = 'NB06',
  LongNightElvenWoodenBridge4 = 'NB07',
  LongOvergrownBridge = 'OG04',
  LongOvergrownBridge2 = 'OG05',
  LongOvergrownBridge3 = 'OG06',
  LongOvergrownBridge4 = 'OG07',
  LongRicketyWoodenBridge = 'RW04',
  LongRicketyWoodenBridge2 = 'RW05',
  LongRicketyWoodenBridge3 = 'RW06',
  LongRicketyWoodenBridge4 = 'RW07',
  LongStoneBridge = 'YT16',
  LongStoneBridge2 = 'YT17',
  LongStoneBridge3 = 'YT18',
  LongStoneBridge4 = 'YT19',
  LongStoneBridge5 = 'YT40',
  LongStoneBridge6 = 'YT41',
  LongStoneBridge7 = 'YT42',
  LongStoneBridge8 = 'YT43',
  LongStratholmeBridge = 'YY16',
  LongStratholmeBridge2 = 'YY17',
  LongStratholmeBridge3 = 'YY18',
  LongStratholmeBridge4 = 'YY19',
  LongWoodenBridge = 'LT04',
  LongWoodenBridge2 = 'LT05',
  LongWoodenBridge3 = 'LT06',
  LongWoodenBridge4 = 'LT07',
  LordaeronCityDome = 'XTv1',
  LordaeronCityDomeDestroyed = 'XTv2',
  LordaeronCityMainBuilding = 'XTv3',
  LordaeronCityMainBuildingDestroyed = 'XTv4',
  LordaeronCityMainGate = 'YTc2',
  LordaeronCityMainGateColumn = 'BTsk',
  LordaeronCityMainGateColumnDestroyed = 'BTs1',
  LordaeronCityMainGateDestroyed = 'YTc4',
  LordaeronCitySpire = 'BTs4',
  LordaeronCitySpireDestroyed = 'BTs5',
  MagicalPen = 'XTmp',
  MagicalPen2 = 'XTm5',
  MagicalPenWall = 'XTmx',
  MagicalPenWall2 = 'XTx5',
  MassiveRuinedGate = 'ZTsg',
  MassiveRuinedGate2 = 'ZTsx',
  NorthrendCanopyTree = 'NTtc',
  NorthrendIcyTreeWall = 'NTiw',
  NorthrendTreeWall = 'NTtw',
  OrgrimmarGate = 'YTcn',
  OrgrimmarTowerCompleted = 'XTv8',
  OrgrimmarTowerUnderConstruction = 'XTv7',
  OrgrimmarWallSegmentCompleted = 'XTv6',
  OrgrimmarWallSegmentUnderConstruction = 'XTv5',
  OutlandTreeWall = 'OTtw',
  PathingBlockerAir = 'YTab',
  PathingBlockerAirLarge = 'YTac',
  PathingBlockerBoth = 'YTfb',
  PathingBlockerBothLarge = 'YTfc',
  PathingBlockerGround = 'YTpb',
  PathingBlockerGroundLarge = 'YTpc',
  PyrewoodVillagePineTree = 'LFpt',
  RampNagaSmallBottom = 'ZTr3',
  RampNagaSmallLeft = 'ZTr0',
  RampNagaSmallRight = 'ZTr2',
  RampNagaSmallTop = 'ZTr1',
  ResurrectionStone = 'BTrs',
  ResurrectionStone2 = 'BTrx',
  RockChunks = 'DTrc',
  RockChunks2 = 'LTrc',
  RockChunks3 = 'LTrt',
  RockinArthas = 'ITag',
  RollingStoneDoor = 'ITd4',
  RollingStoneDoor2 = 'ZTd2',
  RollingStoneDoor3 = 'ZTd3',
  RollingStoneDoor4 = 'ZTd4',
  RollingStoneDoor5 = 'ZTd5',
  RollingStoneDoor6 = 'ZTd6',
  RollingStoneDoor7 = 'ZTd7',
  RollingStoneDoor8 = 'ZTd8',
  RollingStoneDoor9 = 'ITd1',
  RuinedGate = 'ZTg1',
  RuinedGate2 = 'ZTg2',
  RuinedGate3 = 'ZTg3',
  RuinedGate4 = 'ZTg4',
  RuinsCanopyTree = 'ZTtc',
  RuinsNagaCircle = 'ZTnc',
  RuinsTreeWall = 'ZTtw',
  ScorchedTreeWall = 'Ytsc',
  ScorchedTreeWall2 = 'YTsc',
  ShimmeringPortal = 'OTsp',
  Ship = 'NTbd',
  ShortElvenBridge = 'EB00',
  ShortElvenBridge2 = 'EB01',
  ShortElvenBridge3 = 'EB02',
  ShortElvenBridge4 = 'EB03',
  ShortNaturalBridge = 'YT00',
  ShortNaturalBridge2 = 'YT01',
  ShortNaturalBridge3 = 'YT02',
  ShortNaturalBridge4 = 'YT03',
  ShortNaturalBridge5 = 'YT24',
  ShortNaturalBridge6 = 'YT25',
  ShortNaturalBridge7 = 'YT26',
  ShortNaturalBridge8 = 'YT27',
  ShortNightElvenWoodenBridge = 'NB00',
  ShortNightElvenWoodenBridge2 = 'NB01',
  ShortNightElvenWoodenBridge3 = 'NB02',
  ShortNightElvenWoodenBridge4 = 'NB03',
  ShortOvergrownBridge = 'OG00',
  ShortOvergrownBridge2 = 'OG01',
  ShortOvergrownBridge3 = 'OG02',
  ShortOvergrownBridge4 = 'OG03',
  ShortRicketyWoodenBridge = 'RW00',
  ShortRicketyWoodenBridge2 = 'RW01',
  ShortRicketyWoodenBridge3 = 'RW02',
  ShortRicketyWoodenBridge4 = 'RW03',
  ShortStoneBridge = 'YT12',
  ShortStoneBridge2 = 'YT13',
  ShortStoneBridge3 = 'YT14',
  ShortStoneBridge4 = 'YT15',
  ShortStoneBridge5 = 'YT36',
  ShortStoneBridge6 = 'YT37',
  ShortStoneBridge7 = 'YT38',
  ShortStoneBridge8 = 'YT39',
  ShortStratholmeBridge = 'YY12',
  ShortStratholmeBridge2 = 'YY13',
  ShortStratholmeBridge3 = 'YY14',
  ShortStratholmeBridge4 = 'YY15',
  ShortWoodenBridge = 'LT00',
  ShortWoodenBridge2 = 'LT01',
  ShortWoodenBridge3 = 'LT02',
  ShortWoodenBridge4 = 'LT03',
  SilvermoonTree = 'Yts1',
  SilvermoonTree2 = 'STlt',
  SilvermoonTreeBlight = 'Yts2',
  SilvermoonTreeDead = 'Yts3',
  SnowyTreeWall = 'WTst',
  SpecialIceBridge = 'YT66',
  StoneRamp = 'LTs8',
  StoneRamp2 = 'LTr2',
  StoneRamp3 = 'LTr3',
  StoneRamp4 = 'LTr4',
  StoneRamp5 = 'LTr5',
  StoneRamp6 = 'LTr6',
  StoneRamp7 = 'LTr7',
  StoneRamp8 = 'LTr8',
  StoneRamp9 = 'LTs1',
  StoneWall = 'ITw3',
  StoneWall2 = 'LTw1',
  StoneWall3 = 'LTw2',
  StoneWall4 = 'LTw3',
  StoneWall5 = 'ZTw0',
  StoneWall6 = 'ZTw1',
  StoneWall7 = 'ZTw2',
  StoneWall8 = 'ZTw3',
  StoneWall9 = 'ITw0',
  SummerTreeWall = 'LTlt',
  SupportColumn = 'BTsc',
  TreeBridge = 'LTt0',
  TreeBridge2 = 'LTt1',
  TreeBridge3 = 'LTt2',
  TreeBridge4 = 'LTt3',
  TreeBridge5 = 'LTt4',
  TreeBridge6 = 'ATt0',
  TreeBridge7 = 'ATt1',
  TreeBridge8 = 'LTt5',
  UndergroundTreeWall = 'GTsh',
  VillageTreeWall = 'VTlt',
  Volcano = 'Volc',
  WaygateRamp = 'WGTR',
  Wharf = 'ATwf',
  WideElvenBridge = 'EB08',
  WideElvenBridge2 = 'EB09',
  WideElvenBridge3 = 'EB10',
  WideElvenBridge4 = 'EB11',
  WideNaturalBridge = 'YT08',
  WideNaturalBridge2 = 'YT09',
  WideNaturalBridge3 = 'YT10',
  WideNaturalBridge4 = 'YT11',
  WideNaturalBridge5 = 'YT32',
  WideNaturalBridge6 = 'YT33',
  WideNaturalBridge7 = 'YT34',
  WideNaturalBridge8 = 'YT35',
  WideNightElvenWoodenBridge = 'NB08',
  WideNightElvenWoodenBridge2 = 'NB09',
  WideNightElvenWoodenBridge3 = 'NB10',
  WideNightElvenWoodenBridge4 = 'NB11',
  WideOvergrownBridge = 'OG08',
  WideOvergrownBridge2 = 'OG09',
  WideOvergrownBridge3 = 'OG10',
  WideOvergrownBridge4 = 'OG11',
  WideRicketyWoodenBridge = 'RW08',
  WideRicketyWoodenBridge2 = 'RW09',
  WideRicketyWoodenBridge3 = 'RW10',
  WideRicketyWoodenBridge4 = 'RW11',
  WideStoneBridge = 'YT20',
  WideStoneBridge2 = 'YT21',
  WideStoneBridge3 = 'YT22',
  WideStoneBridge4 = 'YT23',
  WideStoneBridge5 = 'YT44',
  WideStoneBridge6 = 'YT45',
  WideStoneBridge7 = 'YT46',
  WideStoneBridge8 = 'YT47',
  WideStratholmeBridge = 'YY20',
  WideStratholmeBridge2 = 'YY21',
  WideStratholmeBridge3 = 'YY22',
  WideStratholmeBridge4 = 'YY23',
  WideWoodenBridge = 'LT08',
  WideWoodenBridge2 = 'LT09',
  WideWoodenBridge3 = 'LT10',
  WideWoodenBridge4 = 'LT11',
  WinterTreeWall = 'WTtw',
  Ydeng = 'Y425',
}

type MapDestructable = { oldId: string, newId: string } & Destructable;

export class DestructableContainer extends OEContainer<Destructable> {
  override game = <{[key in Destructables]: Destructable}>objects;
  override map: {[key: string]: MapDestructable } = {};
  override loadModification(object: MapDestructable, modification: Modification) {
    const { id, value } = modification;
    switch(id) {
      case 'bnam': object.name = war3ToTS('string', value); return;
      case 'bsuf': object.editorSuffix = war3ToTS('string', value); return;
      case 'bcat': object.category = war3ToTS('destructableCategory', value); return;
      case 'btil': object.tilesets = war3ToTS('tilesetList', value); return;
      case 'btsp': object.hasTilesetSpecificData = war3ToTS('bool', value); return;
      case 'bfil': object.modelFile = war3ToTS('model', value); return;
      case 'blit': object.modelFileHasLightweightModel = war3ToTS('bool', value); return;
      case 'bflo': object.fatLineOfSight = war3ToTS('bool', value); return;
      case 'btxi': object.replaceableTextureID = war3ToTS('int', value); return;
      case 'btxf': object.replaceableTextureFile = war3ToTS('texture', value); return;
      case 'buch': object.showHelperObjectForSelection = war3ToTS('bool', value); return;
      case 'bonc': object.placeableOnCliffs = war3ToTS('bool', value); return;
      case 'bonw': object.placeableOnWater = war3ToTS('bool', value); return;
      case 'bcpd': object.showDeadVersionInPalette = war3ToTS('bool', value); return;
      case 'bwal': object.isWalkable = war3ToTS('bool', value); return;
      case 'bclh': object.cliffHeight = war3ToTS('int', value); return;
      case 'btar': object.targetedAs = war3ToTS('targetList', value); return;
      case 'barm': object.armorType = war3ToTS('armorType', value); return;
      case 'bvar': object.modelFileVariations = war3ToTS('int', value); return;
      case 'bhps': object.hitPoints = war3ToTS('unreal', value); return;
      case 'boch': object.occlusionHeight = war3ToTS('unreal', value); return;
      case 'bflh': object.flyOverHeight = war3ToTS('unreal', value); return;
      case 'bfxr': object.fixedRotation = war3ToTS('unreal', value); return;
      case 'bsel': object.selectionSizeEditor = war3ToTS('unreal', value); return;
      case 'bmis': object.minimumScale = war3ToTS('unreal', value); return;
      case 'bmas': object.maximumScale = war3ToTS('unreal', value); return;
      case 'bcpr': object.canPlaceRandomScale = war3ToTS('bool', value); return;
      case 'bmap': object.maximumPitchAngleDegrees = war3ToTS('unreal', value); return;
      case 'bmar': object.maxRollAngleDegrees = war3ToTS('unreal', value); return;
      case 'brad': object.elevationSampleRadius = war3ToTS('unreal', value); return;
      case 'bfra': object.fogRadius = war3ToTS('unreal', value); return;
      case 'bfvi': object.fogVisibility = war3ToTS('bool', value); return;
      case 'bptx': object.pathingTexture = war3ToTS('pathingTexture', value); return;
      case 'bptd': object.pathingTextureDead = war3ToTS('pathingTexture', value); return;
      case 'bdsn': object.death = war3ToTS('soundLabel', value); return;
      case 'bshd': object.shadow = war3ToTS('shadowTexture', value); return;
      case 'bsmm': object.minimapShow = war3ToTS('bool', value); return;
      case 'bmmr': object.minimapColor1Red = war3ToTS('int', value); return;
      case 'bmmg': object.minimapColor2Green = war3ToTS('int', value); return;
      case 'bmmb': object.minimapColor3Blue = war3ToTS('int', value); return;
      case 'bumm': object.minimapUseCustomColor = war3ToTS('bool', value); return;
      case 'bbut': object.buildTime = war3ToTS('int', value); return;
      case 'bret': object.repairTime = war3ToTS('int', value); return;
      case 'breg': object.repairGoldCost = war3ToTS('int', value); return;
      case 'brel': object.repairLumberCost = war3ToTS('int', value); return;
      case 'busr': object.onUserSpecifiedList = war3ToTS('bool', value); return;
      case 'bvcr': object.tintingColor1Red = war3ToTS('int', value); return;
      case 'bvcg': object.tintingColor2Green = war3ToTS('int', value); return;
      case 'bvcb': object.tintingColor3Blue = war3ToTS('int', value); return;
      case 'bgse': object.selectableInGame = war3ToTS('bool', value); return;
      case 'bgsc': object.selectionSizeGame = war3ToTS('real', value); return;
      case 'bgpm': object.modelFilePortrait = war3ToTS('model', value); return;
      default: throw Error(`Unknown modification: ${id}`);
    }
  }
  override saveModifications(gameObject: Destructable, object: MapDestructable): Modification[] {
    const modifications: Modification[] = [];
    if (object.name !== gameObject.name) { modifications.push(tsToWar3('bnam', 'string', object.name)); }
    if (object.editorSuffix !== gameObject.editorSuffix) { modifications.push(tsToWar3('bsuf', 'string', object.editorSuffix)); }
    if (object.category !== gameObject.category) { modifications.push(tsToWar3('bcat', 'destructableCategory', object.category)); }
    if (object.tilesets !== gameObject.tilesets) { modifications.push(tsToWar3('btil', 'tilesetList', object.tilesets)); }
    if (object.hasTilesetSpecificData !== gameObject.hasTilesetSpecificData) { modifications.push(tsToWar3('btsp', 'bool', object.hasTilesetSpecificData)); }
    if (object.modelFile !== gameObject.modelFile) { modifications.push(tsToWar3('bfil', 'model', object.modelFile)); }
    if (object.modelFileHasLightweightModel !== gameObject.modelFileHasLightweightModel) { modifications.push(tsToWar3('blit', 'bool', object.modelFileHasLightweightModel)); }
    if (object.fatLineOfSight !== gameObject.fatLineOfSight) { modifications.push(tsToWar3('bflo', 'bool', object.fatLineOfSight)); }
    if (object.replaceableTextureID !== gameObject.replaceableTextureID) { modifications.push(tsToWar3('btxi', 'int', object.replaceableTextureID)); }
    if (object.replaceableTextureFile !== gameObject.replaceableTextureFile) { modifications.push(tsToWar3('btxf', 'texture', object.replaceableTextureFile)); }
    if (object.showHelperObjectForSelection !== gameObject.showHelperObjectForSelection) { modifications.push(tsToWar3('buch', 'bool', object.showHelperObjectForSelection)); }
    if (object.placeableOnCliffs !== gameObject.placeableOnCliffs) { modifications.push(tsToWar3('bonc', 'bool', object.placeableOnCliffs)); }
    if (object.placeableOnWater !== gameObject.placeableOnWater) { modifications.push(tsToWar3('bonw', 'bool', object.placeableOnWater)); }
    if (object.showDeadVersionInPalette !== gameObject.showDeadVersionInPalette) { modifications.push(tsToWar3('bcpd', 'bool', object.showDeadVersionInPalette)); }
    if (object.isWalkable !== gameObject.isWalkable) { modifications.push(tsToWar3('bwal', 'bool', object.isWalkable)); }
    if (object.cliffHeight !== gameObject.cliffHeight) { modifications.push(tsToWar3('bclh', 'int', object.cliffHeight)); }
    if (object.targetedAs !== gameObject.targetedAs) { modifications.push(tsToWar3('btar', 'targetList', object.targetedAs)); }
    if (object.armorType !== gameObject.armorType) { modifications.push(tsToWar3('barm', 'armorType', object.armorType)); }
    if (object.modelFileVariations !== gameObject.modelFileVariations) { modifications.push(tsToWar3('bvar', 'int', object.modelFileVariations)); }
    if (object.hitPoints !== gameObject.hitPoints) { modifications.push(tsToWar3('bhps', 'unreal', object.hitPoints)); }
    if (object.occlusionHeight !== gameObject.occlusionHeight) { modifications.push(tsToWar3('boch', 'unreal', object.occlusionHeight)); }
    if (object.flyOverHeight !== gameObject.flyOverHeight) { modifications.push(tsToWar3('bflh', 'unreal', object.flyOverHeight)); }
    if (object.fixedRotation !== gameObject.fixedRotation) { modifications.push(tsToWar3('bfxr', 'unreal', object.fixedRotation)); }
    if (object.selectionSizeEditor !== gameObject.selectionSizeEditor) { modifications.push(tsToWar3('bsel', 'unreal', object.selectionSizeEditor)); }
    if (object.minimumScale !== gameObject.minimumScale) { modifications.push(tsToWar3('bmis', 'unreal', object.minimumScale)); }
    if (object.maximumScale !== gameObject.maximumScale) { modifications.push(tsToWar3('bmas', 'unreal', object.maximumScale)); }
    if (object.canPlaceRandomScale !== gameObject.canPlaceRandomScale) { modifications.push(tsToWar3('bcpr', 'bool', object.canPlaceRandomScale)); }
    if (object.maximumPitchAngleDegrees !== gameObject.maximumPitchAngleDegrees) { modifications.push(tsToWar3('bmap', 'unreal', object.maximumPitchAngleDegrees)); }
    if (object.maxRollAngleDegrees !== gameObject.maxRollAngleDegrees) { modifications.push(tsToWar3('bmar', 'unreal', object.maxRollAngleDegrees)); }
    if (object.elevationSampleRadius !== gameObject.elevationSampleRadius) { modifications.push(tsToWar3('brad', 'unreal', object.elevationSampleRadius)); }
    if (object.fogRadius !== gameObject.fogRadius) { modifications.push(tsToWar3('bfra', 'unreal', object.fogRadius)); }
    if (object.fogVisibility !== gameObject.fogVisibility) { modifications.push(tsToWar3('bfvi', 'bool', object.fogVisibility)); }
    if (object.pathingTexture !== gameObject.pathingTexture) { modifications.push(tsToWar3('bptx', 'pathingTexture', object.pathingTexture)); }
    if (object.pathingTextureDead !== gameObject.pathingTextureDead) { modifications.push(tsToWar3('bptd', 'pathingTexture', object.pathingTextureDead)); }
    if (object.death !== gameObject.death) { modifications.push(tsToWar3('bdsn', 'soundLabel', object.death)); }
    if (object.shadow !== gameObject.shadow) { modifications.push(tsToWar3('bshd', 'shadowTexture', object.shadow)); }
    if (object.minimapShow !== gameObject.minimapShow) { modifications.push(tsToWar3('bsmm', 'bool', object.minimapShow)); }
    if (object.minimapColor1Red !== gameObject.minimapColor1Red) { modifications.push(tsToWar3('bmmr', 'int', object.minimapColor1Red)); }
    if (object.minimapColor2Green !== gameObject.minimapColor2Green) { modifications.push(tsToWar3('bmmg', 'int', object.minimapColor2Green)); }
    if (object.minimapColor3Blue !== gameObject.minimapColor3Blue) { modifications.push(tsToWar3('bmmb', 'int', object.minimapColor3Blue)); }
    if (object.minimapUseCustomColor !== gameObject.minimapUseCustomColor) { modifications.push(tsToWar3('bumm', 'bool', object.minimapUseCustomColor)); }
    if (object.buildTime !== gameObject.buildTime) { modifications.push(tsToWar3('bbut', 'int', object.buildTime)); }
    if (object.repairTime !== gameObject.repairTime) { modifications.push(tsToWar3('bret', 'int', object.repairTime)); }
    if (object.repairGoldCost !== gameObject.repairGoldCost) { modifications.push(tsToWar3('breg', 'int', object.repairGoldCost)); }
    if (object.repairLumberCost !== gameObject.repairLumberCost) { modifications.push(tsToWar3('brel', 'int', object.repairLumberCost)); }
    if (object.onUserSpecifiedList !== gameObject.onUserSpecifiedList) { modifications.push(tsToWar3('busr', 'bool', object.onUserSpecifiedList)); }
    if (object.tintingColor1Red !== gameObject.tintingColor1Red) { modifications.push(tsToWar3('bvcr', 'int', object.tintingColor1Red)); }
    if (object.tintingColor2Green !== gameObject.tintingColor2Green) { modifications.push(tsToWar3('bvcg', 'int', object.tintingColor2Green)); }
    if (object.tintingColor3Blue !== gameObject.tintingColor3Blue) { modifications.push(tsToWar3('bvcb', 'int', object.tintingColor3Blue)); }
    if (object.selectableInGame !== gameObject.selectableInGame) { modifications.push(tsToWar3('bgse', 'bool', object.selectableInGame)); }
    if (object.selectionSizeGame !== gameObject.selectionSizeGame) { modifications.push(tsToWar3('bgsc', 'real', object.selectionSizeGame)); }
    if (object.modelFilePortrait !== gameObject.modelFilePortrait) { modifications.push(tsToWar3('bgpm', 'model', object.modelFilePortrait)); }
    return modifications;
  }
}