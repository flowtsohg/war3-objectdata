import Doodad from './doodad';
import TerrainDoodad from './terraindoodad';
/**
 * war3map.doo - the doodad and destructible file.
 */
export default class War3MapDoo {
    version: number;
    u1: Uint8Array;
    doodads: Doodad[];
    u2: Uint8Array;
    terrainDoodads: TerrainDoodad[];
    load(buffer: ArrayBuffer | Uint8Array, buildVersion: number): void;
    save(buildVersion: number): Uint8Array;
    getByteLength(buildVersion: number): number;
}
