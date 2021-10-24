import MpqCrypto from './crypto';
import MpqBlock from './block';
/**
 * A block table.
 */
export default class BlockTable {
    c: MpqCrypto;
    entries: MpqBlock[];
    constructor(c: MpqCrypto);
    add(buffer: ArrayBuffer): MpqBlock;
    clear(): void;
    addEmpties(howMany: number): void;
    load(bytes: Uint8Array): void;
    save(bytes: Uint8Array): void;
}
