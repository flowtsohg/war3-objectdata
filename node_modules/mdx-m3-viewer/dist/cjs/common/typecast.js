"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base256ToString = exports.stringToBase256 = exports.numberToUint32 = exports.float64ToUint8 = exports.float32ToUint8 = exports.uint32ToUint8 = exports.uint24ToUint8 = exports.uint16ToUint8 = exports.int32ToUint8 = exports.int24ToUint8 = exports.int16ToUint8 = exports.int8ToUint8 = exports.uint8ToFloat64 = exports.uint8ToFloat32 = exports.uint8ToUint32 = exports.uint8ToUint24 = exports.uint8ToUint16 = exports.uint8ToInt32 = exports.uint8ToInt24 = exports.uint8ToInt16 = exports.uint8ToInt8 = void 0;
const buffer = new ArrayBuffer(8);
const int8 = new Int8Array(buffer);
const int16 = new Int16Array(buffer);
const int32 = new Int32Array(buffer);
const uint8 = new Uint8Array(buffer);
const uint16 = new Uint16Array(buffer);
const uint32 = new Uint32Array(buffer);
const float32 = new Float32Array(buffer);
const float64 = new Float64Array(buffer);
/**
 * Typecast a 8 bit unsigned integer to a 8 bits signed integer.
 */
function uint8ToInt8(a) {
    uint8[0] = a;
    return int8[0];
}
exports.uint8ToInt8 = uint8ToInt8;
/**
 * Typecast two 8 bit unsigned integers to a 16 bits signed integer.
 */
function uint8ToInt16(a, b) {
    uint8[0] = a;
    uint8[1] = b;
    return int16[0];
}
exports.uint8ToInt16 = uint8ToInt16;
/**
 * Typecast three 8 bit unsigned integers to a 24 bits signed integer.
 */
function uint8ToInt24(a, b, c) {
    uint8[0] = a;
    uint8[1] = b;
    uint8[2] = c;
    uint8[3] = 0;
    return int32[0];
}
exports.uint8ToInt24 = uint8ToInt24;
/**
 * Typecast four 8 bit unsigned integers to a 32 bits signed integer.
 */
function uint8ToInt32(a, b, c, d) {
    uint8[0] = a;
    uint8[1] = b;
    uint8[2] = c;
    uint8[3] = d;
    return int32[0];
}
exports.uint8ToInt32 = uint8ToInt32;
/**
 * Typecast two 8 bit unsigned integers to a 16 bits unsigned integer.
 */
function uint8ToUint16(a, b) {
    uint8[0] = a;
    uint8[1] = b;
    return uint16[0];
}
exports.uint8ToUint16 = uint8ToUint16;
/**
 * Typecast three 8 bit unsigned integers to a 24 bits unsigned integer.
 */
function uint8ToUint24(a, b, c) {
    uint8[0] = a;
    uint8[1] = b;
    uint8[2] = c;
    uint8[3] = 0;
    return uint32[0];
}
exports.uint8ToUint24 = uint8ToUint24;
/**
 * Typecast four 8 bit unsigned integers to a 32 bits unsigned integer.
 */
function uint8ToUint32(a, b, c, d) {
    uint8[0] = a;
    uint8[1] = b;
    uint8[2] = c;
    uint8[3] = d;
    return uint32[0];
}
exports.uint8ToUint32 = uint8ToUint32;
/**
 * Typecast four 8 bit unsigned integers to a 32 bits IEEE float.
 */
function uint8ToFloat32(a, b, c, d) {
    uint8[0] = a;
    uint8[1] = b;
    uint8[2] = c;
    uint8[3] = d;
    return float32[0];
}
exports.uint8ToFloat32 = uint8ToFloat32;
/**
 * Typecast eight 8 bit unsigned integers to a 64 bits IEEE float.
 */
function uint8ToFloat64(a, b, c, d, e, f, g, h) {
    uint8[0] = a;
    uint8[1] = b;
    uint8[2] = c;
    uint8[3] = d;
    uint8[4] = e;
    uint8[5] = f;
    uint8[6] = g;
    uint8[7] = h;
    return float64[0];
}
exports.uint8ToFloat64 = uint8ToFloat64;
/**
 * Typecast a 8 bit signed integer to a 8 bit unsigned integer.
 */
function int8ToUint8(a) {
    uint8[0] = a;
    return int8[0];
}
exports.int8ToUint8 = int8ToUint8;
/**
 * Typecast a 16 bit signed integer to two 8 bit unsigned integers.
 *
 * The result is stored in out.
 */
function int16ToUint8(out, a) {
    int16[0] = a;
    out[0] = uint8[0];
    out[1] = uint8[1];
    return out;
}
exports.int16ToUint8 = int16ToUint8;
/**
 * Typecast a 24 bit signed integer to three 8 bit unsigned integers.
 *
 * The result is stored in out.
 */
function int24ToUint8(out, a) {
    int32[0] = a;
    out[0] = uint8[0];
    out[1] = uint8[1];
    out[2] = uint8[2];
    return out;
}
exports.int24ToUint8 = int24ToUint8;
/**
 * Typecast a 32 bit signed integer to four 8 bit unsigned integers.
 *
 * The result is stored in out.
 */
function int32ToUint8(out, a) {
    int32[0] = a;
    out[0] = uint8[0];
    out[1] = uint8[1];
    out[2] = uint8[2];
    out[3] = uint8[3];
    return out;
}
exports.int32ToUint8 = int32ToUint8;
/**
 * Typecast a 16 bit unsigned integer to two 8 bit unsigned integers.
 *
 * The result is stored in out.
 */
function uint16ToUint8(out, a) {
    uint16[0] = a;
    out[0] = uint8[0];
    out[1] = uint8[1];
    return out;
}
exports.uint16ToUint8 = uint16ToUint8;
/**
 * Typecast a 24 bit unsigned integer to three 8 bit unsigned integers.
 *
 * The result is stored in out.
 */
function uint24ToUint8(out, a) {
    uint32[0] = a;
    out[0] = uint8[0];
    out[1] = uint8[1];
    out[2] = uint8[2];
    return out;
}
exports.uint24ToUint8 = uint24ToUint8;
/**
 * Typecast a 32 bit unsigned integer to four 8 bit unsigned integers.
 *
 * The result is stored in out.
 */
function uint32ToUint8(out, a) {
    uint32[0] = a;
    out[0] = uint8[0];
    out[1] = uint8[1];
    out[2] = uint8[2];
    out[3] = uint8[3];
    return out;
}
exports.uint32ToUint8 = uint32ToUint8;
/**
 * Typecast a 32 bit IEEE float to four 8 bit unsigned integers.
 *
 * The result is stored in out.
 */
function float32ToUint8(out, a) {
    float32[0] = a;
    out[0] = uint8[0];
    out[1] = uint8[1];
    out[2] = uint8[2];
    out[3] = uint8[3];
    return out;
}
exports.float32ToUint8 = float32ToUint8;
/**
 * Typecast a 64 bit IEEE float to eight 8 bit unsigned integers.
 *
 * The result is stored in out.
 */
function float64ToUint8(out, a) {
    float64[0] = a;
    out[0] = uint8[0];
    out[1] = uint8[1];
    out[2] = uint8[2];
    out[3] = uint8[3];
    out[4] = uint8[4];
    out[5] = uint8[5];
    out[6] = uint8[6];
    out[7] = uint8[7];
    return out;
}
exports.float64ToUint8 = float64ToUint8;
/**
 * Typecast a normal JavaScript number to a 32 bits unsigned integer.
 */
function numberToUint32(number) {
    uint32[0] = number;
    return uint32[0];
}
exports.numberToUint32 = numberToUint32;
/**
 * Interperts a string as a base 256 number.
 */
function stringToBase256(string) {
    let number = 0;
    for (const c of string) {
        number = number * 256 + c.charCodeAt(0);
    }
    return number;
}
exports.stringToBase256 = stringToBase256;
/**
 * Interperts a number as a base 256 string.
 */
function base256ToString(number) {
    const array = [];
    while (number > 0) {
        array.push(String.fromCharCode(number % 256));
        number = Math.floor(number / 256);
    }
    return array.reverse().join('');
}
exports.base256ToString = base256ToString;
//# sourceMappingURL=typecast.js.map