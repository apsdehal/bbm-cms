function ArticleMainController($rootScope, $scope, $http, Article, AuthService, SearchService) {
  $scope.articles = [];
  $scope.currentArticle = false;
  $scope.isEditActive = true;
  $scope.ajaxInProcess = false;
  $scope.ajaxComplete = false;
  $scope.ajaxState = 'Success';
  var currentSelected = false;
  var isNewArticle = false;
  var user = false;
  var skip = 10;
  var limit = 10;

  $scope.user = {};

  $scope.currentType = Article;
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
      if ($scope.articles[index] instanceof Article) {
        $scope.currentArticle = $scope.articles[index];
      }
      currentSelected = index;
    }
  }

  function successChanges() {
    $scope.ajaxInProcess = false;
    $scope.ajaxComplete = true;
    $scope.ajaxState = 'Success';
  }

  function failureChanges() {
    $scope.ajaxInProcess = false;
    $scope.ajaxComplete = true;
    $scope.ajaxState = 'Failed';
  }

  function saveTags(id, tags) {
    for(var i = 0; i < tags.length; i++) {
      $http.put(
        bbmCmsConfig.bbmApiUrl + '/articles/'
        + id + '/tags/rel/' + tags[i].id);
    }

  }

  $scope.saveCurrentArticle = function (e) {
    e.preventDefault();

    var $parsedContent = $.parseHTML($scope.currentArticle.content);
    $parsedContent = $("<div></div>").append($parsedContent);

    $parsedContent.find('a').each(function () {
      if ($(this).attr('href').indexOf('pinterest') != -1) {
        $(this).attr('data-pin-do', 'embedPin');
        $(this).parent().css('text-align', 'center');
      }
    });

    $scope.currentArticle.content = $parsedContent.html();

    if (isNewArticle) {
      var page = AuthService.getCurrentUser();
      $scope.currentArticle.author = page.displayName;
      $scope.currentArticle.pageId = page.id;
      var tags = $scope.currentArticle.tags;
      $scope.currentArticle.tags = [];
      Article.create($scope.currentArticle).$promise.then(function (data) {
        newArticle = data[0].feed['article'];
        $scope.currentArticle = newArticle;
        $scope.currentArticle.tags = tags;
        if (newArticle.id) {
          saveTags(newArticle.id, tags);
        }
        isNewArticle = false;
      });
      return;
    }

    if (!$scope.currentArticle) {
      return;
    }

    var tags = $scope.currentArticle.tags;
    $scope.ajaxComplete = false;
    $scope.ajaxInProcess = true;

    $scope.currentArticle.$save()
    .then(function () {
      successChanges();
      $scope.currentArticle.tags = tags;
    }, function () {
      failureChanges();
    });
  }

  $scope.deleteCurrentArticle = function (e) {
    e.preventDefault();
    if ($scope.currentArticle && !isNewArticle) {
      $scope.ajaxComplete = false;
      $scope.ajaxInProcess = true;

      Article.deleteById(({id: $scope.currentArticle.id}))
      .$promise
      .then(function () {
        $scope.currentArticle = false;
        $scope.articles.splice(currentSelected, 1);
        successChanges();
      }, function () {
        failureChanges();
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

ArticleMainController.$inject = ['$rootScope', '$scope', '$http', 'Article', 'AuthService', 'SearchService'];

bbmCms.controller('ArticleMainController', ArticleMainController);
