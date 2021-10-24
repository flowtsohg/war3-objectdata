import { AnimationReference } from '../../../parsers/m3/animationreference';
import M3Node from './node';
import M3ModelInstance from './modelinstance';
import M3Bone from './bone';
import M3Sts from './sts';
import M3Stc from './stc';
import M3Stg from './stg';
import { quat, vec3 } from 'gl-matrix';
/**
 * M3 skeleton.
 */
export default class M3Skeleton {
    nodes: M3Node[];
    worldMatrices: Float32Array;
    instance: M3ModelInstance;
    modelNodes: M3Bone[];
    initialReference: Float32Array[];
    sts: M3Sts[];
    stc: M3Stc[];
    stg: M3Stg[];
    boneLookup: Uint16Array;
    constructor(instance: M3ModelInstance);
    update(dt: number): void;
    getValueUnsafe(animRef: AnimationReference, instance: M3ModelInstance): number | vec3 | quat | Uint8Array | null;
    getValue(animRef: AnimationReference, instance: M3ModelInstance): number;
    getValue2(out: Float32Array, animRef: AnimationReference, instance: M3ModelInstance): Float32Array;
    getValue3(out: Float32Array, animRef: AnimationReference, instance: M3ModelInstance): Float32Array;
    getValue4(out: Float32Array, animRef: AnimationReference, instance: M3ModelInstance): Float32Array;
}
