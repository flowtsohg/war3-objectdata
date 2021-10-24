import Camera from './camera';
import ModelInstance from './modelinstance';
/**
 * A grid cell.
 */
export default class Cell {
    left: number;
    right: number;
    bottom: number;
    top: number;
    plane: number;
    instances: ModelInstance[];
    visible: boolean;
    constructor(left: number, right: number, bottom: number, top: number);
    add(instance: ModelInstance): void;
    remove(instance: ModelInstance): void;
    /**
     * Remove all of the instances from this cell.
     */
    clear(): void;
    isVisible(camera: Camera): boolean;
}
