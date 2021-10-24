/**
 * Decodes DXT1 data to a Uint8Array typed array with 8-8-8-8 RGBA bits.
 *
 * DXT1 is also known as BC1.
 */
export declare function decodeDxt1(src: Uint8Array, width: number, height: number): Uint8Array;
/**
 * Decodes DXT3 data to a Uint8Array typed array with 8-8-8-8 RGBA bits.
 *
 * DXT3 is also known as BC2.
 */
export declare function decodeDxt3(src: Uint8Array, width: number, height: number): Uint8Array;
/**
 * Decodes DXT5 data to a Uint8Array typed array with 8-8-8-8 RGBA bits.
 *
 * DXT5 is also known as BC3.
 */
export declare function decodeDxt5(src: Uint8Array, width: number, height: number): Uint8Array;
/**
 * Decodes RGTC data to a Uint8Array typed array with 8-8 RG bits.
 *
 * RGTC is also known as BC5, ATI2, and 3Dc.
 */
export declare function decodeRgtc(src: Uint8Array, width: number, height: number): Uint8Array;
