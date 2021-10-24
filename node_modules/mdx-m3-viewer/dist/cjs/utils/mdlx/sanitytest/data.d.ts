import Model from '../../../parsers/mdlx/model';
import GenericObject from '../../../parsers/mdlx/genericobject';
import { MdlxType } from './utils';
export interface SanityTestMessage {
    type: 'error' | 'severe' | 'warning' | 'unused';
    message: string;
}
export interface SanityTestNode {
    type: 'node';
    name: string;
    errors: number;
    severe: number;
    warnings: number;
    unused: number;
    nodes: (SanityTestNode | SanityTestMessage)[];
    uses?: number;
}
export default class SanityTestData {
    model: Model;
    objects: GenericObject[];
    current: SanityTestNode;
    stack: SanityTestNode[];
    map: Map<MdlxType, SanityTestNode>;
    foundStand: boolean;
    foundDeath: boolean;
    boneUsageMap: Map<any, any>;
    constructor(model: Model);
    /**
     * Adds nodes for all of the given objects.
     * Also handles the flat array of generic objects.
     */
    addObjects(objects: MdlxType[]): void;
    /**
     * Pushes to the stack the node the given object maps to.
     * If this node does not exist, a new one will be created, which is used by internal nodes like material layers.
     */
    push(object: MdlxType, index: number): void;
    /**
     * Pops the current node from the stack.
     */
    pop(): void;
    /**
     * Adds a reference to the node the given object maps to.
     */
    addReference(object: MdlxType): void;
    /**
     * Add a reference to the current node.
     */
    addImplicitReference(): void;
    addError(message: string): void;
    addSevere(message: string): void;
    addWarning(message: string): void;
    addUnused(message: string): void;
    assertError(condition: boolean, message: string): void;
    assertSevere(condition: boolean, message: string): void;
    assertWarning(condition: boolean, message: string): void;
    assertUnused(condition: boolean, message: string): void;
}
