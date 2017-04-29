/**
 * @module CommonUtilsHelper
 * @author: Mohamed Maher
 */

var CommonUtilsHelper = {}
/** RegEx Date ISO Format */
isoDateRegEx = /^(?:\d{4}-?[01]\d-?[0-3]\dT[0-2]\d:?[0-5]\d:?[0-5]\d(\.\d+)?(Z|(-?\d*))?)$/;

/** CommonUtilsHelpers JSON Helpers */
CommonUtilsHelper.JSON = {
    /** Json Support parser reviver for Date.

    */
    dateReviver: function (key, value) {
        if (typeof value === 'string') {
            var match = isoDateRegEx.exec(value);
            if (match) {
                return new Date(value);
            }
        }
        return value;
    }
}


module.exports = CommonUtilsHelper;
