
/* Setup global settings */
bbmCms.factory('settings', ['$rootScope', function($rootScope) {
    // supported languages
    var settings = {
        layout: {
            pageSidebarClosed: false, // sidebar menu state
            pageContentWhite: true, // set page content layout
            pageBodySolid: false, // solid body color state
            pageAutoScrollOnLoad: 1000 // auto scroll to top on page load
        },
        assetsPath: '../assets',
        globalPath: './assets/global',
        layoutPath: './assets/layouts/layout',
    };

    $rootScope.settings = settings;

    return settings;
}]);


/***
Layout Partials.
By default the partials are loaded through AngularJS ng-include directive. In case they loaded in server side(e.g: PHP include function) then below partial
initialization can be disabled and Layout.init() should be called on page load complete as explained above.
***/

/* Setup Rounting For All Pages */
bbmCms.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/dashboard");

    $stateProvider

        // Dashboard
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboard.html",
            data: {pageTitle: 'Admin Dashboard Template'},
            controller: "DashboardController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'bbmCms',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            './assets/global/plugins/morris/morris.css',
                            './assets/global/plugins/morris/morris.min.js',
                            './assets/global/plugins/morris/raphael-min.js',
                            './assets/global/plugins/jquery.sparkline.min.js',

                            './assets/pages/scripts/dashboard.min.js',
                            'metronic-js/controllers/DashboardController.js',
                        ]
                    });
                }]
            }
        })

        .state('login', {
          url: '/login',
          templateUrl: 'views/login.html',
          data: {pageTitle: 'Login to CMS'},
          controller: 'LoginController'
        })

        .state('signup', {
          url: '/signup',
          templateUrl: 'views/signup.html',
          data: {pageTitle: 'Sign Up for CMS'},
          controller: 'SignupController'
        })

        // AngularJS plugins
        .state('fileupload', {
            url: "/file_upload.html",
            templateUrl: "views/file_upload.html",
            data: {pageTitle: 'AngularJS File Upload'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'angularFileUpload',
                        files: [
                            './assets/global/plugins/angularjs/plugins/angular-file-upload/angular-file-upload.min.js',
                        ]
                    }, {
                        name: 'bbmCms',
                        files: [
                            'metronic-js/controllers/GeneralPageController.js'
                        ]
                    }]);
                }]
            }
        })

        // UI Select
        .state('uiselect', {
            url: "/ui_select.html",
            templateUrl: "views/ui_select.html",
            data: {pageTitle: 'AngularJS Ui Select'},
            controller: "UISelectController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'ui.select',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            './assets/global/plugins/angularjs/plugins/ui-select/select.min.css',
                            './assets/global/plugins/angularjs/plugins/ui-select/select.min.js'
                        ]
                    }, {
                        name: 'bbmCms',
                        files: [
                            'metronic-js/controllers/UISelectController.js'
                        ]
                    }]);
                }]
            }
        })

        // UI Bootstrap
        .state('uibootstrap', {
            url: "/ui_bootstrap.html",
            templateUrl: "views/ui_bootstrap.html",
            data: {pageTitle: 'AngularJS UI Bootstrap'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'bbmCms',
                        files: [
                            'metronic-js/controllers/GeneralPageController.js'
                        ]
                    }]);
                }]
            }
        })

        // Tree View
        .state('tree', {
            url: "/tree",
            templateUrl: "views/tree.html",
            data: {pageTitle: 'jQuery Tree View'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'bbmCms',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            './assets/global/plugins/jstree/dist/themes/default/style.min.css',

                            './assets/global/plugins/jstree/dist/jstree.min.js',
                            './assets/pages/scripts/ui-tree.min.js',
                            'metronic-js/controllers/GeneralPageController.js'
                        ]
                    }]);
                }]
            }
        })

        // Form Tools
        .state('formtools', {
            url: "/form-tools",
            templateUrl: "views/form_tools.html",
            data: {pageTitle: 'Form Tools'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'bbmCms',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            './assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                            './assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css',
                            './assets/global/plugins/bootstrap-markdown/css/bootstrap-markdown.min.css',
                            './assets/global/plugins/typeahead/typeahead.css',

                            './assets/global/plugins/fuelux/js/spinner.min.js',
                            './assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',
                            './assets/global/plugins/jquery-inputmask/jquery.inputmask.bundle.min.js',
                            './assets/global/plugins/jquery.input-ip-address-control-1.0.min.js',
                            './assets/global/plugins/bootstrap-pwstrength/pwstrength-bootstrap.min.js',
                            './assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js',
                            './assets/global/plugins/bootstrap-maxlength/bootstrap-maxlength.min.js',
                            './assets/global/plugins/bootstrap-touchspin/bootstrap.touchspin.js',
                            './assets/global/plugins/typeahead/handlebars.min.js',
                            './assets/global/plugins/typeahead/typeahead.bundle.min.js',
                            './assets/pages/scripts/components-form-tools-2.min.js',

                            'metronic-js/controllers/GeneralPageController.js'
                        ]
                    }]);
                }]
            }
        })

        // Date & Time Pickers
        .state('pickers', {
            url: "/pickers",
            templateUrl: "views/pickers.html",
            data: {pageTitle: 'Date & Time Pickers'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'bbmCms',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            './assets/global/plugins/clockface/css/clockface.css',
                            './assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
                            './assets/global/plugins/bootstrap-timepicker/css/bootstrap-timepicker.min.css',
                            './assets/global/plugins/bootstrap-colorpicker/css/colorpicker.css',
                            './assets/global/plugins/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css',

                            './assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
                            './assets/global/plugins/bootstrap-timepicker/js/bootstrap-timepicker.min.js',
                            './assets/global/plugins/clockface/js/clockface.js',
                            './assets/global/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.js',
                            './assets/global/plugins/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js',

                            './assets/pages/scripts/components-date-time-pickers.min.js',

                            'metronic-js/controllers/GeneralPageController.js'
                        ]
                    }]);
                }]
            }
        })

        // Custom Dropdowns
        .state('dropdowns', {
            url: "/dropdowns",
            templateUrl: "views/dropdowns.html",
            data: {pageTitle: 'Custom Dropdowns'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'bbmCms',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            './assets/global/plugins/bootstrap-select/css/bootstrap-select.min.css',
                            './assets/global/plugins/select2/css/select2.min.css',
                            './assets/global/plugins/select2/css/select2-bootstrap.min.css',

                            './assets/global/plugins/bootstrap-select/js/bootstrap-select.min.js',
                            './assets/global/plugins/select2/js/select2.full.min.js',

                            './assets/pages/scripts/components-bootstrap-select.min.js',
                            './assets/pages/scripts/components-select2.min.js',

                            'metronic-js/controllers/GeneralPageController.js'
                        ]
                    }]);
                }]
            }
        })

        // Advanced Datatables
        .state('datatablesAdvanced', {
            url: "/datatables/managed.html",
            templateUrl: "views/datatables/managed.html",
            data: {pageTitle: 'Advanced Datatables'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'bbmCms',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            './assets/global/plugins/datatables/datatables.min.css',
                            './assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',

                            './assets/global/plugins/datatables/datatables.all.min.js',

                            './assets/pages/scripts/table-datatables-managed.min.js',

                            'metronic-js/controllers/GeneralPageController.js'
                        ]
                    });
                }]
            }
        })

        // Ajax Datetables
        .state('datatablesAjax', {
            url: "/datatables/ajax.html",
            templateUrl: "views/datatables/ajax.html",
            data: {pageTitle: 'Ajax Datatables'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'bbmCms',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            './assets/global/plugins/datatables/datatables.min.css',
                            './assets/global/plugins/datatables/plugins/bootstrap/datatables.bootstrap.css',
                            './assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',

                            './assets/global/plugins/datatables/datatables.all.min.js',
                            './assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',
                            './assets/global/scripts/datatable.js',

                            'js/scripts/table-ajax.js',
                            'metronic-js/controllers/GeneralPageController.js'
                        ]
                    });
                }]
            }
        })

        // User Profile
        .state("profile", {
            url: "/profile",
            templateUrl: "views/profile/main.html",
            data: {pageTitle: 'User Profile'},
            controller: "UserProfileController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'bbmCms',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            './assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
                            './assets/pages/css/profile.css',

                            './assets/global/plugins/jquery.sparkline.min.js',
                            './assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',

                            './assets/pages/scripts/profile.min.js',

                            'metronic-js/controllers/UserProfileController.js'
                        ]
                    });
                }]
            }
        })

        // User Profile Dashboard
        .state("profile.dashboard", {
            url: "/dashboard",
            templateUrl: "views/profile/dashboard.html",
            data: {pageTitle: 'User Profile'}
        })

        // User Profile Account
        .state("profile.account", {
            url: "/account",
            templateUrl: "views/profile/account.html",
            data: {pageTitle: 'User Account'}
        })

        // User Profile Help
        .state("profile.help", {
            url: "/help",
            templateUrl: "views/profile/help.html",
            data: {pageTitle: 'User Help'}
        })

        // Todo
        .state('content', {
            abstract: true,
            templateUrl: "views/content.html",
            data: {pageTitle: 'Content Management'},
            controller: "ContentController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'bbmCms',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            './assets/global/plugins/bootstrap-datepicker/css/bootstrap-datepicker3.min.css',
                            './assets/apps/css/todo-2.css',
                            './assets/global/plugins/select2/css/select2.min.css',
                            './assets/global/plugins/select2/css/select2-bootstrap.min.css',

                            './assets/global/plugins/select2/js/select2.full.min.js',

                            './assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js',

                            './assets/apps/scripts/todo-2.min.js',
                        ]
                    });
                }]
            }
        })
        .state('content.article', {
          url: "/content/article",
          data: {pageTitle: 'Article Content Management'},
          views: {
            'header': {
              templateUrl: 'views/article-header.html',
              controller: 'ArticleHeaderController'
            },
            'main': {
              templateUrl: 'views/article-main.html',
              controller: 'ArticleMainController'
            }
          }
        })

}]);

/* Init global settings and run the app */
bbmCms.run(["$rootScope", "settings", "$state", 'AuthService',
  function($rootScope, settings, $state, AuthService) {
    $rootScope.$state = $state; // state to be accessed from view
    $rootScope.$settings = settings; // state to be accessed from view

    $rootScope.$on( '$stateChangeStart', function(e, toState  , toParams
                                                 , fromState, fromParams) {

      if (toState.name === 'signup') {
        return;
      }
      var isLogin = toState.name === "login";

      // now, redirect only not authenticated
      AuthService.checkLogin({
        success: function () {
          if (isLogin) {
            $state.go('dashboard');
          }

        },
        reject: function () {
          e.preventDefault(); // stop current execution
          if (!isLogin) {
            $state.go('login'); // go to login
          }
        }
      })

  });
}]);
