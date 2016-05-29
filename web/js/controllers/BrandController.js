function BrandController($scope, Page, BrandService) {

  $scope.currentBrand = {};
  $scope.brands = [];
  $scope.totalBrands = 0;
  $scope.itemsPerPage = 10;
  $scope.maxSize = 5;
  $scope.gettingProducts = true;

  $scope.getBrands = function (val) {
    return BrandService.search(val).then(function (data) {
      data = data.data
      return data.response.numFound ? data.response.docs : [];
    });
  }

  $scope.changeCurrentBrand = function (index) {
    $scope.currentBrand = $scope.brands[index];
  }

  $scope.saveCurrentProducts = function (event, index) {
    event.preventDefault();
    if ($scope.currentBrand.products.length < index) {
      return false;
    }

    $scope.currentBrand.products[index].$save();
  }

  $scope.deleteCurrentProducts = function (event, index) {
    event.preventDefault();
    if ($scope.currentBrand.products.length < index) {
      return false;
    }

    $scope.currentBrand.products[index].$delete();
  }

  BrandService.getBrands(1).then(function (data) {
    data = data.data;
    $scope.totalBrands = data.response.numFound;
    $scope.brands = data.response.docs;
    $scope.numPages = $scope.totalBrands / $scope.itemsPerPage;
    $scope.currentBrand = $scope.brands[0];
  });

  $scope.$watch('currentBrand', function (newVal, old) {
    if (newVal === old || !$scope.currentBrand._id) {
      return;
    }
    $scope.gettingProducts = true;
    $scope.currentBrand.products = Page.products({
      id: $scope.currentBrand._id
    });
    $scope.currentBrand.products.$promise.then({
      function () {
        $scope.gettingProducts = false;
      },
      function () {
        $scope.gettingProducts = false;
      }
    })
  });
}

BrandController.$inject = ['$scope', 'Page', 'BrandService'];

bbmCms.controller('BrandController', BrandController);
