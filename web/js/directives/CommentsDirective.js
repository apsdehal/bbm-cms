function CommentsDirective() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      current: '='
    },
    templateUrl: 'views/directives/comments.html',
    link: function (scope) {
      scope.deleteComment = function (index) {
        scope.current.comments.splice(index, 1);
        scope.current.$save();
      }
    }
  };
}

CommentsDirective.$inject = [];

bbmCms.directive('comments', CommentsDirective);
