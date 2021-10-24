"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("./context");
const jass2lua_1 = require("./jass2lua");
const types = require("./types");
const compilenatives_1 = require("./compilenatives");
exports.default = {
    Context: context_1.default,
    jass2lua: jass2lua_1.default,
    types,
    compileNatives: compilenatives_1.default,
};
//# sourceMappingURL=index.js.map