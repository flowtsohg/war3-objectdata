import Reference from '../../../parsers/m3/reference';
import Layer from '../../../parsers/m3/layer';
import Texture from '../../texture';
import Shader from '../../gl/shader';
import { M3StandardMaterial } from './standardmaterial';
import M3Model from './model';
import M3Texture from './texture';
/**
 * An M3 layer.
 */
export default class M3Layer {
    model: M3Model;
    material: M3StandardMaterial;
    index: number;
    active: number;
    layer: Layer | null;
    gl: WebGLRenderingContext;
    uniformMap: {
        map: string;
        enabled: string;
        op: string;
        channels: string;
        teamColorMode: string;
        invert: string;
        clampResult: string;
        uvCoordinate: string;
    };
    source: string;
    texture: M3Texture | null;
    flags: number;
    colorChannels: number;
    type: string;
    op: number;
    uvCoordinate: number;
    textureUnit: number;
    invert: number;
    clampResult: number;
    teamColorMode: number;
    constructor(material: M3StandardMaterial, index: number, layerReference: Reference, type: string, op: number);
    bind(shader: Shader, textureOverrides: Map<number, Texture>): void;
    unbind(shader: Shader): void;
}
