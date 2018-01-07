myApp.controller('CaseController', function($http, UserService) {
  console.log('CaseController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  vm.pilltaker = {};
  vm.allPilltakers = [];
  var pilltakerObject = {};

  getOnePilltaker(1);

  // Add pilltaker details
  vm.addPilltaker = function(firstName, lastName, dob, phone, notes, caretakerID){
    console.log('in addPilltaker');

    pilltakerObject.firstName = firstName;
    pilltakerObject.lastName = lastName;
    pilltakerObject.dob = dob;
    pilltakerObject.phone = phone;
    pilltakerObject.notes = notes;
    pilltakerObject.caretakerID = caretakerID;

    console.log('pilltaker to add: ', pilltakerObject);

    $http.post('/', pilltakerObject).then(function(response){
      console.log('received response from addPilltaker POST');
      vm.pilltaker = {};
    }).catch(function(){
      console.log('ERROR adding pilltaker');
    });
  };

  // GET single pilltaker for a caretaker
  function getOnePilltaker(pilltakerID){
    console.log('in getOnePilltaker');

    $http.get('/' + pilltakerID).then(function(response) {
      console.log(response.data);
      vm.pilltaker = response.data;
      console.log('single pilltaker is:', vm.pilltaker);
    });
  }

  // GET single pilltaker for a caretaker
  vm.getAllPilltaker = function(caretakerID){
    console.log('in getAllPilltakers');

    $http.get('/all/' + caretakerID).then(function(response) {
      console.log(response.data);
      vm.allPilltakers = response.data;
      console.log('single pilltaker is:', vm.allPilltakers);
    });
  };

  // Delete a pilltaker
  vm.deletePilltaker = function(pilltakerID) {
      console.log('delete pilltaker w/ id: ' + pilltakerID);
      $http.delete('/' + pilltakerID)
        .then(function(response){
          getAllPilltakers();
        });
    };

}); //End of controller
