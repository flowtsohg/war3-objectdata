"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeImageData = exports.imageToImageData = exports.imageDataToImage = exports.imageDataToDataUrl = exports.imageDataToBlob = exports.blobToImageData = exports.blobToImage = void 0;
let canvas;
let ctx;
let canvas2;
let ctx2;
// Only create the canvases and contexts in browsers.
if (typeof window === 'object') {
    canvas = document.createElement('canvas');
    ctx = canvas.getContext('2d');
    canvas2 = document.createElement('canvas');
    ctx2 = canvas2.getContext('2d');
}
function blobToImage(blob) {
    return new Promise((resolve, reject) => {
        const url = URL.createObjectURL(blob);
        const image = new Image();
        image.onload = () => {
            resolve(image);
        };
        image.onerror = (e) => {
            reject(e);
        };
        image.src = url;
    });
}
exports.blobToImage = blobToImage;
function blobToImageData(blob) {
    return new Promise((resolve, reject) => {
        const url = URL.createObjectURL(blob);
        const image = new Image();
        image.onload = () => {
            URL.revokeObjectURL(url);
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
            resolve(ctx.getImageData(0, 0, image.width, image.height));
        };
        image.onerror = (e) => {
            reject(e);
        };
        image.src = url;
    });
}
exports.blobToImageData = blobToImageData;
function imageDataToBlob(imageData) {
    return new Promise((resolve) => {
        canvas.width = imageData.width;
        canvas.height = imageData.height;
        ctx.putImageData(imageData, 0, 0);
        canvas.toBlob((blob) => {
            resolve(blob);
        });
    });
}
exports.imageDataToBlob = imageDataToBlob;
function imageDataToDataUrl(imageData) {
    canvas.width = imageData.width;
    canvas.height = imageData.height;
    ctx.putImageData(imageData, 0, 0);
    return canvas.toDataURL();
}
exports.imageDataToDataUrl = imageDataToDataUrl;
function imageDataToImage(imageData) {
    const image = new Image();
    image.src = imageDataToDataUrl(imageData);
    return image;
}
exports.imageDataToImage = imageDataToImage;
function imageToImageData(image) {
    const width = image.width;
    const height = image.height;
    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0);
    return ctx.getImageData(0, 0, width, height);
}
exports.imageToImageData = imageToImageData;
function resizeImageData(data, width, height) {
    if (data instanceof ImageData) {
        canvas.width = data.width;
        canvas.height = data.height;
        ctx.putImageData(data, 0, 0);
        canvas2.width = width;
        canvas2.height = height;
        ctx2.drawImage(canvas, 0, 0, width, height);
        return ctx2.getImageData(0, 0, width, height);
    }
    else {
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(data, 0, 0, width, height);
        return ctx.getImageData(0, 0, width, height);
    }
}
exports.resizeImageData = resizeImageData;
//# sourceMappingURL=canvas.js.map