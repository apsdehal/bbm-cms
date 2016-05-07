bbmCms.controller('SignupController', [
  '$scope',
  '$rootScope',
  '$uibModal',
  function($scope, $rootScope, $uibModal) {
    var modalInstance = $uibModal.open({
      templateUrl: 'signup-modal.html',
      controller: 'SignupModalController',
      size: 'lg',
      backdrop: 'static'
    });
}]);


bbmCms.controller('SignupModalController', [
  '$scope',
  '$modalInstance',
  '$state',
  'AuthService',
  function ($scope, $modalInstance, $state, AuthService) {
    $scope.signupform = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    }
    $scope.signup = function () {
      var password = $scope.signupform.password;
      var confirmPassword = $scope.signupform.confirmPassword;
      var firstName = $scope.signupform.firstName;
      var lastName = $scope.signupform.lastName;
      var email = $scope.signupform.email;
      var username = $scope.signupform.username;

      if (!username.length ||
          !password.length ||
          !firstName.length ||
          !lastName.length ||
          !email.length ||
          !confirmPassword.length) {
        $scope.message = "All fields are necessary";
        return;
      }

      if (password !== confirmPassword) {
        $scope.message = "Passwords don't match";
        return;
      }

      AuthService.signup({
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password,
        confirmPassword: confirmPassword,

        success: function () {
          $scope.message = false;
          $modalInstance.close();
          $state.go('dashboard');
        },
        reject: function (data) {
          $scope.message = data.message;
        }
      });
    }
  }
]);
