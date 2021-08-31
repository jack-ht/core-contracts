import { JsonRpcProvider } from '@ethersproject/providers';
export declare class Blockchain {
    private _snapshotId;
    private _provider;
    constructor(provider: JsonRpcProvider);
    saveSnapshotAsync(): Promise<void>;
    revertAsync(): Promise<void>;
    resetAsync(): Promise<void>;
    increaseTimeAsync(duration: number): Promise<any>;
    waitBlocksAsync(count: number): Promise<void>;
    private sendJSONRpcRequestAsync;
}
