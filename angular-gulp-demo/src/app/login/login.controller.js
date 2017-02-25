angular.module('app')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: './login.html',
        controller: 'LoginController'
      })
  }])
  .controller('LoginController', ['$scope', function($scope){
    $scope.title = '登陆'
  }])
