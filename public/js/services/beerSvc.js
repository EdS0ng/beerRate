'use strict';

angular.module('testApp').service('beerSvc', beerSvc);

beerSvc.$inject = ['$http'];

function beerSvc ($http) {
  this.beers = [];

  this.getRandom = function (cb) {
    $http.get('/beer').then(function (success){
      cb(null, success);
    }, function (err) {
      cb(err);
    })
  }
}