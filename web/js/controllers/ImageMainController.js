function ImageMainController($rootScope, $scope, Image, AuthService, SearchService, UtilService) {
  $scope.images = [];
  $scope.currentImage = false;
  var currentSelected = false;
  var isNewImage = false;
  var user = false;
  var skip = 10;
  var limit = 10;

  $scope.currentType = Image;
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

  function saveTags(id, tags) {
    for(var i = 0; i < tags.length; i++) {
      $http.put(
        bbmCmsConfig.bbmApiUrl + '/images/'
        + id + '/tags/rel/' + tags[i].id);
    }
  }


  $scope.changeCurrentImage = function (index) {
    if ($scope.images.length > index) {
      $scope.currentImage = $scope.images[index];
      currentSelected = index;
      UtilService.setTagString($scope.currentImage);
    }
  }

  $scope.saveCurrentImage = function (e) {
    e.preventDefault();

    UtilService.getTagsFromTagString($scope.currentImage);

    if (isNewImage) {
      UtilService.setSelectedPage($scope.currentImage);

      Image.create($scope.currentImage).$promise.then(function (data) {
        newImage = data[0].feed['image'];
        $scope.currentImage = newImage;
        isNewImage = false;
      });
      return;
    }

    if (!$scope.currentImage) {
      return;
    }


    $scope.ajaxComplete = false;
    $scope.ajaxInProcess = true;

    $scope.currentImage.$save()
    .then(function () {
      successChanges();
    }, function () {
      failureChanges();
    });
  }

  $scope.deleteCurrentImage = function (e) {
    e.preventDefault();
    if ($scope.currentImage && !isNewImage) {
      $scope.ajaxComplete = false;
      $scope.ajaxInProcess = true;

      Image.deleteById(({id: $scope.currentImage.id}))
      .$promise
      .then(function () {
        $scope.currentImage = false;
        $scope.images.splice(currentSelected, 1);
        successChanges();
      }, function () {
        failureChanges();
      });
    }
  }

  $scope.setupNewImage = function () {
    $scope.currentImage = false;
    isNewImage = true;
    currentSelected = false
  }

  $scope.getImages = function (val) {
    return SearchService.searchImages(val).then(function (data) {
      data = data.data
      return data.response.numFound ? data.response.docs : [];
    });
  }

  $scope.nextImages = function () {
    if ($scope.busy) {
      return;
    }

    $scope.busy = true;

    Image.find(
      {filter:
        {order: 'id DESC',
         skip: skip,
         limit: limit}},
      function (list) {
        $scope.busy = false;
        $scope.images = $scope.images.concat(list);
        skip += limit;
      }
    );
  }

  Image.find(
    {filter:
      {order: 'id DESC',
       limit: limit}},
    function (list) {
      $scope.images = list;
      $scope.currentImage = list[0];
      UtilService.setTagString($scope.currentImage);
    }
  );
};

ImageMainController.$inject =
['$rootScope', '$scope', 'Image', 'AuthService', 'SearchService', 'UtilService'];

bbmCms.controller('ImageMainController', ImageMainController);
