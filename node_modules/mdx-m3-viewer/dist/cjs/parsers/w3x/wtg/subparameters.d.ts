import BinaryStream from '../../../common/binarystream';
import Parameter from './parameter';
import { TriggerData } from './triggerdata';
/**
 * A function call in an expression.
 */
export default class SubParameters {
    type: number;
    name: string;
    beginParameters: number;
    parameters: Parameter[];
    load(stream: BinaryStream, version: number, triggerData: TriggerData): void;
    save(stream: BinaryStream, version: number): void;
    getByteLength(version: number): number;
}
