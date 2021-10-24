/**
 * An object representing both a sphere and an AABB, which is used for culling of all instances.
 *
 * By default, the size of the bounds is 0, and thus point-culling is done.
 */
export default class Bounds {
    x: number;
    y: number;
    z: number;
    r: number;
    fromExtents(min: Float32Array, max: Float32Array): void;
}
