
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
          templateUrl: 'views/article-main.html',
          controller: 'ArticleMainController'
        })
        .state('content.articleJson', {
          url: "/content/articlejson",
          data: {pageTitle: 'Article Content Management from JSON'},
          templateUrl: 'views/article-json.html',
          controller: 'ArticleJSONController'
        })
        .state('content.image', {
          url: "/content/image",
          data: {pageTitle: 'Image Content Management'},
          templateUrl: 'views/image-main.html',
          controller: 'ImageMainController'
        })
        .state('content.product', {
          url: "/content/product",
          data: {pageTitle: 'Product Content Management'},
          templateUrl: 'views/product-main.html',
          controller: 'ProductMainController'
        })
        .state('content.conversation', {
          url: "/content/conversation",
          data: {pageTitle: 'Conversation Content Management'},
          templateUrl: 'views/conversation-main.html',
          controller: 'ConversationMainController'
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
