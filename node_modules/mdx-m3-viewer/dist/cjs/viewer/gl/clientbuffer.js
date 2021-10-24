"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A buffer.
 */
class ClientBuffer {
    constructor(gl, size = 4) {
        this.size = 0;
        this.arrayBuffer = null;
        this.byteView = null;
        this.floatView = null;
        this.gl = gl;
        this.buffer = gl.createBuffer();
        this.reserve(size);
    }
    reserve(size) {
        if (this.size < size) {
            const gl = this.gl;
            // Ensure the size is on a 4 byte boundary.
            this.size = Math.ceil(size / 4) * 4;
            gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
            gl.bufferData(gl.ARRAY_BUFFER, this.size, gl.DYNAMIC_DRAW);
            this.arrayBuffer = new ArrayBuffer(this.size);
            this.byteView = new Uint8Array(this.arrayBuffer);
            this.floatView = new Float32Array(this.arrayBuffer);
        }
    }
    bindAndUpdate(size = this.size) {
        const gl = this.gl;
        const byteView = this.byteView;
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferSubData(gl.ARRAY_BUFFER, 0, byteView.subarray(0, size));
    }
}
exports.default = ClientBuffer;
//# sourceMappingURL=clientbuffer.js.map