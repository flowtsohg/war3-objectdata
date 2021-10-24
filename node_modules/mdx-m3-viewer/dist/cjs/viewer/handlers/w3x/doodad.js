"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const gl_matrix_addon_1 = require("../../../common/gl-matrix-addon");
const widget_1 = require("./widget");
/**
 * A doodad.
 */
class Doodad extends widget_1.Widget {
    constructor(map, model, row, doodad) {
        super(map, model);
        const instance = this.instance;
        instance.move(doodad.location);
        instance.rotateLocal(gl_matrix_1.quat.setAxisAngle(gl_matrix_1.quat.create(), gl_matrix_addon_1.VEC3_UNIT_Z, doodad.angle));
        instance.scale(doodad.scale);
        instance.setScene(map.worldScene);
        this.instance = instance;
        this.row = row;
    }
}
exports.default = Doodad;
//# sourceMappingURL=doodad.js.map