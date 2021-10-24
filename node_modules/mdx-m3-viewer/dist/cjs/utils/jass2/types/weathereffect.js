"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handle_1 = require("./handle");
/**
 * type weathereffect
 */
class JassWeatherEffect extends handle_1.default {
    constructor(whichRect, effectId) {
        super();
        this.enabled = false;
        this.whichRect = whichRect;
        this.effectId = effectId;
    }
}
exports.default = JassWeatherEffect;
//# sourceMappingURL=weathereffect.js.map