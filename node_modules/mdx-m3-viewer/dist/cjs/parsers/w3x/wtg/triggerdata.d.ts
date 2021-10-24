import { IniSection } from '../../ini/file';
/**
 * A standard object mapping strings to strings.
 */
export declare type StringObject = {
    [key: string]: string;
};
export declare type FunctionSignature = {
    args: string[];
    scriptName: string | null;
    returnType: string | null;
};
/**
 * A standard object mapping strings to function signatures and an optional Jass name.
 */
export declare type FunctionObject = {
    [key: string]: FunctionSignature;
};
/**
 * Trigger data needed to load a WTG file.
 */
export declare class TriggerData {
    types: StringObject;
    functions: FunctionObject[];
    presets: StringObject;
    externalTypes: StringObject;
    externalFunctions: FunctionObject[];
    externalPresets: StringObject;
    addTriggerData(buffer: string, isExternal: boolean): void;
    addTriggerTypes(types: StringObject, section: IniSection): void;
    addTriggerDataFunctions(functions: FunctionObject, section: IniSection, skipped: number): void;
    addTriggerDataPresets(presets: StringObject, section: IniSection): void;
    addJassFunctions(jass: string): void;
    /**
     * Given a type, return its base type.
     *
     * Returns the given type if its not a child type.
     */
    getBaseType(type: string): string;
    isBaseFunction(type: number, name: string): boolean;
    /**
     * Gets the signature of the given function.
     */
    getFunction(type: number, name: string): FunctionSignature;
    /**
     * Get the type of a function given its name.
     * Returns -1 if the function isn't recognized.
     */
    getFunctionType(name: string): number;
    /**
     * Gets a preset value.
     */
    getPreset(name: string): string;
    /**
     * Is the given preset a custom or standard one?
     */
    isCustomPreset(name: string): boolean;
}
