function BulkMainController(
  $rootScope,
  $scope,
  $timeout,
  Article,
  Image,
  Product,
  Discussion,
  AuthService,
  SearchService) {

  $scope.namespaces = ['product', 'article', 'conversation', 'image'];
  $scope.selectedNamespace = 'product';
  $scope.namespaceSelected = true;
  $scope.searchDone = false;
  $scope.viewby = 10;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 5;
  $scope.currentPage = 1;
  $scope.totalResponses = 0;
  $scope.currentUpdationValue = 0;
  $scope.alerts = [];
  $scope.isUpdationComplete = false;

  $scope.updates = {
    orderRank: '',
    published: 1
  }

  $scope.isUpdationActive = false;

  $scope.filters = [
  {
    type: 'orderRank',
    comparison: '='
  }];

  var typeClass = Product;
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

    queryString += "&fl=title,desc,_id,imgUrl,priceC&rows=2147483647"
    SearchService.search(queryString).then(function (data) {
      $scope.searchDone = true;
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
  }

  function startUpdates(index, updateObject) {
    if (index >= $scope.totalResponses) {
      $scope.isUpdationComplete = true;
      $scope.isUpdationActive = false;
      return;
    }
    var id = $scope.responses[index]['_id'];
    updateObject['id'] = id;

    $scope.currentUpdationValue = index + 1;

    typeClass.prototype$updateAttributes(updateObject)
    .$promise.then(function () {
      startUpdates(index + 1, updateObject);
    })
  }

  $scope.updateAttr = function (or, pub) {
    $scope.isUpdationComplete = false;
    switch ($scope.selectedNamespace) {
      case 'product': {
        typeClass = Product;
        break;
      }
      case 'article': {
        typeClass = Article;
        break;
      }
      case 'image': {
        typeClass = Image;
        break;
      }
      case 'conversation': {
        typeClass = Discussion;
        break;
      }
    }

    var updateObject = {};

    if (or) {
      updateObject['orderRank'] = $scope.updates['orderRank'];
      if (!updateObject['orderRank']) {
        $scope.alerts.push({msg: 'Please pass an order rank'});
        return;
      }
    }

    if (pub) {
      updateObject['published'] = $scope.updates['published'];
    }

    $scope.isUpdationActive = true;
    startUpdates(0, updateObject);

  }

  $scope.closeAlert = function (index) {
    if (index) {
      $scope.alerts.splice(index, 1);
    } else {
      return;
    }
  }

  $scope.$watch('selectedNamespace', function (newVal, oldVal) {
    if (newVal !== oldVal) {
      $scope.currentOptions = options[newVal];
    }
  });
};

BulkMainController.$inject = [
'$rootScope',
'$scope',
'$timeout',
'Article',
'Image',
'Product',
'Discussion',
'AuthService',
'SearchService'];

bbmCms.controller('BulkMainController', BulkMainController);
