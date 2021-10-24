import ModelViewer, { DebugRenderMode } from './viewer';
import Scene from './scene';
import Camera from './camera';
import { Node } from './node';
import Model from './model';
import ModelInstance from './modelinstance';
import Texture from './texture';
import GenericResource from './genericresource';
declare const _default: {
    ModelViewer: typeof ModelViewer;
    DebugRenderMode: typeof DebugRenderMode;
    Scene: typeof Scene;
    Camera: typeof Camera;
    Node: typeof Node;
    Model: typeof Model;
    ModelInstance: typeof ModelInstance;
    Texture: typeof Texture;
    GenericResource: typeof GenericResource;
    gl: {
        WebGL: typeof import("./gl/gl").default;
        Shader: typeof import("./gl/shader").default;
        ClientBuffer: typeof import("./gl/clientbuffer").default;
        DataTexture: typeof import("./gl/datatexture").default;
        ClientDataTexture: typeof import("./gl/clientdatatexture").default;
    };
    handlers: {
        blp: {
            isValidSource(object: unknown): boolean;
            resource: typeof import("./handlers/blp/texture").default;
        };
        dds: {
            load(viewer: ModelViewer): void;
            isValidSource(object: unknown): boolean;
            resource: typeof import("./handlers/dds/texture").default;
        };
        m3: {
            load(viewer: ModelViewer): void;
            isValidSource(object: unknown): boolean;
            resource: typeof import("./handlers/m3/model").default;
        };
        mdx: {
            load(viewer: ModelViewer, pathSolver?: import("./handlerresource").PathSolver | undefined, reforged?: boolean): void;
            isValidSource(object: unknown): boolean;
            resource: typeof import("./handlers/mdx/model").default;
            loadTeamTextures(viewer: ModelViewer): void;
            getEventObjectSoundFile(file: string, reforged: boolean, isHd: boolean, tables: GenericResource[]): string | undefined;
            getEventObjectData(viewer: ModelViewer, type: string, id: string, isHd: boolean): Promise<import("./handlers/mdx/handler").EventObjectData | undefined>;
            getBatchShader(viewer: ModelViewer, skinningType: import("./handlers/mdx/batch").SkinningType, isHd: boolean): import("./gl/shader").default;
        };
        tga: {
            isValidSource(object: unknown): boolean;
            resource: typeof import("./handlers/tga/texture").default;
        };
        War3MapViewer: typeof import("./handlers/w3x/viewer").default;
    };
};
export default _default;
