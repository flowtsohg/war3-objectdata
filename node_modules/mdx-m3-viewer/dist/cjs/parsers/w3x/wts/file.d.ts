/**
 * war3map.wts - the string table file.
 *
 * Contains a map of number->string.
 * When other map data like triggers use the string TRIGSTR_XXX, where XXX is a number, the value will be fetched from the table.
 */
export default class War3MapWts {
    stringMap: Map<number, string>;
    load(buffer: string): void;
    save(): string;
    /**
     * Get the string at the given index.
     *
     * Strings in the form "TRIGSTR_nnn" are also supported.
     */
    getString(index: number | string): string | undefined;
    /**
     * Set the string at the given index.
     *
     * Strings in the form "TRIGSTR_nnn" are also supported.
     */
    setString(index: number | string, value: string): void;
}
