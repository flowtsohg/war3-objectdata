import CustomTextTrigger from './customtexttrigger';
/**
 * war3map.wct - the custom text (jass) trigger file.
 */
export default class War3MapWct {
    version: number;
    comment: string;
    trigger: CustomTextTrigger;
    triggers: CustomTextTrigger[];
    load(buffer: ArrayBuffer | Uint8Array): void;
    save(): Uint8Array;
    getByteLength(): number;
}
