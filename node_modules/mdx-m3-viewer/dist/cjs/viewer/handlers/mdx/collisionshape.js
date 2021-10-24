"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genericobject_1 = require("./genericobject");
/**
 * A collision shape.
 */
class CollisionShape extends genericobject_1.default {
    constructor(model, collisionShape, index) {
        super(model, collisionShape, index);
        this.type = collisionShape.type;
        this.vertices = collisionShape.vertices;
        this.boundsRadius = collisionShape.boundsRadius;
    }
}
exports.default = CollisionShape;
//# sourceMappingURL=collisionshape.js.map