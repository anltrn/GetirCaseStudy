# GetirCaseStudy

This is an node.js app. I deployed to this app on Heroku.
You can test it with call this endpoint with post method.
This app check inputs and return some error messages.

Sample error response be like this:
1, "Start Date input is invalid"
2, "End Date input is invalid"
3, "Mincount input is invalid"
4, "Maxcount input is invalid"

You can test the app with postman.
Here is the download link for postman.
https://www.getpostman.com/downloads/

Application Endpoint URL:
https://glacial-mountain-65508.herokuapp.com/records

Application have test file.
record.test.js

First you need to go to project folder in terminal.
If you get the code in your local you can run test in terminal with command:
npm init
cd projectFolder
npm run test 

Sample request:
{
"startDate": "2016-05-05",
"endDate": "2019-02-02",
"minCount": 1450,
"maxCount": 1700
}

Sample response::
{
    "code": 0,
    "msg": "Success",
    "records": []
}

Sample error response:
{
    "code": 3,
    "msg": "Mincount input is invalid"
}
