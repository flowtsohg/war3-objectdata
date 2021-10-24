"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const binarystream_1 = require("../../common/binarystream");
const archive_1 = require("../mpq/archive");
const file_1 = require("./imp/file");
const file_2 = require("./w3d/file");
const file_3 = require("./w3u/file");
const file_4 = require("./wct/file");
const file_5 = require("./wtg/file");
const file_6 = require("./wts/file");
const file_7 = require("./w3i/file");
/**
 * Warcraft 3 map (W3X and W3M).
 */
class War3Map {
    constructor() {
        this.u1 = 0;
        this.name = '';
        this.flags = 0;
        this.maxPlayers = 0;
        this.archive = new archive_1.default();
        this.imports = new file_1.default();
        this.readonly = false;
    }
    /**
     * Load an existing map.
     *
     * Note that this clears the map from whatever it had in it before.
     */
    load(buffer, readonly = false) {
        const stream = new binarystream_1.default(buffer);
        // The header no longer exists since some 1.3X.X patch?
        if (stream.readBinary(4) === 'HM3W') {
            this.u1 = stream.readUint32();
            this.name = stream.readNull();
            this.flags = stream.readUint32();
            this.maxPlayers = stream.readUint32();
        }
        this.readonly = readonly;
        // Read the archive.
        this.archive.load(buffer, readonly);
        // Read in the imports file if there is one.
        this.readImports();
    }
    /**
     * Save this map.
     * If the archive is in readonly mode, returns null.
     */
    save() {
        // Update the imports if needed.
        this.setImportsFile();
        const archiveBuffer = this.archive.save();
        if (!archiveBuffer) {
            throw Error('Failed to save the map MPQ archive');
        }
        const information = this.getMapInformation();
        // If this is a pre-1.31 map, or we don't know what the version is, save also the map header.
        if (!information || information.getBuildVersion() < 131) {
            const bytes = new Uint8Array(512 + archiveBuffer.byteLength);
            const stream = new binarystream_1.default(bytes);
            // Write the header.
            stream.writeBinary('HM3W');
            stream.writeUint32(this.u1);
            stream.writeNull(this.name);
            stream.writeUint32(this.flags);
            stream.writeUint32(this.maxPlayers);
            bytes.set(archiveBuffer, 512);
            return bytes;
        }
        else {
            return archiveBuffer;
        }
    }
    /**
     * A shortcut to the internal archive function.
     */
    getFileNames() {
        return this.archive.getFileNames();
    }
    /**
     * Gets a list of the file names imported in this map.
     */
    getImportNames() {
        const names = [];
        for (const entry of this.imports.entries.values()) {
            const isCustom = entry.isCustom;
            if (isCustom === 10 || isCustom === 13) {
                names.push(entry.path);
            }
            else {
                names.push(`war3mapImported\\${entry.path}`);
            }
        }
        return names;
    }
    /**
     * Sets the imports file with all of the imports.
     *
     * Does nothing if the archive is in readonly mode.
     */
    setImportsFile() {
        if (this.readonly) {
            return false;
        }
        if (this.imports.entries.size > 0) {
            return this.set('war3map.imp', this.imports.save());
        }
        return false;
    }
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
    import(name, buffer) {
        if (this.readonly) {
            return false;
        }
        if (this.archive.set(name, buffer)) {
            this.imports.set(name);
            return true;
        }
        return false;
    }
    /**
     * A shortcut to the internal archive function.
     */
    set(name, buffer) {
        if (this.readonly) {
            return false;
        }
        return this.archive.set(name, buffer);
    }
    /**
     * A shortcut to the internal archive function.
     */
    get(name) {
        return this.archive.get(name);
    }
    /**
     * Get the map's script.
     */
    getScriptFile() {
        return this.get('war3map.j') || this.get('scripts\\war3map.j') || this.get('war3map.lua') || this.get('scripts\\war3map.lua');
    }
    /**
     * A shortcut to the internal archive function.
     */
    has(name) {
        return this.archive.has(name);
    }
    /**
     * Deletes a file from the internal archive.
     *
     * Note that if the file is in the imports list, it will be removed from it too.
     *
     * Use this rather than the internal archive's delete.
     */
    delete(name) {
        if (this.readonly) {
            return false;
        }
        // If this file is in the import list, remove it.
        this.imports.delete(name);
        return this.archive.delete(name);
    }
    /**
     * A shortcut to the internal archive function.
     */
    rename(name, newName) {
        if (this.readonly) {
            return false;
        }
        if (this.archive.rename(name, newName)) {
            // If the file was actually renamed, and it is an import, rename also the import entry.
            this.imports.rename(name, newName);
            return true;
        }
        return false;
    }
    getMapInformation() {
        const file = this.archive.get('war3map.w3i');
        if (!file) {
            throw new Error('File does not exist');
        }
        const parser = new file_7.default();
        parser.load(file.bytes());
        return parser;
    }
    readImports() {
        const file = this.archive.get('war3map.imp');
        if (file) {
            const buffer = file.arrayBuffer();
            if (buffer) {
                this.imports.load(buffer);
            }
        }
    }
    readTriggers(triggerData) {
        const file = this.archive.get('war3map.wtg');
        if (file) {
            const buffer = file.arrayBuffer();
            if (buffer) {
                const object = new file_5.default();
                object.load(buffer, triggerData);
                return object;
            }
        }
        return;
    }
    /**
     * Read and parse the custom text trigger file.
     */
    readCustomTextTriggers() {
        const file = this.archive.get('war3map.wct');
        if (file) {
            const buffer = file.arrayBuffer();
            if (buffer) {
                const object = new file_4.default();
                object.load(buffer);
                return object;
            }
        }
        return;
    }
    /**
     * Read and parse the string table file.
     */
    readStringTable() {
        const file = this.archive.get('war3map.wts');
        if (file) {
            const buffer = file.text();
            if (buffer) {
                const object = new file_6.default();
                object.load(buffer);
                return object;
            }
        }
        return;
    }
    /**
     * Read and parse all of the modification tables.
     */
    readModifications() {
        const modifications = {};
        // useOptionalInts:
        //      w3u: no (units)
        //      w3t: no (items)
        //      w3b: no (destructables)
        //      w3d: yes (doodads)
        //      w3a: yes (abilities)
        //      w3h: no (buffs)
        //      w3q: yes (upgrades)
        const fileNames = ['w3u', 'w3t', 'w3b', 'w3d', 'w3a', 'w3h', 'w3q'];
        const useOptionalInts = [false, false, false, true, true, false, true];
        for (let i = 0, l = fileNames.length; i < l; i++) {
            const file = this.archive.get(`war3map.${fileNames[i]}`);
            if (file) {
                const buffer = file.arrayBuffer();
                if (buffer) {
                    let modification;
                    if (useOptionalInts[i]) {
                        modification = new file_2.default();
                    }
                    else {
                        modification = new file_3.default();
                    }
                    modification.load(buffer);
                    modifications[fileNames[i]] = modification;
                }
            }
        }
        return modifications;
    }
}
exports.default = War3Map;
//# sourceMappingURL=map.js.map