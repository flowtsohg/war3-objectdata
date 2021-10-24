"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handle_1 = require("./handle");
const location_1 = require("./location");
/**
 * type camerasetup
 */
class JassCameraSetup extends handle_1.default {
    constructor() {
        super(...arguments);
        this.targetDistance = 0;
        this.farZ = 0;
        this.angleOfAttack = 0;
        this.fieldOfView = 0;
        this.roll = 0;
        this.rotation = 0;
        this.zOffset = 0;
        this.destPosition = new location_1.default(0, 0);
    }
}
exports.default = JassCameraSetup;
//# sourceMappingURL=camerasetup.js.map