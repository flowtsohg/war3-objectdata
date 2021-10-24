import BinaryStream from '../../../common/binarystream';
/**
 * A tech availablity change.
 */
export default class TechAvailabilityChange {
    playerFlags: number;
    id: string;
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
}
