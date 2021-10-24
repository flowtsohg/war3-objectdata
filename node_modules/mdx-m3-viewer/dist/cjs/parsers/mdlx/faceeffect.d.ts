import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
/**
 * A face effect.
 */
export default class FaceEffect {
    type: string;
    path: string;
    readMdx(stream: BinaryStream): void;
    writeMdx(stream: BinaryStream): void;
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream): void;
}
