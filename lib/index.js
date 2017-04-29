"use strict";
/**
 * @module CommonUtilsHelper
 * @author: Mohamed Maher
 */
var CommonUtilsHelper;
(function (CommonUtilsHelper) {
    /** RegEx Date ISO Format */
    var isoDateRegEx = /^(?:\d{4}-?[01]\d-?[0-3]\dT[0-2]\d:?[0-5]\d:?[0-5]\d(\.\d+)?(Z|(-?\d*))?)$/;
    /** CommonUtilsHelpers JSON Helpers */
    var JSON = (function () {
        function JSON() {
        }
        /** Json Support parser reviver for Date. */
        JSON.dateReviver = function (key, value) {
            if (typeof value === 'string') {
                var match = isoDateRegEx.exec(value);
                if (match) {
                    return new Date(value);
                }
            }
            return value;
        };
        return JSON;
    }());
    CommonUtilsHelper.JSON = JSON;
})(CommonUtilsHelper || (CommonUtilsHelper = {}));
module.exports = CommonUtilsHelper;
//# sourceMappingURL=index.js.map