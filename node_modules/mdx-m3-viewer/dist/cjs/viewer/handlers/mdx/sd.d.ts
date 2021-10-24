import { vec3, quat } from 'gl-matrix';
import { Animation, InterpolationType } from '../../../parsers/mdlx/animations';
import MdxModel from './model';
/**
 * Animated data for a specific sequence.
 */
declare class SdSequence {
    sd: Sd;
    start: number;
    end: number;
    frames: number[];
    values: (Uint32Array | Float32Array)[];
    inTans: (Uint32Array | Float32Array)[];
    outTans: (Uint32Array | Float32Array)[];
    constant: boolean;
    constructor(sd: Sd, start: number, end: number, animation: Animation, isGlobal: boolean);
    getValue(out: Uint32Array | Float32Array, frame: number): number;
}
/**
 * Animated data.
 */
export declare abstract class Sd {
    defval: Float32Array | Uint32Array;
    model: MdxModel;
    name: string;
    globalSequence: SdSequence | null;
    sequences: SdSequence[];
    interpolationType: InterpolationType;
    abstract copy(out: Uint32Array | Float32Array | vec3 | quat, value: Uint32Array | Float32Array | vec3 | quat): void;
    abstract interpolate(out: Uint32Array | Float32Array | vec3 | quat, values: (Uint32Array | Float32Array | vec3 | quat)[], inTans: (Uint32Array | Float32Array | vec3 | quat)[], outTans: (Uint32Array | Float32Array | vec3 | quat)[], start: number, end: number, t: number): void;
    constructor(model: MdxModel, animation: Animation);
    getValue(out: Uint32Array | Float32Array, sequence: number, frame: number, counter: number): number;
    isVariant(sequence: number): boolean;
}
/**
 * A scalar animation.
 */
export declare class ScalarSd extends Sd {
    copy<T extends Uint32Array | Float32Array>(out: T, value: T): void;
    interpolate<T extends Uint32Array | Float32Array>(out: T, values: T[], inTans: T[], outTans: T[], start: number, end: number, t: number): void;
}
/**
 * A vector animation.
 */
export declare class VectorSd extends Sd {
    copy(out: vec3, value: vec3): void;
    interpolate(out: vec3, values: vec3[], inTans: vec3[], outTans: vec3[], start: number, end: number, t: number): void;
}
/**
 * A quaternion animation.
 */
export declare class QuatSd extends Sd {
    copy(out: quat, value: quat): void;
    interpolate(out: quat, values: quat[], inTans: quat[], outTans: quat[], start: number, end: number, t: number): void;
}
export declare function createTypedSd(model: MdxModel, animation: Animation): ScalarSd | VectorSd | QuatSd;
export {};
