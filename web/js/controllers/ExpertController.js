function ExpertController($scope, ExpertService) {

  $scope.currentExpert = {};
  $scope.experts = [];
  $scope.totalExperts = 0;
  $scope.itemsPerPage = 10;
  $scope.maxSize = 5;

  $scope.getExperts = function (val) {
    return ExpertService.search(val).then(function (data) {
      data = data.data
      return data.response.numFound ? data.response.docs : [];
    });
  }


  ExpertService.getExperts(1).then(function (data) {
    data = data.data;
    $scope.totalExperts = data.response.numFound;
    $scope.experts = data.response.docs;
    $scope.numPages = $scope.totalExperts / $scope.itemsPerPage;
  });
}

ExpertController.$inject = ['$scope', 'ExpertService'];

bbmCms.controller('ExpertController', ExpertController);
