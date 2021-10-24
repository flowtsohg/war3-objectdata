import Texture from '../texture';
import ClientBuffer from './clientbuffer';
import ClientDataTexture from './clientdatatexture';
import DataTexture from './datatexture';
import Shader from './shader';
/**
 * A small WebGL utility class.
 * Makes it easier to generate shaders, textures, etc.
 */
export default class WebGL {
    gl: WebGLRenderingContext;
    currentShader: Shader | null;
    emptyTexture: WebGLTexture;
    extensions: {
        [key: string]: unknown;
    };
    constructor(canvas: HTMLCanvasElement, options?: WebGLContextAttributes);
    /**
     * Ensures that an extension is available.
     *
     * If it is, it will be added to `extensions`.
     */
    ensureExtension(name: string): boolean;
    createShader(vertexSource: string, fragmentSource: string): Shader;
    /**
     * Enables all vertex attribs between [start, end], including start and discluding end.
     */
    enableVertexAttribs(start: number, end: number): void;
    /**
     * Disables all vertex attribs between [start, end], including start and discluding end.
     */
    disableVertexAttribs(start: number, end: number): void;
    /**
     * Use a shader program.
     */
    useShader(shader: Shader): void;
    /**
     * Bind a texture.
     *
     * If the given texture is invalid, a 2x2 black texture will be bound instead.
     */
    bindTexture(texture: Texture | undefined | null, unit: number): void;
    bindTextureAndWrap(texture: Texture | undefined | null, unit: number, wrapS: number, wrapT: number): void;
    /**
     * Set the texture wrap and filter values.
     */
    setTextureMode(wrapS: number, wrapT: number, magFilter: number, minFilter: number): void;
    /**
     * A shortcut for `new ClientBuffer(gl, size)`.
     */
    createClientBuffer(size?: number): ClientBuffer;
    /**
     * A shortcut for `new DataTexture(gl, channels, width, height)`.
     */
    createDataTexture(channels?: number, width?: number, height?: number): DataTexture;
    /**
     * A shortcut for `new ClientDataTexture(gl, width, height)`.
     */
    createClientDataTexture(width?: number, height?: number): ClientDataTexture;
}
