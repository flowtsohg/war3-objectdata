/**
 * Appends url parameters given in params to the url given in src.
 *
 * The source url can have url parameters already in it.
 */
export default function urlWithParams(src: string, params: {
    [key: string]: string;
}): string;
