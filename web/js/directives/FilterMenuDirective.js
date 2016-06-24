function FilterMenuDirective() {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {
    },
    templateUrl: 'views/directives/filter-menu.html',
    link: function (scope, elem) {
      elem.click(function (e) {
        e.stopPropagation();
      })

      elem.find('.closer').click(function () {
        angular.element('body').removeClass('filter-menu-active');
      })

      angular.element('body').click(function () {
        angular.element(this).removeClass('filter-menu-active');
      })
    }
  };
}

FilterMenuDirective.$inject = [];

bbmCms.directive('filterMenu', FilterMenuDirective);
