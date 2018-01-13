//SDK Version: 2.x 3.x
// Twilio Credentials
var express = require('express');
var router = express.Router();
var path = require('path');
//var scope = require('scope');
const accountSid = 'ACbc06df4266fb7f75f17c2b3ff85c6362';
const authToken = '1729a8876b53509620ddf7b74d5e749f';
// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

// $scope.on("TwilioMessage", function(){
//   console.log("Hello");
// })


// router.get('/twilio', function(req, res) {
//   console.log('get /user route');
//
//
//   client.messages
//  .create({
//    to: '+17633029886',
//    from: '+16122497250',
//    body: 'Hey Jane wanted to see how you are doing today since you started a new medication',
//  })
//  .then(message => res.send(message.sid)).catch(error=>console.log(error));
//
// });

//  var TwilioMessage = function() {
//
//    client.messages
//   .create({
//     to: '+17633029886',
//     from: '+16  122497250',
//     body: 'Hey Jane wanted to see how you are doing today since you started a new medication',
//   })
//   .then(message => console.log(message.sid)).catch(error=>console.log(error));
//
// }
  module.exports = router;
