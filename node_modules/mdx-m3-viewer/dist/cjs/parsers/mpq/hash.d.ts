/**
 * A MPQ hash.
 */
export default class MpqHash {
    nameA: number;
    nameB: number;
    locale: number;
    platform: number;
    blockIndex: number;
    load(bytes: Uint32Array): void;
    copy(hash: MpqHash): void;
    save(bytes: Uint32Array): void;
    delete(): void;
}
