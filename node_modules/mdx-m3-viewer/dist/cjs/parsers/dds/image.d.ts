export declare const DDS_MAGIC = 542327876;
export declare const FOURCC_DXT1 = 827611204;
export declare const FOURCC_DXT3 = 861165636;
export declare const FOURCC_DXT5 = 894720068;
export declare const FOURCC_ATI2 = 843666497;
/**
 * A DDS image.
 */
export declare class DdsImage {
    width: number;
    height: number;
    format: number;
    mipmapWidths: number[];
    mipmapHeights: number[];
    mipmapDatas: Uint8Array[];
    load(buffer: ArrayBuffer | Uint8Array): void;
    mipmaps(): number;
    getMipmap(level: number, raw?: boolean): {
        width: number;
        height: number;
        data: Uint8Array;
    };
}
