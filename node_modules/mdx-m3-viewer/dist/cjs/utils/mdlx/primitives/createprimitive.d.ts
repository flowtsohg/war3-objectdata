import ModelViewer from '../../../viewer/viewer';
import Texture from '../../../viewer/texture';
import MdxModel from '../../../viewer/handlers/mdx/model';
interface Primitive {
    vertices: Float32Array;
    uvs: Float32Array;
    faces: Uint16Array;
    edges: Uint16Array;
    boundingRadius: number;
}
interface Material {
    lines?: boolean;
    color?: Float32Array;
    texture?: Texture | Promise<Texture>;
    twoSided?: boolean;
}
export default function createPrimitive(viewer: ModelViewer, primitive: Primitive, material: Material): Promise<MdxModel | undefined>;
export {};
