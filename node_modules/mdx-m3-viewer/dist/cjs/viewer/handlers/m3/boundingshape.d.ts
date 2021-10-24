import M3BoundingShape from '../../../parsers/m3/boundingshape';
/**
 * An M3 bounding shape.
 */
export default class BoundingShape {
    bone: number;
    matrix: Float32Array;
    constructor(boundingshape: M3BoundingShape);
}
