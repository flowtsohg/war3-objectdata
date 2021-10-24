/**
 * A block.
 */
export default class Block {
    offset: number;
    compressedSize: number;
    normalSize: number;
    flags: number;
    load(bytes: Uint32Array): void;
    save(bytes: Uint32Array): void;
}
