import MpqCrypto from './crypto';
import MpqHash from './hash';
/**
 * A MPQ hash table.
 */
export default class MpqHashTable {
    c: MpqCrypto;
    entries: MpqHash[];
    constructor(c: MpqCrypto);
    clear(): void;
    addEmpties(howMany: number): void;
    getInsertionIndex(name: string): number;
    add(name: string, blockIndex: number): MpqHash | undefined;
    load(bytes: Uint8Array): void;
    save(bytes: Uint8Array): void;
    get(name: string): MpqHash | null;
}
