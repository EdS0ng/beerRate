'use strict';

angular.module('testApp').controller('registerCtrl', registerCtrl);

registerCtrl.$inject = ['authSvc', '$scope', '$state'];

function registerCtrl (authSvc, $scope, $state) {

  function checkPass(pass1, pass2) {
    return pass1===pass2;
  }

  $scope.register = function (user) {
    console.log('hit');
    if (checkPass(user.password, user.password2)) {
      authSvc.register(user, function (err, success){
        if (success) {
          $state.go('login');
        }else{
          console.log(err);
        }
      });
    }else{
      $scope.err_msg = "Passwords Do Not Match";
      return;
    }
  }
}