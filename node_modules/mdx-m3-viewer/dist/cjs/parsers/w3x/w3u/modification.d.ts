import BinaryStream from '../../../common/binarystream';
/**
 * A modification.
 */
export default class Modification {
    id: string;
    variableType: number;
    levelOrVariation: number;
    dataPointer: number;
    value: number | string;
    u1: number;
    load(stream: BinaryStream, useOptionalInts: boolean): void;
    save(stream: BinaryStream, useOptionalInts: boolean): void;
    getByteLength(useOptionalInts: boolean): number;
}
