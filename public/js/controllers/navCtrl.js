'use strict';

angular.module('testApp').controller('navbarCtrl', navbarCtrl);

navbarCtrl.$inject = ['$scope'];

function navbarCtrl ($scope) {
  $scope.loggedIn = false;

  $scope.$on('loginSuccess', function () {
    $scope.loggedIn = true;
  })
}