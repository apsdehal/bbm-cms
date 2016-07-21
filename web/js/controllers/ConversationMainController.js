function ConversationMainController($rootScope, $scope, Discussion, AuthService, SearchService, UtilService) {
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

  function saveTags(id, tags) {
    for(var i = 0; i < tags.length; i++) {
      $http.put(
        bbmCmsConfig.bbmApiUrl + '/discussions/'
        + id + '/tags/rel/' + tags[i].id);
    }

  }


  $scope.changeCurrentConversation = function (index) {
    if ($scope.conversations.length > index) {
      $scope.currentConversation = $scope.conversations[index];
      currentSelected = index;
      UtilService.setTagString($scope.currentConversation);
    }
  }

  $scope.saveCurrentConversation = function (e) {
    e.preventDefault();

    UtilService.getTagsFromTagString($scope.currentConversation);

    if (isNewConversation) {
      UtilService.setSelectedPage($scope.currentConversation);

      Discussion.create($scope.currentConversation).$promise.then(function (data) {
        newConversation = data[0].feed['discussion'];
        $scope.currentConversation = newConversation;

        isNewConversation = false;
      });
      return;
    }

    if (!$scope.currentConversation) {
      return;
    }

    $scope.ajaxComplete = false;
    $scope.ajaxInProcess = true;

    $scope.currentConversation.$save()
    .then(function () {
      successChanges();
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
        {order: 'id DESC',
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
      {order: 'id DESC',
       limit: limit}},
    function (list) {
      $scope.conversations = list;
      $scope.currentConversation = list[0];
      UtilService.setTagString($scope.currentConversation);
    }
  );
};

ConversationMainController.$inject = ['$rootScope', '$scope', 'Discussion', 'AuthService', 'SearchService', 'UtilService'];

bbmCms.controller('ConversationMainController', ConversationMainController);
