"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agent_1 = require("./agent");
/**
 * type rect
 */
class JassRect extends agent_1.default {
    constructor(minx, miny, maxx, maxy) {
        super();
        this.center = new Float32Array([maxx - minx, maxy - miny]);
        this.min = new Float32Array([minx, miny]);
        this.max = new Float32Array([maxx, maxy]);
    }
}
exports.default = JassRect;
//# sourceMappingURL=rect.js.map