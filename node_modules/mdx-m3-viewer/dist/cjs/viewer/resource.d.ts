import ModelViewer from './viewer';
/**
 * The data sent to every resource as a part of the loading process.
 */
export declare type ResourceData = {
    viewer: ModelViewer;
    fetchUrl: string;
};
/**
 * A viewer resource.
 *
 * Generally speaking resources are created via viewer.load(), or viewer.loadGeneric().
 */
export declare abstract class Resource {
    viewer: ModelViewer;
    fetchUrl: string;
    blockers: Promise<Resource | undefined>[];
    constructor(resourceData: ResourceData);
    /**
     * Remove this resource from its viewer's cache.
     *
     * Equivalent to viewer.unload(resource).
     */
    detach(): boolean;
}
