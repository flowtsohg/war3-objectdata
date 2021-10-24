import JassAgent from './agent';
/**
 * type unit
 */
export default class JassHashTable extends JassAgent {
    table: Map<number, Map<number, unknown>>;
    save(parentKey: number, childKey: number, value: unknown): void;
    load(parentKey: number, childKey: number, defaultValue?: unknown): unknown;
    have(parentKey: number, childKey: number): boolean;
    remove(parentKey: number, childKey: number): void;
    flush(): void;
    flushChild(parentKey: number): void;
}
