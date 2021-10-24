import Import from './import';
/**
 * war3map.imp - the import file.
 */
export default class War3MapImp {
    version: number;
    entries: Map<string, Import>;
    load(buffer: ArrayBuffer | Uint8Array): void;
    save(): Uint8Array;
    getByteLength(): number;
    set(path: string): boolean;
    has(path: string): boolean;
    delete(path: string): boolean;
    rename(path: string, newPath: string): boolean;
}
