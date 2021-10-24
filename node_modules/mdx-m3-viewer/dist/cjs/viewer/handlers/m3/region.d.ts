import M3ParserRegion from '../../../parsers/m3/region';
import Shader from '../../gl/shader';
import M3Model from './model';
/**
 * An M3 region.
 */
export default class M3Region {
    gl: WebGLRenderingContext;
    firstBoneLookupIndex: number;
    boneWeightPairsCount: number;
    offset: number;
    verticesCount: number;
    elements: number;
    constructor(model: M3Model, region: M3ParserRegion, triangles: Uint16Array, elementArray: Uint16Array, offset: number);
    render(shader: Shader): void;
}
