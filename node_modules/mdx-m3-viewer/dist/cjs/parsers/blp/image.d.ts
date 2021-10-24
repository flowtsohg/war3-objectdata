export declare const BLP1_MAGIC = 827345986;
export declare const CONTENT_JPG = 0;
/**
 * A BLP1 image.
 */
export declare class BlpImage {
    content: number;
    alphaBits: number;
    width: number;
    height: number;
    type: number;
    hasMipmaps: boolean;
    mipmapOffsets: Uint32Array;
    mipmapSizes: Uint32Array;
    uint8array: Uint8Array | null;
    /**
     * Used for JPG images.
     */
    jpgHeader: Uint8Array | null;
    /**
     * Used for indexed images.
     */
    pallete: Uint8Array | null;
    load(buffer: ArrayBuffer | Uint8Array): void;
    getMipmap(level: number): ImageData;
    mipmaps(): number;
    fakeMipmaps(): number;
}
