import BinaryStream from '../../common/binarystream';
import IndexEntry from './indexentry';
/**
 * A region.
 */
export default class Region {
    version: number;
    unknown0: number;
    unknown1: number;
    firstVertexIndex: number;
    verticesCount: number;
    firstTriangleIndex: number;
    triangleIndicesCount: number;
    bonesCount: number;
    firstBoneLookupIndex: number;
    boneLookupIndicesCount: number;
    unknown2: number;
    boneWeightPairsCount: number;
    unknown3: number;
    rootBoneIndex: number;
    unknown4: number;
    unknown5: Uint8Array;
    load(stream: BinaryStream, version: number, _index: IndexEntry[]): void;
}
