import BinaryStream from '../../../common/binarystream';
import RandomItemSet from './randomitemset';
/**
 * A doodad.
 */
export default class Doodad {
    id: string;
    variation: number;
    location: Float32Array;
    angle: number;
    scale: Float32Array;
    /**
     * @since Game version 1.32
     */
    skin: string;
    flags: number;
    life: number;
    itemTable: number;
    itemSets: RandomItemSet[];
    editorId: number;
    u1: Uint8Array;
    load(stream: BinaryStream, version: number, buildVersion: number): void;
    save(stream: BinaryStream, version: number, buildVersion: number): void;
    getByteLength(version: number, buildVersion: number): number;
}
