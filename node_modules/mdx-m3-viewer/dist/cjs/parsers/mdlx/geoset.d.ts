import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
import Extent from './extent';
/**
 * A geoset.
 */
export default class Geoset {
    vertices: Float32Array;
    normals: Float32Array;
    faceTypeGroups: Uint32Array;
    faceGroups: Uint32Array;
    faces: Uint16Array;
    vertexGroups: Uint8Array;
    matrixGroups: Uint32Array;
    matrixIndices: Uint32Array;
    materialId: number;
    selectionGroup: number;
    selectionFlags: number;
    /**
     * @since 900
     */
    lod: number;
    /**
     * @since 900
     */
    lodName: string;
    extent: Extent;
    sequenceExtents: Extent[];
    /**
     * @since 900
     */
    tangents: Float32Array;
    /**
     * An array of bone indices and weights.
     * Every 8 consecutive elements describe the following:
     *    [B0, B1, B2, B3, W0, W1, W2, W3]
     * Where:
     *     Bn is a bone index.
     *     Wn is a weight, which can be normalized with Wn/255.
     *
     * @since 900
     */
    skin: Uint8Array;
    uvSets: Float32Array[];
    readMdx(stream: BinaryStream, version: number): void;
    writeMdx(stream: BinaryStream, version: number): void;
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream, version: number): void;
    getByteLength(version: number): number;
}
