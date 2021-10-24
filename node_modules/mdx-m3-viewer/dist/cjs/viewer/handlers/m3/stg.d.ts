import M3ParserStg from '../../../parsers/m3/stg';
import { AnimationReference } from '../../../parsers/m3/animationreference';
import M3ModelInstance from './modelinstance';
import M3Sts from './sts';
import M3Stc from './stc';
import { quat, vec3 } from 'gl-matrix';
/**
 * M3 animation data getter.
 */
export default class M3Stg {
    name: string;
    stcIndices: Uint32Array;
    sts: M3Sts[];
    stc: M3Stc[];
    constructor(stg: M3ParserStg, sts: M3Sts[], stc: M3Stc[]);
    getValueUnsafe(animRef: AnimationReference, instance: M3ModelInstance): number | vec3 | quat | Uint8Array | null;
}
