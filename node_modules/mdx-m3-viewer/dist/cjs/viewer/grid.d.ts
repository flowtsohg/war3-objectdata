import Cell from './cell';
import ModelInstance from './modelinstance';
/**
 * A grid.
 */
export default class Grid {
    x: number;
    y: number;
    width: number;
    depth: number;
    cellWidth: number;
    cellDepth: number;
    columns: number;
    rows: number;
    cells: Cell[];
    constructor(x: number, y: number, width: number, depth: number, cellWidth: number, cellDepth: number);
    add(instance: ModelInstance): void;
    remove(instance: ModelInstance): void;
    moved(instance: ModelInstance): void;
    /**
     * Removes all of the instances from this grid.
     */
    clear(): void;
}
