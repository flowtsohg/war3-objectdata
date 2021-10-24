import War3Map from '../../../parsers/w3x/map';
import { TriggerData } from '../../../parsers/w3x/wtg/triggerdata';
import { WEUChange } from './data';
export interface WeuConversionResult {
    ok: boolean;
    error?: string;
    changes?: WEUChange[];
}
export default function convertWeu(map: War3Map, customTriggerData: TriggerData, weTriggerData: TriggerData): WeuConversionResult;
