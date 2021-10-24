import MdlxAnimatedObject from '../../../parsers/mdlx/animatedobject';
import MdxModel from './model';
import { Sd } from './sd';
/**
 * An animation object.
 */
export default class AnimatedObject {
    model: MdxModel;
    animations: Map<string, Sd>;
    variants: {
        [key: string]: Uint8Array;
    };
    constructor(model: MdxModel, object: MdlxAnimatedObject);
    getScalarValue(out: Uint32Array | Float32Array, name: string, sequence: number, frame: number, counter: number, defaultValue: number): number;
    getVectorValue(out: Float32Array, name: string, sequence: number, frame: number, counter: number, defaultValue: Float32Array): number;
    getQuatValue(out: Float32Array, name: string, sequence: number, frame: number, counter: number, defaultValue: Float32Array): number;
    addVariants(name: string, variantName: string): void;
    addVariantIntersection(names: string[], variantName: string): void;
}
