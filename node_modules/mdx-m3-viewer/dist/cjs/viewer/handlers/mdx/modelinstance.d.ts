import ModelInstance from '../../modelinstance';
import { SkeletalNode } from '../../skeletalnode';
import DataTexture from '../../gl/datatexture';
import Texture from '../../texture';
import AttachmentInstance from './attachmentinstance';
import ParticleEmitter from './particleemitter';
import ParticleEmitter2 from './particleemitter2';
import RibbonEmitter from './ribbonemitter';
import EventObjectEmitter from './eventobjectemitter';
import EventObjectSpnEmitter from './eventobjectspnemitter';
import EventObjectSplEmitter from './eventobjectsplemitter';
import EventObjectUbrEmitter from './eventobjectubremitter';
import EventObjectSndEmitter from './eventobjectsndemitter';
import MdxModel from './model';
import GenericObject from './genericobject';
import Bounds from '../../bounds';
declare type SkeletalNodeObject = AttachmentInstance | ParticleEmitter | ParticleEmitter2 | RibbonEmitter | EventObjectEmitter;
/**
 * An MDX model instance.
 */
export default class MdxModelInstance extends ModelInstance {
    attachments: AttachmentInstance[];
    particleEmitters: ParticleEmitter[];
    particleEmitters2: ParticleEmitter2[];
    ribbonEmitters: RibbonEmitter[];
    eventObjectEmitters: (EventObjectSpnEmitter | EventObjectSplEmitter | EventObjectUbrEmitter | EventObjectSndEmitter)[];
    nodes: SkeletalNode[];
    sortedNodes: SkeletalNode[];
    frame: number;
    counter: number;
    sequence: number;
    sequenceLoopMode: number;
    sequenceEnded: boolean;
    teamColor: number;
    vertexColor: Float32Array;
    allowParticleSpawn: boolean;
    forced: boolean;
    geosetColors: Float32Array[];
    layerAlphas: number[];
    layerTextures: number[];
    uvAnims: Float32Array[];
    worldMatrices: Float32Array | null;
    boneTexture: DataTexture | null;
    constructor(model: MdxModel);
    /**
     * Override the texture at the given index.
     *
     * If a texture isn't given, removes the override if there was one.
     */
    setTexture(index: number, texture?: Texture): void;
    /**
     * Override the texture of the particle emitter the given index.
     *
     * If a texture isn't given, removes the override if there was one.
     */
    setParticle2Texture(index: number, texture?: Texture): void;
    /**
     * Override the texture of the event emitter the given index.
     *
     * If a texture isn't given, removes the override if there was one.
     */
    setEventTexture(index: number, texture?: Texture): void;
    /**
     * Clear all of the emitted objects that belong to this instance.
     */
    clearEmittedObjects(): void;
    /**
     * Initialize a skeletal node.
     */
    initNode(nodes: SkeletalNode[], node: SkeletalNode, genericObject: GenericObject, object?: SkeletalNodeObject): void;
    /**
     * Overriden to hide also attachment models.
     */
    hide(): void;
    /**
     * Updates all of this instance internal nodes and objects.
     * Nodes that are determined to not be visible will not be updated, nor will any of their children down the hierarchy.
     */
    updateNodes(dt: number, forced: boolean): void;
    /**
     * If a model has no sequences or is running no sequence, it will only update once since it will never be forced to update.
     * This is generally the desired behavior, except when it is moved by the client.
     * Therefore, if an instance is transformed, always do a forced update.
     */
    recalculateTransformation(): void;
    /**
     * Update the batch data.
     */
    updateBatches(forced: boolean): void;
    updateBoneTexture(): void;
    renderOpaque(): void;
    renderTranslucent(): void;
    updateAnimations(dt: number): void;
    /**
     * Set the team color of this instance.
     */
    setTeamColor(id: number): this;
    /**
     * Set the vertex color of this instance.
     */
    setVertexColor(color: Float32Array | number[]): this;
    /**
     * Set the sequence of this instance.
     */
    setSequence(id: number): this;
    getBounds(): Bounds;
    /**
     * Set the sequence loop mode.
     * 0 to never loop, 1 to loop based on the model, and 2 to always loop.
     */
    setSequenceLoopMode(mode: number): this;
    /**
     * Get an attachment node.
     */
    getAttachment(id: number): SkeletalNode | undefined;
    resetEventEmitters(): void;
    resetAttachments(): void;
}
export {};
