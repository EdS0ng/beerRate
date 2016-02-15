'use strict';

angular.module('testApp').controller('mainCtrl', mainCtrl);

mainCtrl.$inject = ['$scope', 'beerSvc', '$state'];

function mainCtrl ($scope, beerSvc, $state) {

  $scope.done = false;
  $scope.showRate = false;
  $scope.rateAndComment = false;

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

  $scope.sample = function () {
    $scope.showRate = !$scope.showRate;
    $scope.sampledCheck = {
      value1:false,
      value2:false
    }
  }

  $scope.saveSampledChoice = function (target) {
    if (target=1) {
      $scope.sampledCheck.value2 = false;
      $scope.rateAndComment = true;
    }else{
      $scope.sampledCheck.value1 = false;
      $state.transitionTo($state.current, {}, {reload:true, inherit: false, notify:true});
    }
  }
}