/**
 * The valid data type names for resource fetches.
 */
export declare type FetchDataTypeName = 'image' | 'text' | 'arrayBuffer' | 'bytes' | 'blob';
/**
 * The valid data types for resource fetches.
 */
export declare type FetchDataType = HTMLImageElement | string | ArrayBuffer | Uint8Array | Blob;
/**
 * The structure that the promise returned by fetchDataType is resolved to.
 */
export interface FetchResult {
    ok: boolean;
    data: FetchDataType | Response | Event;
    error?: string;
}
/**
 * Returns a promise that will resolve with the data from the given path.
 *
 * The data type determines the returned object:
 *
 *     "image" => Image
 *     "text" => string
 *     "arrayBuffer" => ArrayBuffer
 *     "bytes" => Uint8Array
 *     "blob" => Blob
 */
export declare function fetchDataType(path: string, dataType: FetchDataTypeName): Promise<FetchResult>;
