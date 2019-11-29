# GetirCaseStudy

This is an node.js app. I deployed to this app on Heroku.<br/>
You can test it with call application endpoint with post method.<br/>
This app check inputs and return some error messages.

Sample error code for application:<br/>
1, "Start Date input is invalid"<br/>
2, "End Date input is invalid"<br/>
3, "Mincount input is invalid"<br/>
4, "Maxcount input is invalid"<br/>

You can test the app with postman.<br/>
Here is the download link for postman.<br/>
https://www.getpostman.com/downloads/

Application Endpoint URL:
https://glacial-mountain-65508.herokuapp.com/records

Application have test file:<br/>
record.test.js

Sample request:<br/>
{<br/>
"startDate": "2016-05-05",<br/>
"endDate": "2019-02-02",<br/>
"minCount": 1450,<br/>
"maxCount": 1700<br/>
}

Sample response:<br/>
{<br/>
    "code": 0,<br/>
    "msg": "Success",<br/>
    "records": []<br/>
}<br/>

Sample error response:<br/>
{<br/>
    "code": 3,<br/>
    "msg": "Mincount input is invalid"<br/>
}
