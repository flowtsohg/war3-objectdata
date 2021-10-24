import War3MapViewer from './w3x/viewer';
declare const _default: {
    blp: {
        isValidSource(object: unknown): boolean;
        resource: typeof import("./blp/texture").default;
    };
    dds: {
        load(viewer: import("../viewer").default): void;
        isValidSource(object: unknown): boolean;
        resource: typeof import("./dds/texture").default;
    };
    m3: {
        load(viewer: import("../viewer").default): void;
        isValidSource(object: unknown): boolean;
        resource: typeof import("./m3/model").default;
    };
    mdx: {
        load(viewer: import("../viewer").default, pathSolver?: import("../handlerresource").PathSolver | undefined, reforged?: boolean): void;
        isValidSource(object: unknown): boolean;
        resource: typeof import("./mdx/model").default;
        loadTeamTextures(viewer: import("../viewer").default): void;
        getEventObjectSoundFile(file: string, reforged: boolean, isHd: boolean, tables: import("../genericresource").default[]): string | undefined;
        getEventObjectData(viewer: import("../viewer").default, type: string, id: string, isHd: boolean): Promise<import("./mdx/handler").EventObjectData | undefined>;
        getBatchShader(viewer: import("../viewer").default, skinningType: import("./mdx/batch").SkinningType, isHd: boolean): import("../gl/shader").default;
    };
    tga: {
        isValidSource(object: unknown): boolean;
        resource: typeof import("./tga/texture").default;
    };
    War3MapViewer: typeof War3MapViewer;
};
export default _default;
