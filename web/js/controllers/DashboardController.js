function DashboardController($rootScope, $scope, $http, $timeout,
  Comment, User, Article, Discussion, Product, Like, Image, Tag, Project, Activity) {
    $scope.imageCount = 0;
    $scope.articleCount = 0;
    $scope.userCount = 0;
    $scope.productCount = 0;
    $scope.likeCount = 0;
    $scope.commentCount = 0;
    $scope.tagCount = 0;
    $scope.projectCount = 0;
    $scope.discussionCount = 0;
    $scope.activities = [];
    $scope.$on('$viewContentLoaded', function() {
        // initialize core components
        // App.initAjax();
        //
        User.count().$promise.then(function (data) {
          $scope.userCount = data.count;
        });

        Discussion.count().$promise.then(function (data) {
          $scope.discussionCount = data.count;
        });

        Comment.count().$promise.then(function (data) {
          $scope.commentCount = data.count;
        });

        Like.count().$promise.then(function (data) {
          $scope.likeCount = data.count;
        });

        Image.count().$promise.then(function (data) {
          $scope.imageCount = data.count;
        });

        Article.count().$promise.then(function (data) {
          $scope.articleCount = data.count;
        });

        Product.count().$promise.then(function (data) {
          $scope.productCount = data.count;
        });

        Tag.count().$promise.then(function (data) {
          $scope.tagCount = data.count;
        });

        Project.count().$promise.then(function (data) {
          $scope.projectCount = data.count;
        });

        Activity.find(
          {filter:
            {limit: 35,
             include: ['feed', 'page']}},
          function (list) {
            $scope.activities = list;
          }
        );

    });

    $scope.getActivityClass = function (activity) {
      switch (activity.type) {
        case 'like': return 'fa-thumbs-o-up';
        case 'share': return 'fa-share-alt';
        case 'space': return 'fa-plus';
        case 'post': return 'fa-comments';
        default: return 'fa-check';
      }
    }

    $scope.getActivityContent = function (activity) {
      var mid = '', last = '';
      switch (activity.type) {
        case 'like': {
          mid = 'liked';
          break;
        }
        case 'share': {
          mid = 'shared';
          break;
        }
        case 'space': {
          mid = 'added';
          last = "to space";
          break;
        }
        case 'post': {
          mid = 'posted';
        }
      }

      return [activity.page.displayName, mid, activity.feed.type,
      activity.feed[activity.feed.type]['title'], last].join(' ');
    }
    // set sidebar closed and body solid layout mode
    $rootScope.settings.layout.pageContentWhite = true;
    $rootScope.settings.layout.pageBodySolid = false;
    $rootScope.settings.layout.pageSidebarClosed = false;
};

DashboardController.$inject = ['$rootScope', '$scope', '$http', '$timeout',
'Comment', 'User', 'Article', 'Discussion', 'Product', 'Like', 'Image', 'Tag', 'Project', 'Activity'];

bbmCms.controller('DashboardController', DashboardController);
