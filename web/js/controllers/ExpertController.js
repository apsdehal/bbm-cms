function ExpertController($scope, Page, SearchService, $uibModal) {

  $scope.currentExpert = {};
  $scope.experts = [];
  $scope.totalExperts = 0;
  $scope.itemsPerPage = 10;
  $scope.maxSize = 5;
  $scope.gettingProjects = true;
  $scope.isProjectSelected = false;
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

  $scope.getExperts = function (val) {
    return SearchService.searchExperts(val).then(function (data) {
      data = data.data
      return data.response.numFound ? data.response.docs : [];
    });
  }

  $scope.changeCurrentExpert = function (index) {
    $scope.currentExpert = $scope.experts[index];
  }

  $scope.saveCurrentProject = function (event, index) {
    event.preventDefault();
    if ($scope.currentExpert.projects.length < index) {
      return false;
    }
    $scope.ajaxComplete = false;
    $scope.ajaxInProcess = true;

    $scope.currentProject.$save()
    .then(function () {
      successChanges();
    }, function () {
      failureChanges();
    });
  }

  $scope.deleteCurrentProject = function (event, index) {
    event.preventDefault();
    if ($scope.currentExpert.projects.length < index) {
      return false;
    }
    $scope.ajaxComplete = false;
    $scope.ajaxInProcess = true;

    $scope.currentProject.$delete()
    .then(function () {
      successChanges();
    }, function () {
      failureChanges();
    });
  }

  $scope.changeCurrentProject = function (index) {
    $scope.currentProject = $scope.currentExpert.projects[index];
    $scope.isProjectSelected = true;
  }

  $scope.backToExperts = function (event) {

    event.preventDefault();
    $scope.isProjectSelected = false;
  }

  SearchService.getExperts(1).then(function (data) {
    data = data.data;
    $scope.totalExperts = data.response.numFound;
    $scope.experts = data.response.docs;
    $scope.numPages = $scope.totalExperts / $scope.itemsPerPage;
    $scope.currentExpert = $scope.experts[0];
  });

  $scope.changePage = function (currentPage) {
    $scope.experts = [];
    SearchService.getExperts(currentPage).then(function (data) {
      data = data.data;
      $scope.experts = data.response.docs;
      $scope.currentExpert = $scope.experts[0];
    });
  }

  $scope.openImageModal = function (index) {
    var modalInstance = $uibModal.open({
      templateUrl: 'views/image-modal.html',
      controller: 'ImageModalController',
      size: 'lg',
      resolve: {
        currentIndex: function () {
          return index;
        },
        currentProject: function () {
          return $scope.currentProject;
        }
      }
    })
  }

  $scope.$watch('currentExpert', function (newVal, old) {
    if (newVal === old || !$scope.currentExpert._id) {
      return;
    }
    $scope.gettingProjects = true;
    $scope.currentExpert.projects = Page.projects({
      id: $scope.currentExpert._id
    });

    $scope.currentExpert.projects.$promise.then(
      function () {
        $scope.gettingProjects = false;
      },
      function () {
        $scope.gettingProjects = false;
    })

  });
}

ExpertController.$inject = ['$scope', 'Page', 'SearchService', '$uibModal'];

bbmCms.controller('ExpertController', ExpertController);
