import WebGL from './gl';
/**
 * A wrapper around a WebGL shader program.
 */
export default class Shader {
    webgl: WebGL;
    program: WebGLProgram;
    uniforms: {
        [key: string]: WebGLUniformLocation;
    };
    attribs: {
        [key: string]: number;
    };
    attribsCount: number;
    constructor(webgl: WebGL, program: WebGLProgram);
    use(): void;
}
