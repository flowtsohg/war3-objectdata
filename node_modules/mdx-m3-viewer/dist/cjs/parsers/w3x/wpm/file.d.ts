/**
 * war3map.wpm - the pathing file.
 */
export default class War3MapWpm {
    version: number;
    size: Int32Array;
    pathing: Uint8Array;
    load(buffer: ArrayBuffer | Uint8Array): void;
    save(): Uint8Array;
    getByteLength(): number;
}
