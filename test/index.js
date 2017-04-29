// @type-check
var CommonUtilsHelper = require('../lib/index').CommonUtilsHelper;

var jsonStr = '{"date": "2017-04-01T12:00:00Z"}';
// Parsing without dateReviver
var jsonObj = JSON.parse(jsonStr);
// console.log('NoDateReviver: typeof jsonObj.date == ', typeof jsonObj.date);

// Parsing with dateReviver
var jsonObjReviver = JSON.parse(jsonStr, CommonUtilsHelper.JSON.dateReviver);
// console.log('DateReviver: typeof jsonObj.date == ', typeof jsonObjReviver.date);

if (typeof jsonObjReviver.date == 'object') {
    // console.log('Date.toString() = ', jsonObjReviver.date.toString());
    console.info('Successfull test exit code (0).');
    process.exit(0);
} else {
    console.info('failed test, exit code (1).');
    process.exit(1);
}