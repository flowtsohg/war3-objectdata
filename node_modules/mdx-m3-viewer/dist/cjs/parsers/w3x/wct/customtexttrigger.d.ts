import BinaryStream from '../../../common/binarystream';
/**
 * A custom text trigger.
 */
export default class CustomTextTrigger {
    text: string;
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
    getByteLength(): number;
}
