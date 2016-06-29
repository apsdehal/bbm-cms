function CurateProductDirective() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      productId: '@',
      published: '@'
    },
    templateUrl: 'views/directives/curate-product.html',
    link: function (scope, elem) {
      scope.isCurated = false;
      scope.curate = function () {
        console.log(scope.productId);
        scope.isCurated = true;
      }
    }
  };
}

CurateProductDirective.$inject = [];

bbmCms.directive('curateProduct', CurateProductDirective);
