import War3Map from '../../parsers/w3x/map';
/**
 * Given a map, attempt to find all file names referenced in it.
 *
 * Can be used with MpqArchive.applyListfile() to actually attempt to resolve the files in the archive.
 *
 * Based on code generously shared by Ralle.
 */
export default function generateListfile(map: War3Map): Set<string>;
