import { vec3, vec4, quat, mat4 } from 'gl-matrix';
export declare const VEC3_UNIT_X: vec3;
export declare const VEC3_UNIT_Y: vec3;
export declare const VEC3_UNIT_Z: vec3;
export declare const VEC3_ZERO: vec3;
export declare const VEC3_ONE: vec3;
export declare const QUAT_ZERO: vec4;
export declare const QUAT_DEFAULT: quat;
export declare function unproject(out: vec3, v: vec3, inverseMatrix: mat4, viewport: vec4): vec3;
/**
 * Get the distance of a point from a plane.
 *
 *     dot(plane, vec4(point, 1))
 */
export declare function distanceToPlane(plane: vec4, point: vec3): number;
/**
 * Get the distance of a point from a plane.
 *
 *     dot(plane, vec4(x, y, 0, 1))
 */
export declare function distanceToPlane2(plane: vec4, x: number, y: number): number;
/**
 * Get the distance of a point from a plane.
 *
 *     dot(plane, vec4(x, y, z, 1))
 */
export declare function distanceToPlane3(plane: vec4, x: number, y: number, z: number): number;
/**
 * Test if a sphere with the given center and radius intersects the given planes.
 * If it doesn't, the index of the first plane that proved this is returned.
 * Otherwise returns -1.
 *
 * If first is given, the test will begin from the plane at that index.
 */
export declare function testSphere(planes: vec4[], x: number, y: number, z: number, r: number, first: number): number;
/**
 * Test if a cell with the given coordinates intersects the given planes.
 * If it doesn't, the index of the first plane that proved this is returned.
 * Otherwise returns -1.
 *
 * If first is given, the test will begin from the plane at that index.
 */
export declare function testCell(planes: vec4[], left: number, right: number, bottom: number, top: number, first: number): number;
export declare function planeLength(plane: vec4): number;
/**
 * Normalize a plane.
 *
 * Note that this is not the same as normalizing a vec4.
 */
export declare function normalizePlane(out: vec4, plane: vec4): void;
/**
 * Unpacks a matrix's planes.
 */
export declare function unpackPlanes(planes: vec4[], m: mat4): void;
/**
 * A look-at matrix, but for quaternions.
 *
 * See https://stackoverflow.com/a/52551983/2503048
 */
export declare function quatLookAt(out: quat, from: vec3, to: vec3, worldUp: vec3): quat;
