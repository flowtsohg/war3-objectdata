/**
 * A binary stream.
 */
export default class BinaryStream {
    buffer: ArrayBuffer;
    uint8array: Uint8Array;
    index: number;
    byteLength: number;
    remaining: number;
    constructor(buffer: ArrayBuffer | Uint8Array, byteOffset?: number, byteLength?: number);
    /**
     * Create a subreader of this reader, at its position, with the given byte length.
     */
    substream(byteLength: number): BinaryStream;
    /**
     * Skip a number of bytes.
     */
    skip(bytes: number): void;
    /**
     * Set the reader's index.
     */
    seek(index: number): void;
    /**
     * Read a UTF8 string with the given number of bytes.
     *
     * The entire size will be read, however the string returned is NULL terminated in its memory block.
     *
     * For example, the MDX format has many strings that have a constant maximum size, where any bytes after the string are NULLs.
     * Such strings will be loaded correctly given the maximum size.
     */
    read(bytes: number): string;
    /**
     * Read a UTF8 NULL terminated string.
     */
    readNull(): string;
    /**
     * Read a binary string with the given number of bytes.
     */
    readBinary(bytes: number): string;
    /**
     * Read a 8 bit signed integer.
     */
    readInt8(): number;
    /**
     * Read a 16 bit signed integer.
     */
    readInt16(): number;
    /**
     * Read a 32 bit signed integer.
     */
    readInt32(): number;
    /**
     * Read a 8 bit unsigned integer.
     */
    readUint8(): number;
    /**
     * Read a 16 bit unsigned integer.
     */
    readUint16(): number;
    /**
     * Read a 32 bit unsigned integer.
     */
    readUint32(): number;
    /**
     * Read a 32 bit float.
     */
    readFloat32(): number;
    /**
     * Read a 64 bit float.
     */
    readFloat64(): number;
    /**
     * Read an array of 8 bit signed integers.
     */
    readInt8Array(view: number | Int8Array): Int8Array;
    /**
     * Read an array of 16 bit signed integers.
     */
    readInt16Array(view: number | Int16Array): Int16Array;
    /**
     * Read an array of 32 bit signed integers.
     */
    readInt32Array(view: number | Int32Array): Int32Array;
    /**
     * Read an array of 8 bit unsigned integers.
     */
    readUint8Array(view: number | Uint8Array): Uint8Array;
    /**
     * Read an array of 16 bit unsigned integers.
     */
    readUint16Array(view: number | Uint16Array): Uint16Array;
    /**
     * Read an array of 32 bit unsigned integers.
     */
    readUint32Array(view: number | Uint32Array): Uint32Array;
    /**
     * Read an array of 32 bit floats.
     */
    readFloat32Array(view: number | Float32Array): Float32Array;
    /**
     * Read an array of 64 bit floats.
     */
    readFloat64Array(view: number | Float64Array): Float64Array;
    /**
     * Write a UTF8 string.
     *
     * Returns the number of bytes that were written,
     */
    write(utf8: string): number;
    /**
     * Write a UTF8 string as a NULL terminated string.
     *
     * Returns the number of bytes that were written, including the terminating NULL.
     */
    writeNull(utf8: string): number;
    /**
     * Write a binary string.
     */
    writeBinary(value: string): void;
    /**
     * Write a 8 bit signed integer.
     */
    writeInt8(value: number): void;
    /**
     * Write a 16 bit signed integer.
     */
    writeInt16(value: number): void;
    /**
     * Write a 32 bit signed integer.
     */
    writeInt32(value: number): void;
    /**
     * Write a 8 bit unsigned integer.
     */
    writeUint8(value: number): void;
    /**
     * Write a 16 bit unsigned integer.
     */
    writeUint16(value: number): void;
    /**
     * Write a 32 bit unsigned integer.
     */
    writeUint32(value: number): void;
    /**
     * Write a 32 bit float.
     */
    writeFloat32(value: number): void;
    /**
     * Write a 64 bit float.
     */
    writeFloat64(value: number): void;
    /**
     * Write an array of 8 bit signed integers.
     */
    writeInt8Array(view: Int8Array): void;
    /**
     * Write an array of 16 bit signed integers.
     */
    writeInt16Array(view: Int16Array): void;
    /**
     * Write an array of 32 bit signed integers.
     */
    writeInt32Array(view: Int32Array): void;
    /**
     * Write an array of 8 bit unsigned integers.
     */
    writeUint8Array(view: Uint8Array): void;
    /**
     * Write an array of 16 bit unsigned integers.
     */
    writeUint16Array(view: Uint16Array): void;
    /**
     * Write an array of 32 bit unsigned integers.
     */
    writeUint32Array(view: Uint32Array): void;
    /**
     * Write an array of 32 bit floats.
     */
    writeFloat32Array(view: Float32Array): void;
    /**
     * Write an array of 64 bit floats.
     */
    writeFloat64Array(view: Float64Array): void;
}
