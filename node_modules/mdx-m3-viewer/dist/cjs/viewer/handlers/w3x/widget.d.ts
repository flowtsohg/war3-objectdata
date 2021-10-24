import MdxModel from '../mdx/model';
import MdxModelInstance from '../mdx/modelinstance';
import War3MapViewerMap from './map';
export declare enum WidgetState {
    IDLE = 0,
    WALK = 1
}
/**
 * A widget.
 */
export declare class Widget {
    instance: MdxModelInstance;
    state: WidgetState;
    constructor(map: War3MapViewerMap, model: MdxModel);
    update(): void;
}
