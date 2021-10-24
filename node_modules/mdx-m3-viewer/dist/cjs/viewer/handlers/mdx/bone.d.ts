import MdlxBone from '../../../parsers/mdlx/bone';
import MdxModel from './model';
import GenericObject from './genericobject';
import GeosetAnimation from './geosetanimation';
/**
 * An MDX bone.
 */
export default class Bone extends GenericObject {
    geosetAnimation: GeosetAnimation;
    constructor(model: MdxModel, bone: MdlxBone, index: number);
    getVisibility(out: Float32Array, sequence: number, frame: number, counter: number): number;
}
