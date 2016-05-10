
function ContentController($rootScope, $scope) {
    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = true;
    $rootScope.settings.layout.pageSidebarClosed = true;
};

ContentController.$inject = ['$rootScope', '$scope'];

bbmCms.controller('ContentController', ContentController);
