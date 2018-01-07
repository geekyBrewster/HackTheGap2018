var express = require('express');
var router = express.Router();

const accountSid = 'ACbc06df4266fb7f75f17c2b3ff85c6362';
const authToken = '1729a8876b53509620ddf7b74d5e749f';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

// Handles Ajax request for user information if user is authenticated
router.get('/', function(req, res) {
  console.log('get /user route');
  // check if logged in
  if(req.isAuthenticated()) {
    // send back user object from database
    //console.log('logged in', req.user);
    var userInfo = {
      username : req.user.username
    };
    res.send(userInfo);
  } else {
    // failure best handled on the server. do redirect here.
    console.log('not logged in');
    // should probably be res.sendStatus(403) and handled client-side, esp if this is an AJAX request (which is likely with AngularJS)
    res.send(false);
  }
});

router.get('/hello',function(req,res){
console.log('get /hello route');
client.messages
.create({
to: '+17633029886',
from: '+16122497250',
body: 'Hey Jane wanted to see how you are doing today since you started a new medication',
})
.then(message => console.log(message.sid)).catch(error=>console.log(error));

});

// clear all server session information about this user
router.get('/logout', function(req, res) {
  // Use passport's built-in method to log out the user
  console.log('Logged out');
  req.logOut();
  res.sendStatus(200);
});


module.exports = router;
