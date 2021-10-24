import { MappedDataRow } from '../../../utils/mappeddata';
import ModelViewer from '../../viewer';
import Shader from '../../gl/shader';
import { PathSolver } from '../../handlerresource';
import { Resource } from '../../resource';
import GenericResource from '../../genericresource';
import Model from './model';
import MdxTexture from './texture';
import { SkinningType } from './batch';
export interface EventObjectData {
    row: MappedDataRow;
    resources: Resource[];
}
export interface MdxHandlerObject {
    pathSolver?: PathSolver;
    reforged: boolean;
    sdShader: Shader;
    sdExtendedShader: Shader;
    hdShader: Shader;
    hdExtendedShader: Shader;
    hdSkinShader: Shader;
    particlesShader: Shader;
    sdDebugShaders: Shader[][];
    hdDebugShaders: Shader[][];
    rectBuffer: WebGLBuffer;
    teamColors: MdxTexture[];
    teamGlows: MdxTexture[];
    eventObjectTables: {
        [key: string]: GenericResource[];
    };
}
declare const _default: {
    load(viewer: ModelViewer, pathSolver?: PathSolver | undefined, reforged?: boolean): void;
    isValidSource(object: unknown): boolean;
    resource: typeof Model;
    loadTeamTextures(viewer: ModelViewer): void;
    getEventObjectSoundFile(file: string, reforged: boolean, isHd: boolean, tables: GenericResource[]): string | undefined;
    getEventObjectData(viewer: ModelViewer, type: string, id: string, isHd: boolean): Promise<EventObjectData | undefined>;
    getBatchShader(viewer: ModelViewer, skinningType: SkinningType, isHd: boolean): Shader;
};
export default _default;
