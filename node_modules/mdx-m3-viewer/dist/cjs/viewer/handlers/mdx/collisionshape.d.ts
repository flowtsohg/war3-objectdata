import MdlxCollisionShape, { Shape } from '../../../parsers/mdlx/collisionshape';
import GenericObject from './genericobject';
import MdxModel from './model';
/**
 * A collision shape.
 */
export default class CollisionShape extends GenericObject {
    type: Shape;
    vertices: Float32Array[];
    boundsRadius: number;
    constructor(model: MdxModel, collisionShape: MdlxCollisionShape, index: number);
}
