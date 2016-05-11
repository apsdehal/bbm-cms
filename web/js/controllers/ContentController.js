
function ContentController($rootScope, $scope, $state) {
    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = true;
    $rootScope.settings.layout.pageSidebarClosed = true;

    $scope.isActive = function (name) {
      return $state.current.name === ('content.' + name);
    }
};

ContentController.$inject = ['$rootScope', '$scope', '$state'];

bbmCms.controller('ContentController', ContentController);
