'use strict';

angular.module('testApp').service('beerSvc', beerSvc);

beerSvc.$inject = ['$http'];

function beerSvc ($http) {
  this.beers = [];

  this.getRandom = function (cb) {
    $http.get('/beers').then(function (success){
      cb(null, success.data);
    }, function (err) {
      cb(err);
    })
  }
}