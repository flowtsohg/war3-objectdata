import War3MapW3u from '../w3u/file';
import War3MapW3d from '../w3d/file';
/**
 * war3map.w3o - the combined modification file.
 *
 * Contains all of the modifications of a map.
 * Can be exported and imported via the World Editor.
 */
export default class War3MapW3o {
    version: number;
    units: War3MapW3u | null;
    items: War3MapW3u | null;
    destructables: War3MapW3u | null;
    doodads: War3MapW3d | null;
    abilities: War3MapW3d | null;
    buffs: War3MapW3u | null;
    upgrades: War3MapW3d | null;
    load(buffer: ArrayBuffer | Uint8Array): void;
    save(): Uint8Array;
    getByteLength(): number;
}
