import BinaryStream from '../../common/binarystream';
/**
 * A bounding shape.
 */
export default class BoundingShape {
    shape: number;
    bone: number;
    unknown0: number;
    matrix: Float32Array;
    unknown1: number;
    unknown2: number;
    unknown3: number;
    unknown4: number;
    unknown5: number;
    unknown6: number;
    size: Float32Array;
    load(stream: BinaryStream): void;
}
