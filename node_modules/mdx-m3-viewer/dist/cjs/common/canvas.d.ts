export declare function blobToImage(blob: Blob): Promise<HTMLImageElement>;
export declare function blobToImageData(blob: Blob): Promise<ImageData>;
export declare function imageDataToBlob(imageData: ImageData): Promise<Blob | null>;
export declare function imageDataToDataUrl(imageData: ImageData): string;
export declare function imageDataToImage(imageData: ImageData): HTMLImageElement;
export declare function imageToImageData(image: TexImageSource): ImageData;
export declare function resizeImageData(data: TexImageSource, width: number, height: number): ImageData;
