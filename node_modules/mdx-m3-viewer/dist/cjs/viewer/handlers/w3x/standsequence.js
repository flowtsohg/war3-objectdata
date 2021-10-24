"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sequenceSorter(a, b) {
    return a.sequence.rarity - b.sequence.rarity;
}
function filterSequences(type, sequences) {
    const filtered = [];
    for (let i = 0, l = sequences.length; i < l; i++) {
        const sequence = sequences[i], name = sequence.name.split('-')[0].replace(/\d/g, '').trim().toLowerCase();
        if (name === type) {
            filtered.push({ sequence, index: i });
        }
    }
    return filtered;
}
function selectSequence(type, sequences) {
    const filtered = filterSequences(type, sequences);
    let i, l;
    filtered.sort(sequenceSorter);
    for (i = 0, l = filtered.length; i < l; i++) {
        const sequence = filtered[i].sequence;
        const rarity = sequence.rarity;
        if (rarity === 0) {
            break;
        }
        if (Math.random() * 10 > rarity) {
            return filtered[i];
        }
    }
    const sequencesLeft = filtered.length - i;
    const random = i + Math.floor(Math.random() * sequencesLeft);
    const sequence = filtered[random];
    return sequence;
}
function randomStandSequence(target) {
    const model = target.model;
    const sequences = model.sequences;
    const sequence = selectSequence('stand', sequences);
    if (sequence) {
        target.setSequence(sequence.index);
    }
}
exports.default = randomStandSequence;
//# sourceMappingURL=standsequence.js.map