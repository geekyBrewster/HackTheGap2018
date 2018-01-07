myApp.controller('InfoController', function($http, UserService) {
  console.log('InfoController created');
  var vm = this;
  vm.userService = UserService;
  console.log("user service: ", vm.userService);

  vm.allPilltakers = [];
  //vm.allPilltakers = [{firstName: 'Bob'}, {firstName: 'Mary'}];

  getAllPilltakers(1);

  // GET all pilltakers for a caretaker
  function getAllPilltakers (caretaker_id){
    console.log('in getAllPilltakers');

    $http.get('/case/all/' + caretaker_id).then(function(response) {
      console.log(response.data);
      vm.allPilltakers = response.data;
      console.log('all pilltakers for caretaker:', vm.allPilltakers);
    });
  }




});
