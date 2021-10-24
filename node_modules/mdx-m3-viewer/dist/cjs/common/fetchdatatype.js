"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDataType = void 0;
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
async function fetchDataType(path, dataType) {
    if (dataType === 'image') {
        // Promise wrapper for an image load.
        return new Promise((resolve) => {
            const image = new Image();
            image.onload = () => {
                resolve({ ok: true, data: image });
            };
            image.onerror = (e) => {
                resolve({ ok: false, error: 'Image Error', data: e });
            };
            image.src = path;
        });
    }
    else {
        let response;
        // Fetch.
        try {
            response = await fetch(path);
        }
        catch (e) {
            return { ok: false, error: 'Network Error', data: e };
        }
        // Fetch went ok?
        if (!response.ok) {
            return { ok: false, error: 'Http Error', data: response };
        }
        // Try to get the requested data type.
        try {
            let data = null;
            if (dataType === 'text') {
                data = await response.text();
            }
            else if (dataType === 'arrayBuffer' || dataType === 'bytes') {
                data = await response.arrayBuffer();
            }
            else if (dataType === 'blob') {
                data = await response.blob();
            }
            if (dataType === 'bytes') {
                data = new Uint8Array(data);
            }
            return { ok: true, data };
        }
        catch (e) {
            return { ok: false, error: 'Data Error', data: e };
        }
    }
}
exports.fetchDataType = fetchDataType;
//# sourceMappingURL=fetchdatatype.js.map