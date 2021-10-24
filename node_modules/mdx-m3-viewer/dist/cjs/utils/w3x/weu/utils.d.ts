import ECA from '../../../parsers/w3x/wtg/eca';
/**
 * Creates a new Custom Script or comment ECA with the given data.
 */
export declare function createCustomScriptOrCommentECA(data: string, isComment: boolean): ECA;
/**
 * Creates a new Custom Script ECA with the given script.
 */
export declare function createCustomScriptECA(script: string): ECA;
export declare function convertSingleToMultiple(eca: ECA): boolean;
/**
 * Given the name of the parent of some child ECA, and the child's group, determine if it's a condition.
 */
export declare function isConditionECA(name: string, group: number): boolean;
/**
 * CustomScriptCode ECAs have a maximum length for their (typically) string parameter.
 * If the script length exceeds the maximum length, WE will fail to load the map properly.
 * Either it crashes, or it loads the map and GUI up until the invalid ECA, after which everything is an error.
 * This function is used to split such ECAs.
 * Splitting is possible, because the Jass parser seems to not consider multiline comments as token delimiters.
 * For example, the following lines:
 *
 *   call BJDebug/*
 *   /*Msg("hi")
 *
 * When compiled result in the correct call:
 *
 *   call BJDebugMsg("hi")
 */
export declare function ensureCustomScriptCodeSafety(ecas: ECA[]): ECA[];
/**
 * Given a name, converts all of the non-ASCII characters and space characters to underlines.
 */
export declare function ensureNameSafety(name: string): string;
