function CurateProductDirective(Curation) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      product: '=',
      published: '@'
    },
    templateUrl: 'views/directives/curate-product.html',
    link: function (scope, elem) {
      scope.isCurated = false;
      scope.curate = function () {
        Curation.create({
          productId: scope.product.id,
          title: scope.product.title,
          desc: scope.product.desc,
          imgUrl: scope.product.imgUrl,
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
