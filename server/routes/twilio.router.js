//SDK Version: 2.x 3.x
// Twilio Credentials
var express = require('express');
var router = express.Router();
var path = require('path');
var config = require('../config.js');

const accountSid = config.accountSid;
const authToken = config.authToken;

var senderNum = config.senderNum;
var receiverNum = config.receiverNum;

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    to: senderNum,
    from: receiverNum,
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  })

  .then(message => console.log(message.sid)).catch(error=>console.log(error));

  module.exports = router;
