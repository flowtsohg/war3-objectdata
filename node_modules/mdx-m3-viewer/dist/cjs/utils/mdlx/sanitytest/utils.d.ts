import { Animation } from '../../../parsers/mdlx/animations';
import AnimatedObject from '../../../parsers/mdlx/animatedobject';
import Extent from '../../../parsers/mdlx/extent';
import Sequence from '../../../parsers/mdlx/sequence';
import Texture from '../../../parsers/mdlx/texture';
import Material from '../../../parsers/mdlx/material';
import Layer from '../../../parsers/mdlx/layer';
import TextureAnimation from '../../../parsers/mdlx/textureanimation';
import Geoset from '../../../parsers/mdlx/geoset';
import GeosetAnimation from '../../../parsers/mdlx/geosetanimation';
import Bone from '../../../parsers/mdlx/bone';
import Light from '../../../parsers/mdlx/light';
import Helper from '../../../parsers/mdlx/helper';
import Attachment from '../../../parsers/mdlx/attachment';
import ParticleEmitter from '../../../parsers/mdlx/particleemitter';
import ParticleEmitter2 from '../../../parsers/mdlx/particleemitter2';
import ParticleEmitterPopcorn from '../../../parsers/mdlx/particleemitterpopcorn';
import RibbonEmitter from '../../../parsers/mdlx/ribbonemitter';
import EventObject from '../../../parsers/mdlx/eventobject';
import Camera from '../../../parsers/mdlx/camera';
import CollisionShape from '../../../parsers/mdlx/collisionshape';
import FaceEffect from '../../../parsers/mdlx/faceeffect';
import SanityTestData from './data';
import { SanityTestNode } from './data';
export declare function isBetween(x: number, minVal: number, maxVal: number): boolean;
export declare const sequenceNames: Set<string>;
export declare const replaceableIds: Set<number>;
export declare const animatedTypeNames: Map<string, string>;
export declare function hasAnimation(object: AnimatedObject, name: string): boolean;
export declare type MdlxType = Extent | Sequence | number | Texture | Material | Layer | TextureAnimation | Geoset | GeosetAnimation | Bone | Light | Helper | Attachment | ParticleEmitter | ParticleEmitter2 | ParticleEmitterPopcorn | RibbonEmitter | EventObject | Camera | CollisionShape | FaceEffect | Animation;
export declare function getObjectTypeName(object: MdlxType): string;
export declare function getObjectName(object: MdlxType, index: number): string;
export declare function testObjects<T extends MdlxType>(data: SanityTestData, objects: T[], handler?: (data: SanityTestData, object: T, index: number) => void): void;
export declare function testAndGetReference<T extends MdlxType>(data: SanityTestData, objects: T[], index: number, typeNameIfError: string): T | undefined;
export declare function testReference<T extends MdlxType>(data: SanityTestData, objects: T[], index: number, typeNameIfError: string): boolean;
/**
 * Get all of the texture indices referenced by a layer.
 */
export declare function getTextureIds(layer: Layer): number[];
/**
 * Test geoset skinning.
 */
export declare function testGeosetSkinning(data: SanityTestData, geoset: Geoset): void;
export declare function testAnimation(data: SanityTestData, animation: Animation): void;
export declare function cleanNode(node: SanityTestNode): void;
export declare function getAnimation(object: AnimatedObject, name: string): Animation | undefined;
export declare function testExtent(data: SanityTestData, extent: Extent): void;
