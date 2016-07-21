function PageSearchDirective(SearchService) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      currentContent: '='
    },
    templateUrl: 'views/directives/page-search.html',
    link: function (scope) {

      scope.getPages = function (val) {
        return SearchService.searchPages(val);
      }

    }
  };
}

PageSearchDirective.$inject =
['SearchService'];

bbmCms.directive('pageSearch', PageSearchDirective);
