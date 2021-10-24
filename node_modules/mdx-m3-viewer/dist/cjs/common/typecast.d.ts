/**
 * Typecast a 8 bit unsigned integer to a 8 bits signed integer.
 */
export declare function uint8ToInt8(a: number): number;
/**
 * Typecast two 8 bit unsigned integers to a 16 bits signed integer.
 */
export declare function uint8ToInt16(a: number, b: number): number;
/**
 * Typecast three 8 bit unsigned integers to a 24 bits signed integer.
 */
export declare function uint8ToInt24(a: number, b: number, c: number): number;
/**
 * Typecast four 8 bit unsigned integers to a 32 bits signed integer.
 */
export declare function uint8ToInt32(a: number, b: number, c: number, d: number): number;
/**
 * Typecast two 8 bit unsigned integers to a 16 bits unsigned integer.
 */
export declare function uint8ToUint16(a: number, b: number): number;
/**
 * Typecast three 8 bit unsigned integers to a 24 bits unsigned integer.
 */
export declare function uint8ToUint24(a: number, b: number, c: number): number;
/**
 * Typecast four 8 bit unsigned integers to a 32 bits unsigned integer.
 */
export declare function uint8ToUint32(a: number, b: number, c: number, d: number): number;
/**
 * Typecast four 8 bit unsigned integers to a 32 bits IEEE float.
 */
export declare function uint8ToFloat32(a: number, b: number, c: number, d: number): number;
/**
 * Typecast eight 8 bit unsigned integers to a 64 bits IEEE float.
 */
export declare function uint8ToFloat64(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number): number;
/**
 * Typecast a 8 bit signed integer to a 8 bit unsigned integer.
 */
export declare function int8ToUint8(a: number): number;
/**
 * Typecast a 16 bit signed integer to two 8 bit unsigned integers.
 *
 * The result is stored in out.
 */
export declare function int16ToUint8(out: Uint8Array, a: number): Uint8Array;
/**
 * Typecast a 24 bit signed integer to three 8 bit unsigned integers.
 *
 * The result is stored in out.
 */
export declare function int24ToUint8(out: Uint8Array, a: number): Uint8Array;
/**
 * Typecast a 32 bit signed integer to four 8 bit unsigned integers.
 *
 * The result is stored in out.
 */
export declare function int32ToUint8(out: Uint8Array, a: number): Uint8Array;
/**
 * Typecast a 16 bit unsigned integer to two 8 bit unsigned integers.
 *
 * The result is stored in out.
 */
export declare function uint16ToUint8(out: Uint8Array, a: number): Uint8Array;
/**
 * Typecast a 24 bit unsigned integer to three 8 bit unsigned integers.
 *
 * The result is stored in out.
 */
export declare function uint24ToUint8(out: Uint8Array, a: number): Uint8Array;
/**
 * Typecast a 32 bit unsigned integer to four 8 bit unsigned integers.
 *
 * The result is stored in out.
 */
export declare function uint32ToUint8(out: Uint8Array, a: number): Uint8Array;
/**
 * Typecast a 32 bit IEEE float to four 8 bit unsigned integers.
 *
 * The result is stored in out.
 */
export declare function float32ToUint8(out: Uint8Array, a: number): Uint8Array;
/**
 * Typecast a 64 bit IEEE float to eight 8 bit unsigned integers.
 *
 * The result is stored in out.
 */
export declare function float64ToUint8(out: Uint8Array, a: number): Uint8Array;
/**
 * Typecast a normal JavaScript number to a 32 bits unsigned integer.
 */
export declare function numberToUint32(number: number): number;
/**
 * Interperts a string as a base 256 number.
 */
export declare function stringToBase256(string: string): number;
/**
 * Interperts a number as a base 256 string.
 */
export declare function base256ToString(number: number): string;
