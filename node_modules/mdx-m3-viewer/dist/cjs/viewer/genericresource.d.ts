import { Resource, ResourceData } from './resource';
/**
 * A generic resource.
 */
export default class GenericResource extends Resource {
    data: unknown;
    constructor(data: unknown, resourceData: ResourceData);
}
