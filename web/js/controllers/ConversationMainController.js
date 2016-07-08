function ConversationMainController($rootScope, $scope, Discussion, AuthService, SearchService) {
  $scope.conversations = [];
  $scope.currentConversation = false;

  $scope.ajaxInProcess = false;
  $scope.ajaxComplete = false;
  $scope.ajaxState = 'Success';
  $scope.currentType = Discussion;

  var currentSelected = false;
  var isNewConversation = false;
  var user = false;
  var skip = 10;
  var limit = 10;


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

  $scope.changeCurrentConversation = function (index) {
    if ($scope.conversations.length > index) {
      $scope.currentConversation = $scope.conversations[index];
      currentSelected = index;
    }
  }

  $scope.saveCurrentConversation = function (e) {
    e.preventDefault();

    if (isNewConversation) {
      $scope.currentConversation.author = AuthService.getCurrentUser().username;
      var newConversation = Discussion.create($scope.currentConversation);
      $scope.currentConversation = newConversation;
    }

    if (!$scope.currentConversation) {
      return;
    }

    var tags = $scope.currentConversation.tags;

    $scope.ajaxComplete = false;
    $scope.ajaxInProcess = true;

    $scope.currentConversation.$save()
    .then(function () {
      successChanges();
      $scope.currentConversation.tags = tags;
    }, function () {
      failureChanges();
    });
  }

  $scope.deleteCurrentConversation = function (e) {
    e.preventDefault();
    if ($scope.currentConversation && !isNewConversation) {
      Discussion.deleteById(({id: $scope.currentConversation.id}))
      .$promise
      .then(function () {
        $scope.currentConversation = false;
        $scope.conversations.splice(currentSelected, 1);
        successChanges();
      }, function () {
        failureChanges();
      });
    }
  }

  $scope.getConversations = function (val) {
    return SearchService.searchConversations(val).then(function (data) {
      data = data.data
      return data.response.numFound ? data.response.docs : [];
    });
  }


  $scope.nextConversations = function () {
    if ($scope.busy) {
      return;
    }

    $scope.busy = true;

    Discussion.find(
      {filter:
        {order: 'created DESC',
         skip: skip,
         limit: limit}},
      function (list) {
        $scope.busy = false;
        $scope.conversations = $scope.conversations.concat(list);
        skip += limit;
      }
    );
  }

  $scope.setupNewConversation = function () {
    $scope.currentConversation = false;
    isNewConversation = true;
    currentSelected = false
  }

  Discussion.find(
    {filter:
      {order: 'created DESC',
       limit: limit}},
    function (list) {
      $scope.conversations = list;
      $scope.currentConversation = list[0];
    }
  );
};

ConversationMainController.$inject = ['$rootScope', '$scope', 'Discussion', 'AuthService', 'SearchService'];

bbmCms.controller('ConversationMainController', ConversationMainController);
