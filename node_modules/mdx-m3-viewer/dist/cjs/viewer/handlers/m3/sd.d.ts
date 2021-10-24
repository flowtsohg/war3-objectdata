import { vec3, quat } from 'gl-matrix';
import { AnimationReference } from '../../../parsers/m3/animationreference';
import M3ParserSd from '../../../parsers/m3/sd';
/**
 * Sequence data.
 */
declare class M3Sd {
    keys: Int32Array;
    values: vec3[] | quat[] | number[];
    biggestKey: number;
    constructor(sd: M3ParserSd);
}
/**
 * A sequence data container.
 */
export default class M3SdContainer {
    sd: M3Sd[];
    addSds(sds: M3ParserSd[]): void;
    getValueUnsafe(index: number, animationReference: AnimationReference, frame: number, runsConcurrent: number): number | vec3 | quat | Uint8Array | null;
}
export {};
