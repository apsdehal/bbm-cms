function ImageModalController($scope, Image, $uibModalInstance, currentIndex, currentProject) {
  $scope.currentImage = currentProject.images[currentIndex];

  $scope.save = function () {
    currentProject.$save();
    $uibModalInstance.close();
  };

  $scope.delete = function () {
    currentProject.images = currentProject.images.splice(currentIndex, 1);
    currentProject.$save();
    $uibModalInstance.close();
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
}

ImageModalController.$inject = ['$scope', 'Image', '$uibModalInstance', 'currentIndex', 'currentProject'];

bbmCms.controller('ImageModalController', ImageModalController);
