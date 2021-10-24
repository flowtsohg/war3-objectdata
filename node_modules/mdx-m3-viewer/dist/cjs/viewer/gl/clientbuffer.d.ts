/**
 * A buffer.
 */
export default class ClientBuffer {
    gl: WebGLRenderingContext;
    buffer: WebGLBuffer;
    size: number;
    arrayBuffer: ArrayBuffer | null;
    byteView: Uint8Array | null;
    floatView: Float32Array | null;
    constructor(gl: WebGLRenderingContext, size?: number);
    reserve(size: number): void;
    bindAndUpdate(size?: number): void;
}
