myApp.controller('InfoController', function($http, UserService) {
  console.log('InfoController created');
  var vm = this;
  vm.userService = UserService;
  vm.allPilltakers = [];
  var caretaker_id = 1;

  // GET all pilltakers for a caretaker
  vm.getAllPilltakers = function(caretaker_id){
    console.log('in getAllPilltakers');

    $http.get('/case/all/' + caretaker_id).then(function(response) {
      console.log(response.data);
      vm.allPilltakers = response.data;
      console.log('all pilltakers for caretaker:', vm.allPilltakers);
    });
  };

vm.getAllPilltakers(caretaker_id);

});
