"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quatLookAt = exports.unpackPlanes = exports.normalizePlane = exports.planeLength = exports.testCell = exports.testSphere = exports.distanceToPlane3 = exports.distanceToPlane2 = exports.distanceToPlane = exports.unproject = exports.QUAT_DEFAULT = exports.QUAT_ZERO = exports.VEC3_ONE = exports.VEC3_ZERO = exports.VEC3_UNIT_Z = exports.VEC3_UNIT_Y = exports.VEC3_UNIT_X = void 0;
const gl_matrix_1 = require("gl-matrix");
exports.VEC3_UNIT_X = gl_matrix_1.vec3.fromValues(1, 0, 0);
exports.VEC3_UNIT_Y = gl_matrix_1.vec3.fromValues(0, 1, 0);
exports.VEC3_UNIT_Z = gl_matrix_1.vec3.fromValues(0, 0, 1);
exports.VEC3_ZERO = gl_matrix_1.vec3.create();
exports.VEC3_ONE = gl_matrix_1.vec3.fromValues(1, 1, 1);
exports.QUAT_ZERO = gl_matrix_1.quat.fromValues(0, 0, 0, 0);
exports.QUAT_DEFAULT = gl_matrix_1.quat.create();
const vec4Heap = gl_matrix_1.vec4.create();
function unproject(out, v, inverseMatrix, viewport) {
    const x = 2 * (v[0] - viewport[0]) / viewport[2] - 1;
    const y = 1 - 2 * (v[1] - viewport[1]) / viewport[3];
    const z = 2 * v[2] - 1;
    gl_matrix_1.vec4.set(vec4Heap, x, y, z, 1);
    gl_matrix_1.vec4.transformMat4(vec4Heap, vec4Heap, inverseMatrix);
    gl_matrix_1.vec3.set(out, vec4Heap[0] / vec4Heap[3], vec4Heap[1] / vec4Heap[3], vec4Heap[2] / vec4Heap[3]);
    return out;
}
exports.unproject = unproject;
/**
 * Get the distance of a point from a plane.
 *
 *     dot(plane, vec4(point, 1))
 */
function distanceToPlane(plane, point) {
    return plane[0] * point[0] + plane[1] * point[1] + plane[2] * point[2] + plane[3];
}
exports.distanceToPlane = distanceToPlane;
/**
 * Get the distance of a point from a plane.
 *
 *     dot(plane, vec4(x, y, 0, 1))
 */
function distanceToPlane2(plane, x, y) {
    return plane[0] * x + plane[1] * y + plane[3];
}
exports.distanceToPlane2 = distanceToPlane2;
/**
 * Get the distance of a point from a plane.
 *
 *     dot(plane, vec4(x, y, z, 1))
 */
function distanceToPlane3(plane, x, y, z) {
    return plane[0] * x + plane[1] * y + plane[2] * z + plane[3];
}
exports.distanceToPlane3 = distanceToPlane3;
/**
 * Test if a sphere with the given center and radius intersects the given planes.
 * If it doesn't, the index of the first plane that proved this is returned.
 * Otherwise returns -1.
 *
 * If first is given, the test will begin from the plane at that index.
 */
function testSphere(planes, x, y, z, r, first) {
    if (first === -1) {
        first = 0;
    }
    for (let i = 0; i < 6; i++) {
        const index = (first + i) % 6;
        if (distanceToPlane3(planes[index], x, y, z) <= -r) {
            return index;
        }
    }
    return -1;
}
exports.testSphere = testSphere;
/**
 * Test if a cell with the given coordinates intersects the given planes.
 * If it doesn't, the index of the first plane that proved this is returned.
 * Otherwise returns -1.
 *
 * If first is given, the test will begin from the plane at that index.
 */
function testCell(planes, left, right, bottom, top, first) {
    if (first === -1) {
        first = 0;
    }
    for (let i = 0; i < 6; i++) {
        const index = (first + i) % 6;
        const plane = planes[index];
        if (distanceToPlane2(plane, left, bottom) < 0 &&
            distanceToPlane2(plane, left, top) < 0 &&
            distanceToPlane2(plane, right, top) < 0 &&
            distanceToPlane2(plane, right, bottom) < 0) {
            return index;
        }
    }
    return -1;
}
exports.testCell = testCell;
function planeLength(plane) {
    return Math.hypot(plane[0], plane[1], plane[2]);
}
exports.planeLength = planeLength;
/**
 * Normalize a plane.
 *
 * Note that this is not the same as normalizing a vec4.
 */
function normalizePlane(out, plane) {
    const len = planeLength(plane);
    out[0] = plane[0] / len;
    out[1] = plane[1] / len;
    out[2] = plane[2] / len;
    out[3] = plane[3] / len;
}
exports.normalizePlane = normalizePlane;
/**
 * Unpacks a matrix's planes.
 */
function unpackPlanes(planes, m) {
    // eslint-disable-next-line one-var
    const a00 = m[0], a01 = m[4], a02 = m[8], a03 = m[12], a10 = m[1], a11 = m[5], a12 = m[9], a13 = m[13], a20 = m[2], a21 = m[6], a22 = m[10], a23 = m[14], a30 = m[3], a31 = m[7], a32 = m[11], a33 = m[15];
    let plane;
    // Left clipping plane
    plane = planes[0];
    plane[0] = a30 + a00;
    plane[1] = a31 + a01;
    plane[2] = a32 + a02;
    plane[3] = a33 + a03;
    // Right clipping plane
    plane = planes[1];
    plane[0] = a30 - a00;
    plane[1] = a31 - a01;
    plane[2] = a32 - a02;
    plane[3] = a33 - a03;
    // Top clipping plane
    plane = planes[2];
    plane[0] = a30 - a10;
    plane[1] = a31 - a11;
    plane[2] = a32 - a12;
    plane[3] = a33 - a13;
    // Bottom clipping plane
    plane = planes[3];
    plane[0] = a30 + a10;
    plane[1] = a31 + a11;
    plane[2] = a32 + a12;
    plane[3] = a33 + a13;
    // Near clipping plane
    plane = planes[4];
    plane[0] = a30 + a20;
    plane[1] = a31 + a21;
    plane[2] = a32 + a22;
    plane[3] = a33 + a23;
    // Far clipping plane
    plane = planes[5];
    plane[0] = a30 - a20;
    plane[1] = a31 - a21;
    plane[2] = a32 - a22;
    plane[3] = a33 - a23;
    normalizePlane(planes[0], planes[0]);
    normalizePlane(planes[1], planes[1]);
    normalizePlane(planes[2], planes[2]);
    normalizePlane(planes[3], planes[3]);
    normalizePlane(planes[4], planes[4]);
    normalizePlane(planes[5], planes[5]);
}
exports.unpackPlanes = unpackPlanes;
const F = gl_matrix_1.vec3.create();
const R = gl_matrix_1.vec3.create();
const U = gl_matrix_1.vec3.create();
/**
 * A look-at matrix, but for quaternions.
 *
 * See https://stackoverflow.com/a/52551983/2503048
 */
function quatLookAt(out, from, to, worldUp) {
    gl_matrix_1.vec3.normalize(F, gl_matrix_1.vec3.sub(F, to, from));
    gl_matrix_1.vec3.normalize(R, gl_matrix_1.vec3.cross(R, worldUp, F));
    gl_matrix_1.vec3.cross(U, R, F);
    const trace = R[0] + U[2] + F[1];
    if (trace > 0.0) {
        const s = 0.5 / Math.sqrt(trace + 1.0);
        out[3] = 0.25 / s;
        out[0] = (U[1] - F[2]) * s;
        out[2] = (F[0] - R[1]) * s;
        out[1] = (R[2] - U[0]) * s;
    }
    else {
        if (R[0] > U[2] && R[0] > F[1]) {
            const s = 2.0 * Math.sqrt(1.0 + R[0] - U[2] - F[1]);
            out[3] = (U[1] - F[2]) / s;
            out[0] = 0.25 * s;
            out[2] = (U[0] + R[2]) / s;
            out[1] = (F[0] + R[1]) / s;
        }
        else if (U[2] > F[1]) {
            const s = 2.0 * Math.sqrt(1.0 + U[2] - R[0] - F[1]);
            out[3] = (F[0] - R[1]) / s;
            out[0] = (U[0] + R[2]) / s;
            out[2] = 0.25 * s;
            out[1] = (F[2] + U[1]) / s;
        }
        else {
            const s = 2.0 * Math.sqrt(1.0 + F[1] - R[0] - U[2]);
            out[3] = (R[2] - U[0]) / s;
            out[0] = (F[0] + R[1]) / s;
            out[2] = (F[2] + U[1]) / s;
            out[1] = 0.25 * s;
        }
    }
    return out;
}
exports.quatLookAt = quatLookAt;
//# sourceMappingURL=gl-matrix-addon.js.map