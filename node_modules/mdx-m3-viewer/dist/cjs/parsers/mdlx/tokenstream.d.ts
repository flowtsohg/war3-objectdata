/**
 * Used to read and write MDL tokens.
 */
export default class TokenStream {
    buffer: string;
    index: number;
    ident: number;
    indentSpaces: number;
    precision: number;
    constructor(buffer?: string);
    /**
     * Clear the stream from whatever buffer it had.
     */
    clear(): void;
    /**
     * Reads the next token in the stream.
     * Whitespaces are ignored outside of strings in the form of "".
     * Comments in the form of // are ignored.
     * Commas and colons are ignored as well.
     * Curly braces are used as separators, generally to denote text blocks.
     *
     * For example, given the following string:
     *
     *     Header "A String" {
     *         Name Value, // A Comment
     *     }
     *
     * Read will return the values in order:
     *
     *     Header
     *     "A String"
     *     {
     *     Name
     *     Value
     *     }
     *
     * There are wrappers around read, below, that help to read structured code, check them out!
     */
    readToken(): string | undefined;
    /**
     * Same as readToken, but if the end of the stream was encountered, an exception will be thrown.
     */
    read(): string;
    /**
     * Reads the next token without advancing the stream.
     */
    peek(): string;
    /**
     * Reads the next token, and parses it as an integer.
     */
    readInt(): number;
    /**
     * Reads the next token, and parses it as a float.
     */
    readFloat(): number;
    /**
     * { Number0, Number1, ..., NumberN }
     */
    readVector<T extends Uint8Array | Uint16Array | Uint32Array | Float32Array>(view: T): T;
    /**
     * {
     *     { Value1, Value2, ..., ValueSize },
     *     { Value1, Value2, ..., ValueSize },
     *     ...
     * }
     */
    readVectorsBlock<T extends Uint16Array | Float32Array>(view: T, size: number): T;
    /**
     * Reads a color in the form:
     *
     *      { R, G, B }
     *
     * The color is sizzled to BGR.
     */
    readColor(view: Float32Array): Float32Array;
    /**
     * Helper generator for block reading.
     * Let's say we have a block like so:
     *
     *     {
     *         Key1 Value1
     *         Key2 Value2
     *         ...
     *         KeyN ValueN
     *     }
     *
     * The generator yields the keys one by one, and the caller needs to read the values based on the keys.
     * It is used for most MDL blocks.
     */
    readBlock(): Generator<string>;
    /**
     * Adds the given string to the buffer.
     * The current indentation level is prepended, and the stream goes to the next line after the write.
     */
    writeLine(line: string): void;
    /**
     * Flag,
     */
    writeFlag(flag: string): void;
    /**
     * Name Flag,
     */
    writeFlagAttrib(name: string, flag: string): void;
    /**
     * Name Value,
     */
    writeNumberAttrib(name: string, value: number): void;
    /**
     * Name "Value",
     */
    writeStringAttrib(name: string, value: string): void;
    /**
     * Name { Value0, Value1, ..., ValueN }
     */
    writeVectorAttrib(name: string, value: Uint8Array | Uint32Array | Float32Array): void;
    /**
     * Writes a color in the form:
     *
     *      { B, G, R }
     *
     * The color is sizzled to RGB.
     * The name can be either "Color" or "static Color", depending on the context.
     */
    writeColor(name: string, value: Float32Array): void;
    /**
     * { Value0, Value1, ..., ValueN },
     */
    writeVector(value: Uint16Array | Float32Array): void;
    /**
     * Name Vectors {
     *     { Value1, Value2, ..., ValueSize },
     *     { Value1, Value2, ..., ValueSize },
     *     ...
     * }
     */
    writeVectorArrayBlock(name: string, view: Float32Array, size: number): void;
    /**
     * Starts a new block in the form:
     *
     *      Header1 Header2 ... HeaderN {
     *          ...
     *      }
     */
    startBlock(name: string, ...headers: (string | number)[]): void;
    /**
     * Starts a new block in the form:
     *
     *      Header "Name" {
     *          ...
     *      }
     */
    startObjectBlock(header: string, name: string): void;
    /**
     * Ends a previously started block, and handles the indentation.
     */
    endBlock(): void;
    /**
     * Ends a previously started block, and handles the indentation.
     * Adds a comma after the block end.
     */
    endBlockComma(): void;
    /**
     * Increases the indentation level for following line writes.
     */
    indent(): void;
    /**
     * Decreases the indentation level for following line writes.
     */
    unindent(): void;
    /**
   * Given a number, truncates digits after the decimal point.
   * The given precision should be in base 10.
   * E.g. for a precision of two digits after the decimal point, the precision should be 100.
   * The result is returned as a string.
   */
    floatDecimals(value: number): string;
    /**
     * Uses floatDecimals on a typed array, and returns its string representation.
     */
    floatArrayDecimals(value: Uint8Array | Uint16Array | Uint32Array | Float32Array): string;
}
