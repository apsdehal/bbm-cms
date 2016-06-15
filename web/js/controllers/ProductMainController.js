function ProductMainController($rootScope, $scope, Product, AuthService, SearchService) {
  $scope.products = [];
  $scope.currentProduct = false;
  var currentSelected = false;
  var isNewProduct = false;
  var user = false;
  var skip = 10;
  var limit = 10;


  $scope.ajaxInProcess = false;
  $scope.ajaxComplete = false;
  $scope.ajaxState = 'Success';

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

  $scope.currentType = Product;
  $scope.changeCurrentProduct = function (index) {
    if ($scope.products.length > index) {
      $scope.currentProduct = $scope.products[index];
      currentSelected = index;
    }
  }

  $scope.saveCurrentProduct = function (e) {
    e.preventDefault();

    if (isNewProduct) {
      $scope.currentProduct.author = AuthService.getCurrentUser().username;
      var newProduct = new Product($scope.currentProduct);
      $scope.currentProduct = newProduct;
    }

    if (!$scope.currentProduct) {
      return;
    }

    $scope.ajaxComplete = false;
    $scope.ajaxInProcess = true;

    $scope.currentProduct.$save()
    .then(function () {
      successChanges();
    }, function () {
      failureChanges();
    });
  }

  $scope.deleteCurrentProduct = function (e) {
    e.preventDefault();
    if ($scope.currentProduct && !isNewProduct) {
      $scope.ajaxComplete = false;
      $scope.ajaxInProcess = true;

      Product.deleteById(({id: $scope.currentProduct.id}))
      .$promise
      .then(function () {
        $scope.currentProduct = false;
        $scope.products.splice(currentSelected, 1);
        successChanges();
      }, function () {
        failureChanges();
      });
    }
  }

  $scope.setupNewProduct = function () {
    $scope.currentProduct = false;
    isNewProduct = true;
    currentSelected = false
  }

  $scope.getProducts = function (val) {
    return SearchService.searchProducts(val).then(function (data) {
      data = data.data
      return data.response.numFound ? data.response.docs : [];
    });
  }

  $scope.nextProducts = function () {
    if ($scope.busy) {
      return;
    }

    $scope.busy = true;

    Product.find(
      {filter:
        {order: 'storyId DESC',
         skip: skip,
         limit: limit}},
      function (list) {
        $scope.busy = false;
        $scope.products = $scope.products.concat(list);
        skip += limit;
      }
    );
  }


  Product.find(
    {filter:
      {order: 'storyId DESC',
       limit: limit}},
    function (list) {
      $scope.products = list;
      $scope.currentProduct = list[0];
    }
  );
};

ProductMainController.$inject = ['$rootScope', '$scope', 'Product', 'AuthService', 'SearchService'];

bbmCms.controller('ProductMainController', ProductMainController);
