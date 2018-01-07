myApp.factory('UserService', function($http, $location){
  console.log('UserService Loaded');

  var userObject = {};
  var allPilltakers = [];
  var caretakerID = 1;

  // GET single pilltaker for a caretaker
/*  function getAllPilltaker(caretakerID){
    console.log('in getAllPilltakers');

    $http.get('/all/' + caretakerID).then(function(response) {
      console.log(response.data);
      allPilltakers = response.data;
      console.log('single pilltaker is:', allPilltakers);
    });
  }

  getAllPilltakers(1);*/

  return {

    allPilltakers : allPilltakers,
    userObject : userObject,

    getuser : function(){
      console.log('UserService -- getuser');
      $http.get('/user').then(function(response) {
          if(response.data.username) {
              // user has a curret session on the server
              userObject.userName = response.data.username;
              userObject.id = response.data.id;
              console.log('UserService -- getuser -- User Data: ', userObject);
          } else {
              console.log('UserService -- getuser -- failure');
              // user has no session, bounce them back to the login page
              $location.path("/home");
          }
      },function(response){
        console.log('UserService -- getuser -- failure: ', response);
        $location.path("/home");
      });
    },

    logout : function() {
      console.log('UserService -- logout');
      $http.get('/user/logout').then(function(response) {
        console.log('UserService -- logout -- logged out');
        $location.path("/home");
      });
    }
  };
});
