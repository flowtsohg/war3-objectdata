import { ResourceData, Resource } from './resource';
export declare type SolverParams = {
    [key: string]: unknown;
};
/**
 * A path solver used for resolving fetch paths.
 */
export declare type PathSolver = (src: unknown, params?: SolverParams) => unknown;
/**
 * The data sent to every handler resource as part of the loading process.
 */
export declare type HandlerResourceData = ResourceData & {
    pathSolver?: PathSolver;
};
/**
 * A viewer handler resource.
 *
 * Generally speaking handler resources are created via viewer.load().
 */
export declare abstract class HandlerResource extends Resource {
    pathSolver?: PathSolver;
    constructor(resourceData: HandlerResourceData);
}
