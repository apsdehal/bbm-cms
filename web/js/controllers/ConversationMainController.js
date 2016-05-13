function ConversationMainController($rootScope, $scope, Discussion, AuthService) {
  $scope.conversations = [];
  $scope.currentConversation = false;
  var currentSelected = false;
  var isNewConversation = false;
  var user = false;


  var getCurrentConversationTags = function () {
    if (!$scope.currentConversation) {
      return '';
    }

    if (!$scope.currentConversation.tags) {
      $scope.currentConversation.tags = [];
      return '';
    }

    var x = [];
    x.push($scope.currentConversation.tags.map(function (tag) {
      return tag.name;
    }));

    return x.join(',');
  };

  $scope.changeCurrentConversation = function (index) {
    if ($scope.conversations.length > index) {
      $scope.currentConversation = $scope.conversations[index];
      currentSelected = index;
    }
  }

  $scope.$watch('currentConversation', function (newValue, oldValue) {
    $scope.currentConversationTags = getCurrentConversationTags();
  });

  $scope.saveCurrentConversation = function (e) {
    e.preventDefault();
    if ($scope.currentConversation && !isNewConversation) {
      $scope.currentConversation.$save();
    }

    if (isNewConversation) {
      $scope.currentConversation.author = AuthService.getCurrentUser().username;
      var newConversation = new Discussion($scope.currentConversation);
      $scope.currentConversation = newConversation;
      $scope.currentConversation.$save();
    }
  }

  $scope.deleteCurrentConversation = function (e) {
    e.preventDefault();
    if ($scope.currentConversation && !isNewConversation) {
      Discussion.deleteById(({id: $scope.currentConversation.id}))
      .$promise
      .then(function () {
        $scope.currentConversation = false;
        $scope.conversations.splice(currentSelected, 1);
      });
    }
  }

  $scope.setupNewConversation = function () {
    $scope.currentConversation = false;
    isNewConversation = true;
    currentSelected = false
  }

  Discussion.find(
    {filter:
      {order: 'storyId DESC',
       limit: 5}},
    function (list) {
      console.log(list);
      $scope.conversations = list;
      $scope.currentConversation = list[0];
    }
  );
};

ConversationMainController.$inject = ['$rootScope', '$scope', 'Discussion', 'AuthService'];

bbmCms.controller('ConversationMainController', ConversationMainController);
