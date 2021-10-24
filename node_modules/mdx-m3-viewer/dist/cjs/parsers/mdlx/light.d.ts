import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
import GenericObject from './genericobject';
export declare const enum LightType {
    None = -1,
    Omnidirectional = 0,
    Directional = 1,
    Ambient = 2
}
/**
 * A light.
 */
export default class Light extends GenericObject {
    type: LightType;
    attenuation: Float32Array;
    color: Float32Array;
    intensity: number;
    ambientColor: Float32Array;
    ambientIntensity: number;
    constructor();
    readMdx(stream: BinaryStream): void;
    writeMdx(stream: BinaryStream): void;
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream): void;
    getByteLength(): number;
}
