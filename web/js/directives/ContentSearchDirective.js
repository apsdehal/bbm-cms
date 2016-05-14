function ContentSearchDirective() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      getContent: '&getContent',
      currentContent: '=',
      contentType: '@',
      labelAttr: '@'
    },
    templateUrl: 'views/directives/content-search.html',
    link: function (scope) {
      scope.type = 'title';
      scope.$watch('searchSelected', function (newValue, oldValue) {
        if (typeof newValue === 'object') {
          scope.currentContent = newValue;
        }
      });
    }
  };
}

ContentSearchDirective.$inject = [];

bbmCms.directive('contentSearch', ContentSearchDirective);
