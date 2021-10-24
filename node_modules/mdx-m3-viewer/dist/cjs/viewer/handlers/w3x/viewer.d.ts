import { FetchDataTypeName } from '../../../common/fetchdatatype';
import { MappedData } from '../../../utils/mappeddata';
import ModelViewer from '../../viewer';
import Shader from '../../gl/shader';
import { PathSolver } from '../../handlerresource';
import War3MapViewerMap from './map';
import GenericResource from '../../genericresource';
export default class War3MapViewer extends ModelViewer {
    wc3PathSolver: PathSolver;
    isReforged: boolean;
    groundShader: Shader;
    waterShader: Shader;
    cliffShader: Shader;
    terrainData: MappedData;
    cliffTypesData: MappedData;
    waterData: MappedData;
    doodadsData: MappedData;
    doodadMetaData: MappedData;
    destructableMetaData: MappedData;
    unitsData: MappedData;
    unitMetaData: MappedData;
    loadedBaseFiles: boolean;
    map: War3MapViewerMap | null;
    constructor(canvas: HTMLCanvasElement, wc3PathSolver: PathSolver, isReforged: boolean);
    loadBaseFiles(): Promise<void>;
    loadBaseFile(path: string, dataType: FetchDataTypeName): Promise<GenericResource | undefined>;
    /**
     * Load a map from a buffer.
     */
    loadMap(buffer: ArrayBuffer | Uint8Array): void;
    /**
     * Update the map.
     */
    update(): void;
    /**
     * Render the map.
     */
    render(): void;
}
