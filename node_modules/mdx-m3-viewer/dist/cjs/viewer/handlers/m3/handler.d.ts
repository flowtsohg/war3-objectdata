import ModelViewer from '../../viewer';
import Shader from '../../gl/shader';
import Model from './model';
export interface M3HandlerObject {
    standardShaders: Shader[];
}
declare const _default: {
    load(viewer: ModelViewer): void;
    isValidSource(object: unknown): boolean;
    resource: typeof Model;
};
export default _default;
