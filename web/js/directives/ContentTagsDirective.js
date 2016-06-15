function ContentTagsDirective(Tag) {
  return {
    restrict: 'E',
    replace: false,
    scope: {
      currentContent: '=',
      currentType: '='
    },
    templateUrl: 'views/directives/content-tags.html',
    link: function (scope) {
      scope.tags = [];

      scope.addTag = function ($item, $modal) {
        scope.currentType.tags.link({
          id: scope.currentContent.id,
          fk: $item.id
        });
      }

      scope.removeTag = function ($item, $modal) {
        scope.currentType.tags.unlink({
          id: scope.currentContent.id,
          fk: $item.id
        });
      }


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
