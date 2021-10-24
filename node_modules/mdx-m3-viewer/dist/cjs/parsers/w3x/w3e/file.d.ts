import Corner from './corner';
/**
 * war3map.w3e - the environment file.
 */
export default class War3MapW3e {
    version: number;
    tileset: string;
    haveCustomTileset: number;
    groundTilesets: string[];
    cliffTilesets: string[];
    mapSize: Int32Array;
    centerOffset: Float32Array;
    corners: Corner[][];
    load(buffer: ArrayBuffer | Uint8Array): void;
    save(): Uint8Array;
    getByteLength(): number;
}
