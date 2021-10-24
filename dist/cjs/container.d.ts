import Modification from 'mdx-m3-viewer/dist/cjs/parsers/w3x/w3u/modification';
import ModificationTable from 'mdx-m3-viewer/dist/cjs/parsers/w3x/w3u/modificationtable';
export declare abstract class OEContainer<T> {
    abstract game: {
        [key: string]: T;
    };
    abstract map: {
        [key: string]: {
            oldId: string;
            newId: string;
        } & T;
    };
    abstract loadModification(object: {
        oldId: string;
        newId: string;
    } & T, modification: Modification): void;
    get(id: string): T | undefined;
    loadObject(oldId: string, newId: string, modifications: Modification[]): void;
    load(originalTable: ModificationTable, customTable: ModificationTable): void;
}
