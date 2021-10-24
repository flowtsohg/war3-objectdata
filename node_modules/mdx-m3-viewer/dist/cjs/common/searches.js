"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boundIndexOf = exports.isStringInString = exports.isStringInBytes = void 0;
function isStringInBytes(buffer, target, offset = 0, length = Infinity) {
    const start = Math.max(offset, 0);
    const end = Math.min(start + length, buffer.length);
    let whichByte = 0;
    let targetByte = target.charCodeAt(0);
    for (let i = start; i < end; i++) {
        const byte = buffer[i];
        if (byte === targetByte) {
            whichByte += 1;
            if (whichByte === target.length) {
                return true;
            }
            targetByte = target.charCodeAt(whichByte);
        }
        else if (whichByte > 0) {
            whichByte = 0;
            targetByte = target.charCodeAt(0);
        }
    }
    return false;
}
exports.isStringInBytes = isStringInBytes;
function isStringInString(buffer, target, offset = 0, length = Infinity) {
    const start = Math.max(offset, 0);
    const end = Math.min(start + length, buffer.length);
    let whichByte = 0;
    let targetByte = target[0];
    for (let i = start; i < end; i++) {
        const byte = buffer[i];
        if (byte === targetByte) {
            whichByte += 1;
            if (whichByte === target.length) {
                return true;
            }
            targetByte = target[whichByte];
        }
        else if (whichByte > 0) {
            whichByte = 0;
            targetByte = target[0];
        }
    }
    return false;
}
exports.isStringInString = isStringInString;
function boundIndexOf(buffer, target, offset = 0, length = Infinity) {
    const start = Math.max(offset, 0);
    const end = Math.min(start + length, buffer.length);
    for (let i = start; i < end; i++) {
        if (buffer[i] === target) {
            return i;
        }
    }
    return -1;
}
exports.boundIndexOf = boundIndexOf;
//# sourceMappingURL=searches.js.map