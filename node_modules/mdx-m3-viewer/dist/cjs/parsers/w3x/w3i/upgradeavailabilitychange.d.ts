import BinaryStream from '../../../common/binarystream';
/**
 * An upgrade availability change.
 */
export default class UpgradeAvailabilityChange {
    playerFlags: number;
    id: string;
    levelAffected: number;
    availability: number;
    load(stream: BinaryStream): void;
    save(stream: BinaryStream): void;
}
