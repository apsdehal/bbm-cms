function ProductCurationController($rootScope, $scope, Curation, FileUploadService, Product, AuthService, SearchService) {
  $scope.products = [];
  $scope.currentProduct = false;
  $scope.imageFile = null;
  var currentSelected = false;
  var isNewProduct = false;
  var user = false;
  var skip = 10;
  var limit = 10;

  $scope.currentType = Curation;
  $scope.uploadButtonText = 'Upload';

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

  $scope.changeCurrentProduct = function (index) {
    if ($scope.products.length > index) {
      $scope.currentProduct = $scope.products[index];
      currentSelected = index;
    }
  }

  $scope.publishCurrentProduct = function (e) {
    e.preventDefault();
    $scope.saveCurrentProduct(e);
    $scope.currentProduct.published = true;

    Curation.prototype$updateAttributes({
      id: $scope.currentProduct.id,
      published: true,
    })
    .$promise
    .then(function () {
      successChanges();
    }, function () {
      failureChanges();
    });
  }

  $scope.uploadImage = function (e) {
    e.preventDefault();
    FileUploadService
    .uploadFileToUrl($scope.imageFile, bbmCmsConfig.bbmApiUrl + '/media/upload')
    .success(function (data) {
      $scope.currentProduct.imgUrl = data.result.secure_url;
      $scope.uploadButtonText = 'Uploaded';
    })
    .error(function () {
      $scope.uploadButtonText = 'Failed';
    });
  }

  $scope.saveCurrentProduct = function (e) {
    e.preventDefault();

    if (!$scope.currentProduct) {
      return;
    }

    $scope.ajaxComplete = false;
    $scope.ajaxInProcess = true;

    $scope.currentProduct.title = $scope.currentProduct.title || $scope.currentProduct.product.title;
    $scope.currentProduct.desc = $scope.currentProduct.desc || $scope.currentProduct.product.desc;
    $scope.currentProduct.imgUrl = $scope.currentProduct.imgUrl || $scope.currentProduct.product.imgUrl;

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

      Curation.deleteById(({id: $scope.currentProduct.id}))
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

  var lessResults = false;

  $scope.nextProducts = function () {
    if (lessResults) {
      return;
    }

    if ($scope.busy) {
      return;
    }

    $scope.busy = true;

    Curation.find(
      {filter:
        {order: 'created DESC',
         skip: skip,
         limit: limit}},
      function (list) {
        $scope.busy = false;
        $scope.products = $scope.products.concat(list);
        skip += limit;
        if (list.length < limit) {
          lessResults = true;
        }
      }
    );
  }


  Curation.find(
    {filter:
      {order: 'storyId DESC',
       limit: limit}},
    function (list) {
      $scope.products = list;
      $scope.currentProduct = list[0];
      if (list.length < limit) {
        lessResults = true;
      }
    }
  );
};

ProductCurationController.$inject = ['$rootScope', '$scope', 'Curation', 'FileUploadService', 'Product', 'AuthService', 'SearchService'];

bbmCms.controller('ProductCurationController', ProductCurationController);
