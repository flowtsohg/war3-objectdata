import MdlxParticleEmitter2 from '../../../parsers/mdlx/particleemitter2';
import MdxModel from './model';
import GenericObject from './genericobject';
import MdxTexture from './texture';
/**
 * An MDX particle emitter type 2.
 */
export default class ParticleEmitter2Object extends GenericObject {
    geometryEmitterType: number;
    width: number;
    length: number;
    speed: number;
    latitude: number;
    gravity: number;
    emissionRate: number;
    squirt: number;
    lifeSpan: number;
    variation: number;
    tailLength: number;
    timeMiddle: number;
    columns: number;
    rows: number;
    teamColored: number;
    internalTexture: MdxTexture | null;
    replaceableId: number;
    textureId: number;
    head: boolean;
    tail: boolean;
    cellWidth: number;
    cellHeight: number;
    colors: Float32Array[];
    scaling: Float32Array;
    intervals: Float32Array[];
    filterMode: number;
    blendSrc: number;
    blendDst: number;
    priorityPlane: number;
    lineEmitter: number;
    unfogged: number;
    modelSpace: number;
    xYQuad: number;
    /**
     * Even if the internal texture isn't loaded, it's fine to run emitters based on this emitter object.
     *
     * The particles will simply be black.
     */
    ok: boolean;
    constructor(model: MdxModel, emitter: MdlxParticleEmitter2, index: number);
    getWidth(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getLength(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getSpeed(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getLatitude(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getGravity(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getEmissionRate(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getVariation(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getVisibility(out: Float32Array, sequence: number, frame: number, counter: number): number;
}
