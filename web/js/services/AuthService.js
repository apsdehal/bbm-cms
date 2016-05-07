function AuthService($rootScope, $state, UserResource) {

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
    UserResource.login({
      username: props.username, password: props.password
    }).$promise.then(function (data) {
      $rootScope.user = data;
      $rootScope.$broadcast('user:change', data);
      self.user = data;
      self.isLoggedIn = true;
      success({message: 'Logged in successfully', user: data});
    }, function (err) {
      self.isLoggedIn = false;
      reject({message: 'Username or Password is incorrect', error: err});
    })
  };

  this.checkLogin = function(props) {
    props = props || {};
    UserResource.loggedin()
    .$promise
    .then(function (data) {
      var success = props.success || noop;
      $rootScope.user = data;
      $rootScope.$broadcast('user:change', data);
      success({message: 'User is logged in', user: data});
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
    UserResource.logout()
    .$promise
    .then(function (data) {
      $rootScope.user = {};
      self.user = {};
      self.isLoggedIn = false;
      $rootScope.$broadcast('user:change', {});
      success({message: 'Log out successful'});
      $state.go('login');
    }, function (err) {
      reject({message: 'Log out failure', error: err})
    });
  }
}

AuthService.$inject = ['$rootScope', '$state', 'UserResource'];
bbmCms.service('AuthService', AuthService);
