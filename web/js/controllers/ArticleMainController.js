
function ArticleMainController($rootScope, $scope, Article) {
    Article.find(
      {filter:
        {order: 'created DESC',
         limit: 3}},
      function (list) {
        console.log(list);
      },
      function (list) {
        console.log(list);
      }
    );
};

ArticleMainController.$inject = ['$rootScope', '$scope', 'Article'];

bbmCms.controller('ArticleMainController', ArticleMainController);
