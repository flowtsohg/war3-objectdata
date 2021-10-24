import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
import { Animation } from './animations';
/**
 * The parent class for all objects that have animated data in them.
 */
export default class AnimatedObject {
    animations: Animation[];
    readAnimations(stream: BinaryStream, size: number): void;
    writeAnimations(stream: BinaryStream): void;
    /**
     * A wrapper around readBlock() which merges static tokens.
     * E.g.: static Color
     * This makes the condition blocks in the parent objects linear and simple.
     */
    readAnimatedBlock(stream: TokenStream): Generator<string>;
    readAnimation(stream: TokenStream, name: string): void;
    writeAnimation(stream: TokenStream, name: string): boolean;
    /**
     * AnimatedObject itself doesn't care about versions, however objects that inherit it do.
     */
    getByteLength(_version?: number): number;
}
