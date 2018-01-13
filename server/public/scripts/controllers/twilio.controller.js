myApp.controller('TwilioController', function($http,$rootScope,$scope,  UserService) {
  console.log('TwilioController created');
  var msg = this;
  msg.userService = UserService;
  msg.userObject = UserService.userObject;

  msg.remindersAll = [];
  msg.reminder = {};
  msg.reminderToAdd = {};



  // $rootScope.$broadcast("TwilioMessage");}

  // Add a message
  // msg.addReminder = function(){
  //   console.log('in addReminder');
  //   $http.post('/twilio', msg.reminderToAdd).then(function(response){
  //     console.log('received response from addReminder POST');
  //     msg.clientToAdd = {};
  //     getAllReminders();
  //   }).catch(function(){
  //     console.log('ERROR adding medication');
  //   });
  // };
  //
  // // GET All medications
  // function getAllReminders(){
  //   console.log('in getAllRemidners');
  //   $http.get('/twilio').then(function(response) {
  //     console.log(response.data);
  //     msg.reminder = response.data;
  //     console.log('medication array is:', msg.reminder);
  //   });
  // }

  // // GET a medication
  // msg.getOneMedication = function(med_id){
  //   console.log('in getOneMed');
  //
  //   $http.get('/medication/' + med_id).then(function(response) {
  //     console.log(response.data);
  //     msg.singleMedication = response.data;
  //     console.log('single med is:', msg.singleMedication);
  //   });
  // };

  // // Delete a medication
  // msg.deleteMedication = function(med_id) {
  //     console.log('delete medication w/ id: ' + med_id);
  //     $http.delete('/medication/' + med_id)
  //       .then(function(response){
  //         getAllMedications();
  //       });
  //   };
  //

}); //End of controller
