// this is wrapped in an `async` function
// you can use await throughout the function

var userText = inputData.userName;
if(inputData.channelName) userText = userText +"@"+inputData.channelName;

var content = inputData.timeStamp+" - "+userText+" [Message]("+inputData.permaLink+") #slack";

const body = 
{
	"token": inputData.token,
  "file_id": inputData.file_id,
  "changes": [
    {
      "action": "insert",
      "parent_id": inputData.parent_id,
      "index": 0,
      "content": content,
      "note": inputData.text,
      "checked": false,
      "checkbox": true
    }]
}

 
await fetch('https://dynalist.io/api/v1/doc/edit', {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json())
    .then(json => output = json);
