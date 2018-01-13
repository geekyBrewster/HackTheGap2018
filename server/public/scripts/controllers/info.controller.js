myApp.controller('InfoController', function($http, $location, UserService) {

  console.log('InfoController created');
  var vm = this;
  vm.userService = UserService;
  vm.allPilltakers = [];
  var caretakerID = 1;

  // // GET all pilltakers for a caretaker
  // vm.getAllPilltakers = function(caretakerID){
  //   console.log('in getAllPilltakers');
  //
  //   $http.get('/case/all/' + caretakerID).then(function(response) {
  //     console.log(response.data);
  //     vm.allPilltakers = response.data;
  //     console.log('all pilltakers for caretaker:', vm.allPilltakers);
  //   });
  // };

//   vm.profileFunction = function () {
//     alert("You clicked a button");
//
//   //  $rootScope.$broadcast("TwilioMessage");}
//
//
//    vm.getAllPilltakers(caretakerID);
//
// });
});
