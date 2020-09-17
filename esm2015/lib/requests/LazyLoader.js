/**
 * @fileoverview added by tsickle
 * Generated from: lib/requests/LazyLoader.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
export class CallResponse {
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
export class LazyLoader {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGF6eUxvYWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xhenktbG9hZC8iLCJzb3VyY2VzIjpbImxpYi9yZXF1ZXN0cy9MYXp5TG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsTUFBTSxPQUFPLFlBQVk7Q0FJeEI7OztJQUhDLGdDQUFZOztJQUNaLG9DQUFnQjs7SUFDaEIsdUNBQXlCOzs7OztBQUczQixNQUFNLE9BQU8sVUFBVTs7Ozs7SUFjckIsWUFBWSxLQUFTO1FBVGIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQVN6QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7Ozs7Ozs7O0lBUU0sS0FBSyxDQUFDLE1BQXVDLEVBQUUsR0FBRyxJQUFrQztRQUN6RixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLG1CQUFBLElBQUksRUFBQSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztJQUNkLENBQUM7Ozs7O0lBS0QsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7OztJQUtELElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBS0QsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLENBQUM7SUFDcEYsQ0FBQzs7Ozs7SUFLRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFLRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRU0sUUFBUSxDQUFDLEtBQVE7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQzs7Ozs7Ozs7O0lBU00sSUFBSSxDQUFDLE1BQXVDLEVBQUUsR0FBRyxJQUFrQztRQUN4RixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDM0IsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDdkI7O2NBQ0ssUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBRXZCLE9BQU8sSUFBSSxPQUFPOzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ2xCLElBQUksTUFBTSxZQUFZLE9BQU8sRUFBRTtnQkFDN0IsTUFBTSxDQUFDLElBQUk7Ozs7Z0JBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxFQUFDO3FCQUNwRSxLQUFLOzs7O2dCQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUM7YUFDNUI7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLFNBQVM7Ozs7Z0JBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQzs7OztnQkFDekUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQzthQUNyQjtRQUNILENBQUMsRUFBQyxDQUFDO0lBRUwsQ0FBQzs7Ozs7SUFLTSxLQUFLO1FBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7OztJQUVPLGVBQWUsQ0FBQyxJQUFTLEVBQUUsSUFBVzs7WUFDeEMsU0FBUyxHQUFHLElBQUk7UUFDcEIsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsT0FBTzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7SUFDMUIsQ0FBQzs7Ozs7Ozs7O0lBRU8sUUFBUSxDQUFDLE1BQVcsRUFBRSxJQUFXLEVBQUUsT0FBWSxFQUFFLFFBQVc7UUFDbEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM1RSxDQUFDO0NBRUY7Ozs7OztJQXZIQyw0QkFBa0I7Ozs7O0lBRWxCLGtDQUF5Qjs7Ozs7SUFDekIsZ0NBQTJCOzs7OztJQUUzQiwyQkFBcUI7Ozs7O0lBQ3JCLDZCQUFnRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDYWxsUmVzcG9uc2U8VD4ge1xyXG4gIG9sZFZhbHVlOiBUO1xyXG4gIGN1cnJlbnRWYWx1ZTogVDtcclxuICByZXF1ZXN0UmVzcG9uc2U6IHVua25vd247XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMYXp5TG9hZGVyPFQ+IHtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGU6IHZhcmlhYmxlLW5hbWVcclxuICBwcml2YXRlIF92YWx1ZTogVDtcclxuXHJcbiAgcHJpdmF0ZSBfdGltZXNDYWxsZWQgPSAwO1xyXG4gIHByaXZhdGUgX2lzQ2FsbGluZyA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIF9wYXRoOiBhbnlbXTtcclxuICBwcml2YXRlIF9vcmlnaW46IE9ic2VydmFibGU8YW55PiB8IFByb21pc2U8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogQG9wdGlvbmFsIEBwYXJhbSB2YWx1ZSBPcHRpb25hbCBpbml0aWFsIHZhbHVlIGZvciB0aGUgTGF6eUxvYWRlclxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHZhbHVlPzogVCkge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvbiBUcmFpbiBhIExhenlMb2FkZXIgc28gaXQgaXMgbm90IG5lY2Vzc2FyeSB0byBwYXNzIHRoZSBvcmlnaW4gYW5kIHBhdGggb24gZWFjaCBjYWxsXHJcbiAgICogQG9wdGlvbmFsIEBwYXJhbSBvcmlnaW4gT2JzZXJ2YWJsZSBvciBQcm9taXNlIHdoZXJlIHRoZSBpbmZvcm1hdGlvbiB3aWxsIGJlIHRha2VuIGZyb21cclxuICAgKiBAb3B0aW9uYWwgQHBhcmFtIHBhdGggSW5kaWNhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgZGVzaXJlZCBpbmZvcm1hdGlvbiB3aXRoaW4gdGhlIHJlc3VsdFxyXG4gICAqIEByZXR1cm5zIEFuIHRyYWluZWQgTGF6eUxvYWRlclxyXG4gICAqL1xyXG4gIHB1YmxpYyB0cmFpbihvcmlnaW4/OiBQcm9taXNlPGFueT4gfCBPYnNlcnZhYmxlPGFueT4sIC4uLnBhdGg6IChzdHJpbmcgfCBudW1iZXIgfCBzeW1ib2wpW10pIHtcclxuICAgIHRoaXMuX3BhdGggPSBwYXRoO1xyXG4gICAgdGhpcy5fb3JpZ2luID0gb3JpZ2luO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb24gSW5kaWNhdGVzIHdoZXRoZXIgYSBjYWxsIGlzIGN1cnJlbnRseSB0YWtpbmcgcGxhY2VcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGlzQ2FsbGluZygpIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0NhbGxpbmc7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb24gSW5kaWNhdGVzIHdoZXRoZXIgTGF6eUxvYWRlciB3YXMgY2FsbGVkIG9uY2VcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGlzQ2FsbGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RpbWVzQ2FsbGVkID4gMDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvbiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdmFsdWUgb2YgTGF6eUxvYWRlciBpcyB2YWxpZFxyXG4gICAqL1xyXG4gIHB1YmxpYyBnZXQgaXNWYWxpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl90aW1lc0NhbGxlZCA+IDAgJiYgdGhpcy5fdmFsdWUgIT09IG51bGwgJiYgdGhpcy5fdmFsdWUgIT09IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvbiBDdXJyZW50IHZhbHVlIG9mIHRoZSBMYXp5TG9hZGVyLCByZXN1bHQgb2YgdGhlIC5jYWxsKClcclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uIEluZGljYXRlcyBob3cgbXVjaCB0aW1lcyB0aGUgLmNhbGwoKSB3YXMgc3VjY2Vzc2Z1bGx5IGV4ZWN1dGVkXHJcbiAgICovXHJcbiAgcHVibGljIGdldCB0aW1lc0NhbGxlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl90aW1lc0NhbGxlZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXRWYWx1ZSh2YWx1ZTogVCkge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvbiBEb2VzIGFuIGFzeW5jaHJvbm91cyBjYWxsIHRvIGdldCB0aGUgdmFsdWVcclxuICAgKiBAb3B0aW9uYWwgQHBhcmFtIG9yaWdpbiBPYnNlcnZhYmxlIG9yIFByb21pc2Ugd2hlcmUgdGhlIGluZm9ybWF0aW9uIHdpbGwgYmUgdGFrZW4gZnJvbVxyXG4gICAqIEBvcHRpb25hbCBAcGFyYW0gcGF0aCBJbmRpY2F0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBkZXNpcmVkIGluZm9ybWF0aW9uIHdpdGhpbiB0aGUgcmVzdWx0XHJcbiAgICogQHJldHVybnMgQW4gUHJvbWlzZTxDYWxsUmVzcG9uc2U8VD4+IGF0IHRoZSBhbmQgb2YgdGhlIGNhbGxcclxuICAgKiBAZXhhbXBsZSAuY2FsbCh0aGlzLnNlcnZpY2UuZmV0Y2goKSwgJ3JlY29yZHMnLCAwKSAvLyB3aWxsIHJldHVybiB0aGUgZmlyc3QgZWxlbWVudCBvZiBhbiBhc3luY3Jvbm91cyBjYWxsIHRoYXQgcmV0dXJucyBhbiBvYmplY3Qgd2l0aCBhbiBhcnJheSBjYWxsZWQgcmVjb3Jkc1xyXG4gICAqL1xyXG4gIHB1YmxpYyBjYWxsKG9yaWdpbj86IFByb21pc2U8YW55PiB8IE9ic2VydmFibGU8YW55PiwgLi4ucGF0aDogKHN0cmluZyB8IG51bWJlciB8IHN5bWJvbClbXSk6IFByb21pc2U8Q2FsbFJlc3BvbnNlPFQ+PiB7XHJcbiAgICBpZiAodGhpcy5fcGF0aCAmJiAhcGF0aCkge1xyXG4gICAgICBwYXRoID0gdGhpcy5fcGF0aDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9vcmlnaW4gJiYgIW9yaWdpbikge1xyXG4gICAgICBvcmlnaW4gPSB0aGlzLl9vcmlnaW47XHJcbiAgICB9XHJcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuX3ZhbHVlO1xyXG4gICAgdGhpcy5faXNDYWxsaW5nID0gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBwYXRoID0gcGF0aCB8fCBbXTtcclxuICAgICAgaWYgKG9yaWdpbiBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgICBvcmlnaW4udGhlbihyZXN1bHQgPT4gdGhpcy5fcmVzb2x2ZShyZXN1bHQsIHBhdGgsIHJlc29sdmUsIG9sZFZhbHVlKSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHJlamVjdChlcnIpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBvcmlnaW4uc3Vic2NyaWJlKHJlc3VsdCA9PiB0aGlzLl9yZXNvbHZlKHJlc3VsdCwgcGF0aCwgcmVzb2x2ZSwgb2xkVmFsdWUpLFxyXG4gICAgICAgIGVyciA9PiByZWplY3QoZXJyKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvbiBDbGVhcnMgYWxsIGNvbnRlbnQgc28gaXQgY2FuIGJlIHJlbG9hZGVkIGZyb20gc2NyYXRjaCB3aXRob3V0IGNyZWF0aW5nIGEgbmV3IG1lbW9yeSB2YXJpYWJsZVxyXG4gICAqL1xyXG4gIHB1YmxpYyBjbGVhcigpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5fdGltZXNDYWxsZWQgPSAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY2FsbGJhY2tSZXN1bHQoZGF0YTogYW55LCBwYXRoOiBhbnlbXSkge1xyXG4gICAgbGV0IGZpbmFsRGF0YSA9IGRhdGE7XHJcbiAgICBpZiAocGF0aC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHBhdGguZm9yRWFjaChrZXkgPT4gZmluYWxEYXRhID0gZmluYWxEYXRhW2tleV0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdmFsdWUgPSBmaW5hbERhdGE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZXNvbHZlKHJlc3VsdDogYW55LCBwYXRoOiBhbnlbXSwgcmVzb2x2ZTogYW55LCBvbGRWYWx1ZTogVCkge1xyXG4gICAgdGhpcy5fY2FsbGJhY2tSZXN1bHQocmVzdWx0LCBwYXRoKTtcclxuICAgIHRoaXMuX2lzQ2FsbGluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fdGltZXNDYWxsZWQrKztcclxuICAgIHJlc29sdmUoeyBvbGRWYWx1ZSwgY3VycmVudFZhbHVlOiB0aGlzLl92YWx1ZSwgcmVxdWVzdFJlc3BvbnNlOiByZXN1bHQgfSk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=