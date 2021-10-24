import BinaryStream from '../../../common/binarystream';
import ECA from './eca';
import { TriggerData } from './triggerdata';
/**
 * A GUI Trigger.
 */
export default class Trigger {
    name: string;
    description: string;
    isComment: number;
    isEnabled: number;
    isCustom: number;
    isInitiallyOff: number;
    runOnInitialization: number;
    category: number;
    ecas: ECA[];
    load(stream: BinaryStream, version: number, triggerData: TriggerData): void;
    save(stream: BinaryStream, version: number): void;
    getByteLength(version: number): number;
}
