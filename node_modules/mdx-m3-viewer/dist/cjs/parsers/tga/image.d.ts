/**
 * A TGA image.
 */
export default class TgaImage {
    width: number;
    height: number;
    data: ImageData | null;
    load(buffer: ArrayBuffer | Uint8Array): void;
}
