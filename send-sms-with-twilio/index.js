const express = require('express');
const bodyParser = require('body-parser');
const sendSms = require('./twilio');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

const port = 3000;
var To,Msg,MediaUrl,From="";
const accountSid = 'AC0632e3791843786fed7e1515cdccf2bd';
const authToken = '51a3dd2d619b9a52372ba7bcc06f0fce';
const client = require('twilio')(accountSid, authToken);

app.get('/', function(req, res){ 
  res.send("<h1>Hello</h1>");
});

app.post('/', function(req, res){ 
  console.log('i was called');
   To=req.body.To,
   Msg=req.body.Body,
   MediaUrl=req.body.MediaUrl,
   console.log(To);
   client.messages
  .create({
     body: Msg,
     from: '+12025688294',
     to: To
   })
  .then(message => console.log(message.sid));

});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
