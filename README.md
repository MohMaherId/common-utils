# common-utils-helper

It is a place to provide helper methods used in NodeJS for common projects.

## JSON parse helpers
### Date Reviver
You may use the dateReviver function to convert the strings that represents an ISO Date format to a Date Objects instead of strings.

```javascript
var CommonUtilsHelper = require ('CommonUtilsHelper')
JSON.parse (jsonString, CommonUtilsHelper.JSON.dateReviver)
```

This will convert a sting of type '2017-04-01T12:00:00Z' to a Date object of the same time