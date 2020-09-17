/**
 * @fileoverview added by tsickle
 * Generated from: lib/requests/LazyLoader.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
CallResponse = /** @class */ (function () {
    function CallResponse() {
    }
    return CallResponse;
}());
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
var  /**
 * @template T
 */
LazyLoader = /** @class */ (function () {
    /**
     * @optional @param value Optional initial value for the LazyLoader
     */
    function LazyLoader(value) {
        this._timesCalled = 0;
        this._isCalling = false;
        this._value = value;
    }
    /**
     * @description Train a LazyLoader so it is not necessary to pass the origin and path on each call
     * @optional @param origin Observable or Promise where the information will be taken from
     * @optional @param path Indicates the position of the desired information within the result
     * @returns An trained LazyLoader
     */
    /**
     * \@description Train a LazyLoader so it is not necessary to pass the origin and path on each call
     * \@optional \@param origin Observable or Promise where the information will be taken from / \@param path Indicates the position of the desired information within the result
     * @template THIS
     * @this {THIS}
     * @param {?=} origin
     * @param {...?} path
     * @return {THIS}
     */
    LazyLoader.prototype.train = /**
     * \@description Train a LazyLoader so it is not necessary to pass the origin and path on each call
     * \@optional \@param origin Observable or Promise where the information will be taken from / \@param path Indicates the position of the desired information within the result
     * @template THIS
     * @this {THIS}
     * @param {?=} origin
     * @param {...?} path
     * @return {THIS}
     */
    function (origin) {
        var path = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            path[_i - 1] = arguments[_i];
        }
        (/** @type {?} */ (this))._path = path;
        (/** @type {?} */ (this))._origin = origin;
        return (/** @type {?} */ (this));
    };
    Object.defineProperty(LazyLoader.prototype, "isCalling", {
        /**
         * @description Indicates whether a call is currently taking place
         */
        get: /**
         * \@description Indicates whether a call is currently taking place
         * @return {?}
         */
        function () {
            return this._isCalling;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LazyLoader.prototype, "isCalled", {
        /**
         * @description Indicates whether LazyLoader was called once
         */
        get: /**
         * \@description Indicates whether LazyLoader was called once
         * @return {?}
         */
        function () {
            return this._timesCalled > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LazyLoader.prototype, "isValid", {
        /**
         * @description Indicates whether the value of LazyLoader is valid
         */
        get: /**
         * \@description Indicates whether the value of LazyLoader is valid
         * @return {?}
         */
        function () {
            return this._timesCalled > 0 && this._value !== null && this._value !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LazyLoader.prototype, "value", {
        /**
         * @description Current value of the LazyLoader, result of the .call()
         */
        get: /**
         * \@description Current value of the LazyLoader, result of the .call()
         * @return {?}
         */
        function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LazyLoader.prototype, "timesCalled", {
        /**
         * @description Indicates how much times the .call() was successfully executed
         */
        get: /**
         * \@description Indicates how much times the .call() was successfully executed
         * @return {?}
         */
        function () {
            return this._timesCalled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    LazyLoader.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value;
    };
    /**
     * @description Does an asynchronous call to get the value
     * @optional @param origin Observable or Promise where the information will be taken from
     * @optional @param path Indicates the position of the desired information within the result
     * @returns An Promise<CallResponse<T>> at the and of the call
     * @example .call(this.service.fetch(), 'records', 0) // will return the first element of an asyncronous call that returns an object with an array called records
     */
    /**
     * \@description Does an asynchronous call to get the value
     * \@optional \@param origin Observable or Promise where the information will be taken from / \@param path Indicates the position of the desired information within the result
     * \@example .call(this.service.fetch(), 'records', 0) // will return the first element of an asyncronous call that returns an object with an array called records
     * @param {?=} origin
     * @param {...?} path
     * @return {?} An Promise<CallResponse<T>> at the and of the call
     */
    LazyLoader.prototype.call = /**
     * \@description Does an asynchronous call to get the value
     * \@optional \@param origin Observable or Promise where the information will be taken from / \@param path Indicates the position of the desired information within the result
     * \@example .call(this.service.fetch(), 'records', 0) // will return the first element of an asyncronous call that returns an object with an array called records
     * @param {?=} origin
     * @param {...?} path
     * @return {?} An Promise<CallResponse<T>> at the and of the call
     */
    function (origin) {
        var _this = this;
        var path = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            path[_i - 1] = arguments[_i];
        }
        if (this._path && !path) {
            path = this._path;
        }
        if (this._origin && !origin) {
            origin = this._origin;
        }
        /** @type {?} */
        var oldValue = this._value;
        this._isCalling = true;
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            path = path || [];
            if (origin instanceof Promise) {
                origin.then((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) { return _this._resolve(result, path, resolve, oldValue); }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) { return reject(err); }));
            }
            else {
                origin.subscribe((/**
                 * @param {?} result
                 * @return {?}
                 */
                function (result) { return _this._resolve(result, path, resolve, oldValue); }), (/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) { return reject(err); }));
            }
        }));
    };
    /**
     * @description Clears all content so it can be reloaded from scratch without creating a new memory variable
     */
    /**
     * \@description Clears all content so it can be reloaded from scratch without creating a new memory variable
     * @return {?}
     */
    LazyLoader.prototype.clear = /**
     * \@description Clears all content so it can be reloaded from scratch without creating a new memory variable
     * @return {?}
     */
    function () {
        this._value = undefined;
        this._timesCalled = 0;
    };
    /**
     * @private
     * @param {?} data
     * @param {?} path
     * @return {?}
     */
    LazyLoader.prototype._callbackResult = /**
     * @private
     * @param {?} data
     * @param {?} path
     * @return {?}
     */
    function (data, path) {
        /** @type {?} */
        var finalData = data;
        if (path.length > 0) {
            path.forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) { return finalData = finalData[key]; }));
        }
        this._value = finalData;
    };
    /**
     * @private
     * @param {?} result
     * @param {?} path
     * @param {?} resolve
     * @param {?} oldValue
     * @return {?}
     */
    LazyLoader.prototype._resolve = /**
     * @private
     * @param {?} result
     * @param {?} path
     * @param {?} resolve
     * @param {?} oldValue
     * @return {?}
     */
    function (result, path, resolve, oldValue) {
        this._callbackResult(result, path);
        this._isCalling = false;
        this._timesCalled++;
        resolve({ oldValue: oldValue, currentValue: this._value, requestResponse: result });
    };
    return LazyLoader;
}());
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
