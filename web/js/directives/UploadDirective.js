function UploadDirective(FileUploadService) {
  return {
    restrict: 'E',
    replace: true,
    scope: {
        current: '='
    },
    templateUrl: 'views/directives/upload.html',

    link: function (scope, elem) {
        scope.imageFile = null;
        scope.uploadButtonText = 'Upload';

        scope.uploadImage = function (e) {
            e.preventDefault();
            e.stopPropagation();
            FileUploadService
            .uploadFileToUrl(scope.imageFile, bbmCmsConfig.bbmApiUrl + '/media/upload')
            .success(function (data) {
              scope.current.imgUrl = data.result.secure_url;
              scope.current.image = scope.current.imgUrl;
              scope.uploadButtonText = 'Uploaded';
            })
            .error(function () {
              scope.uploadButtonText = 'Failed';
            });
        }
    }
  };
}

UploadDirective.$inject = ['FileUploadService'];

bbmCms.directive('upload', UploadDirective);
