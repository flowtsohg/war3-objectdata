import Trigger from '../../../parsers/w3x/wtg/trigger';
import ECA from '../../../parsers/w3x/wtg/eca';
import WeuData from './data';
interface ConvertionResult {
    convert: boolean;
    reason: string;
}
export declare function processTrigger(data: WeuData, trigger: Trigger, callbacks: string[]): ConvertionResult;
export declare function processECA(data: WeuData, eca: ECA, callbacks: string[]): ConvertionResult;
export {};
