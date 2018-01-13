var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config');
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as lc'
    })
    .when('/hello', {
      templateUrl: '/views/templates/info.html',
      controller:'TwilioController as tc',

    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/medication', {
      templateUrl: '/views/templates/medication.html',
      controller: 'MedicationController as mc'
    })
    .when('/caretaker', {
      templateUrl: '/views/templates/caretaker.html',
      controller: 'CaseController as cc'
    })
    .when('/case', {
      templateUrl: '/views/templates/case.html',
      controller: 'CaseController as cc'
    })
    .when('/addCase', {
      templateUrl: '/views/templates/addCase.html',
      controller: 'CaseController as cc'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController as ic',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/prescriptions', {
      templateUrl: '/views/templates/prescriptions.html',
      controller: 'MedicationController as mc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    // .when('/twilio', {
    //   templateUrl: '/views/templates/twilio.html',
    //   controller: 'InfoController',
    //   resolve: {
    //     getuser : function(UserService){
    //       return UserService.getuser();
    //     }
    //   }
    // })
    .otherwise({
      redirectTo: 'home'
    });
});
