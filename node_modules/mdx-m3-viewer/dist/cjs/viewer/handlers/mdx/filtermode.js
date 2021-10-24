"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emitterFilterMode = exports.layerFilterMode = void 0;
function layerFilterMode(filterMode, gl) {
    if (filterMode === 2 /* Blend */) {
        return [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA];
    }
    else if (filterMode === 3 /* Additive */) {
        return [gl.SRC_ALPHA, gl.ONE];
    }
    else if (filterMode === 4 /* AddAlpha */) {
        return [gl.SRC_ALPHA, gl.ONE];
    }
    else if (filterMode === 5 /* Modulate */) {
        return [gl.ZERO, gl.SRC_COLOR];
    }
    else if (filterMode === 6 /* Modulate2x */) {
        return [gl.DST_COLOR, gl.SRC_COLOR];
    }
    else {
        return [0, 0];
    }
}
exports.layerFilterMode = layerFilterMode;
function emitterFilterMode(filterMode, gl) {
    if (filterMode === 0 /* Blend */) {
        return [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA];
    }
    else if (filterMode === 1 /* Additive */) {
        return [gl.SRC_ALPHA, gl.ONE];
    }
    else if (filterMode === 2 /* Modulate */) {
        return [gl.ZERO, gl.SRC_COLOR];
    }
    else if (filterMode === 3 /* Modulate2x */) {
        return [gl.DST_COLOR, gl.SRC_COLOR];
    }
    else if (filterMode === 4 /* AlphaKey */) {
        return [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA];
    }
    else {
        return [0, 0];
    }
}
exports.emitterFilterMode = emitterFilterMode;
//# sourceMappingURL=filtermode.js.map