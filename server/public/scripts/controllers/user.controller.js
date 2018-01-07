myApp.controller('UserController', function($http, $location, UserService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  vm.allPilltakers = [];
  getAllPilltakers(1);

  vm.patients = [{firstName: 'Bob', lastName:'Johnson'}, {firstName: 'Mary', lastName: 'Peterson'}];

  vm.getOnePilltaker = function(pilltakerID){
    $location.path('/case');
  };

  // GET single pilltaker for a caretaker
  function getAllPilltakers (caretakerID){
    console.log('in getAllPilltakers');

    $http.get('/case/all/' + caretakerID).then(function(response) {
      console.log(response.data);
      vm.allPilltakers = response.data;
      console.log('single pilltaker is:', vm.allPilltakers);
    });
  }
});
