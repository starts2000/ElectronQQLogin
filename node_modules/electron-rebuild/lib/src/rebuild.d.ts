/// <reference types="node" />
import * as EventEmitter from 'events';
export declare function rebuild(buildPath: string, electronVersion: string, arch?: string, extraModules?: string[], forceRebuild?: boolean, headerURL?: string, types?: string[], mode?: string): Promise<void> & {
    lifecycle: EventEmitter;
};
export declare function rebuildNativeModules(electronVersion: string, modulePath: string, whichModule: string | undefined, _headersDir: string | null | undefined, arch: string | undefined, _command: string, _ignoreDevDeps?: boolean, _ignoreOptDeps?: boolean, _verbose?: boolean): Promise<void> & {
    lifecycle: EventEmitter;
};
