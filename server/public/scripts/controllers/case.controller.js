myApp.controller('CaseController', function($http, UserService) {
  console.log('CaseController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  vm.caretaker = {};
  vm.pilltaker = {};
  vm.allPilltakers = [];

  // Add caretaker details
  vm.addCaretaker = function(){
    console.log('in addCaretaker');
    $http.post('/caretaker', vm.caretaker).then(function(response){
      console.log('received response from addCaretaker POST');
      vm.caretaker = {};
    }).catch(function(){
      console.log('ERROR adding caretaker');
    });
  };

  // Add pilltaker details
  vm.addPilltaker = function(){
    console.log('in addPilltaker');
    $http.post('/case', vm.pilltaker).then(function(response){
      console.log('received response from addPilltaker POST');
      vm.pilltaker = {};
    }).catch(function(){
      console.log('ERROR adding pilltaker');
    });
  };



  // GET single pilltaker for a caretaker
  vm.getOnePilltaker = function(caretaker_id, pilltaker_id){
    console.log('in getOnePilltaker');

    var config = { params: {
      caretaker_id: caretaker_id,
      pilltaker_id: pilltaker_id
    }};

    $http.get('/case/' + config).then(function(response) {
      console.log(response.data);
      vm.pilltaker = response.data;
      console.log('single pilltaker is:', vm.pilltaker);
    });
  };

  // Delete a pilltaker
  vm.deletePilltaker = function(pilltaker_id) {
      console.log('delete pilltaker w/ id: ' + pilltaker_id);
      $http.delete('/case/' + pilltaker_id)
        .then(function(response){
          getAllPilltakers();
        });
    };

    // Delete caretaker details
    vm.deleteCaretakerDetails = function(caretaker_id) {
        console.log('delete caretaker details w/ id: ' + caretaker_id);
        $http.delete('/caretaker/' + caretaker_id)
          .then(function(response){
            console.log('caretaker details deleted');
          });
      };
}); //End of controller
