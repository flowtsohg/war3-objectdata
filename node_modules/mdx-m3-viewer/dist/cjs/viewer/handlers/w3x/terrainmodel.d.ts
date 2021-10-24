import Shader from '../../gl/shader';
import War3MapViewerMap from './map';
/**
 * A static terrain model.
 */
export default class TerrainModel {
    map: War3MapViewerMap;
    vertexBuffer: WebGLBuffer;
    faceBuffer: WebGLBuffer;
    normalsOffset: number;
    uvsOffset: number;
    elements: number;
    locationAndTextureBuffer: WebGLBuffer;
    texturesOffset: number;
    instances: number;
    vao: WebGLVertexArrayObjectOES | null;
    constructor(map: War3MapViewerMap, arrayBuffer: ArrayBuffer, locations: number[], textures: number[], shader: Shader);
    render(shader: Shader): void;
}
