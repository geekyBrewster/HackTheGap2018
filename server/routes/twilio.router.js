//SDK Version: 2.x 3.x
// Twilio Credentials
var express = require('express');
var router = express.Router();
var path = require('path');

const accountSid = 'ACbc06df4266fb7f75f17c2b3ff85c6362';
const authToken = '1729a8876b53509620ddf7b74d5e749f';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    to: '+16126186587',
    from: '+16122497250',
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  })

  .then(message => console.log(message.sid)).catch(error=>console.log(error));

  module.exports = router;
