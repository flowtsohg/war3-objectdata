/**
 * A bit stream.
 */
export default class BitStream {
    buffer: ArrayBuffer;
    uint8array: Uint8Array;
    index: number;
    byteLength: number;
    bitBuffer: number;
    bits: number;
    constructor(buffer: ArrayBuffer | Uint8Array, byteOffset?: number, byteLength?: number);
    /**
     * Peek a number of bits.
     */
    peekBits(bits: number): number;
    /**
     * Read a number of bits.
     */
    readBits(bits: number): number;
    /**
     * Skip a number of bits.
     */
    skipBits(bits: number): void;
    /**
     * Load more bits into the buffer.
     */
    loadBits(bits: number): void;
}
