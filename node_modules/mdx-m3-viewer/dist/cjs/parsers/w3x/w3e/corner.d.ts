import BinaryStream from '../../../common/binarystream';
/**
 * A tile corner.
 */
export default class Corner {
    groundHeight: number;
    waterHeight: number;
    mapEdge: number;
    ramp: number;
    blight: number;
    water: number;
    boundary: number;
    groundTexture: number;
    cliffVariation: number;
    groundVariation: number;
    cliffTexture: number;
    layerHeight: number;
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
}
