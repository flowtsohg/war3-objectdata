import BinaryStream from '../../common/binarystream';
import TokenStream from './tokenstream';
import Extent from './extent';
import Sequence from './sequence';
import Material from './material';
import Texture from './texture';
import TextureAnimation from './textureanimation';
import Geoset from './geoset';
import GeosetAnimation from './geosetanimation';
import GenericObject from './genericobject';
import Bone from './bone';
import Light from './light';
import Helper from './helper';
import Attachment from './attachment';
import ParticleEmitter from './particleemitter';
import ParticleEmitter2 from './particleemitter2';
import ParticleEmitterPopcorn from './particleemitterpopcorn';
import RibbonEmitter from './ribbonemitter';
import Camera from './camera';
import EventObject from './eventobject';
import CollisionShape from './collisionshape';
import FaceEffect from './faceeffect';
import UnknownChunk from './unknownchunk';
declare type MdxStaticObject = Sequence | Texture | FaceEffect;
declare type MdxDynamicObject = Material | TextureAnimation | Geoset | GeosetAnimation | Bone | Light | Helper | Attachment | ParticleEmitter | ParticleEmitter2 | RibbonEmitter | Camera | EventObject | CollisionShape | ParticleEmitterPopcorn;
declare type MdlNumberedObject = Sequence | Texture | Material | TextureAnimation;
declare type MdlObject = Geoset | GeosetAnimation | Bone | Light | Helper | Attachment | ParticleEmitter | ParticleEmitter2 | RibbonEmitter | Camera | EventObject | CollisionShape | FaceEffect;
/**
 * A Warcraft 3 model.
 * Supports loading from and saving to both the binary MDX and text MDL file formats.
 */
export default class Model {
    /**
     * 800 for Warcraft 3: RoC and TFT.
     * >800 for Warcraft 3: Reforged.
     */
    version: number;
    name: string;
    /**
     * To the best of my knowledge, this should always be left empty.
     */
    animationFile: string;
    extent: Extent;
    /**
     * This is only used by the now-defunct previewer that came with Art Tools.
     */
    blendTime: number;
    sequences: Sequence[];
    globalSequences: number[];
    materials: Material[];
    textures: Texture[];
    textureAnimations: TextureAnimation[];
    geosets: Geoset[];
    geosetAnimations: GeosetAnimation[];
    bones: Bone[];
    lights: Light[];
    helpers: Helper[];
    attachments: Attachment[];
    pivotPoints: Float32Array[];
    particleEmitters: ParticleEmitter[];
    particleEmitters2: ParticleEmitter2[];
    /**
     * @since 900
     */
    particleEmittersPopcorn: ParticleEmitterPopcorn[];
    ribbonEmitters: RibbonEmitter[];
    cameras: Camera[];
    eventObjects: EventObject[];
    collisionShapes: CollisionShape[];
    /**
     * @since 900
     */
    faceEffects: FaceEffect[];
    /**
     * @since 900
     */
    bindPose: Float32Array[];
    /**
     * The MDX format is chunk based, and Warcraft 3 does not mind there being unknown chunks in there.
     * Some 3rd party tools use this to attach metadata to models.
     * When an unknown chunk is encountered, it will be added here.
     * These chunks will be saved when saving as MDX.
     */
    unknownChunks: UnknownChunk[];
    /**
     * Load the model from MDX or MDL.
     * The format is detected automatically.
     */
    load(buffer: ArrayBuffer | Uint8Array | string): void;
    /**
     * Load the model from MDX.
     */
    loadMdx(buffer: ArrayBuffer | Uint8Array): void;
    loadVersionChunk(stream: BinaryStream): void;
    loadModelChunk(stream: BinaryStream): void;
    loadStaticObjects<T extends MdxStaticObject>(out: T[], constructor: new () => T, stream: BinaryStream, count: number): void;
    loadGlobalSequenceChunk(stream: BinaryStream, size: number): void;
    loadDynamicObjects<T extends MdxDynamicObject>(out: T[], constructor: new () => T, stream: BinaryStream, size: number): void;
    loadPivotPointChunk(stream: BinaryStream, size: number): void;
    loadBindPoseChunk(stream: BinaryStream, _size: number): void;
    /**
     * Save the model as MDX.
     */
    saveMdx(): Uint8Array;
    saveVersionChunk(stream: BinaryStream): void;
    saveModelChunk(stream: BinaryStream): void;
    saveStaticObjectChunk(stream: BinaryStream, name: string, objects: (Sequence | Texture | FaceEffect)[], size: number): void;
    saveGlobalSequenceChunk(stream: BinaryStream): void;
    saveDynamicObjectChunk(stream: BinaryStream, name: string, objects: (Material | TextureAnimation | Geoset | GeosetAnimation | GenericObject | Camera)[]): void;
    savePivotPointChunk(stream: BinaryStream): void;
    saveBindPoseChunk(stream: BinaryStream): void;
    /**
     * Load the model from MDL.
     */
    loadMdl(buffer: string): void;
    loadVersionBlock(stream: TokenStream): void;
    loadModelBlock(stream: TokenStream): void;
    loadNumberedObjectBlock<T extends MdlNumberedObject>(out: T[], constructor: new () => T, name: string, stream: TokenStream): void;
    loadGlobalSequenceBlock(stream: TokenStream): void;
    loadObject<T extends MdlObject>(out: T[], constructor: new () => T, stream: TokenStream): void;
    loadPivotPointBlock(stream: TokenStream): void;
    loadBindPoseBlock(stream: TokenStream): void;
    /**
     * Save the model as MDL.
     */
    saveMdl(): string;
    saveVersionBlock(stream: TokenStream): void;
    saveModelBlock(stream: TokenStream): void;
    saveStaticObjectsBlock(stream: TokenStream, name: string, objects: (Sequence | Texture | Material | TextureAnimation)[]): void;
    saveGlobalSequenceBlock(stream: TokenStream): void;
    saveObjects(stream: TokenStream, objects: (Geoset | GeosetAnimation | Bone | Light | Helper | Attachment | ParticleEmitter | ParticleEmitter2 | RibbonEmitter | Camera | EventObject | CollisionShape | FaceEffect)[]): void;
    savePivotPointBlock(stream: TokenStream): void;
    saveBindPoseBlock(stream: TokenStream): void;
    /**
     * Calculate the size of the model as MDX.
     */
    getByteLength(): number;
    getObjectsByteLength(objects: (Material | TextureAnimation | Geoset | GeosetAnimation | GenericObject | Camera | UnknownChunk)[]): number;
    getDynamicObjectsChunkByteLength(objects: (Material | TextureAnimation | Geoset | GeosetAnimation | GenericObject | Camera | UnknownChunk)[]): number;
    getStaticObjectsChunkByteLength(objects: (Sequence | number | Texture | Float32Array | FaceEffect)[], size: number): number;
    getBindPoseChunkByteLength(): number;
}
export {};
