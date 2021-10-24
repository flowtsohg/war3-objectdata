import M3ParserStandardMaterial from '../../../parsers/m3/standardmaterial';
import Shader from '../../gl/shader';
import Texture from '../../texture';
import M3Model from './model';
import M3Layer from './layer';
export declare const STANDARD_MATERIAL_OFFSET = 100;
/**
 * An M3 standard material.
 */
export declare class M3StandardMaterial {
    model: M3Model;
    gl: WebGLRenderingContext;
    index: number;
    name: string;
    flags: number;
    blendMode: number;
    priority: number;
    specularity: number;
    specMult: number;
    emisMult: number;
    layerBlendType: number;
    emisBlendType: number;
    emisMode: number;
    doubleSided: number;
    layers: M3Layer[];
    constructor(model: M3Model, index: number, material: M3ParserStandardMaterial);
    bindCommon(): void;
    bind(shader: Shader, textureOverrides: Map<number, Texture>): void;
    unbind(shader: Shader): void;
}
