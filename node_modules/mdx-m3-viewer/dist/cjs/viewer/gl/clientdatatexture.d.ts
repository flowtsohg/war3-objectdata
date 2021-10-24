/**
 * A data texture.
 */
export default class ClientDataTexture {
    gl: WebGLRenderingContext;
    texture: WebGLTexture;
    width: number;
    height: number;
    arrayBuffer: ArrayBuffer;
    byteView: Uint8Array | null;
    floatView: Float32Array | null;
    constructor(gl: WebGLRenderingContext, width?: number, height?: number);
    reserve(width: number, height: number): void;
    bindAndUpdate(width?: number, height?: number): void;
}
