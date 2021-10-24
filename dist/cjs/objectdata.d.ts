import War3MapW3d from 'mdx-m3-viewer/dist/cjs/parsers/w3x/w3d/file';
import War3MapW3u from 'mdx-m3-viewer/dist/cjs/parsers/w3x/w3u/file';
import { DestructableContainer } from './generated//destructables';
import { DoodadContainer } from './generated/doodads';
import { ItemContainer } from './generated/items';
import { UnitContainer } from './generated/units';
export interface ModificationFiles {
    w3u?: War3MapW3u;
    w3t?: War3MapW3u;
    w3b?: War3MapW3u;
    w3d?: War3MapW3d;
    w3a?: War3MapW3d;
    w3h?: War3MapW3u;
    w3q?: War3MapW3d;
}
export declare class ObjectData {
    units: UnitContainer;
    items: ItemContainer;
    destructables: DestructableContainer;
    doodads: DoodadContainer;
    load({ w3u, w3t, w3b, w3d }: ModificationFiles): void;
}
