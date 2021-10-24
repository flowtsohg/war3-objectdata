/**
 * Detects if the given object is a PNG source.
 *
 * PNG starts with [89 50 4E 47 0D 0A 1A 0A]
 */
export declare function isPng(bytes: unknown): boolean;
/**
 * Detects if the given object is a JPG source.
 *
 * JPG starts with [FF D8] and ends with [FF D9]
 */
export declare function isJpeg(bytes: unknown): boolean;
/**
 * Detects if the given object is a GIF source.
 *
 * GIF starts with [47 49 46 38 37 61] or [47 49 46 38 39 61]
 */
export declare function isGif(bytes: unknown): boolean;
/**
 * Detects if the given object is a WebP source.
 *
 * WebP starts with [52 49 46 46] followed by the file size - 8 followed by [57 45 42 50]
 */
export declare function isWebP(bytes: unknown): boolean;
