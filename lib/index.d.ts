/**
 * @module CommonUtilsHelper
 * @author: Mohamed Maher
 */
declare namespace CommonUtilsHelper {
    /** CommonUtilsHelpers JSON Helpers */
    class JSON {
        /** Json Support parser reviver for Date. */
        static dateReviver(key: any, value: any): any;
    }
}
export = CommonUtilsHelper;
