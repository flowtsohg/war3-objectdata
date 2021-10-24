import { HandlerResource } from './handlerresource';
/**
 * A texture.
 */
export default abstract class Texture extends HandlerResource {
    webglResource: WebGLTexture | null;
    width: number;
    height: number;
}
