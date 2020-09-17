/**
 * @fileoverview added by tsickle
 * Generated from: lib/requests/LazyLoader.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
var /**
 * @template T
 */
CallResponse = /** @class */ (function () {
    function CallResponse() {
    }
    return CallResponse;
}());
/**
 * @template T
 */
export { CallResponse };
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
var /**
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
/**
 * @template T
 */
export { LazyLoader };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF6eUxvYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xhenktbG9hZC8iLCJzb3VyY2VzIjpbImxpYi9yZXF1ZXN0cy9MYXp5TG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUE7Ozs7SUFBQTtJQUlBLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFKRCxJQUlDOzs7Ozs7O0lBSEMsZ0NBQVk7O0lBQ1osb0NBQWdCOztJQUNoQix1Q0FBeUI7Ozs7O0FBRzNCOzs7O0lBV0U7O09BRUc7SUFDSCxvQkFBWSxLQUFTO1FBVGIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQVN6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7Ozs7SUFDSSwwQkFBSzs7Ozs7Ozs7O0lBQVosVUFBYSxNQUF1QztRQUFFLGNBQXFDO2FBQXJDLFVBQXFDLEVBQXJDLHFCQUFxQyxFQUFyQyxJQUFxQztZQUFyQyw2QkFBcUM7O1FBQ3pGLG1CQUFBLElBQUksRUFBQSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsbUJBQUEsSUFBSSxFQUFBLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixPQUFPLG1CQUFBLElBQUksRUFBQSxDQUFDO0lBQ2QsQ0FBQztJQUtELHNCQUFXLGlDQUFTO1FBSHBCOztXQUVHOzs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBS0Qsc0JBQVcsZ0NBQVE7UUFIbkI7O1dBRUc7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBS0Qsc0JBQVcsK0JBQU87UUFIbEI7O1dBRUc7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssU0FBUyxDQUFDO1FBQ3BGLENBQUM7OztPQUFBO0lBS0Qsc0JBQVcsNkJBQUs7UUFIaEI7O1dBRUc7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFLRCxzQkFBVyxtQ0FBVztRQUh0Qjs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQixDQUFDOzs7T0FBQTs7Ozs7SUFFTSw2QkFBUTs7OztJQUFmLFVBQWdCLEtBQVE7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7O0lBQ0kseUJBQUk7Ozs7Ozs7O0lBQVgsVUFBWSxNQUF1QztRQUFuRCxpQkFxQkM7UUFyQm9ELGNBQXFDO2FBQXJDLFVBQXFDLEVBQXJDLHFCQUFxQyxFQUFyQyxJQUFxQztZQUFyQyw2QkFBcUM7O1FBQ3hGLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRTtZQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNuQjtRQUNELElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMzQixNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN2Qjs7WUFDSyxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU07UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFdkIsT0FBTyxJQUFJLE9BQU87Ozs7O1FBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUNsQixJQUFJLE1BQU0sWUFBWSxPQUFPLEVBQUU7Z0JBQzdCLE1BQU0sQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBOUMsQ0FBOEMsRUFBQztxQkFDcEUsS0FBSzs7OztnQkFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBWCxDQUFXLEVBQUMsQ0FBQzthQUM1QjtpQkFBTTtnQkFDTCxNQUFNLENBQUMsU0FBUzs7OztnQkFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLEVBQTlDLENBQThDOzs7O2dCQUN6RSxVQUFBLEdBQUcsSUFBSSxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBWCxDQUFXLEVBQUMsQ0FBQzthQUNyQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBRUwsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNJLDBCQUFLOzs7O0lBQVo7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDOzs7Ozs7O0lBRU8sb0NBQWU7Ozs7OztJQUF2QixVQUF3QixJQUFTLEVBQUUsSUFBVzs7WUFDeEMsU0FBUyxHQUFHLElBQUk7UUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBMUIsQ0FBMEIsRUFBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7SUFDMUIsQ0FBQzs7Ozs7Ozs7O0lBRU8sNkJBQVE7Ozs7Ozs7O0lBQWhCLFVBQWlCLE1BQVcsRUFBRSxJQUFXLEVBQUUsT0FBWSxFQUFFLFFBQVc7UUFDbEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFSCxpQkFBQztBQUFELENBQUMsQUExSEQsSUEwSEM7Ozs7Ozs7Ozs7SUF2SEMsNEJBQWtCOzs7OztJQUVsQixrQ0FBeUI7Ozs7O0lBQ3pCLGdDQUEyQjs7Ozs7SUFFM0IsMkJBQXFCOzs7OztJQUNyQiw2QkFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FsbFJlc3BvbnNlPFQ+IHtcclxuICBvbGRWYWx1ZTogVDtcclxuICBjdXJyZW50VmFsdWU6IFQ7XHJcbiAgcmVxdWVzdFJlc3BvbnNlOiB1bmtub3duO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGF6eUxvYWRlcjxUPiB7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlOiB2YXJpYWJsZS1uYW1lXHJcbiAgcHJpdmF0ZSBfdmFsdWU6IFQ7XHJcblxyXG4gIHByaXZhdGUgX3RpbWVzQ2FsbGVkID0gMDtcclxuICBwcml2YXRlIF9pc0NhbGxpbmcgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSBfcGF0aDogYW55W107XHJcbiAgcHJpdmF0ZSBfb3JpZ2luOiBPYnNlcnZhYmxlPGFueT4gfCBQcm9taXNlPGFueT47XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvcHRpb25hbCBAcGFyYW0gdmFsdWUgT3B0aW9uYWwgaW5pdGlhbCB2YWx1ZSBmb3IgdGhlIExhenlMb2FkZXJcclxuICAgKi9cclxuICBjb25zdHJ1Y3Rvcih2YWx1ZT86IFQpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb24gVHJhaW4gYSBMYXp5TG9hZGVyIHNvIGl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gcGFzcyB0aGUgb3JpZ2luIGFuZCBwYXRoIG9uIGVhY2ggY2FsbFxyXG4gICAqIEBvcHRpb25hbCBAcGFyYW0gb3JpZ2luIE9ic2VydmFibGUgb3IgUHJvbWlzZSB3aGVyZSB0aGUgaW5mb3JtYXRpb24gd2lsbCBiZSB0YWtlbiBmcm9tXHJcbiAgICogQG9wdGlvbmFsIEBwYXJhbSBwYXRoIEluZGljYXRlcyB0aGUgcG9zaXRpb24gb2YgdGhlIGRlc2lyZWQgaW5mb3JtYXRpb24gd2l0aGluIHRoZSByZXN1bHRcclxuICAgKiBAcmV0dXJucyBBbiB0cmFpbmVkIExhenlMb2FkZXJcclxuICAgKi9cclxuICBwdWJsaWMgdHJhaW4ob3JpZ2luPzogUHJvbWlzZTxhbnk+IHwgT2JzZXJ2YWJsZTxhbnk+LCAuLi5wYXRoOiAoc3RyaW5nIHwgbnVtYmVyIHwgc3ltYm9sKVtdKSB7XHJcbiAgICB0aGlzLl9wYXRoID0gcGF0aDtcclxuICAgIHRoaXMuX29yaWdpbiA9IG9yaWdpbjtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uIEluZGljYXRlcyB3aGV0aGVyIGEgY2FsbCBpcyBjdXJyZW50bHkgdGFraW5nIHBsYWNlXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBpc0NhbGxpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNDYWxsaW5nO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uIEluZGljYXRlcyB3aGV0aGVyIExhenlMb2FkZXIgd2FzIGNhbGxlZCBvbmNlXHJcbiAgICovXHJcbiAgcHVibGljIGdldCBpc0NhbGxlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl90aW1lc0NhbGxlZCA+IDA7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb24gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHZhbHVlIG9mIExhenlMb2FkZXIgaXMgdmFsaWRcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGlzVmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGltZXNDYWxsZWQgPiAwICYmIHRoaXMuX3ZhbHVlICE9PSBudWxsICYmIHRoaXMuX3ZhbHVlICE9PSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb24gQ3VycmVudCB2YWx1ZSBvZiB0aGUgTGF6eUxvYWRlciwgcmVzdWx0IG9mIHRoZSAuY2FsbCgpXHJcbiAgICovXHJcbiAgcHVibGljIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvbiBJbmRpY2F0ZXMgaG93IG11Y2ggdGltZXMgdGhlIC5jYWxsKCkgd2FzIHN1Y2Nlc3NmdWxseSBleGVjdXRlZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgdGltZXNDYWxsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGltZXNDYWxsZWQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0VmFsdWUodmFsdWU6IFQpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb24gRG9lcyBhbiBhc3luY2hyb25vdXMgY2FsbCB0byBnZXQgdGhlIHZhbHVlXHJcbiAgICogQG9wdGlvbmFsIEBwYXJhbSBvcmlnaW4gT2JzZXJ2YWJsZSBvciBQcm9taXNlIHdoZXJlIHRoZSBpbmZvcm1hdGlvbiB3aWxsIGJlIHRha2VuIGZyb21cclxuICAgKiBAb3B0aW9uYWwgQHBhcmFtIHBhdGggSW5kaWNhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgZGVzaXJlZCBpbmZvcm1hdGlvbiB3aXRoaW4gdGhlIHJlc3VsdFxyXG4gICAqIEByZXR1cm5zIEFuIFByb21pc2U8Q2FsbFJlc3BvbnNlPFQ+PiBhdCB0aGUgYW5kIG9mIHRoZSBjYWxsXHJcbiAgICogQGV4YW1wbGUgLmNhbGwodGhpcy5zZXJ2aWNlLmZldGNoKCksICdyZWNvcmRzJywgMCkgLy8gd2lsbCByZXR1cm4gdGhlIGZpcnN0IGVsZW1lbnQgb2YgYW4gYXN5bmNyb25vdXMgY2FsbCB0aGF0IHJldHVybnMgYW4gb2JqZWN0IHdpdGggYW4gYXJyYXkgY2FsbGVkIHJlY29yZHNcclxuICAgKi9cclxuICBwdWJsaWMgY2FsbChvcmlnaW4/OiBQcm9taXNlPGFueT4gfCBPYnNlcnZhYmxlPGFueT4sIC4uLnBhdGg6IChzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wpW10pOiBQcm9taXNlPENhbGxSZXNwb25zZTxUPj4ge1xyXG4gICAgaWYgKHRoaXMuX3BhdGggJiYgIXBhdGgpIHtcclxuICAgICAgcGF0aCA9IHRoaXMuX3BhdGg7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fb3JpZ2luICYmICFvcmlnaW4pIHtcclxuICAgICAgb3JpZ2luID0gdGhpcy5fb3JpZ2luO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb2xkVmFsdWUgPSB0aGlzLl92YWx1ZTtcclxuICAgIHRoaXMuX2lzQ2FsbGluZyA9IHRydWU7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgcGF0aCA9IHBhdGggfHwgW107XHJcbiAgICAgIGlmIChvcmlnaW4gaW5zdGFuY2VvZiBQcm9taXNlKSB7XHJcbiAgICAgICAgb3JpZ2luLnRoZW4ocmVzdWx0ID0+IHRoaXMuX3Jlc29sdmUocmVzdWx0LCBwYXRoLCByZXNvbHZlLCBvbGRWYWx1ZSkpXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiByZWplY3QoZXJyKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb3JpZ2luLnN1YnNjcmliZShyZXN1bHQgPT4gdGhpcy5fcmVzb2x2ZShyZXN1bHQsIHBhdGgsIHJlc29sdmUsIG9sZFZhbHVlKSxcclxuICAgICAgICBlcnIgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb24gQ2xlYXJzIGFsbCBjb250ZW50IHNvIGl0IGNhbiBiZSByZWxvYWRlZCBmcm9tIHNjcmF0Y2ggd2l0aG91dCBjcmVhdGluZyBhIG5ldyBtZW1vcnkgdmFyaWFibGVcclxuICAgKi9cclxuICBwdWJsaWMgY2xlYXIoKSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuX3RpbWVzQ2FsbGVkID0gMDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NhbGxiYWNrUmVzdWx0KGRhdGE6IGFueSwgcGF0aDogYW55W10pIHtcclxuICAgIGxldCBmaW5hbERhdGEgPSBkYXRhO1xyXG4gICAgaWYgKHBhdGgubGVuZ3RoID4gMCkge1xyXG4gICAgICBwYXRoLmZvckVhY2goa2V5ID0+IGZpbmFsRGF0YSA9IGZpbmFsRGF0YVtrZXldKTtcclxuICAgIH1cclxuICAgIHRoaXMuX3ZhbHVlID0gZmluYWxEYXRhO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcmVzb2x2ZShyZXN1bHQ6IGFueSwgcGF0aDogYW55W10sIHJlc29sdmU6IGFueSwgb2xkVmFsdWU6IFQpIHtcclxuICAgIHRoaXMuX2NhbGxiYWNrUmVzdWx0KHJlc3VsdCwgcGF0aCk7XHJcbiAgICB0aGlzLl9pc0NhbGxpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuX3RpbWVzQ2FsbGVkKys7XHJcbiAgICByZXNvbHZlKHsgb2xkVmFsdWUsIGN1cnJlbnRWYWx1ZTogdGhpcy5fdmFsdWUsIHJlcXVlc3RSZXNwb25zZTogcmVzdWx0IH0pO1xyXG4gIH1cclxuXHJcbn1cclxuIl19