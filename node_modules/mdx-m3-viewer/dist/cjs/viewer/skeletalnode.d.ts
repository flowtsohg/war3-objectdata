import { vec3, quat, mat4 } from 'gl-matrix';
import { Node } from './node';
import ModelInstance from './modelinstance';
/**
 * A skeletal node used for skeletons.
 *
 * Expected to be created with createSkeletalNodes() below.
 */
export declare class SkeletalNode {
    pivot: vec3;
    localLocation: vec3;
    localRotation: quat;
    localScale: vec3;
    worldLocation: vec3;
    worldRotation: quat;
    worldScale: vec3;
    inverseWorldLocation: vec3;
    inverseWorldRotation: quat;
    inverseWorldScale: vec3;
    localMatrix: mat4;
    worldMatrix: mat4;
    dontInheritTranslation: boolean;
    dontInheritRotation: boolean;
    dontInheritScaling: boolean;
    billboarded: boolean;
    billboardedX: boolean;
    billboardedY: boolean;
    billboardedZ: boolean;
    dirty: boolean;
    wasDirty: boolean;
    parent: SkeletalNode | Node | null;
    children: Node[];
    /**
     * The object associated with this node, if there is any.
     */
    object: unknown;
    constructor(pivot: vec3, localLocation: vec3, localRotation: quat, localScale: vec3, worldLocation: vec3, worldRotation: quat, worldScale: vec3, inverseWorldLocation: vec3, inverseWorldRotation: quat, inverseWorldScale: vec3, localMatrix: mat4, worldMatrix: mat4);
    /**
     * Recalculate this skeletal node.
     */
    recalculateTransformation(instance: ModelInstance): void;
    /**
     * Allows inherited node classes to run extra transformations when billboarding.
     *
     * This is needed because the different model formats are in different vector spaces.
     */
    convertBasis(_rotation: quat): void;
}
interface SkeletalNodesData {
    data: Float32Array;
    nodes: SkeletalNode[];
    pivots: Float32Array;
    localLocations: Float32Array;
    localRotations: Float32Array;
    localScales: Float32Array;
    worldLocations: Float32Array;
    worldRotations: Float32Array;
    worldScales: Float32Array;
    inverseWorldLocations: Float32Array;
    invereseWorldRotations: Float32Array;
    inverseWorldScales: Float32Array;
    localMatrices: Float32Array;
    worldMatrices: Float32Array;
}
/**
 * Creates an array of skeletal nodes with shared memory.
 *
 * The returned object contains the node array itself, the backing buffer, and all of the different shared arrays.
 */
export declare function createSkeletalNodes(count: number, Node?: typeof SkeletalNode): SkeletalNodesData;
export {};
