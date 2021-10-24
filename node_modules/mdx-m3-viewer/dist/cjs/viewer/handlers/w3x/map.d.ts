import { vec3 } from 'gl-matrix';
import War3Map from '../../../parsers/w3x/map';
import Corner from '../../../parsers/w3x/w3e/corner';
import War3MapW3u from '../../../parsers/w3x/w3u/file';
import War3MapW3d from '../../../parsers/w3x/w3d/file';
import ModificationTable from '../../../parsers/w3x/w3u/modificationtable';
import { MappedData, MappedDataRow } from '../../../utils/mappeddata';
import Scene from '../../scene';
import { PathSolver } from '../../handlerresource';
import Texture from '../../texture';
import TerrainModel from './terrainmodel';
import Unit from './unit';
import Doodad from './doodad';
import TerrainDoodad from './terraindoodad';
import War3MapViewer from './viewer';
import { Resource } from '../../resource';
export default class War3MapViewerMap {
    viewer: War3MapViewer;
    map: War3Map;
    pathSolver: PathSolver;
    buildVersion: number;
    solverParams: {
        tileset: string;
        reforged?: boolean;
        hd?: boolean;
    };
    worldScene: Scene;
    waterIndex: number;
    waterIncreasePerFrame: number;
    waterHeightOffset: number;
    waterTextures: Texture[];
    maxDeepColor: Float32Array;
    minDeepColor: Float32Array;
    maxShallowColor: Float32Array;
    minShallowColor: Float32Array;
    anyReady: boolean;
    terrainReady: boolean;
    cliffsReady: boolean;
    doodads: Doodad[];
    terrainDoodads: TerrainDoodad[];
    doodadsReady: boolean;
    units: Unit[];
    unitsReady: boolean;
    tilesetTextures: Texture[];
    cliffTextures: Texture[];
    cliffModels: TerrainModel[];
    corners: Corner[][];
    centerOffset: Float32Array;
    mapSize: Int32Array;
    tilesets: MappedDataRow[];
    blightTextureIndex: number;
    cliffTilesets: MappedDataRow[];
    columns: number;
    rows: number;
    vertexBuffer: WebGLBuffer | null;
    faceBuffer: WebGLBuffer | null;
    instanceBuffer: WebGLBuffer | null;
    textureBuffer: WebGLBuffer | null;
    variationBuffer: WebGLBuffer | null;
    waterBuffer: WebGLBuffer | null;
    heightMap: WebGLTexture | null;
    waterHeightMap: WebGLTexture | null;
    cliffHeightMap: WebGLTexture | null;
    constructor(viewer: War3MapViewer, buffer: ArrayBuffer | Uint8Array);
    die(): void;
    load(src: unknown): Promise<Resource | undefined>;
    loadMapInformation(): void;
    loadTerrainCliffsAndWater(): Promise<void>;
    loadDoodadsAndDestructibles(): void;
    loadUnitsAndItems(): void;
    /**
     * Update the map.
     */
    update(): void;
    /**
     * Render the map.
     */
    render(): void;
    renderGround(): void;
    renderWater(): void;
    renderCliffs(): void;
    cliffFileName(bottomLeftLayer: number, bottomRightLayer: number, topLeftLayer: number, topRightLayer: number, base: number): string;
    getVariation(groundTexture: number, variation: number): number;
    /**
     * Is the corner at the given column and row a cliff?
     */
    isCliff(column: number, row: number): boolean;
    /**
     * Is the tile at the given column and row water?
     */
    isWater(column: number, row: number): number;
    /**
     * Given a cliff index, get its ground texture index.
     * This is an index into the tilset textures.
     */
    cliffGroundIndex(whichCliff: number): number;
    /**
     * Get the ground texture of a corner, whether it's normal ground, a cliff, or a blighted corner.
     */
    cornerTexture(column: number, row: number): number;
    applyModificationFile(dataMap: MappedData, metadataMap: MappedData, modificationFile: War3MapW3u | War3MapW3d | undefined): void;
    applyModificationTable(dataMap: MappedData, metadataMap: MappedData, modificationTable: ModificationTable): void;
    groundNormal(out: vec3, x: number, y: number): vec3;
}
