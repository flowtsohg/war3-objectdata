/// <reference types="node" />
import { EventEmitter } from 'events';
import { lua_State } from 'fengari/src/lstate';
import War3Map from '../../parsers/w3x/map';
import JassPlayer from './types/player';
import Thread from './thread';
import JassHandle from './types/handle';
import JassLocation from './types/location';
import JassTimer from './types/timer';
import { JassTrigger } from './types/index';
/**
 * A Jass2 context.
 */
export default class Context extends EventEmitter {
    L: lua_State;
    map: War3Map | null;
    handle: number;
    freeHandles: number[];
    handles: (JassHandle | null)[];
    name: string;
    description: string;
    players: JassPlayer[];
    actualPlayers: number;
    startLocations: JassLocation[];
    constantHandles: import("./constanthandles").ConstantHandles;
    timers: Set<JassTimer>;
    triggers: Set<JassTrigger>;
    threads: Set<Thread>;
    currentThread: Thread | null;
    enumUnit: JassHandle | null;
    filterUnit: JassHandle | null;
    enumPlayer: JassHandle | null;
    t: number;
    constructor();
    start(): void;
    step(): void;
    addHandle(handle: JassHandle): JassHandle;
    freeHandle(handle: JassHandle): void;
    call(name?: string | number): void;
    run(code: string, isJass: boolean): void;
    open(map: War3Map): void;
}
