function BulkMainController($rootScope, $scope, Article, AuthService, SearchService) {
  $scope.namespaces = ['product', 'article', 'conversation', 'image'];
  $scope.selectedNamespace = 'product';
  $scope.namespaceSelected = true;

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

  $scope.$watch('selectedNamespace', function (newVal, oldVal) {
    if (newVal !== oldVal) {
      $scope.currentOptions = options[newVal];
    }
  })
};

BulkMainController.$inject = ['$rootScope', '$scope', 'Article', 'AuthService', 'SearchService'];

bbmCms.controller('BulkMainController', BulkMainController);
