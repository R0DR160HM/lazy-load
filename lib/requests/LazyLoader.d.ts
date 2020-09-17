import { Observable } from 'rxjs';
export declare class CallResponse<T> {
    oldValue: T;
    currentValue: T;
    requestResponse: unknown;
}
export declare class LazyLoader<T> {
    private _value;
    private _timesCalled;
    private _isCalling;
    private _path;
    private _origin;
    /**
     * @optional @param value Optional initial value for the LazyLoader
     */
    constructor(value?: T);
    /**
     * @description Train a LazyLoader so it is not necessary to pass the origin and path on each call
     * @optional @param origin Observable or Promise where the information will be taken from
     * @optional @param path Indicates the position of the desired information within the result
     * @returns An trained LazyLoader
     */
    train(origin?: Promise<any> | Observable<any>, ...path: (string | number | symbol)[]): this;
    /**
     * @description Indicates whether a call is currently taking place
     */
    readonly isCalling: boolean;
    /**
     * @description Indicates whether LazyLoader was called once
     */
    readonly isCalled: boolean;
    /**
     * @description Indicates whether the value of LazyLoader is valid
     */
    readonly isValid: boolean;
    /**
     * @description Current value of the LazyLoader, result of the .call()
     */
    readonly value: T;
    /**
     * @description Indicates how much times the .call() was successfully executed
     */
    readonly timesCalled: number;
    setValue(value: T): void;
    /**
     * @description Does an asynchronous call to get the value
     * @optional @param origin Observable or Promise where the information will be taken from
     * @optional @param path Indicates the position of the desired information within the result
     * @returns An Promise<CallResponse<T>> at the and of the call
     * @example .call(this.service.fetch(), 'records', 0) // will return the first element of an asyncronous call that returns an object with an array called records
     */
    call(origin?: Promise<any> | Observable<any>, ...path: (string | number | symbol)[]): Promise<CallResponse<T>>;
    /**
     * @description Clears all content so it can be reloaded from scratch without creating a new memory variable
     */
    clear(): void;
    private _callbackResult;
    private _resolve;
}
