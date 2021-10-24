import BinaryStream from '../../../common/binarystream';
/**
 * A player.
 */
export default class Player {
    id: number;
    type: number;
    race: number;
    isFixedStartPosition: number;
    name: string;
    startLocation: Float32Array;
    allyLowPriorities: number;
    allyHighPriorities: number;
    unknown1: Uint8Array;
    load(stream: BinaryStream, version: number): void;
    save(stream: BinaryStream, version: number): void;
    getByteLength(version: number): number;
}
