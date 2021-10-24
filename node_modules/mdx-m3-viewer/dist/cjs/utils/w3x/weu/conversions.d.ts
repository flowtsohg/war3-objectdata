import Trigger from '../../../parsers/w3x/wtg/trigger';
import ECA from '../../../parsers/w3x/wtg/eca';
import Parameter from '../../../parsers/w3x/wtg/parameter';
import SubParameters from '../../../parsers/w3x/wtg/subparameters';
import WeuData from './data';
/**
 * Converts a Trigger to a custom script string.
 * Callbacks that are generated due to the conversion are added to the input callbacks array.
 */
export declare function convertTrigger(data: WeuData, trigger: Trigger, callbacks: string[]): string;
/**
 * Converts an ECA or SubParameters to an array of custom script ECAs.
 * Callbacks that are generated due to the conversion are added to the input callbacks array.
 */
export declare function convertFunctionCall(data: WeuData, object: ECA | SubParameters, callbacks: string[]): ECA[];
/**
 * Converts a parameter to custom script.
 * Callbacks that are generated due to the conversion are added to the input callbacks array.
 */
export declare function convertParameter(data: WeuData, parameter: Parameter, dataType: string, callbacks: string[]): string;
/**
 * Convert a parameter to a custom script string, discarding any generated callbacks.
 */
export declare function convertParameterInline(data: WeuData, parameter: Parameter, dataType: string): string;
