
/* Setup App Main Controller */
bbmCms.controller('AppController', [
  '$scope',
  '$rootScope',
  'UserResource',
  function($scope, $rootScope, UserResource) {
    UserResource.login({username: 'hello', password: 'hello'})
    .$promise.then(function (user) {
      console.log(user);
    })
    $scope.$on('$viewContentLoaded', function() {
        //App.initComponents(); // init core components
        //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive
    });
}]);
