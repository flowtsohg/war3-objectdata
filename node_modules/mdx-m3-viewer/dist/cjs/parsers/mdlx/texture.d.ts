import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
export declare const enum WrapMode {
    RepeatBoth = 0,
    WrapWidth = 1,
    WrapHeight = 2,
    WrapBoth = 3
}
/**
 * A texture.
 */
export default class Texture {
    replaceableId: number;
    path: string;
    wrapMode: WrapMode;
    readMdx(stream: BinaryStream): void;
    writeMdx(stream: BinaryStream): void;
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream): void;
}
