function ArticleMainController($rootScope, $scope, Article) {
  $scope.articles = [];
  $scope.currentArticle = false;
  $scope.isEditActive = true;

  $scope.editButtonText = 'render';
  $scope.toggleEdit = function () {
    $scope.isEditActive = !$scope.isEditActive;

    if ($scope.isEditActive) {
      $scope.editButtonText = 'render';
    } else {
      $scope.editButtonText = 'edit';
    }
  }
  var getCurrentArticleTags = function () {
    if (!$scope.currentArticle) {
      return '';
    }

    var x = [];
    x.push($scope.currentArticle.tags.map(function (tag) {
      return tag.name;
    }));

    return x.join(',');
  };

  $scope.changeCurrentArticle = function (index) {
    if ($scope.articles.length > index) {
      $scope.currentArticle = $scope.articles[index];
    }
  }

  $scope.$watch('currentArticle', function (newValue, oldValue) {
    if (newValue !== oldValue) {
      $scope.currentArticleTags = getCurrentArticleTags();
    }
  })
  Article.find(
    {filter:
      {order: 'created DESC',
       limit: 3}},
    function (list) {
      $scope.articles = list;
      $scope.currentArticle = list[0];
    }
  );
};

ArticleMainController.$inject = ['$rootScope', '$scope', 'Article'];

bbmCms.controller('ArticleMainController', ArticleMainController);
