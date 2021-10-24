"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agent_1 = require("./agent");
/**
 * type location
 */
class JassLocation extends agent_1.default {
    constructor(x, y) {
        super();
        this.z = 0;
        this.x = x;
        this.y = y;
    }
}
exports.default = JassLocation;
//# sourceMappingURL=location.js.map