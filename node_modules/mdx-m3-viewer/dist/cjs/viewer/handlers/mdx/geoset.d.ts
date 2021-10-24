import Shader from '../../gl/shader';
import MdxModel from './model';
import GeosetAnimation from './geosetanimation';
import { SkinningType } from './batch';
/**
 * A geoset.
 */
export default class Geoset {
    model: MdxModel;
    index: number;
    positionOffset: number;
    normalOffset: number;
    uvOffset: number;
    tangentOffset: number;
    skinOffset: number;
    faceOffset: number;
    vertices: number;
    elements: number;
    faceType: number;
    geosetAnimation: GeosetAnimation | null;
    constructor(model: MdxModel, index: number, positionOffset: number, normalOffset: number, uvOffset: number, tangentOffset: number, skinOffset: number, faceOffset: number, vertices: number, elements: number, faceType: number);
    bindShared(gl: WebGLRenderingContext, attribs: {
        [key: string]: number;
    }, coordId: number): void;
    bindVertexGroups(gl: WebGLRenderingContext, attribs: {
        [key: string]: number;
    }): void;
    bindVertexGroupsExtended(gl: WebGLRenderingContext, attribs: {
        [key: string]: number;
    }): void;
    bindSkin(gl: WebGLRenderingContext, attribs: {
        [key: string]: number;
    }): void;
    bind(shader: Shader, coordId: number): void;
    bindExtended(shader: Shader, coordId: number): void;
    bindHd(shader: Shader, skinningType: SkinningType, coordId: number): void;
    render(): void;
}
