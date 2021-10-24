import Region from './region';
/**
 * war3map.w3r - the region file.
 */
export default class War3MapW3r {
    version: number;
    regions: Region[];
    load(buffer: ArrayBuffer | Uint8Array): void;
    save(): Uint8Array;
    getByteLength(): number;
}
