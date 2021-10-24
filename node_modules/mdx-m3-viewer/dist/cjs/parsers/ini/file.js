"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IniFile = void 0;
/**
 * An INI file.
 */
class IniFile {
    constructor() {
        this.properties = new Map();
        this.sections = new Map();
    }
    load(buffer) {
        // All properties added until a section is reached are added to the properties map.
        // Once a section is reached, any further properties will be added to it until matching another section, etc.
        let section = this.properties;
        const sections = this.sections;
        for (const line of buffer.split('\r\n')) {
            // INI defines comments as starting with a semicolon ';'.
            // However, Warcraft 3 INI files use normal C comments '//'.
            // In addition, Warcraft 3 files have empty lines.
            // Therefore, ignore any line matching any of these conditions.
            if (line.length && !line.startsWith('//') && !line.startsWith(';')) {
                let match = line.match(/^\[(.+?)\]/);
                if (match) {
                    const name = match[1].trim();
                    section = sections.get(name);
                    if (!section) {
                        section = new Map();
                        sections.set(name, section);
                    }
                }
                else {
                    match = line.match(/^(.+?)=(.*?)$/);
                    if (match) {
                        let value = match[2];
                        if (value[0] === '"') {
                            value = value.slice(1, -1);
                        }
                        section.set(match[1], value);
                    }
                }
            }
        }
    }
    save() {
        const lines = [];
        for (const [key, value] of this.properties) {
            lines.push(`${key}=${value}`);
        }
        for (const [name, section] of this.sections) {
            lines.push(`[${name}]`);
            for (const [key, value] of section) {
                lines.push(`${key}=${value}`);
            }
        }
        return lines.join('\r\n');
    }
    getSection(name) {
        return this.sections.get(name);
    }
}
exports.IniFile = IniFile;
//# sourceMappingURL=file.js.map