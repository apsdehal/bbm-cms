function ImageJSONController($rootScope, $scope, $filter, Image, ImageResource, AuthService) {
  $scope.isFileLoaded = false;
  $scope.images = [];
  $scope.currentImage = false;
  $scope.totalImages = 0;
  $scope.isEditActive = true;
  $scope.viewby = 10;
  $scope.itemsPerPage = $scope.viewby;
  $scope.maxSize = 5;
  $scope.currentPage = 1;

  var currentSelected = false;
  var isNewImage = false;
  var user = false;

  $scope.loadFile = function (){

    var input, file, fr;
    if (typeof window.FileReader !== 'function') {
      alert("The file API isn't supported on this browser yet.");
      return;
    }

    input = document.getElementsByClassName('js-file-input')[0];

    if (!input) {
      alert("Couldn't find the fileinput element.");
    }
    else if (!input.files) {
      alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
      alert("Please select a .json file before clicking 'Upload' button");
    }
    else {
      file = input.files[0];
      fr = new FileReader();
      fr.readAsText(file);
      var imagelines, newArr;
      fr.onload = function (e){
        var result = e.target.result;
        var images = JSON.parse(result);
        angular.forEach(images, function (image) {
          $scope.images.push(image);
        })
        $scope.isFileLoaded = true;
        $scope.currentImage = $scope.images[0];
        $scope.totalImages = $scope.images.length;
        ImageResource.createMany({docs: result});
        $scope.$apply();
    }}
  }

  $scope.flushDocs = function () {
    ImageResource.deleteAll().$promise.then(function () {
      $scope.images = [];
    });
  }

  $scope.setItemsPerPage = function(num) {
    $scope.itemsPerPage = num;
    $scope.currentPage = 1; //reset to first paghe
  }

  $scope.changePage = function () {
    $scope.currentImage = $scope.images[($scope.currentPage - 1) * $scope.itemsPerPage];
  }

  $scope.editButtonText = 'render';
  $scope.toggleEdit = function () {
    $scope.isEditActive = !$scope.isEditActive;

    if ($scope.isEditActive) {
      $scope.editButtonText = 'render';
    } else {
      $scope.editButtonText = 'edit';
    }
  }

  $scope.changeCurrentImage = function (index) {
    if ($scope.images.length > index) {
      $scope.currentImage = $scope.images[index];
      currentSelected = index;
    }
  }


  $scope.saveCurrentImage = function (e) {
    e.preventDefault();
    ImageResource.update({doc: JSON.stringify($scope.currentImage)});
    if (isNewImage) {
      $scope.images.push($scope.currentImage);
    }
  }

  $scope.deleteCurrentImage = function (e) {
    e.preventDefault();
    ImageResource.delete({id: $scope.currentImage._id});

    if ($scope.currentImage && !isNewImage) {
      $scope.images.splice(currentIndex, 1);
      $scope.currentImage = false;
    }
  }

  $scope.setupNewImage = function () {
    $scope.currentImage = false;
    isNewImage = true;
    currentSelected = false
  }

  $scope.getImages = function (val) {
    return $filter('limitTo')($filter('filter')($scope.images, {title: val}), 10);
  }

  $scope.downloadFile = function () {
    var json = JSON.stringify($scope.images);
    var blob = new Blob([json], {type: "application/json"});
    var url  = URL.createObjectURL(blob);
    var dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", url);
    dlAnchorElem.setAttribute("download", $scope.fileName);
    dlAnchorElem.click();
  }

  $scope.publishImage = function (e, index) {
    e.preventDefault();
    var id = $scope.currentImage._id;
    delete $scope.currentImage._id;
    var newImage = Image.create($scope.currentImage);
    $scope.currentImage.pageId = bbmCmsConfig.bbmTeamPageId;
    newImage.$promise.then(function () {
      $scope.currentImage._id = id;
      ImageResource.delete({id: id}).$promise.then(function () {
        $scope.images.splice(currentSelected, 1);
        $scope.currentImage = false;
      })
    })
  }

  $scope.$on('$viewContentLoaded', function() {
    ImageResource.all().$promise.then(function (data) {
      $scope.images = data;
      $scope.currentImage = data[0];
    });
    var inputs = document.querySelectorAll( '.inputfile' );
    Array.prototype.forEach.call( inputs, function( input ) {
      var label  = input.nextElementSibling,
        labelVal = label.innerHTML;

      input.addEventListener( 'change', function( e ) {
        var fileName = '';
        if( this.files && this.files.length > 1 ) {
          fileName = ( this.getAttribute( 'data-caption' ) || '' ).replace( '{count}', this.files.length );
        } else {
          fileName = e.target.value.split( '\\' ).pop();
        }

        $scope.fileName = fileName;

        label.innerHTML = fileName ? fileName : labelVal;
      });
    });
  });
};

ImageJSONController.$inject = ['$rootScope', '$scope', '$filter', 'Image', 'ImageResource', 'AuthService'];

bbmCms.controller('ImageJSONController', ImageJSONController);
