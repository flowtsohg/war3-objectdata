import MinimapIcon from './minimapicon';
/**
 * war3map.mmp - the minimap icon file.
 */
export default class War3MapMmp {
    u1: number;
    icons: MinimapIcon[];
    load(buffer: ArrayBuffer | Uint8Array): void;
    save(): Uint8Array;
    getByteLength(): number;
}
