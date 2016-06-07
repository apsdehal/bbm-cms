function ArticleMainController($rootScope, $scope, Article, AuthService, SearchService) {
  $scope.articles = [];
  $scope.currentArticle = false;
  $scope.isEditActive = true;
  var currentSelected = false;
  var isNewArticle = false;
  var user = false;
  var skip = 10;
  var limit = 10;

  $scope.user = {};

  // Need user for pageid
  $scope.$on('user:change', function (e, data) {
    $scope.user = data;
  });


  $scope.editButtonText = 'render';
  $scope.toggleEdit = function () {
    $scope.isEditActive = !$scope.isEditActive;

    if ($scope.isEditActive) {
      $scope.editButtonText = 'render';
    } else {
      $scope.editButtonText = 'edit';
    }
  }

  $scope.changeCurrentArticle = function (index) {
    if ($scope.articles.length > index) {
      $scope.currentArticle = $scope.articles[index];
      currentSelected = index;
    }
  }


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
    $scope.currentArticle = {link: '', pageId: $scope.user.id};
    isNewArticle = true;
    currentSelected = false
  }

  $scope.getArticles = function (val) {
    return SearchService.searchArticles(val).then(function (data) {
      data = data.data
      return data.response.numFound ? data.response.docs : [];
    });
  }

  $scope.nextArticles = function () {
    if ($scope.busy) {
      return;
    }

    $scope.busy = true;

    Article.find(
      {filter:
        {order: 'storyId DESC',
         skip: skip,
         limit: limit}},
      function (list) {
        $scope.busy = false;
        $scope.articles = $scope.articles.concat(list);
        skip += limit;
      }
    );
  }

  Article.find(
    {filter:
      {order: 'storyId DESC',
       limit: limit}},
    function (list) {
      $scope.articles = list;
      $scope.currentArticle = list[0];
    }
  );
};

ArticleMainController.$inject = ['$rootScope', '$scope', 'Article', 'AuthService', 'SearchService'];

bbmCms.controller('ArticleMainController', ArticleMainController);
