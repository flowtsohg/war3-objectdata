import MpqArchive from '../mpq/archive';
import War3MapImp from './imp/file';
import War3MapW3d from './w3d/file';
import War3MapW3u from './w3u/file';
import War3MapWct from './wct/file';
import War3MapWtg from './wtg/file';
import War3MapWts from './wts/file';
import { TriggerData } from './wtg/triggerdata';
import War3MapW3i from './w3i/file';
import MpqFile from '../mpq/file';
interface War3MapModifications {
    w3a?: War3MapW3d;
    w3b?: War3MapW3u;
    w3d?: War3MapW3d;
    w3h?: War3MapW3u;
    w3q?: War3MapW3d;
    w3t?: War3MapW3u;
    w3u?: War3MapW3u;
}
/**
 * Warcraft 3 map (W3X and W3M).
 */
export default class War3Map {
    u1: number;
    name: string;
    flags: number;
    maxPlayers: number;
    archive: MpqArchive;
    imports: War3MapImp;
    readonly: boolean;
    /**
     * Load an existing map.
     *
     * Note that this clears the map from whatever it had in it before.
     */
    load(buffer: ArrayBuffer | Uint8Array, readonly?: boolean): void;
    /**
     * Save this map.
     * If the archive is in readonly mode, returns null.
     */
    save(): Uint8Array;
    /**
     * A shortcut to the internal archive function.
     */
    getFileNames(): string[];
    /**
     * Gets a list of the file names imported in this map.
     */
    getImportNames(): string[];
    /**
     * Sets the imports file with all of the imports.
     *
     * Does nothing if the archive is in readonly mode.
     */
    setImportsFile(): boolean;
    /**
     * Imports a file to this archive.
     *
     * If the file already exists, its buffer will be set.
     *
     * Files added to the archive but not to the imports list will be deleted by the World Editor automatically.
     * This of course doesn't apply to internal map files.
     *
     * Does nothing if the archive is in readonly mode.
     */
    import(name: string, buffer: ArrayBuffer | string): boolean;
    /**
     * A shortcut to the internal archive function.
     */
    set(name: string, buffer: ArrayBuffer | string): boolean;
    /**
     * A shortcut to the internal archive function.
     */
    get(name: string): MpqFile | null;
    /**
     * Get the map's script.
     */
    getScriptFile(): MpqFile | null;
    /**
     * A shortcut to the internal archive function.
     */
    has(name: string): boolean;
    /**
     * Deletes a file from the internal archive.
     *
     * Note that if the file is in the imports list, it will be removed from it too.
     *
     * Use this rather than the internal archive's delete.
     */
    delete(name: string): boolean;
    /**
     * A shortcut to the internal archive function.
     */
    rename(name: string, newName: string): boolean;
    getMapInformation(): War3MapW3i;
    readImports(): void;
    readTriggers(triggerData: TriggerData): War3MapWtg | undefined;
    /**
     * Read and parse the custom text trigger file.
     */
    readCustomTextTriggers(): War3MapWct | undefined;
    /**
     * Read and parse the string table file.
     */
    readStringTable(): War3MapWts | undefined;
    /**
     * Read and parse all of the modification tables.
     */
    readModifications(): War3MapModifications;
}
export {};
