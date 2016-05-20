
function ContentController($rootScope, $scope, $state) {
    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = true;
    $rootScope.settings.layout.pageSidebarClosed = true;

    $scope.isActive = function (name) {
      return $state.current.name === ('root.content.' + name);
    }

    $scope.currentName = $state.current.name.split('.')[2];
};

ContentController.$inject = ['$rootScope', '$scope', '$state'];

bbmCms.controller('ContentController', ContentController);
