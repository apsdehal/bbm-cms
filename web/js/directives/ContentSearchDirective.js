function ContentSearchDirective(Article, Product, Image, Discussion) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      getContent: '&getContent',
      currentContent: '=',
      contentType: '@',
      labelAttr: '@'
    },
    templateUrl: 'views/directives/content-search.html',
    link: function (scope) {
      var typeClass;
      switch (scope.contentType) {
        case 'product': {
          typeClass = Product;
          break;
        }
        case 'article': {
          typeClass = Article;
          break;
        }
        case 'image': {
          typeClass = Image;
          break;
        }
        case 'conversation': {
          typeClass = Discussion;
          break;
        }
      }

      scope.labelAttr = scope.labelAttr || 'title';
      scope.$watch('searchSelected', function (newValue, oldValue) {
        if (typeof newValue === 'object') {
          scope.currentContent = typeClass.findById({id: newValue._id});
        }
      });
    }
  };
}

ContentSearchDirective.$inject =
['Article', 'Product', 'Image', 'Discussion'];

bbmCms.directive('contentSearch', ContentSearchDirective);
