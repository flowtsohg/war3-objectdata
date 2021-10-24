import { vec3 } from 'gl-matrix';
import MdlxGeosetAnimation from '../../../parsers/mdlx/geosetanimation';
import AnimatedObject from './animatedobject';
import MdxModel from './model';
/**
 * A geoset animation.
 */
export default class GeosetAnimation extends AnimatedObject {
    alpha: number;
    color: vec3;
    geosetId: number;
    constructor(model: MdxModel, geosetAnimation: MdlxGeosetAnimation);
    getAlpha(out: Float32Array, sequence: number, frame: number, counter: number): number;
    getColor(out: Float32Array, sequence: number, frame: number, counter: number): number;
}
