import Sound from './sound';
/**
 * war3map.w3s - the sound file.
 */
export default class War3MapW3s {
    version: number;
    sounds: Sound[];
    load(buffer: ArrayBuffer | Uint8Array): void;
    save(): Uint8Array;
    getByteLength(): number;
}
