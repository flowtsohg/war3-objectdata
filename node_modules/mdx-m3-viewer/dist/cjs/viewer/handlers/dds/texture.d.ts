import { DdsImage } from '../../../parsers/dds/image';
import { HandlerResourceData } from '../../handlerresource';
import Texture from '../../texture';
/**
 * A DDS texture handler.
 */
export default class DdsTexture extends Texture {
    constructor(bufferOrImage: ArrayBuffer | DdsImage, resourceData: HandlerResourceData);
}
