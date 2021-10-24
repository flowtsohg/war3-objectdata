declare const _default: {
    ini: {
        File: typeof import("./ini/file").IniFile;
    };
    slk: {
        File: typeof import("./slk/file").default;
    };
    m3: {
        Model: typeof import("./m3/model").default;
        isM3: typeof import("./m3/isformat").default;
    };
    mdlx: {
        Model: typeof import("./mdlx/model").default;
        Sequence: typeof import("./mdlx/sequence").default;
        Material: typeof import("./mdlx/material").default;
        Layer: typeof import("./mdlx/layer").default;
        Texture: typeof import("./mdlx/texture").default;
        TextureAnimation: typeof import("./mdlx/textureanimation").default;
        Geoset: typeof import("./mdlx/geoset").default;
        GeosetAnimation: typeof import("./mdlx/geosetanimation").default;
        Bone: typeof import("./mdlx/bone").default;
        Light: typeof import("./mdlx/light").default;
        Helper: typeof import("./mdlx/helper").default;
        Attachment: typeof import("./mdlx/attachment").default;
        ParticleEmitter: typeof import("./mdlx/particleemitter").default;
        ParticleEmitter2: typeof import("./mdlx/particleemitter2").default;
        ParticleEmitterPopcorn: typeof import("./mdlx/particleemitterpopcorn").default;
        RibbonEmitter: typeof import("./mdlx/ribbonemitter").default;
        Camera: typeof import("./mdlx/camera").default;
        EventObject: typeof import("./mdlx/eventobject").default;
        CollisionShape: typeof import("./mdlx/collisionshape").default;
        UnknownChunk: typeof import("./mdlx/unknownchunk").default;
        TokenStream: typeof import("./mdlx/tokenstream").default;
        isMdx: typeof import("./mdlx/isformat").isMdx;
        isMdl: typeof import("./mdlx/isformat").isMdl;
    };
    mpq: {
        Archive: typeof import("./mpq/archive").default;
        Crypto: typeof import("./mpq/crypto").default;
        HashTable: typeof import("./mpq/hashtable").default;
        Hash: typeof import("./mpq/hash").default;
        BlockTable: typeof import("./mpq/blocktable").default;
        Block: typeof import("./mpq/block").default;
        File: typeof import("./mpq/file").default;
        isArchive: typeof import("./mpq/isarchive").isArchive;
    };
    w3x: {
        Map: typeof import("./w3x/map").default;
        doo: {
            File: typeof import("./w3x/doo/file").default;
            Doodad: typeof import("./w3x/doo/doodad").default;
            RandomItemSet: typeof import("./w3x/doo/randomitemset").default;
            RandomItem: typeof import("./w3x/doo/randomitem").default;
            TerrainDoodad: typeof import("./w3x/doo/terraindoodad").default;
        };
        imp: {
            File: typeof import("./w3x/imp/file").default;
            Import: typeof import("./w3x/imp/import").default;
        };
        mmp: {
            File: typeof import("./w3x/mmp/file").default;
            MinimapIcon: typeof import("./w3x/mmp/minimapicon").default;
        };
        shd: {
            File: typeof import("./w3x/shd/file").default;
        };
        w3c: {
            File: typeof import("./w3x/w3c/file").default;
            Camera: typeof import("./w3x/w3c/camera").default;
        };
        w3d: {
            File: typeof import("./w3x/w3d/file").default;
        };
        w3e: {
            File: typeof import("./w3x/w3e/file").default;
            Corner: typeof import("./w3x/w3e/corner").default;
        };
        w3i: {
            File: typeof import("./w3x/w3i/file").default;
            Player: typeof import("./w3x/w3i/player").default;
            Force: typeof import("./w3x/w3i/force").default;
            UpgradeAvailabilityChange: typeof import("./w3x/w3i/upgradeavailabilitychange").default;
            TechAvailabilityChange: typeof import("./w3x/w3i/techavailabilitychange").default;
            RandomUnitTable: typeof import("./w3x/w3i/randomunittable").default;
            RandomUnit: typeof import("./w3x/w3i/randomunit").default;
            RandomItemTable: typeof import("./w3x/w3i/randomitemtable").default;
            RandomItemSet: typeof import("./w3x/w3i/randomitemset").default;
            RandomItem: typeof import("./w3x/w3i/randomitem").default;
        };
        w3o: {
            File: typeof import("./w3x/w3o/file").default;
        };
        w3r: {
            File: typeof import("./w3x/w3r/file").default;
            Region: typeof import("./w3x/w3r/region").default;
        };
        w3s: {
            File: typeof import("./w3x/w3s/file").default;
            Sound: typeof import("./w3x/w3s/sound").default;
        };
        w3u: {
            File: typeof import("./w3x/w3u/file").default;
            ModificationTable: typeof import("./w3x/w3u/modificationtable").default;
            ModificationObject: typeof import("./w3x/w3u/modifiedobject").default;
            Modification: typeof import("./w3x/w3u/modification").default;
        };
        wct: {
            File: typeof import("./w3x/wct/file").default;
            CustomTextTrigger: typeof import("./w3x/wct/customtexttrigger").default;
        };
        wpm: {
            File: typeof import("./w3x/wpm/file").default;
        };
        wtg: {
            File: typeof import("./w3x/wtg/file").default;
            TriggerCategory: typeof import("./w3x/wtg/triggercategory").default;
            Variable: typeof import("./w3x/wtg/variable").default;
            Trigger: typeof import("./w3x/wtg/trigger").default;
            ECA: typeof import("./w3x/wtg/eca").default;
            Parameter: typeof import("./w3x/wtg/parameter").default;
            SubParameters: typeof import("./w3x/wtg/subparameters").default;
            TriggerData: typeof import("./w3x/wtg/triggerdata").TriggerData;
        };
        wts: {
            File: typeof import("./w3x/wts/file").default;
        };
        unitsdoo: {
            File: typeof import("./w3x/unitsdoo/file").default;
            Unit: typeof import("./w3x/unitsdoo/unit").default;
            DroppedItemSet: typeof import("./w3x/unitsdoo/droppeditemset").default;
            DroppedItem: typeof import("./w3x/unitsdoo/droppeditem").default;
            InventoryItem: typeof import("./w3x/unitsdoo/inventoryitem").default;
            ModifiedAbility: typeof import("./w3x/unitsdoo/modifiedability").default;
            RandomUnit: typeof import("./w3x/unitsdoo/randomunit").default;
        };
        w3f: {
            File: typeof import("./w3x/w3f/file").default;
            MapTitle: typeof import("./w3x/w3f/maptitle").default;
            MapOrder: typeof import("./w3x/w3f/maporder").default;
        };
    };
    blp: {
        Image: typeof import("./blp/image").BlpImage;
    };
    dds: {
        Image: typeof import("./dds/image").DdsImage;
        FOURCC_DXT1: number;
        FOURCC_DXT3: number;
        FOURCC_DXT5: number;
        FOURCC_ATI2: number;
        isDds: typeof import("./dds/isformat").default;
    };
    tga: {
        Image: typeof import("./tga/image").default;
        isTga: typeof import("./tga/isformat").default;
    };
};
export default _default;
