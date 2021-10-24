"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handle_1 = require("./handle");
/**
 * Parent class for all enum types.
 */
class JassEnum extends handle_1.default {
    constructor(value) {
        super();
        this.id = value;
    }
}
exports.default = JassEnum;
//# sourceMappingURL=enum.js.map