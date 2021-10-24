"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelCase = exports.pascalCase = exports.war3TypeToTS = exports.tsToWar3 = exports.war3ToTS = void 0;
function war3ToTS(war3Type, war3Value) {
    let tsValue = war3Value;
    // Remove some inconsistencies.
    if (typeof tsValue === 'string') {
        tsValue = tsValue.trim();
    }
    if (war3Type === 'string') {
        if (tsValue === undefined) {
            tsValue = '';
        }
        if (typeof tsValue !== 'string') {
            throw Error(`Type mismatch: ${war3Type} ${war3Value} (${typeof war3Value})`);
        }
        return tsValue;
    }
    else if (war3Type === 'int') {
        if (typeof tsValue === 'string') {
            tsValue = parseInt(tsValue, 10);
            if (isNaN(tsValue)) {
                tsValue = 0;
            }
        }
        else if (tsValue === undefined) {
            tsValue = 0;
        }
        return tsValue;
    }
    else if (war3Type === 'unreal' || war3Type === 'real') {
        if (typeof tsValue === 'string') {
            tsValue = parseFloat(tsValue);
            if (isNaN(tsValue)) {
                tsValue = 0.0;
            }
        }
        else if (tsValue === undefined) {
            tsValue = 0.0;
        }
        return tsValue;
    }
    else if (war3Type === 'bool') {
        if (tsValue === undefined) {
            return false;
        }
        if (typeof tsValue === 'string') {
            if (tsValue === '1') {
                return true;
            }
            else if (tsValue === '0' || tsValue === '-' || tsValue === '0,1' || tsValue === '') {
                return false;
            }
            throw Error(`Type mismatch: ${war3Type} ${war3Value} (${typeof war3Value})`);
        }
        else {
            return !!tsValue;
        }
    }
    if (tsValue === undefined) {
        tsValue = '';
    }
    return tsValue;
}
exports.war3ToTS = war3ToTS;
function tsToWar3(war3Type, value) {
}
exports.tsToWar3 = tsToWar3;
function war3TypeToTS(type) {
    if (type === 'string') {
        return 'string';
    }
    else if (type === 'int' || type === 'unreal' || type === 'real') {
        return 'number';
    }
    else if (type === 'bool') {
        return 'boolean';
    }
    console.warn(`Unhandled type: ${type}`);
    return 'string';
}
exports.war3TypeToTS = war3TypeToTS;
function pascalCase(what) {
    return what.replace(/[-(),]/g, ' ').replace(/['’]/g, '').replace(/\//g, ' Or ').replace(/\+/g, ' Plus ').replace(/ +/g, ' ').trim().split(' ').map((word) => `${word[0].toUpperCase()}${word.slice(1)}`).join('');
}
exports.pascalCase = pascalCase;
function camelCase(what) {
    const pascal = pascalCase(what);
    return `${pascal[0].toLowerCase()}${pascal.slice(1)}`;
}
exports.camelCase = camelCase;
//# sourceMappingURL=utils.js.map