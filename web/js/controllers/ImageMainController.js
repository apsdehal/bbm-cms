function ImageMainController($rootScope, $scope, Image, AuthService) {
  $scope.images = [];
  $scope.currentImage = false;
  var currentSelected = false;
  var isNewImage = false;
  var user = false;
  var skip = 10;
  var limit = 10;


  $scope.changeCurrentImage = function (index) {
    if ($scope.images.length > index) {
      $scope.currentImage = $scope.images[index];
      currentSelected = index;
    }
  }

  $scope.saveCurrentImage = function (e) {
    e.preventDefault();
    if ($scope.currentImage && !isNewImage) {
      $scope.currentImage.$save();
    }

    if (isNewImage) {
      $scope.currentImage.author = AuthService.getCurrentUser().username;
      var newArticle = new Image($scope.currentImage);
      $scope.currentImage = newArticle;
      $scope.currentImage.$save();
    }
  }

  $scope.deleteCurrentImage = function (e) {
    e.preventDefault();
    if ($scope.currentImage && !isNewImage) {
      Image.deleteById(({id: $scope.currentImage.id}))
      .$promise
      .then(function () {
        $scope.currentImage = false;
        $scope.images.splice(currentSelected, 1);
      });
    }
  }

  $scope.setupNewImage = function () {
    $scope.currentImage = false;
    isNewImage = true;
    currentSelected = false
  }

  $scope.getImages = function (val) {
    return Image.find({
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

  $scope.nextImages = function () {
    if ($scope.busy) {
      return;
    }

    $scope.busy = true;

    Image.find(
      {filter:
        {order: 'created DESC',
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
      {order: 'created DESC',
       limit: limit}},
    function (list) {
      console.log(list);
      $scope.images = list;
      $scope.currentImage = list[0];
    }
  );
};

ImageMainController.$inject = ['$rootScope', '$scope', 'Image', 'AuthService'];

bbmCms.controller('ImageMainController', ImageMainController);
