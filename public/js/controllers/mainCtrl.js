'use strict';

angular.module('testApp').controller('mainCtrl', mainCtrl);

mainCtrl.$inject = ['$scope', 'beerSvc', '$state'];

function mainCtrl ($scope, beerSvc, $state) {

  $scope.done = false;

  $scope.goLogin = function () {
    $state.go('login');
  }

  $scope.getRandomBeer  = function() {
    beerSvc.getRandom(function (err, beer){
      if (err) return console.log(err);
      console.log(beer.data);
      if (!beer.data.description) {
        beer.data.description = "description not available."
      }
      $scope.beer = beer.data;
      $scope.done = true;
    });
  }

  $scope.getRandomBeer();

}