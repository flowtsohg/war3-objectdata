import Texture from '../../texture';
/**
 * An M3 texture.
 */
export default class M3Texture {
    texture: Texture | null;
    wrapS: number;
    wrapT: number;
    constructor(repeatS: boolean, repeatT: boolean);
}
