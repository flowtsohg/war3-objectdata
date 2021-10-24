import BinaryStream from '../../../common/binarystream';
/**
 * A region.
 */
export default class Region {
    left: number;
    right: number;
    bottom: number;
    top: number;
    name: string;
    creationNumber: number;
    weatherEffectId: string;
    ambientSound: string;
    color: Uint8Array;
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
    getByteLength(): number;
}
