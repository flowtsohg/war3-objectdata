import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
import AnimatedObject from './animatedobject';
/**
 * A camera.
 */
export default class Camera extends AnimatedObject {
    name: string;
    position: Float32Array;
    fieldOfView: number;
    farClippingPlane: number;
    nearClippingPlane: number;
    targetPosition: Float32Array;
    readMdx(stream: BinaryStream): void;
    writeMdx(stream: BinaryStream): void;
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream): void;
    getByteLength(): number;
}
