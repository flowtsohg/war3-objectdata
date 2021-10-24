"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns an array that only contains unique values found in the source array.
 */
function unique(a) {
    return a.reverse().filter((e, i, arr) => {
        return arr.indexOf(e, i + 1) === -1;
    }).reverse();
}
exports.default = unique;
//# sourceMappingURL=arrayunique.js.map