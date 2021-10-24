import BinaryStream from '../../../common/binarystream';
import SubParameters from './subparameters';
import { TriggerData } from './triggerdata';
/**
 * A function parameter. Can be a function itself, in which case it will have a SubParameters structure.
 */
export default class Parameter {
    type: number;
    value: string;
    subParameters: SubParameters | null;
    u1: number;
    isArray: number;
    arrayIndex: Parameter | null;
    load(stream: BinaryStream, version: number, triggerData: TriggerData): void;
    save(stream: BinaryStream, version: number): void;
    getByteLength(version: number): number;
}
