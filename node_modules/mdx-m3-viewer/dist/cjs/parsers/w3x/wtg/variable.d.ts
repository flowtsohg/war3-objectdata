import BinaryStream from '../../../common/binarystream';
/**
 * A global variable.
 */
export default class Variable {
    name: string;
    type: string;
    u1: number;
    isArray: number;
    arraySize: number;
    isInitialized: number;
    initialValue: string;
    load(stream: BinaryStream, version: number): void;
    save(stream: BinaryStream, version: number): void;
    getByteLength(version: number): number;
}
