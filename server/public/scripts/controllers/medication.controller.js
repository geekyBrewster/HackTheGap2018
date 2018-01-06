myApp.controller('MedicationController', function($http, UserService) {
  console.log('MedicationController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  vm.medication = [];
  vm.singleMedication = {};
  vm.medicationToAdd = {};

  // Add a medication
  vm.addMedication = function(){
    console.log('in addMedication');
    $http.post('/medication', vm.medicationToAdd).then(function(response){
      console.log('received response from addMedication POST');
      vm.clientToAdd = {};
      getAllMedications();
    }).catch(function(){
      console.log('ERROR adding medication');
    });
  };

  // GET All medications
  function getAllMedications(){
    console.log('in getAllMeds');
    $http.get('/medication').then(function(response) {
      console.log(response.data);
      vm.medication = response.data;
      console.log('medication array is:', vm.medication);
    });
  }

  // GET a medication
  vm.getOneMedication = function(med_id){
    console.log('in getOneMed');

    $http.get('/medication/' + med_id).then(function(response) {
      console.log(response.data);
      vm.singleMedication = response.data;
      console.log('single med is:', vm.singleMedication);
    });
  };

  // Delete a medication
  vm.deleteMedication = function(med_id) {
      console.log('delete medication w/ id: ' + med_id);
      $http.delete('/medication/' + med_id)
        .then(function(response){
          getAllMedications();
        });
    };


}); //End of controller
