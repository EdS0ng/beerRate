'use strict';

angular.module('testApp').controller('loginCtrl', loginCtrl);

loginCtrl.$inject = ['$scope', 'authSvc', '$state'];

function loginCtrl ($scope, authSvc, $state) {

  $scope.login = function (user) {
    authSvc.login(user, function (err, user){
      if (err){
        console.log(err);
        $scope.err_msg = "An Error Occurred, Please Try Again";
      }else {
        console.log(user);
        $state.go('main');
      }
    })
  }
}