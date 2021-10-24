import BinaryStream from '../../../common/binarystream';
/**
 * A modified ability.
 */
export default class ModifiedAbility {
    id: string;
    activeForAutocast: number;
    heroLevel: number;
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
}
