"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agent_1 = require("./agent");
/**
 * type group
 */
class JassGroup extends agent_1.default {
    constructor() {
        super(...arguments);
        this.units = new Set();
    }
}
exports.default = JassGroup;
//# sourceMappingURL=group.js.map