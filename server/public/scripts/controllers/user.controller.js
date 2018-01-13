myApp.controller('UserController', function(UserService) {
  console.log('UserController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  console.log("InfoService - YOU ARE HERE");
  var profileFunction = function () {
    alert("You clicked a button");

}
});
