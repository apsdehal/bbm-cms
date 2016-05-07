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
  '$scope',
  '$modalInstance',
  '$state',
  'AuthService',
  function ($scope, $modalInstance, $state, AuthService) {
    $scope.login = function () {
      AuthService.login({
        username: $scope.loginform.username,
        password: $scope.loginform.password,
        success: function () {
          $modalInstance.close();
          $state.go('dashboard');
        }
      });
    }
  }
]);
