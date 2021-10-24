"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const emittedobject_1 = require("../../emittedobject");
const vertexHeap = gl_matrix_1.vec3.create();
/**
 * An MDX splat or ubersplat object.
 */
class EventObjectSplUbr extends emittedobject_1.default {
    constructor() {
        super(...arguments);
        this.vertices = new Float32Array(12);
    }
    bind() {
        const emitter = this.emitter;
        const instance = emitter.instance;
        const emitterObject = emitter.emitterObject;
        const vertices = this.vertices;
        const scale = emitterObject.scale;
        const { worldLocation, worldRotation } = instance.nodes[emitterObject.index];
        this.health = emitterObject.lifeSpan;
        gl_matrix_1.vec3.set(vertexHeap, scale, scale, 0);
        gl_matrix_1.vec3.transformQuat(vertexHeap, vertexHeap, worldRotation);
        gl_matrix_1.vec3.add(vertices.subarray(0, 2), vertexHeap, worldLocation);
        gl_matrix_1.vec3.set(vertexHeap, -scale, scale, 0);
        gl_matrix_1.vec3.transformQuat(vertexHeap, vertexHeap, worldRotation);
        gl_matrix_1.vec3.add(vertices.subarray(3, 5), vertexHeap, worldLocation);
        gl_matrix_1.vec3.set(vertexHeap, -scale, -scale, 0);
        gl_matrix_1.vec3.transformQuat(vertexHeap, vertexHeap, worldRotation);
        gl_matrix_1.vec3.add(vertices.subarray(6, 8), vertexHeap, worldLocation);
        gl_matrix_1.vec3.set(vertexHeap, scale, -scale, 0);
        gl_matrix_1.vec3.transformQuat(vertexHeap, vertexHeap, worldRotation);
        gl_matrix_1.vec3.add(vertices.subarray(9, 11), vertexHeap, worldLocation);
    }
    update(dt) {
        this.health -= dt;
    }
}
exports.default = EventObjectSplUbr;
//# sourceMappingURL=eventobjectsplubr.js.map