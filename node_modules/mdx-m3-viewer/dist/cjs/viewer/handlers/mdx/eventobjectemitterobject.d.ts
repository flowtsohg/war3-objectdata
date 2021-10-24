import EventObject from '../../../parsers/mdlx/eventobject';
import MdxModel from './model';
import GenericObject from './genericobject';
import MdxModelInstance from './modelinstance';
import MdxTexture from './texture';
/**
 * An event object.
 */
export default class EventObjectEmitterObject extends GenericObject {
    geometryEmitterType: number;
    type: string;
    id: string;
    tracks: Uint32Array;
    globalSequence: number;
    defval: Uint32Array;
    internalModel: MdxModel | null;
    internalTexture: MdxTexture | null;
    colors: Float32Array[];
    intervalTimes: Float32Array;
    scale: number;
    columns: number;
    rows: number;
    lifeSpan: number;
    blendSrc: number;
    blendDst: number;
    intervals: Float32Array[];
    distanceCutoff: number;
    maxDistance: number;
    minDistance: number;
    pitch: number;
    pitchVariance: number;
    volume: number;
    decodedBuffers: AudioBuffer[];
    ok: boolean;
    constructor(model: MdxModel, eventObject: EventObject, index: number);
    getValue(out: Uint32Array, instance: MdxModelInstance): number;
    getValueAtTime(out: Uint32Array, frame: number, start: number, end: number): number;
}
