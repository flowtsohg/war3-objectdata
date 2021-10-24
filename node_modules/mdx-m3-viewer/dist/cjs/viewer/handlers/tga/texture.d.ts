import TgaImage from '../../../parsers/tga/image';
import { HandlerResourceData } from '../../handlerresource';
import Texture from '../../texture';
/**
 * A TGA texture handler.
 */
export default class TgaTexture extends Texture {
    constructor(bufferOrImage: ArrayBuffer | TgaImage, resourceData: HandlerResourceData);
}
