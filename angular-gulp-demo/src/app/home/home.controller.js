angular.module('app')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './home.html',
        controller: 'HomeController'
      })
  }])
  .controller('HomeController', ['$scope', function ($scope) {

  }])
