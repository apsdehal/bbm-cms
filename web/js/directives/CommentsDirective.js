function CommentsDirective(AuthService, Page) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      current: '=',
      currentType: '='
    },
    templateUrl: 'views/directives/comments.html',
    link: function (scope) {
      scope.submitText = 'Submit';
      scope.bbmTeamPage = Page.findById({
        id: bbmCmsConfig.bbmTeamPageId
      });

      scope.deleteComment = function (index) {
        scope.currentType.comments.destroyById({
          id: scope.current.id,
          fk: scope.current.comments[index].id
        }).$promise.then(function () {
          scope.current.comments.splice(index, 1);
          scope.submitText = 'Submit';
        }, function () {
          scope.submitText = 'Delete failed';
        });

      }

      scope.handleSubmit = function () {
        if (!scope.newCommentText.length) {
          return;
        }
        var pageId = bbmCmsConfig.bbmTeamPageId || AuthService.getCurrentUser().id;

        scope.currentType.comments.create({
          id: scope.current.id
        },
        {
          text: scope.newCommentText,
          pageId: pageId
        }).$promise.then(function (data) {
          data.page = scope.bbmTeamPage || AuthService.getCurrentUser;
          scope.current.comments.push(data);
          scope.submitText = 'Submit';
          scope.newCommentText = '';
        }, function () {
          scope.submitText = 'Submit failed. Try again';
        });
      }
    }
  };
}

CommentsDirective.$inject = ['AuthService', 'Page'];

bbmCms.directive('comments', CommentsDirective);
