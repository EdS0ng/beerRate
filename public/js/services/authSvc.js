'use strict';

angular.module('testApp').service('authSvc', authSvc);

authSvc.$inject = ['$http', '$rootScope'];

function authSvc ($http, $rootScope) {

  this.register = function (user, cb) {
    $http.post('/auth/register', user).then(function (success){
      cb(null, true)
    }, function (err){
      cb(err);
    })
  }

  this.login = function (user, cb) {
    $http.post('/auth/login', user).then(function (success){
      setAuthHeader(success.token);
      $rootScope.$broadcast('loginSuccess');
      cb(null, success.data.user);
    }, function (err) {
      cb(err);
    });
  }

  function setAuthHeader (token) {
    $http.defaults.headers.common.Authorization = "Bearer "+ token;
  }
}