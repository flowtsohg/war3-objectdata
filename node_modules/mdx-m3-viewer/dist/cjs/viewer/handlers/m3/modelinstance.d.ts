import DataTexture from '../../gl/datatexture';
import ModelInstance from '../../modelinstance';
import Texture from '../../texture';
import M3Model from './model';
import M3Skeleton from './skeleton';
import M3Node from './node';
/**
 * An M3 model instance.
 */
export default class M3ModelInstance extends ModelInstance {
    skeleton: M3Skeleton | null;
    teamColor: number;
    vertexColor: Float32Array;
    sequence: number;
    frame: number;
    sequenceLoopMode: number;
    sequenceEnded: boolean;
    forced: boolean;
    boneTexture: DataTexture | null;
    constructor(model: M3Model);
    /**
     * Override the texture of the layer at the given index in the material at the given index.
     *
     * If a texture isn't given, removes the override if there was one.
     */
    setTexture(material: number, layer: number, texture?: Texture): void;
    updateSkeletonAndBoneTexture(dt: number): void;
    renderOpaque(): void;
    updateAnimations(dt: number): void;
    setTeamColor(id: number): this;
    setVertexColor(color: Uint8Array): this;
    setSequence(id: number): this;
    setSequenceLoopMode(mode: number): this;
    getAttachment(id: number): M3Node | undefined;
}
