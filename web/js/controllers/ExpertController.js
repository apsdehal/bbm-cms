function ExpertController($scope, Page, ExpertService) {

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

  $scope.changeCurrentExpert = function (index) {
    $scope.currentExpert = $scope.experts[index];
  }

  ExpertService.getExperts(1).then(function (data) {
    data = data.data;
    $scope.totalExperts = data.response.numFound;
    $scope.experts = data.response.docs;
    $scope.numPages = $scope.totalExperts / $scope.itemsPerPage;
    $scope.currentExpert = $scope.experts[0];
  });

  $scope.$watch('currentExpert', function (newVal, old) {
    if (newVal === old || !$scope.currentExpert._id) {
      return;
    }

    $scope.currentExpert.projects = Page.projects({
      id: $scope.currentExpert._id
    })
  });
}

ExpertController.$inject = ['$scope', 'Page', 'ExpertService'];

bbmCms.controller('ExpertController', ExpertController);
