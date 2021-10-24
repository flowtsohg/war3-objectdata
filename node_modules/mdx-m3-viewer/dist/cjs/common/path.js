"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filename = exports.extname = exports.basename = void 0;
/**
 * Returns the base name of a file path.
 *
 * Path/To/My/File.ext => File.ext
 */
function basename(path) {
    if (path && path.length) {
        let index = path.lastIndexOf('/');
        if (index !== -1) {
            path = path.slice(index + 1);
        }
        index = path.lastIndexOf('\\');
        if (index !== -1) {
            path = path.slice(index + 1);
        }
        return path;
    }
    return '';
}
exports.basename = basename;
/**
 * Returns the extension name of a file path.
 *
 * Path/To/My/File.ext => .ext
 */
function extname(path) {
    if (path && path.length) {
        const index = path.lastIndexOf('.');
        if (index !== -1) {
            path = path.slice(index).toLowerCase();
        }
        return path;
    }
    return '';
}
exports.extname = extname;
/**
 * Returns the base name of a file path without the extension.
 *
 * Path/To/My/File.ext => File
 */
function filename(path) {
    path = basename(path);
    const index = path.lastIndexOf('.');
    if (index !== -1) {
        path = path.slice(0, index);
    }
    return path;
}
exports.filename = filename;
//# sourceMappingURL=path.js.map