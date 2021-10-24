import ECA from '../../../../parsers/w3x/wtg/eca';
import SubParameters from '../../../../parsers/w3x/wtg/subparameters';
import WeuData from '../data';
declare type WEUTransformerTest = [number, string];
declare type WEUTransformerOp = [number, '+' | '-' | '*' | '/', number];
declare type WEUTransformerParameter = number | string | WEUTransformerOp;
interface WEUTransformerTransformation {
    test?: WEUTransformerTest;
    tests?: WEUTransformerTest[];
    parameters?: WEUTransformerParameter[];
}
interface WEUTransformerTransformations {
    [keyof: string]: WEUTransformerTransformation | WEUTransformerTransformation[];
}
export default function transformer(transformations: WEUTransformerTransformations): (data: WeuData, object: ECA | SubParameters) => boolean;
export declare type Transformer = ReturnType<typeof transformer>;
export {};
