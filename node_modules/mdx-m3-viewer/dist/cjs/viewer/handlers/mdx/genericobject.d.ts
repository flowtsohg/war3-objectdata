import { vec3, quat } from 'gl-matrix';
import MdlxGenericObject from '../../../parsers/mdlx/genericobject';
import AnimatedObject from './animatedobject';
import MdxModel from './model';
/**
 * An MDX generic object.
 */
export default class GenericObject extends AnimatedObject {
    index: number;
    name: string;
    objectId: number;
    parentId: number;
    pivot: vec3;
    dontInheritTranslation: boolean;
    dontInheritRotation: boolean;
    dontInheritScaling: boolean;
    billboarded: boolean;
    billboardedX: boolean;
    billboardedY: boolean;
    billboardedZ: boolean;
    cameraAnchored: boolean;
    anyBillboarding: boolean;
    constructor(model: MdxModel, object: MdlxGenericObject, index: number);
    /**
     * Give a consistent visibility getter for all generic objects.
     *
     * Many of the generic objects have animated visibilities, and will override this.
     */
    getVisibility(out: Float32Array, _sequence: number, _frame: number, _counter: number): number;
    getTranslation(out: vec3, sequence: number, frame: number, counter: number): number;
    getRotation(out: quat, sequence: number, frame: number, counter: number): number;
    getScale(out: vec3, sequence: number, frame: number, counter: number): number;
}
