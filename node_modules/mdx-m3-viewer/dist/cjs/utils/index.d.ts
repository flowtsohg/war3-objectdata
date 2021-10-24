import { MappedData } from './mappeddata';
declare const _default: {
    blp: {
        sanityTest: typeof import("./blp/sanitytest").default;
    };
    dds: {
        sanityTest: typeof import("./dds/sanitytest").default;
    };
    MappedData: typeof MappedData;
    jass2: {
        Context: typeof import("./jass2/context").default;
        jass2lua: typeof import("./jass2/jass2lua").default;
        types: typeof import("./jass2/types");
        compileNatives: typeof import("./jass2/compilenatives").default;
    };
    mdlx: {
        sanityTest: typeof import("./mdlx/sanitytest/sanitytest").default;
        createPrimitive: typeof import("./mdlx/primitives/createprimitive").default;
        primitives: typeof import("./mdlx/primitives/primitives");
        mdlStructure: typeof import("./mdlx/mdlstructure").default;
    };
    w3x: {
        convertWeu: typeof import("./w3x/weu/weu").default;
        generateListfile: typeof import("./w3x/generatelistfile").default;
    };
};
export default _default;
