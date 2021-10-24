export class JpegImage {
    decodeTransform: any;
    colorTransform: number;
    width: number;
    height: number;
    parse(data: any): void;
    jfif: {
        version: {
            major: any;
            minor: any;
        };
        densityUnits: any;
        xDensity: number;
        yDensity: number;
        thumbWidth: any;
        thumbHeight: any;
        thumbData: any;
    } | null | undefined;
    adobe: {
        version: number;
        flags0: number;
        flags1: number;
        transformCode: any;
    } | null | undefined;
    components: any[] | undefined;
    numComponents: number | undefined;
    getData(imageData: any): any;
}
