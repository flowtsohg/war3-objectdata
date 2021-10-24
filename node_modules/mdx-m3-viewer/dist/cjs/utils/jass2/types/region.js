"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agent_1 = require("./agent");
/**
 * type region
 */
class JassRegion extends agent_1.default {
    constructor() {
        super(...arguments);
        this.rects = new Set();
    }
}
exports.default = JassRegion;
//# sourceMappingURL=region.js.map