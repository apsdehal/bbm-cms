function AuthService($rootScope, $state, User, Page) {

  this.user = {};
  this.isLoggedIn = false;

  var noop = function () {

  };

  /**
   * Login helper for the class
   * @param  {object} props Has properties username, password,
   * success: function to be called in case of success,
   * reject: function to be called in case of failure
   * Parameters passed to this function will contain an object with desired results
   */
  this.login = function(props) {
    props = props || {};

    var success = props.success || noop;
    if (this.user && this.isLoggedIn) {
      success({message: 'User already logged in', user: this.user});
      return;
    }

    var self = this;
    var reject = props.reject || noop;

    if (!props.username.length || !props.password.length) {
      reject({message: 'Username and Password should not be empty'});
      return;
    }
    User.login({
      email: props.username, password: props.password
    }).$promise.then(function (data) {
      Page.default().$promise.then(function (data) {

        $rootScope.user = data;
        $rootScope.$broadcast('user:change', data);
        self.user = data;
        self.isLoggedIn = true;
        success({message: 'Logged in successfully', user: data});

      }, function (err) {

        self.isloggedin = false;
        reject({message: 'Username or Password is incorrect', error: err});
      });
    }, function (err) {
      self.isloggedin = false;
      reject({message: 'Username or Password is incorrect', error: err});
    })
  };

  this.getCurrentUser = function () {
    return this.user;
  }

  this.checkLogin = function(props) {
    props = props || {};
    var self = this;
    User.getCurrent()
    .$promise
    .then(function (data) {
      Page.default().$promise.then(function (data) {

        var success = props.success || noop;
        $rootScope.user = data;
        $rootScope.$broadcast('user:change', data);
        self.user = data;
        self.isLoggedIn = true;
        success({message: 'Logged in successfully', user: data});

      }, function (err) {

        var reject = props.reject || noop;
        self.isloggedin = false;
        reject({message: 'Username or Password is incorrect', error: err});

      });

    }, function (err) {
      var reject = props.reject || noop;
      reject({message: 'User is not logged in', error: err});
    });
  };

  this.logout = function (props) {
    props = props || {};

    var self = this;
    var success = props.success || noop;
    if (!this.isLoggedIn) {
      success({message: 'User already logged out'});
      return;
    }

    var reject = props.reject || noop;
    User.logout()
    .$promise
    .then(function (data) {
      $rootScope.user = {};
      self.user = {};
      self.isLoggedIn = false;
      $rootScope.$broadcast('user:change', {});
      success({message: 'Log out successful'});
      $state.go('root.login');
    }, function (err) {
      reject({message: 'Log out failure', error: err})
    });
  }

  this.signup = function (props) {
    props = props || {};
    var self = this;
    var success = props.success || noop;
    var reject = props.reject || noop;

    if (!props.username.length ||
        !props.password.length ||
        !props.firstName.length ||
        !props.lastName.length ||
        !props.email.length) {
        success({message: "All fields are necessary"});
        return;
    }

    UserResource.signup({
      username: props.username,
      password: props.password,
      firstName: props.firstName,
      lastName: props.lastName,
      email: props.email})
    .$promise
    .then(function (data) {
      $rootScope.user = data.user;
      $rootScope.$broadcast('user:change', data.user);
      self.user = data.user;
      self.isLoggedIn = true;
      success({message: 'Signed up successfully', user: data.user});
    }, function (data) {
      reject({message: 'Failed to signup'});
    })
  }
}

AuthService.$inject = ['$rootScope', '$state', 'User', 'Page'];
bbmCms.service('AuthService', AuthService);
