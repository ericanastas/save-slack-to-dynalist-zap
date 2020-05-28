
# save-slack-to-dynalist-zap

Zapier code step to forward messages saved in slack to [dynalist.io](https://www.dynalist.io)


## Setup

1. Create a new Zapier Zap
2. Choose the Slack app and the "New Saved Message" trigger event
3. Follow the prompts to authenticate Zapier with the apropriate Slack acccount.
4. Add a **Code by Zapier** app and the "Run Javascript" action event.
5. Configure the "Input Data" fields described below.
6. Copy the code in `code.js` into the "Code" input.


## Input Data 

The following input data fields must be added to the code step.

### Setup

`token`: Your dynalist API token

`file_id`: The id of the document to send slack messsages to. This can be determined from the URL. `https://dynalist.io/d/{file_id}`
                                     
`parent_id`: The specific node of the document specified above to save slack messages to. This can also be determined from the URL.

`https://dynalist.io/d/{file_id}#z={parent_id}`

 Alternatively this can be set to `root` to send messages to the root of the document.
                                                 
### Slack Fields

The following data fields must be added to the code step to pass data from the the saved slack message into the script.

`permaLink`: The permalink to the slack message
`text`: The message text
`channelName`: The channel name
`userName`: The message sender
`timeStamp`: The timestamp the message was sent
