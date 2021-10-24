/**
 * A SLK table file.
 */
export default class SlkFile {
    rows: string[][];
    load(buffer: string): void;
    save(): string;
}
