import BinaryStream from '../../common/binarystream';
/**
 * An unknown chunk.
 */
export default class UnknownChunk {
    tag: string;
    chunk: Uint8Array;
    constructor(stream: BinaryStream, size: number, tag: string);
    writeMdx(stream: BinaryStream): void;
    getByteLength(): number;
}
