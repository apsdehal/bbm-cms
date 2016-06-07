function BrandController($scope, Page, SearchService) {

  $scope.currentBrand = {};
  $scope.brands = [];
  $scope.totalBrands = 0;
  $scope.itemsPerPage = 10;
  $scope.maxSize = 5;
  $scope.gettingProducts = true;
  $scope.isProductSelected = false;

  $scope.getBrands = function (val) {
    return SearchService.searchBrands(val).then(function (data) {
      data = data.data
      return data.response.numFound ? data.response.docs : [];
    });
  }

  $scope.changeCurrentBrand = function (index) {
    $scope.currentBrand = $scope.brands[index];
  }

  $scope.saveCurrentProduct = function (event, index) {
    event.preventDefault();
    if ($scope.currentBrand.products.length < index) {
      return false;
    }

    $scope.currentProduct.$save();
  }

  $scope.deleteCurrentProduct = function (event, index) {
    event.preventDefault();
    if ($scope.currentBrand.products.length < index) {
      return false;
    }

    $scope.currentProduct.$delete();
  }

  $scope.changeCurrentProduct = function (index) {
    $scope.currentProduct = $scope.currentBrand.products[index];
    $scope.isProductSelected = true;
  }

  SearchService.getBrands(1).then(function (data) {
    data = data.data;
    $scope.totalBrands = data.response.numFound;
    $scope.brands = data.response.docs;
    $scope.numPages = $scope.totalBrands / $scope.itemsPerPage;
    $scope.currentBrand = $scope.brands[0];
  });

  $scope.changePage = function (currentPage) {
    $scope.brands = [];
    SearchService.getBrands(currentPage).then(function (data) {
      data = data.data;
      $scope.brands = data.response.docs;
      $scope.currentBrand = $scope.brands[0];
    });
  }

  $scope.backToBrands = function (event) {
    event.preventDefault();
    $scope.isProductSelected = false;
  }

  $scope.$watch('currentBrand', function (newVal, old) {
    if (newVal === old || !$scope.currentBrand._id) {
      return;
    }
    $scope.gettingProducts = true;
    $scope.currentBrand.products = Page.products({
      id: $scope.currentBrand._id
    });
    $scope.currentBrand.products.$promise.then(
      function () {
        $scope.gettingProducts = false;
      },
      function () {
        $scope.gettingProducts = false;
      }
    )
  });
}

BrandController.$inject = ['$scope', 'Page', 'SearchService'];

bbmCms.controller('BrandController', BrandController);
