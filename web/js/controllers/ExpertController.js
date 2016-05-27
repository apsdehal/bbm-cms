function ExpertController($scope, ExpertService) {

  $scope.currentExpert = {};
  $scope.experts = [];

  $scope.getExperts = function (val) {
    return ExpertService.search(val).then(function (data) {
      data = data.data
      return data.response.numFound ? data.response.docs : [];
    });
  }
}

ExpertController.$inject = ['$scope', 'ExpertService'];

bbmCms.controller('ExpertController', ExpertController);
