/**
 * Returns the base name of a file path.
 *
 * Path/To/My/File.ext => File.ext
 */
export declare function basename(path: string): string;
/**
 * Returns the extension name of a file path.
 *
 * Path/To/My/File.ext => .ext
 */
export declare function extname(path: string): string;
/**
 * Returns the base name of a file path without the extension.
 *
 * Path/To/My/File.ext => File
 */
export declare function filename(path: string): string;
