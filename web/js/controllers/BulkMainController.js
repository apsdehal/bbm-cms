function BulkMainController($rootScope, $scope, Article, AuthService, SearchService) {
  $scope.namespaces = ['product', 'article', 'conversation', 'image'];
  $scope.selectedNamespace = 'product';
  $scope.namespaceSelected = true;
  $scope.viewby = 10;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 5;
  $scope.currentPage = 1;
  $scope.totalResponses = 0;

  $scope.filters = [
  {
    type: 'orderRank',
    comparison: '='
  }];
  var options = {
    'product': {
      orderRank: {'>': 'number', '=': 'number', '<': 'number'},
      category: {'=': 'text'},
      midCategory: {'=': 'text'},
      mainCategory: {'=': 'text'},
      brand: {'=': 'text'},
      published: {'=': 'checkbox'}
    },
    'article': {
      orderRank: {'>': 'number', '=': 'number', '<': 'number'}
    },
    'image': {
      orderRank: {'>': 'number', '=': 'number', '<': 'number'}
    },
    'conversation': {
      orderRank: {'>': 'number', '=': 'number', '<': 'number'}
    }
  }

  $scope.currentOptions = options['product'];

  $scope.addFilter = function () {
    $scope.filters.push({
      type: 'orderRank',
      comparison: '='
    });
  }

  $scope.searchUsingFilters = function () {
    var queryString = '';
    queryString += '&fq=ns:"solr.' + $scope.selectedNamespace + '"';
    for(var i = 0; i < $scope.filters.length; i++) {
      var filter = $scope.filters[i];
      queryString += '&fq=' + filter.type + ':';

      if (filter.comparison === '>') {
        queryString += '[' + (filter.value + 1) + ' TO ' + '*]';
      } else if (filter.comparison === '<') {
        queryString += '[*' + ' TO ' + (filter.value - 1) + ']';
      } else if (filter.comparison === '=') {
        queryString += '"' + filter.value + '"';
      }
    }

    queryString += "&fl=title,desc,_id&rows=2147483647"
    SearchService.search(queryString).then(function (data) {
      data = data.data
      $scope.totalResponses = data.response.numFound;
      $scope.responses = data.response.numFound ? data.response.docs : [];
    })
  }

  $scope.setItemsPerPage = function(num) {
    $scope.itemsPerPage = num;
    $scope.currentPage = 1; //reset to first page
  }

  $scope.changePage = function () {
    $scope.currentArticle = $scope.articles[($scope.currentPage - 1) * $scope.itemsPerPage];
  }


  $scope.$watch('selectedNamespace', function (newVal, oldVal) {
    if (newVal !== oldVal) {
      $scope.currentOptions = options[newVal];
    }
  });
};

BulkMainController.$inject = ['$rootScope', '$scope', 'Article', 'AuthService', 'SearchService'];

bbmCms.controller('BulkMainController', BulkMainController);
