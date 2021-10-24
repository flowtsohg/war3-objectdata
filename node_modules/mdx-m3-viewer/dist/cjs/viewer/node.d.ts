import { vec3, quat, mat4 } from 'gl-matrix';
import { SkeletalNode } from './skeletalnode';
/**
 * A node.
 */
export declare class Node {
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
    parent: Node | SkeletalNode | null;
    children: Node[];
    /**
     * Sets the node's pivot.
     */
    setPivot(pivot: vec3): this;
    /**
     * Sets the node's local location.
     */
    setLocation(location: vec3): this;
    /**
     * Sets the node's local rotation.
     */
    setRotation(rotation: quat): this;
    /**
     * Sets the node's local scale.
     */
    setScale(varying: vec3): this;
    /**
     * Sets the node's local scale uniformly.
     */
    setUniformScale(uniform: number): this;
    /**
     * Sets the node's local location, rotation, and scale.
     */
    setTransformation(location: vec3, rotation: quat, scale: vec3): this;
    /**
     * Resets the node's local location, pivot, rotation, and scale, to the default values.
     */
    resetTransformation(): this;
    /**
     * Moves the node's pivot.
     */
    movePivot(offset: vec3): this;
    /**
     * Moves the node's local location.
     */
    move(offset: vec3): this;
    /**
     * Rotates the node's local rotation in world space.
     */
    rotate(rotation: quat): this;
    /**
     * Rotates the node's local rotation in local space.
     */
    rotateLocal(rotation: quat): this;
    /**
     * Scales the node.
     */
    scale(scale: vec3): this;
    /**
     * Scales the node uniformly.
     */
    uniformScale(scale: number): this;
    face(to: vec3, worldUp: vec3): this;
    /**
     * Sets the node's parent.
     */
    setParent(parent?: Node | SkeletalNode): this;
    /**
     * Recalculate this node's transformation data.
     */
    recalculateTransformation(): void;
    /**
     * Update this node, and continue down the node hierarchy.
     */
    update(dt: number): void;
}
