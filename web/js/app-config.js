
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
        .state('root', {
          abstract: true,
          views: {
            'header': {
              templateUrl: 'views/metronic/header.html',
              controller: 'HeaderController'
            },
            'footer': {
              templateUrl: 'views/metronic/footer.html',
              controller: 'FooterController'
            },
            'theme-panel': {
              templateUrl: 'views/metronic/theme-panel.html',
              controller: 'ThemePanelController'
            },
            'sidebar': {
              templateUrl: 'views/metronic/sidebar.html',
              controller: 'SidebarController'
            }
          }
        })
        // Dashboard
        .state('root.dashboard', {
          url: "/dashboard",
          data: {pageTitle: 'Admin Dashboard Template'},

          views: {
            'main@': {
              templateUrl: "views/dashboard.html",
              controller: "DashboardController"
            }
          }
        })

        .state('root.login', {
          url: '/login',
          data: {pageTitle: 'Login to CMS'},
          views: {
            'main@': {
              templateUrl: 'views/login.html',
              controller: 'LoginController'
            }
          }
        })

        .state('root.signup', {
          url: '/signup',
          data: {pageTitle: 'Sign Up for CMS'},
          views: {
            'main@': {
              templateUrl: 'views/signup.html',
              controller: 'SignupController'
            }
          }
        })

        .state('root.expert', {
          url: '/expert',
          data: {pageTitle: 'Expert Management'},
          views: {
            'main@': {
              templateUrl: "views/expert.html",
              controller: "ExpertController"
            }
          }
        })
        .state('root.brand', {
          url: '/brand',
          data: {pageTitle: 'Brand Management'},
          views: {
            'main@': {
              templateUrl: "views/brand.html",
              controller: "BrandController"
            }
          }
        })
        .state('root.content', {
          abstract: true,
          data: {pageTitle: 'Content Management'},
          views: {
            'main@': {
              templateUrl: "views/content.html",
              controller: "ContentController"
            }
          }
        })
        .state('root.content.article', {
          url: "/content/article",
          data: {pageTitle: 'Article Content Management'},
          views: {
            'main@': {
              templateUrl: 'views/article-main.html',
              controller: 'ArticleMainController'
            }
          }
        })
        .state('root.content.articleJson', {
          url: "/content/articlejson",
          data: {pageTitle: 'Article Content Management from JSON'},
          views: {
            'main@': {
              templateUrl: 'views/article-json.html',
              controller: 'ArticleJSONController'
            }
          }
        })
        .state('root.content.image', {
          url: "/content/image",
          data: {pageTitle: 'Image Content Management'},
          views: {
            'main@': {
              templateUrl: 'views/image-main.html',
              controller: 'ImageMainController'
            }
          }
        })
        .state('root.content.imageJson', {
          url: "/content/imagejson",
          data: {pageTitle: 'Image Content Management from JSON'},
          views: {
            'main@': {
              templateUrl: 'views/image-json.html',
              controller: 'ImageJSONController'
            }
          }
        })
        .state('root.content.product', {
          url: "/content/product",
          data: {pageTitle: 'Product Content Management'},
          views: {
            'main@': {
              templateUrl: 'views/product-main.html',
              controller: 'ProductMainController'
            }
          }
        })
        .state('root.content.conversation', {
          url: "/content/conversation",
          data: {pageTitle: 'Conversation Content Management'},
          views: {
            'main@': {
                templateUrl: 'views/conversation-main.html',
                controller: 'ConversationMainController'
            }
          }
        })
        .state('root.content.bulk', {
          url: "/content/bulk",
          data: {pageTitle: 'Bulk Content Management'},
          views: {
            'main@': {
                templateUrl: 'views/bulk-main.html',
                controller: 'BulkMainController'
            }
          }
        })
        .state('root.content.curated', {
          url: "/content/curated",
          data: {pageTitle: 'Curated Product Management'},
          views: {
            'main@': {
                templateUrl: 'views/product-curation.html',
                controller: 'ProductCurationController'
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

      if (toState.name === 'root.signup') {
        return;
      }
      var isLogin = toState.name === "root.login";

      // now, redirect only not authenticated
      AuthService.checkLogin({
        success: function () {
          if (isLogin) {
            $state.go('root.dashboard');
          }

        },
        reject: function () {
          e.preventDefault(); // stop current execution
          if (!isLogin) {
            $state.go('root.login'); // go to login
          }
        }
      })
  });
}]);
