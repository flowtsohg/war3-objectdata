"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Appends url parameters given in params to the url given in src.
 *
 * The source url can have url parameters already in it.
 */
function urlWithParams(src, params) {
    if (params) {
        const entries = Object.entries(params);
        if (entries.length) {
            const encodedParams = entries.map(([key, value]) => `${key}=${value}`).join('&');
            let separator = '&';
            if (src.indexOf('?') === -1) {
                separator = '?';
            }
            return `${src}${separator}${encodedParams}`;
        }
    }
    return src;
}
exports.default = urlWithParams;
//# sourceMappingURL=urlwithparams.js.map