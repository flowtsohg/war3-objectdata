export default class TokenStream {
    buffer: string;
    index: number;
    constructor(buffer: string);
    read(): string | undefined;
    /**
     * Reads the next token without advancing the stream.
     */
    peek(): string | undefined;
    readSafe(): string;
    readUntil(delimiter: string): string;
}
