var mysql = require('mysql');
var axios = require('axios');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "parent intimation"
});

const data={
  To:"+918333854477",
  Body:"You ward's attendance till 30-12-2020 is 71%. He need to attend 4 more days to reach 75% ",
  MediaUrl:'https://m.twil.io/Ll7hFpRa15',
  From:"+12025688294"
  
}
const accountSid = 'AC0632e3791843786fed7e1515cdccf2bd';
const authToken = '51a3dd2d619b9a52372ba7bcc06f0fce';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+12025688294',
     to: '+918919090980',
     mediaurl: 'https://bot.dialogflow.com/7ccd77de-0a14-4f84-b810-36be004ef092'
   })
  .then(message => console.log(message.sid));
