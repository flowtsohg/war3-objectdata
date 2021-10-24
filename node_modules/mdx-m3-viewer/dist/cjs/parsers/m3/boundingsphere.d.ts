import BinaryStream from '../../common/binarystream';
/**
 * A bounding sphere.
 */
export default class BoundingSphere {
    min: Float32Array;
    max: Float32Array;
    radius: number;
    load(stream: BinaryStream): void;
}
