import MdlxCamera from '../../../parsers/mdlx/camera';
import AnimatedObject from './animatedobject';
import MdxModel from './model';
/**
 * An MDX camera.
 */
export default class Camera extends AnimatedObject {
    name: string;
    position: Float32Array;
    fieldOfView: number;
    farClippingPlane: number;
    nearClippingPlane: number;
    targetPosition: Float32Array;
    constructor(model: MdxModel, camera: MdlxCamera);
    getTranslation(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getTargetTranslation(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getRotation(out: Uint32Array, sequence: number, frame: number, counter: number): number;
}
