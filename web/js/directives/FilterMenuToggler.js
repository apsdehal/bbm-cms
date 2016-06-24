function FilterMenuToggler() {
  return {
    restrict: 'A',
    scope: {
    },
    link: function (scope, elem) {
        elem.click(function (e) {
            e.stopPropagation();
            angular.element('body').toggleClass('filter-menu-active');
        });
    }
  };
}

FilterMenuToggler.$inject = [];

bbmCms.directive('filterMenuToggler', FilterMenuToggler);
