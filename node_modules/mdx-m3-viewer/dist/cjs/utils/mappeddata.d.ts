/**
 * A MappedData row.
 */
export declare class MappedDataRow {
    map: {
        [key: string]: string;
    };
    set(key: string, value: string | number): void;
    string(key: string): string | undefined;
    number(key: string): number;
}
/**
 * A structure that holds mapped data from INI and SLK files.
 *
 * In the case of SLK files, the first row is expected to hold the names of the columns.
 */
export declare class MappedData {
    map: {
        [key: string]: MappedDataRow;
    };
    constructor(buffer?: string);
    /**
     * Load data from an SLK file or an INI file.
     *
     * Note that this may override previous properties!
     */
    load(buffer: string): void;
    getRow(key: string): MappedDataRow | undefined;
    getProperty(key: string, name: string): string;
    setRow(key: string, values: MappedDataRow): void;
    findRow(key: string, expectedValue: string): MappedDataRow | undefined;
}
