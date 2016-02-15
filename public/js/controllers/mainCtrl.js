'use strict';

angular.module('testApp').controller('mainCtrl', mainCtrl);

mainCtrl.$inject = ['$scope', 'beerSvc'];

function mainCtrl ($scope, beerSvc) {

  $scope.done = false;

  $scope.getRandomBeer () {
    beerSvc.getRandom(function (err, beer){
      if (err) return console.log(err);
      $scope.beer = beer;
    });
  }

  $scope.getRandomBeer();

}