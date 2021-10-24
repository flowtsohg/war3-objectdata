/**
 * An INI section.
 */
export declare type IniSection = Map<string, string>;
/**
 * An INI file.
 */
export declare class IniFile {
    properties: Map<string, string>;
    sections: Map<string, IniSection>;
    load(buffer: string): void;
    save(): string;
    getSection(name: string): IniSection | undefined;
}
