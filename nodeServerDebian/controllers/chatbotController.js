const dialogflow = require('dialogflow');
const config = require('../config/Dialogflow.config');
const privateKey = require('../config/chatbotv2-kiyeid-d3d7d93ad429.json')
const projectId = 'chatbotv2-kiyeid';
const credentials = {
    client_email: 'dialogflow-client@chatbotv2-kiyeid.iam.gserviceaccount.com',
    private_key: privateKey.private_key
  };

 // Create a new session
//  authentication with Google Clouds
 const sessionClient = new dialogflow.SessionsClient({
    projectId,
    credentials,
 });
 const sessionPath = sessionClient.sessionPath(config.googleProjectId, config.dialogflowSessionId);

 module.exports.GetMessage = async (req, res) => {
    const request = {
        session: sessionPath,
        queryInput: {
          text: {
            // The query to send to the dialogflow agent
            text: req.body.message,
            languageCode: config.dialogflowSessionLanguageCode,
          },
        },
      };
        // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    const result = responses[0].queryResult;
    // console.log(`  Query: ${result.queryText}`);
    // console.log(`  Response: ${result.fulfillmentText}`);
    if (result.intent) {
        if(!responses[0].queryResult.fulfillmentMessages[1]) {
            res.status(200).json({ 
                msg: responses[0].queryResult.fulfillmentMessages[0].text.text[0],
            });
        } else {
            res.status(200).json({ 
                msg: responses[0].queryResult.fulfillmentMessages[0].text.text[0],
                msg1: responses[0].queryResult.fulfillmentMessages[1].text.text[0],
                msg2: responses[0].queryResult.fulfillmentMessages[2].text.text[0]
            });
        }
    } else {
        res.status(500).json({ msg: 'Sorki, nie za bardzo rozumiem'});
    }
}