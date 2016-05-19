function ArticleJSONController($rootScope, $scope, Article, AuthService) {
  $scope.isFileLoaded = false;
  $scope.articles = [];
  $scope.currentArticle = false;
  $scope.isEditActive = true;
  var currentSelected = false;
  var isNewArticle = false;
  var user = false;

  $scope.loadFile = function(){

    var input, file, fr;
    if (typeof window.FileReader !== 'function') {
      alert("The file API isn't supported on this browser yet.");
      return;
    }

    input = document.getElementsByClassName('js-file-input')[0];

    if (!input) {
      alert("Couldn't find the fileinput element.");
    }
    else if (!input.files) {
      alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
      alert("Please select a .json file before clicking 'Load State' button");
    }
    else {
      file = input.files[0];
      fr = new FileReader();
      fr.readAsText(file);
      var imagelines, newArr;
      fr.onload = function (e){
        var result = e.target.result;
        var articles = JSON.parse(result);
        angular.forEach(articles, function (article) {
          $scope.articles.push(article);
        })
        $scope.isFileLoaded = true;
        $scope.currentArticle = $scope.articles[0];
        $scope.$apply();
    }}




 }

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
      return responses;
    });
  }
};

ArticleJSONController.$inject = ['$rootScope', '$scope', 'Article', 'AuthService'];

bbmCms.controller('ArticleJSONController', ArticleJSONController);
