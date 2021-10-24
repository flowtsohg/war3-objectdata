"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gl_matrix_1 = require("gl-matrix");
const gl_matrix_addon_1 = require("../../../common/gl-matrix-addon");
const widget_1 = require("./widget");
const heapZ = gl_matrix_1.vec3.create();
/**
 * A unit.
 */
class Unit extends widget_1.Widget {
    constructor(map, model, row, unit) {
        super(map, model);
        const instance = this.instance;
        instance.move(unit.location);
        instance.rotateLocal(gl_matrix_1.quat.setAxisAngle(gl_matrix_1.quat.create(), gl_matrix_addon_1.VEC3_UNIT_Z, unit.angle));
        instance.scale(unit.scale);
        instance.setTeamColor(unit.player);
        instance.setScene(map.worldScene);
        if (row) {
            heapZ[2] = row.number('moveHeight');
            instance.move(heapZ);
            instance.setVertexColor([row.number('red') / 255, row.number('green') / 255, row.number('blue') / 255, 1]);
            instance.uniformScale(row.number('modelScale'));
        }
        this.instance = instance;
        this.row = row;
    }
}
exports.default = Unit;
//# sourceMappingURL=unit.js.map