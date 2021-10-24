import MdlxLight, { LightType } from '../../../parsers/mdlx/light';
import MdxModel from './model';
import GenericObject from './genericobject';
/**
 * An MDX light.
 */
export default class Light extends GenericObject {
    type: LightType;
    attenuation: Float32Array;
    color: Float32Array;
    intensity: number;
    ambientColor: Float32Array;
    ambientIntensity: number;
    constructor(model: MdxModel, light: MdlxLight, index: number);
    getAttenuationStart(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getAttenuationEnd(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getIntensity(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getColor(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getAmbientIntensity(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getAmbientColor(out: Float32Array, sequence: number, frame: number, counter: number): number;
}
