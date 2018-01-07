myApp.controller('UserController', function(UserService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  //vm.allPilltakers = UserService.allPilltakers;
  //vm.userObject.getAllPilltakers();

  vm.patients = [{firstName: 'Bob', lastName:'Johnson'}, {firstName: 'Mary', lastName: 'Peterson'}];
});
