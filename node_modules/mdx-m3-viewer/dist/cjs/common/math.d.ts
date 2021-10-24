/**
 * Convert from degrees to radians.
 */
export declare function degToRad(degrees: number): number;
/**
 * Convert from radians to degrees.
 */
export declare function radToDeg(radians: number): number;
/**
 * Gets a random number between a range.
 */
export declare function randomInRange(a: number, b: number): number;
/**
 * Clamp a number in a range.
 */
export declare function clamp(x: number, minVal: number, maxVal: number): number;
/**
 * Linear interpolation.
 */
export declare function lerp(a: number, b: number, t: number): number;
/**
 * Hermite interpolation.
 */
export declare function hermite(a: number, b: number, c: number, d: number, t: number): number;
/**
 * Bezier interpolation.
 */
export declare function bezier(a: number, b: number, c: number, d: number, t: number): number;
/**
 * Copies the sign of one number onto another.
 */
export declare function copysign(x: number, y: number): number;
/**
 * Gets the closest power of two bigger or equal to the given number.
 */
export declare function powerOfTwo(x: number): number;
/**
 * Is this number a power of two?
 */
export declare function isPowerOfTwo(x: number): boolean;
