import { vec3, vec4, quat, mat4 } from 'gl-matrix';
/**
 * A camera.
 */
export default class Camera {
    isPerspective: boolean;
    fov: number;
    aspect: number;
    isOrtho: boolean;
    leftClipPlane: number;
    rightClipPlane: number;
    bottomClipPlane: number;
    topClipPlane: number;
    nearClipPlane: number;
    farClipPlane: number;
    location: vec3;
    rotation: quat;
    inverseRotation: quat;
    /**
     * World -> View.
     */
    viewMatrix: mat4;
    /**
     * View -> Clip.
     */
    projectionMatrix: mat4;
    /**
     * World -> Clip.
     */
    viewProjectionMatrix: mat4;
    /**
     * View -> World.
     */
    inverseViewMatrix: mat4;
    /**
     * Clip -> World.
     */
    inverseViewProjectionMatrix: mat4;
    /**
     * The X axis in camera space.
     */
    directionX: vec3;
    /**
     * The Y axis in camera space.
     */
    directionY: vec3;
    /**
     * The Z axis in camera space.
     */
    directionZ: vec3;
    /**
     * The four corners of a 2x2 rectangle.
     */
    vectors: vec3[];
    /**
     * Same as vectors, however these are all billboarded to the camera.
     */
    billboardedVectors: vec3[];
    /**
     * The camera frustum planes in this order: left, right, top, bottom, near, far.
     */
    planes: vec4[];
    /**
     * Set the camera to perspective projection mode.
     */
    perspective(fov: number, aspect: number, near: number, far: number): void;
    /**
     * Set the camera to orthogonal projection mode.
     */
    ortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void;
    /**
     * Set the camera location in world coordinates.
     */
    setLocation(location: vec3): void;
    /**
     * Move the camera by the given offset in world coordinates.
     */
    move(offset: vec3): void;
    /**
     * Set the camera rotation.
     */
    setRotation(rotation: quat): void;
    /**
     * Rotate the camera by the given rotation.
     */
    rotate(rotation: quat): void;
    /**
     * Look at `to`.
     */
    face(to: vec3, worldUp: vec3): void;
    /**
     * Move to `from` and look at `to`.
     */
    moveToAndFace(from: vec3, to: vec3, worldUp: vec3): void;
    /**
     * Reset the location and angles.
     */
    reset(): void;
    /**
     * Recalculate the camera's transformation.
     */
    update(): void;
    /**
     * Given a vector in camera space, return the vector transformed to world space.
     */
    cameraToWorld(out: vec3, v: vec3): vec3;
    /**
     * Given a vector in world space, return the vector transformed to camera space.
     */
    worldToCamera(out: vec3, v: vec3): vec3;
    /**
     * Given a vector in world space, return the vector transformed to screen space.
     */
    worldToScreen(out: Float32Array, v: Float32Array, viewport: vec4): Float32Array;
    /**
     * Given a vector in screen space, return a ray from the near plane to the far plane.
     */
    screenToWorldRay(out: Float32Array, v: Float32Array, viewport: vec4): Float32Array;
}
