myApp.controller('MedicationController', function($http, UserService) {
  console.log('MedicationController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  vm.medication = [];
  vm.singleMedication = {};
  vm.medicationToAdd = {};
  vm.pilltakerId = "";
  var medication = {}; //data object being built and sent to server

  // Add a medication
  vm.addMedication = function(medName, frequency, frequencyUnits, dosage, dosageUnits,
    sideEffects, instructions, description, imageURL, notes, reminder1, reminderTime1,
    reminder2, reminderTime2, reminder3, reminderTime3, pilltakerID){
    console.log('in addMedication');

    medication.medName = medName;
    medication.frequency = frequency;
    medication.frequencyUnits = frequencyUnits;
    medication.dosage = dosage;
    medication.dosageUnits = dosageUnits;
    medication.sideEffects = sideEffects;
    medication.instructions = instructions;
    medication.description = description;
    medication.imageURL = imageURL;
    medication.notes = notes;
    medication.reminder1 = reminder1;
    medication.reminderTime1 = reminderTime1;
    medication.reminder2 = reminder2;
    medication.reminderTime2 = reminderTime2;
    medication.reminder3 = reminder3;
    medication.reminderTime3  = reminderTime3;
    medication.pilltakerID = pilltakerID;

    $http.post('/medication', medication).then(function(response){
      console.log('received response from addMedication POST');
      vm.clientToAdd = {};
      getAllMedications(pilltakerID);
    }).catch(function(){
      console.log('ERROR adding medication');
    });
  };

  // GET All medications for patient
  function getAllMedications(pilltakerID){
    console.log('in getAllMeds');
    $http.get('/medication/all/' + pilltakerID).then(function(response) {
      console.log(response.data);
      vm.medication = response.data;
      console.log('medication array is:', vm.medication);
    });
  }

  // GET ONE medication for patient
  vm.getOneMedication = function(pilltakerID, medicationID){
    console.log('in getOneMed');

    var config = { params: {
      medicationID: medicationID,
      pilltakerID: pilltakerID
    }};

    $http.get('/medication/' + config).then(function(response) {
      console.log(response.data);
      vm.singleMedication = response.data;
      console.log('single med is:', vm.singleMedication);
    });
  };

  // Delete a medication
  vm.deleteMedication = function(medicationID) {
      console.log('delete medication w/ id: ' + medicationID);
      
      $http.delete('/medication/' + medicationID)
        .then(function(response){
          getAllMedications();
        });
    };


}); //End of controller
