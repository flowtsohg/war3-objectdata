import ParticleEmitter from '../../../parsers/mdlx/particleemitter';
import MdxModel from './model';
import GenericObject from './genericobject';
/**
 * An MDX particle emitter.
 */
export default class ParticleEmitterObject extends GenericObject {
    internalModel: MdxModel | null;
    speed: number;
    latitude: number;
    longitude: number;
    lifeSpan: number;
    gravity: number;
    emissionRate: number;
    ok: boolean;
    constructor(model: MdxModel, emitter: ParticleEmitter, index: number);
    getSpeed(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getLatitude(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getLongitude(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getLifeSpan(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getGravity(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getEmissionRate(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getVisibility(out: Float32Array, sequence: number, frame: number, counter: number): number;
}
