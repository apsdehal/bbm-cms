bbmCms.controller('LoginController', [
  '$scope',
  '$rootScope',
  '$uibModal',
  function($scope, $rootScope, $uibModal) {
    var modalInstance = $uibModal.open({
      templateUrl: 'login-modal.html',
      controller: 'LoginModalController',
      size: 'lg',
      backdrop: 'static'
    });
}]);


bbmCms.controller('LoginModalController', [
  '$rootScope',
  '$scope',
  '$uibModalInstance',
  '$state',
  'AuthService',
  function ($rootScope, $scope, $uibModalInstance, $state, AuthService) {
    $scope.loginform = {
      username: '',
      password: ''
    }
    $scope.login = function () {
      AuthService.login({
        username: $scope.loginform.username,
        password: $scope.loginform.password,
        success: function (data) {
          $rootScope.user = data.user;
          $scope.message = false;
          $uibModalInstance.close();
          $state.go('root.dashboard');
        },
        reject: function (data) {
          $scope.message = data.message;
        }
      });
    }

    $scope.signup = function () {
      $state.go('root.signup');
    }
  }
]);
