import TriggerCategory from './triggercategory';
import Variable from './variable';
import Trigger from './trigger';
import { TriggerData } from './triggerdata';
/**
 * war3map.wtg - the trigger file.
 */
export default class War3MapWtg {
    version: number;
    categories: TriggerCategory[];
    u1: number;
    variables: Variable[];
    triggers: Trigger[];
    load(buffer: ArrayBuffer | Uint8Array, triggerData: TriggerData): void;
    save(): Uint8Array;
    getByteLength(): number;
}
