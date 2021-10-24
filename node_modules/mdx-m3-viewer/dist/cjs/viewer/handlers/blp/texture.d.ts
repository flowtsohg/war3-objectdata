import { BlpImage } from '../../../parsers/blp/image';
import { HandlerResourceData } from '../../handlerresource';
import Texture from '../../texture';
/**
 * A BLP texure handler.
 */
export default class BlpTexture extends Texture {
    constructor(bufferOrImage: ArrayBuffer | BlpImage, resourceData: HandlerResourceData);
}
