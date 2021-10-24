"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const agent_1 = require("./agent");
/**
 * type widget
 */
class JassWidget extends agent_1.default {
    constructor() {
        super(...arguments);
        this.health = 0;
        this.maxHealth = 0;
    }
}
exports.default = JassWidget;
//# sourceMappingURL=widget.js.map