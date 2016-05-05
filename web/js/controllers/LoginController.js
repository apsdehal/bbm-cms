bbmCms.controller('LoginController', [
  '$scope',
  '$rootScope',
  '$uibModal',
  'UserResource',
  function($scope, $rootScope, $uibModal, UserResource) {
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
  '$rootScope',
  '$state',
  'UserResource',
  function ($scope, $modalInstance, $rootScope, $state, UserResource) {
    $scope.login = function () {
      UserResource.login({
        username: $scope.loginform.username, password: $scope.loginform.password
      }).$promise.then(function (data) {
        $rootScope.user = data;
        $modalInstance.close();
        $state.go('dashboard');
      })
    }
  }
]);
