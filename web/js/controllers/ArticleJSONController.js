function ArticleJSONController($rootScope, $scope, Article, AuthService) {
  $scope.isFileLoaded = false;
  $scope.articles = [];
  $scope.currentArticle = false;
  $scope.totalArticles = 0;
  $scope.isEditActive = true;
  $scope.viewby = 10;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 5;
  $scope.currentPage = 1;

  var currentSelected = false;
  var isNewArticle = false;
  var user = false;

  $scope.loadFile = function (){

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
      alert("Please select a .json file before clicking 'Upload' button");
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
        $scope.totalArticles = $scope.articles.length;
        $scope.$apply();
    }}
  }

  $scope.setItemsPerPage = function(num) {
    $scope.itemsPerPage = num;
    $scope.currentPage = 1; //reset to first paghe
  }

  $scope.changePage = function () {
    $scope.currentArticle = $scope.articles[($scope.currentPage - 1) * $scope.itemsPerPage];
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
    if (isNewArticle) {
      $scope.articles.push($scope.currentArticle);
    }
  }

  $scope.deleteCurrentArticle = function (e) {
    e.preventDefault();
    if ($scope.currentArticle && !isNewArticle) {
      $scope.articles.splice(currentIndex, 1);
      $scope.currentArticle = false;
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

  $scope.downloadFile = function () {
    var json = JSON.stringify($scope.articles);
    var blob = new Blob([json], {type: "application/json"});
    var url  = URL.createObjectURL(blob);
    var dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", url);
    dlAnchorElem.setAttribute("download", $scope.fileName);
    dlAnchorElem.click();
  }

  $scope.$on('$viewContentLoaded', function() {
    var inputs = document.querySelectorAll( '.inputfile' );
    Array.prototype.forEach.call( inputs, function( input ) {
      var label  = input.nextElementSibling,
        labelVal = label.innerHTML;

      input.addEventListener( 'change', function( e ) {
        var fileName = '';
        if( this.files && this.files.length > 1 ) {
          fileName = ( this.getAttribute( 'data-caption' ) || '' ).replace( '{count}', this.files.length );
        } else {
          fileName = e.target.value.split( '\\' ).pop();
        }

        $scope.fileName = fileName;

        label.innerHTML = fileName ? fileName : labelVal;
      });
    });
  });
};

ArticleJSONController.$inject = ['$rootScope', '$scope', 'Article', 'AuthService'];

bbmCms.controller('ArticleJSONController', ArticleJSONController);
