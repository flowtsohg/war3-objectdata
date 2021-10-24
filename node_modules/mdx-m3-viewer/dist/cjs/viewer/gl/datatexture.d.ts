/**
 * A data texture.
 */
export default class DataTexture {
    gl: WebGLRenderingContext;
    texture: WebGLTexture;
    format: number;
    width: number;
    height: number;
    constructor(gl: WebGLRenderingContext, channels?: number, width?: number, height?: number);
    reserve(width: number, height: number): void;
    bindAndUpdate(buffer: Float32Array, width?: number, height?: number): void;
    bind(unit: number): void;
}
