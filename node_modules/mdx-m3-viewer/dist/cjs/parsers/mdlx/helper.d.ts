import TokenStream from './tokenstream';
import GenericObject from './genericobject';
/**
 * A helper.
 */
export default class Helper extends GenericObject {
    readMdl(stream: TokenStream): void;
    writeMdl(stream: TokenStream): void;
}
