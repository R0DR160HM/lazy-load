/**
 * @fileoverview added by tsickle
 * Generated from: lib/requests/LazyLoader.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class CallResponse {
}
if (false) {
    /** @type {?} */
    CallResponse.prototype.oldValue;
    /** @type {?} */
    CallResponse.prototype.currentValue;
    /** @type {?} */
    CallResponse.prototype.requestResponse;
}
/**
 * @template T
 */
class LazyLoader {
    /**
     * \@optional \@param value Optional initial value for the LazyLoader
     * @param {?=} value
     */
    constructor(value) {
        this._timesCalled = 0;
        this._isCalling = false;
        this._value = value;
    }
    /**
     * \@description Train a LazyLoader so it is not necessary to pass the origin and path on each call
     * \@optional \@param origin Observable or Promise where the information will be taken from / \@param path Indicates the position of the desired information within the result
     * @template THIS
     * @this {THIS}
     * @param {?=} origin
     * @param {...?} path
     * @return {THIS}
     */
    train(origin, ...path) {
        (/** @type {?} */ (this))._path = path;
        (/** @type {?} */ (this))._origin = origin;
        return (/** @type {?} */ (this));
    }
    /**
     * \@description Indicates whether a call is currently taking place
     * @return {?}
     */
    get isCalling() {
        return this._isCalling;
    }
    /**
     * \@description Indicates whether LazyLoader was called once
     * @return {?}
     */
    get isCalled() {
        return this._timesCalled > 0;
    }
    /**
     * \@description Indicates whether the value of LazyLoader is valid
     * @return {?}
     */
    get isValid() {
        return this._timesCalled > 0 && this._value !== null && this._value !== undefined;
    }
    /**
     * \@description Current value of the LazyLoader, result of the .call()
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * \@description Indicates how much times the .call() was successfully executed
     * @return {?}
     */
    get timesCalled() {
        return this._timesCalled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        this._value = value;
    }
    /**
     * \@description Does an asynchronous call to get the value
     * \@optional \@param origin Observable or Promise where the information will be taken from / \@param path Indicates the position of the desired information within the result
     * \@example .call(this.service.fetch(), 'records', 0) // will return the first element of an asyncronous call that returns an object with an array called records
     * @param {?=} origin
     * @param {...?} path
     * @return {?} An Promise<CallResponse<T>> at the and of the call
     */
    call(origin, ...path) {
        if (this._path && !path) {
            path = this._path;
        }
        if (this._origin && !origin) {
            origin = this._origin;
        }
        /** @type {?} */
        const oldValue = this._value;
        this._isCalling = true;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            path = path || [];
            if (origin instanceof Promise) {
                origin.then((/**
                 * @param {?} result
                 * @return {?}
                 */
                result => this._resolve(result, path, resolve, oldValue)))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                err => reject(err)));
            }
            else {
                origin.subscribe((/**
                 * @param {?} result
                 * @return {?}
                 */
                result => this._resolve(result, path, resolve, oldValue)), (/**
                 * @param {?} err
                 * @return {?}
                 */
                err => reject(err)));
            }
        }));
    }
    /**
     * \@description Clears all content so it can be reloaded from scratch without creating a new memory variable
     * @return {?}
     */
    clear() {
        this._value = undefined;
        this._timesCalled = 0;
    }
    /**
     * @private
     * @param {?} data
     * @param {?} path
     * @return {?}
     */
    _callbackResult(data, path) {
        /** @type {?} */
        let finalData = data;
        if (path.length > 0) {
            path.forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => finalData = finalData[key]));
        }
        this._value = finalData;
    }
    /**
     * @private
     * @param {?} result
     * @param {?} path
     * @param {?} resolve
     * @param {?} oldValue
     * @return {?}
     */
    _resolve(result, path, resolve, oldValue) {
        this._callbackResult(result, path);
        this._isCalling = false;
        this._timesCalled++;
        resolve({ oldValue, currentValue: this._value, requestResponse: result });
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    LazyLoader.prototype._value;
    /**
     * @type {?}
     * @private
     */
    LazyLoader.prototype._timesCalled;
    /**
     * @type {?}
     * @private
     */
    LazyLoader.prototype._isCalling;
    /**
     * @type {?}
     * @private
     */
    LazyLoader.prototype._path;
    /**
     * @type {?}
     * @private
     */
    LazyLoader.prototype._origin;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lazy-load.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CallResponse, LazyLoader };
//# sourceMappingURL=lazy-load.js.map
