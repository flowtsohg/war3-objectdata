import Model from '../../parsers/mdlx/model';
interface MdlStructureNode {
    name: string;
    source: string;
    nodes?: MdlStructureNode[];
}
export default function mdlStructure(model: Model): MdlStructureNode[];
export {};
