import BinaryStream from '../../../common/binarystream';
import Parameter from './parameter';
import { TriggerData } from './triggerdata';
/**
 * An Event/Condition/Action.
 */
export default class ECA {
    type: number;
    group: number;
    name: string;
    isEnabled: number;
    parameters: Parameter[];
    ecas: ECA[];
    load(stream: BinaryStream, version: number, isChildECA: boolean, triggerData: TriggerData): void;
    save(stream: BinaryStream, version: number): void;
    getByteLength(version: number): number;
}
