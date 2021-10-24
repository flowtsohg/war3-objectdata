import MdlxLayer, { FilterMode } from '../../../parsers/mdlx/layer';
import MdxModel from './model';
import AnimatedObject from './animatedobject';
import TextureAnimation from './textureanimation';
import Shader from '../../gl/shader';
/**
 * An MDX layer.
 */
export default class Layer extends AnimatedObject {
    index: number;
    priorityPlane: number;
    filterMode: FilterMode;
    textureId: number;
    coordId: number;
    alpha: number;
    unshaded: number;
    sphereEnvironmentMap: number;
    twoSided: number;
    unfogged: number;
    noDepthTest: number;
    noDepthSet: number;
    depthMaskValue: boolean;
    blendSrc: number;
    blendDst: number;
    blended: boolean;
    textureAnimation: TextureAnimation | null;
    constructor(model: MdxModel, layer: MdlxLayer, layerId: number, priorityPlane: number);
    bind(shader: Shader): void;
    getAlpha(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getTextureId(out: Uint32Array, sequence: number, frame: number, counter: number): number;
}
