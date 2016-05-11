function ProductMainController($rootScope, $scope, Product, AuthService) {
  $scope.products = [];
  $scope.currentProduct = false;
  var currentSelected = false;
  var isNewProduct = false;
  var user = false;


  var getCurrentProductTags = function () {
    if (!$scope.currentProduct) {
      return '';
    }

    if (!$scope.currentProduct.tags) {
      $scope.currentProduct.tags = [];
      return '';
    }

    var x = [];
    x.push($scope.currentProduct.tags.map(function (tag) {
      return tag.name;
    }));

    return x.join(',');
  };

  $scope.changeCurrentProduct = function (index) {
    if ($scope.products.length > index) {
      $scope.currentProduct = $scope.products[index];
      currentSelected = index;
    }
  }

  $scope.$watch('currentProduct', function (newValue, oldValue) {
    $scope.currentProductTags = getCurrentProductTags();
  });

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

  Product.find(
    {filter:
      {order: 'storyId DESC',
       limit: 5}},
    function (list) {
      console.log(list);
      $scope.products = list;
      $scope.currentProduct = list[0];
    }
  );
};

ProductMainController.$inject = ['$rootScope', '$scope', 'Product', 'AuthService'];

bbmCms.controller('ProductMainController', ProductMainController);
