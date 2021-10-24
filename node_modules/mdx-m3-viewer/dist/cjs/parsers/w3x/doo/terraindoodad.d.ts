import BinaryStream from '../../../common/binarystream';
/**
 * A terrain doodad.
 *
 * This type of doodad works much like cliffs.
 * It uses the height of the terrain, and gets affected by the ground heightmap.
 * It cannot be manipulated in any way in the World Editor once placed.
 * Indeed, the only way to change it is to remove it by changing cliffs around it.
 */
export default class TerrainDoodad {
    id: string;
    u1: number;
    location: Uint32Array;
    load(stream: BinaryStream, _version: number): void;
    save(stream: BinaryStream, _version: number): void;
}
