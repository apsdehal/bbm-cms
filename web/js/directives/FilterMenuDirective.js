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

      angular.element('body').click(function () {
        angular.element(this).toggleClass('filter-menu-active');
      })
    }
  };
}

FilterMenuDirective.$inject = [];

bbmCms.directive('filterMenu', FilterMenuDirective);
