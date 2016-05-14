function ContentTagsDirective(Tag) {
  return {
    restrict: 'E',
    replace: false,
    scope: {
      currentContent: '='
    },
    templateUrl: 'views/directives/content-tags.html',
    link: function (scope) {
      scope.tags = [];

      scope.refreshTags = function (val) {
        return Tag.find({
          filter: {
            where: {
              name: {
                like: val
              }
            },
            limit: 6
          }
        }).$promise.then(function (responses) {
          scope.tags = responses;
        });
      }

    }

  };
}

ContentTagsDirective.$inject = [ 'Tag' ];

bbmCms.directive('contentTags', ContentTagsDirective);
