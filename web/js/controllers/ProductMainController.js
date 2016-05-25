function ProductMainController($rootScope, $scope, Product, AuthService) {
  $scope.products = [];
  $scope.currentProduct = false;
  var currentSelected = false;
  var isNewProduct = false;
  var user = false;
  var skip = 10;
  var limit = 10;

  $scope.changeCurrentProduct = function (index) {
    if ($scope.products.length > index) {
      $scope.currentProduct = $scope.products[index];
      currentSelected = index;
    }
  }

  $scope.saveCurrentProduct = function (e) {
    e.preventDefault();
    if ($scope.currentProduct && !isNewProduct) {
      $scope.currentProduct.$save();
    }

    if (isNewProduct) {
      $scope.currentProduct.author = AuthService.getCurrentUser().username;
      var newProduct = new Product($scope.currentProduct);
      $scope.currentProduct = newProduct;
      $scope.currentProduct.$save();
    }
  }

  $scope.deleteCurrentProduct = function (e) {
    e.preventDefault();
    if ($scope.currentProduct && !isNewProduct) {
      Product.deleteById(({id: $scope.currentProduct.id}))
      .$promise
      .then(function () {
        $scope.currentProduct = false;
        $scope.products.splice(currentSelected, 1);
      });
    }
  }

  $scope.setupNewProduct = function () {
    $scope.currentProduct = false;
    isNewProduct = true;
    currentSelected = false
  }

  $scope.getProducts = function (val) {
    return Product.find({
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

ProductMainController.$inject = ['$rootScope', '$scope', 'Product', 'AuthService'];

bbmCms.controller('ProductMainController', ProductMainController);
