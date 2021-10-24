"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeAudioData = void 0;
let audioContext;
// Some browsers don't have OfflineAudioContext or AudioContext.
if (typeof OfflineAudioContext === 'function') {
    audioContext = new OfflineAudioContext(1, 1, 48000);
}
/**
 * A context-less decodeAudioData().
 */
async function decodeAudioData(buffer) {
    if (audioContext) {
        return audioContext.decodeAudioData(buffer);
    }
    return;
}
exports.decodeAudioData = decodeAudioData;
//# sourceMappingURL=audio.js.map