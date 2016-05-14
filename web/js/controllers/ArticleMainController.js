function ArticleMainController($rootScope, $scope, Article, AuthService) {
  $scope.articles = [];
  $scope.currentArticle = false;
  $scope.isEditActive = true;
  var currentSelected = false;
  var isNewArticle = false;
  var user = false;


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

    if (!$scope.currentArticle.tags) {
      $scope.currentArticle.tags = [];
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
      currentSelected = index;
    }
  }

  $scope.$watch('currentArticle', function (newValue, oldValue) {
    $scope.currentArticleTags = getCurrentArticleTags();
  });

  $scope.$watch('searchSelected', function (newValue, oldValue) {
    if (typeof newValue === 'object') {
      $scope.currentArticle = newValue;
    }
  });

  $scope.saveCurrentArticle = function (e) {
    e.preventDefault();
    if ($scope.currentArticle && !isNewArticle) {
      $scope.currentArticle.$save();
    }

    if (isNewArticle) {
      $scope.currentArticle.author = AuthService.getCurrentUser().username;
      var newArticle = new Article($scope.currentArticle);
      $scope.currentArticle = newArticle;
      $scope.currentArticle.$save();
    }
  }

  $scope.deleteCurrentArticle = function (e) {
    e.preventDefault();
    if ($scope.currentArticle && !isNewArticle) {
      Article.deleteById(({id: $scope.currentArticle.id}))
      .$promise
      .then(function () {
        $scope.currentArticle = false;
        $scope.articles.splice(currentSelected, 1);
      });
    }
  }

  $scope.setupNewArticle = function () {
    $scope.currentArticle = false;
    isNewArticle = true;
    currentSelected = false
  }

  $scope.getArticles = function (val) {
    return Article.find({
      filter: {
        where: {
          title: {
            like: val
          }
        },
        limit: 6
      }
    }).$promise.then(function (responses) {
      // return responses.map(function (response) {
      //   return response.title;
      // })
      return responses;
    });
  }

  Article.find(
    {filter:
      {order: 'storyId DESC',
       limit: 5}},
    function (list) {
      $scope.articles = list;
      $scope.currentArticle = list[0];
    }
  );
};

ArticleMainController.$inject = ['$rootScope', '$scope', 'Article', 'AuthService'];

bbmCms.controller('ArticleMainController', ArticleMainController);
