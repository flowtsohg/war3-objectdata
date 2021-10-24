/**
 * war3map.shd - the shadow file.
 */
export default class War3MapShd {
    shadows: Uint8Array;
    load(buffer: ArrayBuffer | Uint8Array, width: number, height: number): void;
    save(): Uint8Array;
    getByteLength(): number;
}
