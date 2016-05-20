
/* Setup Layout Part - Header */
bbmCms.controller('HeaderController',
    ['$scope', 'AuthService', function($scope, AuthService) {

    $scope.user = {};
    $scope.$on('user:change', function (e, data) {
      $scope.user = data;
    });
    $scope.logoutUser = function () {
      AuthService.logout();
    }

    $scope.$on('$viewContentLoaded', function() {
        Layout.initHeader(); // init header
    });
}]);

/* Setup Layout Part - Sidebar */
bbmCms.controller('SidebarController', ['$scope', function($scope) {
    $scope.$on('$viewContentLoaded', function() {
        Layout.initSidebar(); // init sidebar
    });
}]);

/* Setup Layout Part - Quick Sidebar */
bbmCms.controller('QuickSidebarController', ['$scope', function($scope) {
    $scope.$on('$viewContentLoaded', function() {
       setTimeout(function(){
            QuickSidebar.init(); // init quick sidebar
        }, 2000)
    });
}]);

/* Setup Layout Part - Theme Panel */
bbmCms.controller('ThemePanelController', ['$scope', function($scope) {
    $scope.$on('$viewContentLoaded', function() {
        // Demo.init(); // init theme panel
    });
}]);

/* Setup Layout Part - Footer */
bbmCms.controller('FooterController', ['$scope', function($scope) {
    $scope.$on('$viewContentLoaded', function() {
        Layout.initFooter(); // init footer
    });
}]);
bbmCms.controller('MainController', ['$scope', function($scope) {
}]);
