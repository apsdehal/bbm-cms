function CurateProductDirective(Curation) {
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
        Curation.create({
          productId: scope.productId,
          published: false
        }).$promise.then(function () {
          scope.isCurated = true;
        });
      }
    }
  };
}

CurateProductDirective.$inject = ['Curation'];

bbmCms.directive('curateProduct', CurateProductDirective);
