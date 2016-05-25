/***
Metronic AngularJS App Main Script
***/

/* Metronic App */
var bbmCms = angular.module('bbmCms', [
    'ui.router',
    'ui.bootstrap',
    'ui.select',,
    'ngSanitize',
    'ngResource',
    'lbServices',
    'angularTrix',
    'infinite-scroll'
]);

/********************************************
 BEGIN: BREAKING CHANGE in AngularJS v1.3.x:
*********************************************/
/**
`$controller` will no longer look for controllers on `window`.
The old behavior of looking on `window` for controllers was originally intended
for use in examples, demos, and toy apps. We found that allowing global controller
functions encouraged poor practices, so we resolved to disable this behavior by
default.

To migrate, register your controllers with modules rather than exposing them
as globals:

Before:

```javascript
function MyController() {
  // ...
}
```

After:

```javascript
angular.module('myApp', []).controller('MyController', [function() {
  // ...
}]);

Although it's not recommended, you can re-enable the old behavior like this:

```javascript
angular.module('myModule').config(['$controllerProvider', function($controllerProvider) {
  // this option might be handy for migrating old apps, but please don't use it
  // in new ones!
  $controllerProvider.allowGlobals();
}]);
**/

//AngularJS v1.3.x workaround for old style controller declarition in HTML
bbmCms.config([
  '$controllerProvider',
  '$httpProvider',
  'LoopBackResourceProvider',
  function($controllerProvider, $httpProvider
    , LoopBackResourceProvider
    ) {
  // this option might be handy for migrating old apps, but please don't use it
  // in new ones!
  $controllerProvider.allowGlobals();

  $httpProvider.defaults.withCredentials = true;

  LoopBackResourceProvider.setUrlBase(bbmCmsConfig.bbmApiUrl);
}]);

