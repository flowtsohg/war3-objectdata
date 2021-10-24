import MdlxTextureAnimation from '../../../parsers/mdlx/textureanimation';
import AnimatedObject from './animatedobject';
import MdxModel from './model';
/**
 * An MDX texture animation.
 */
export default class TextureAnimation extends AnimatedObject {
    constructor(model: MdxModel, textureAnimation: MdlxTextureAnimation);
    getTranslation(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getRotation(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getScale(out: Float32Array, sequence: number, frame: number, counter: number): number;
}
