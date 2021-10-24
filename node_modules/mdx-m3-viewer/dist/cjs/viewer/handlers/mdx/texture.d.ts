import { WrapMode } from '../../../parsers/mdlx/texture';
import Texture from '../../texture';
/**
 * An MDX texture.
 */
export default class MdxTexture {
    texture: Texture | null;
    replaceableId: number;
    wrapS: number;
    wrapT: number;
    constructor(replaceableId: number, wrapMode: WrapMode);
}
