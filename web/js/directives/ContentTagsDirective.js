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

      function linkTag($item, $modal) {
        scope.currentType.tags.link({
          id: scope.currentContent.id,
          fk: $item.id
        });
        scope.tags[scope.tags.length - 1].name = $item.name;
      }
      scope.addTag = function ($item, $modal) {
        if ($item.id === 0) {
          // Means we have to create new tag now
          Tag.create({name: $item.val}).$promise.then(function (data) {
            $item = data;
            linkTag($item);
          });
        } else {
          linkTag($item);
        }
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
          if (!responses.length) {
            responses = [{
              id: 0,
              name: 'Create new tag "' + val + '"',
              val: val
            }];
          }
          scope.tags = responses;
        });
      }

    }

  };
}

ContentTagsDirective.$inject = [ 'Tag' ];

bbmCms.directive('contentTags', ContentTagsDirective);
