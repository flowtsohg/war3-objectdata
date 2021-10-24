import Trigger from '../../../parsers/w3x/wtg/trigger';
import ECA from '../../../parsers/w3x/wtg/eca';
import Parameter from '../../../parsers/w3x/wtg/parameter';
import SubParameters from '../../../parsers/w3x/wtg/subparameters';
import CustomTextTrigger from '../../../parsers/w3x/wct/customtexttrigger';
import { TriggerData } from '../../../parsers/w3x/wtg/triggerdata';
import War3MapWts from '../../../parsers/w3x/wts/file';
export interface WEUChange {
    type: string;
    reason: string;
    data: string;
    stack: string;
}
export default class WeuData {
    triggerData: TriggerData;
    stringTable: War3MapWts;
    preplacedObjects: Map<string, boolean>;
    changes: WEUChange[];
    stack: (Trigger | ECA | Parameter | SubParameters)[];
    constructor(triggerData: TriggerData, stringTable: War3MapWts);
    push(object: Trigger | ECA | Parameter | SubParameters): void;
    pop(): void;
    change(type: string, reason: string, data: string): void;
    stackToString(): string;
    getTriggerName(): string;
    /**
     * Every time a reference to a preplaced object is encountered while testing the GUI, this will be called with isGUI being true.
     * Every time a reference to a preplaced object is converted to custom script, this will be called with isGUI being false.
     * This is used to track references that existed in GUI before the conversion, but that will be only in custom scripts afterwards.
     * References that are lost due to the conversion are then added in a new trigger called PreplacedObjectReferences.
     */
    updateGUIReference(name: string, isGUI: boolean): void;
    saveGUIReferences(triggers: Trigger[], customTextTriggers: CustomTextTrigger[]): void;
}
