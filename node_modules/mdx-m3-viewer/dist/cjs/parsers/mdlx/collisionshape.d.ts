import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
import GenericObject from './genericobject';
export declare const enum Shape {
    Box = 0,
    Plane = 1,
    Sphere = 2,
    Cylinder = 3
}
/**
 * A collision shape.
 */
export default class CollisionShape extends GenericObject {
    type: Shape;
    vertices: Float32Array[];
    boundsRadius: number;
    constructor();
    readMdx(stream: BinaryStream): void;
    writeMdx(stream: BinaryStream): void;
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream): void;
    getByteLength(): number;
}
