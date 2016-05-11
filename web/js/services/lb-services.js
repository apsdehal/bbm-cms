(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__identities
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/identities/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__identities
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/identities/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__identities
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/identities/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__credentials
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/credentials/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__credentials
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/credentials/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__credentials
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/credentials/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__identities
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries identities of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__identities": {
          isArray: true,
          url: urlBase + "/Users/:id/identities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__identities
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in identities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__identities": {
          url: urlBase + "/Users/:id/identities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__identities
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all identities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__identities": {
          url: urlBase + "/Users/:id/identities",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__identities
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts identities of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__identities": {
          url: urlBase + "/Users/:id/identities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__credentials
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries credentials of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__credentials": {
          isArray: true,
          url: urlBase + "/Users/:id/credentials",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__credentials
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in credentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__credentials": {
          url: urlBase + "/Users/:id/credentials",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__credentials
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all credentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__credentials": {
          url: urlBase + "/Users/:id/credentials",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__credentials
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts credentials of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__credentials": {
          url: urlBase + "/Users/:id/credentials/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         *
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         *
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` -
         *
         *  - `token` – `{string}` -
         *
         *  - `redirect` – `{string=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#signup
         * @methodOf lbServices.User
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "signup": {
          url: urlBase + "/Users/signup",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#reverify
         * @methodOf lbServices.User
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "reverify": {
          url: urlBase + "/Users/reverify",
          method: "POST"
        },

        // INTERNAL. Use Page.owner() instead.
        "::get::page::owner": {
          url: urlBase + "/pages/:id/owner",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Email
 * @header lbServices.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Email",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Emails/:id",
      { 'id': '@id' },
      {
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Email#modelName
    * @propertyOf lbServices.Email
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Email`.
    */
    R.modelName = "Email";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Product
 * @header lbServices.Product
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Product` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Product",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/products/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Product.feed() instead.
        "prototype$__get__feed": {
          url: urlBase + "/products/:id/feed",
          method: "GET"
        },

        // INTERNAL. Use Product.feed.create() instead.
        "prototype$__create__feed": {
          url: urlBase + "/products/:id/feed",
          method: "POST"
        },

        // INTERNAL. Use Product.feed.update() instead.
        "prototype$__update__feed": {
          url: urlBase + "/products/:id/feed",
          method: "PUT"
        },

        // INTERNAL. Use Product.feed.destroy() instead.
        "prototype$__destroy__feed": {
          url: urlBase + "/products/:id/feed",
          method: "DELETE"
        },

        // INTERNAL. Use Product.likes.findById() instead.
        "prototype$__findById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/likes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Product.likes.destroyById() instead.
        "prototype$__destroyById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/likes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Product.likes.updateById() instead.
        "prototype$__updateById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/likes/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__findById__comments
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Find a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "prototype$__findById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/comments/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__destroyById__comments
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Delete a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/comments/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__updateById__comments
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Update a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "prototype$__updateById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.spaceEntity.findById() instead.
        "prototype$__findById__spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/spaceEntity/:fk",
          method: "GET"
        },

        // INTERNAL. Use Product.spaceEntity.destroyById() instead.
        "prototype$__destroyById__spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/spaceEntity/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Product.spaceEntity.updateById() instead.
        "prototype$__updateById__spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/spaceEntity/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.likes() instead.
        "prototype$__get__likes": {
          isArray: true,
          url: urlBase + "/products/:id/likes",
          method: "GET"
        },

        // INTERNAL. Use Product.likes.create() instead.
        "prototype$__create__likes": {
          url: urlBase + "/products/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Product.likes.destroyAll() instead.
        "prototype$__delete__likes": {
          url: urlBase + "/products/:id/likes",
          method: "DELETE"
        },

        // INTERNAL. Use Product.likes.count() instead.
        "prototype$__count__likes": {
          url: urlBase + "/products/:id/likes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__get__comments
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Queries comments of product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/products/:id/comments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__create__comments
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "prototype$__create__comments": {
          url: urlBase + "/products/:id/comments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__delete__comments
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__comments": {
          url: urlBase + "/products/:id/comments",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$__count__comments
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Counts comments of product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__comments": {
          url: urlBase + "/products/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Product.spaceEntity() instead.
        "prototype$__get__spaceEntity": {
          isArray: true,
          url: urlBase + "/products/:id/spaceEntity",
          method: "GET"
        },

        // INTERNAL. Use Product.spaceEntity.create() instead.
        "prototype$__create__spaceEntity": {
          url: urlBase + "/products/:id/spaceEntity",
          method: "POST"
        },

        // INTERNAL. Use Product.spaceEntity.destroyAll() instead.
        "prototype$__delete__spaceEntity": {
          url: urlBase + "/products/:id/spaceEntity",
          method: "DELETE"
        },

        // INTERNAL. Use Product.spaceEntity.count() instead.
        "prototype$__count__spaceEntity": {
          url: urlBase + "/products/:id/spaceEntity/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#exists
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/products/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#findById
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/products/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#find
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/products",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#findOne
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/products/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#count
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/products/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$moodboardAligned
         * @methodOf lbServices.Product
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `multiColor` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "prototype$moodboardAligned": {
          url: urlBase + "/products/:id/moodboard",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#similar
         * @methodOf lbServices.Product
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `hex` – `{string}` -
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "similar": {
          isArray: true,
          url: urlBase + "/products/similar",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Product#prototype$mixNMatch
         * @methodOf lbServices.Product
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        "prototype$mixNMatch": {
          isArray: true,
          url: urlBase + "/products/:id/mix-n-match",
          method: "GET"
        },

        // INTERNAL. Use Feed.product() instead.
        "::get::feed::product": {
          url: urlBase + "/feeds/:id/product",
          method: "GET"
        },

        // INTERNAL. Use SpaceEntity.product() instead.
        "::get::spaceEntity::product": {
          url: urlBase + "/spaceEntities/:id/product",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Product#modelName
    * @propertyOf lbServices.Product
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Product`.
    */
    R.modelName = "Product";

    /**
     * @ngdoc object
     * @name lbServices.Product.feed
     * @header lbServices.Product.feed
     * @object
     * @description
     *
     * The object `Product.feed` groups methods
     * manipulating `Feed` instances related to `Product`.
     *
     * Call {@link lbServices.Product#feed Product.feed()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Product#feed
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Fetches hasOne relation feed.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::get::product::feed"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.feed#create
         * @methodOf lbServices.Product.feed
         *
         * @description
         *
         * Creates a new instance in feed of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed.create = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::create::product::feed"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.feed#createMany
         * @methodOf lbServices.Product.feed
         *
         * @description
         *
         * Creates a new instance in feed of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed.createMany = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::createMany::product::feed"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.feed#destroy
         * @methodOf lbServices.Product.feed
         *
         * @description
         *
         * Deletes feed of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.feed.destroy = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::destroy::product::feed"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.feed#update
         * @methodOf lbServices.Product.feed
         *
         * @description
         *
         * Update feed of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed.update = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::update::product::feed"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Product.likes
     * @header lbServices.Product.likes
     * @object
     * @description
     *
     * The object `Product.likes` groups methods
     * manipulating `Like` instances related to `Product`.
     *
     * Call {@link lbServices.Product#likes Product.likes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Product#likes
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Queries likes of product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::get::product::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.likes#count
         * @methodOf lbServices.Product.likes
         *
         * @description
         *
         * Counts likes of product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.likes.count = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::count::product::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.likes#create
         * @methodOf lbServices.Product.likes
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.create = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::create::product::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.likes#createMany
         * @methodOf lbServices.Product.likes
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.createMany = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::createMany::product::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.likes#destroyAll
         * @methodOf lbServices.Product.likes
         *
         * @description
         *
         * Deletes all likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.destroyAll = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::delete::product::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.likes#destroyById
         * @methodOf lbServices.Product.likes
         *
         * @description
         *
         * Delete a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.destroyById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::destroyById::product::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.likes#findById
         * @methodOf lbServices.Product.likes
         *
         * @description
         *
         * Find a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.findById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::findById::product::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.likes#updateById
         * @methodOf lbServices.Product.likes
         *
         * @description
         *
         * Update a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.updateById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::updateById::product::likes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Product.spaceEntity
     * @header lbServices.Product.spaceEntity
     * @object
     * @description
     *
     * The object `Product.spaceEntity` groups methods
     * manipulating `SpaceEntity` instances related to `Product`.
     *
     * Call {@link lbServices.Product#spaceEntity Product.spaceEntity()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Product#spaceEntity
         * @methodOf lbServices.Product
         *
         * @description
         *
         * Queries spaceEntity of product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntity = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::get::product::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.spaceEntity#count
         * @methodOf lbServices.Product.spaceEntity
         *
         * @description
         *
         * Counts spaceEntity of product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.spaceEntity.count = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::count::product::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.spaceEntity#create
         * @methodOf lbServices.Product.spaceEntity
         *
         * @description
         *
         * Creates a new instance in spaceEntity of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntity.create = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::create::product::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.spaceEntity#createMany
         * @methodOf lbServices.Product.spaceEntity
         *
         * @description
         *
         * Creates a new instance in spaceEntity of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntity.createMany = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::createMany::product::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.spaceEntity#destroyAll
         * @methodOf lbServices.Product.spaceEntity
         *
         * @description
         *
         * Deletes all spaceEntity of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.spaceEntity.destroyAll = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::delete::product::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.spaceEntity#destroyById
         * @methodOf lbServices.Product.spaceEntity
         *
         * @description
         *
         * Delete a related item by id for spaceEntity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for spaceEntity
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.spaceEntity.destroyById = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::destroyById::product::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.spaceEntity#findById
         * @methodOf lbServices.Product.spaceEntity
         *
         * @description
         *
         * Find a related item by id for spaceEntity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for spaceEntity
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntity.findById = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::findById::product::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Product.spaceEntity#updateById
         * @methodOf lbServices.Product.spaceEntity
         *
         * @description
         *
         * Update a related item by id for spaceEntity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for spaceEntity
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntity.updateById = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::updateById::product::spaceEntity"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Fabric
 * @header lbServices.Fabric
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Fabric` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Fabric",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/fabrics/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Fabric#exists
         * @methodOf lbServices.Fabric
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/fabrics/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fabric#findById
         * @methodOf lbServices.Fabric
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fabric` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/fabrics/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fabric#find
         * @methodOf lbServices.Fabric
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fabric` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/fabrics",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fabric#findOne
         * @methodOf lbServices.Fabric
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fabric` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/fabrics/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fabric#count
         * @methodOf lbServices.Fabric
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/fabrics/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fabric#similar
         * @methodOf lbServices.Fabric
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `hex` – `{string}` -
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fabric` object.)
         * </em>
         */
        "similar": {
          isArray: true,
          url: urlBase + "/fabrics/similar",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Fabric#prototype$mixNMatch
         * @methodOf lbServices.Fabric
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fabric` object.)
         * </em>
         */
        "prototype$mixNMatch": {
          isArray: true,
          url: urlBase + "/fabrics/:id/mix-n-match",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Fabric#modelName
    * @propertyOf lbServices.Fabric
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Fabric`.
    */
    R.modelName = "Fabric";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Image
 * @header lbServices.Image
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Image` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Image",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/images/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Image.feed() instead.
        "prototype$__get__feed": {
          url: urlBase + "/images/:id/feed",
          method: "GET"
        },

        // INTERNAL. Use Image.feed.create() instead.
        "prototype$__create__feed": {
          url: urlBase + "/images/:id/feed",
          method: "POST"
        },

        // INTERNAL. Use Image.feed.update() instead.
        "prototype$__update__feed": {
          url: urlBase + "/images/:id/feed",
          method: "PUT"
        },

        // INTERNAL. Use Image.feed.destroy() instead.
        "prototype$__destroy__feed": {
          url: urlBase + "/images/:id/feed",
          method: "DELETE"
        },

        // INTERNAL. Use Image.likes.findById() instead.
        "prototype$__findById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/images/:id/likes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Image.likes.destroyById() instead.
        "prototype$__destroyById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/images/:id/likes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Image.likes.updateById() instead.
        "prototype$__updateById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/images/:id/likes/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#prototype$__findById__comments
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Find a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        "prototype$__findById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/images/:id/comments/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#prototype$__destroyById__comments
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Delete a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/images/:id/comments/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#prototype$__updateById__comments
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Update a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        "prototype$__updateById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/images/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Image.spaceEntity.findById() instead.
        "prototype$__findById__spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/images/:id/spaceEntity/:fk",
          method: "GET"
        },

        // INTERNAL. Use Image.spaceEntity.destroyById() instead.
        "prototype$__destroyById__spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/images/:id/spaceEntity/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Image.spaceEntity.updateById() instead.
        "prototype$__updateById__spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/images/:id/spaceEntity/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Image.likes() instead.
        "prototype$__get__likes": {
          isArray: true,
          url: urlBase + "/images/:id/likes",
          method: "GET"
        },

        // INTERNAL. Use Image.likes.create() instead.
        "prototype$__create__likes": {
          url: urlBase + "/images/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Image.likes.destroyAll() instead.
        "prototype$__delete__likes": {
          url: urlBase + "/images/:id/likes",
          method: "DELETE"
        },

        // INTERNAL. Use Image.likes.count() instead.
        "prototype$__count__likes": {
          url: urlBase + "/images/:id/likes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#prototype$__get__comments
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Queries comments of image.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/images/:id/comments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#prototype$__create__comments
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        "prototype$__create__comments": {
          url: urlBase + "/images/:id/comments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#prototype$__delete__comments
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__comments": {
          url: urlBase + "/images/:id/comments",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#prototype$__count__comments
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Counts comments of image.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__comments": {
          url: urlBase + "/images/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Image.spaceEntity() instead.
        "prototype$__get__spaceEntity": {
          isArray: true,
          url: urlBase + "/images/:id/spaceEntity",
          method: "GET"
        },

        // INTERNAL. Use Image.spaceEntity.create() instead.
        "prototype$__create__spaceEntity": {
          url: urlBase + "/images/:id/spaceEntity",
          method: "POST"
        },

        // INTERNAL. Use Image.spaceEntity.destroyAll() instead.
        "prototype$__delete__spaceEntity": {
          url: urlBase + "/images/:id/spaceEntity",
          method: "DELETE"
        },

        // INTERNAL. Use Image.spaceEntity.count() instead.
        "prototype$__count__spaceEntity": {
          url: urlBase + "/images/:id/spaceEntity/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#exists
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/images/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#findById
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/images/:id",
          method: "GET"
        },

        "upsert": {
          url: urlBase + "/images",
          method: "PUT"
        },


        /**
         * @ngdoc method
         * @name lbServices.Image#find
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/images",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#findOne
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/images/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#count
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/images/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#similar
         * @methodOf lbServices.Image
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `hex` – `{string}` -
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        "similar": {
          isArray: true,
          url: urlBase + "/images/similar",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Image#duplicate
         * @methodOf lbServices.Image
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        "duplicate": {
          isArray: true,
          url: urlBase + "/images/duplicate",
          method: "GET"
        },

        // INTERNAL. Use Feed.image() instead.
        "::get::feed::image": {
          url: urlBase + "/feeds/:id/image",
          method: "GET"
        },

        // INTERNAL. Use SpaceEntity.image() instead.
        "::get::spaceEntity::image": {
          url: urlBase + "/spaceEntities/:id/image",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Image#modelName
    * @propertyOf lbServices.Image
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Image`.
    */
    R.modelName = "Image";

    /**
     * @ngdoc object
     * @name lbServices.Image.feed
     * @header lbServices.Image.feed
     * @object
     * @description
     *
     * The object `Image.feed` groups methods
     * manipulating `Feed` instances related to `Image`.
     *
     * Call {@link lbServices.Image#feed Image.feed()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Image#feed
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Fetches hasOne relation feed.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::get::image::feed"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Image.feed#create
         * @methodOf lbServices.Image.feed
         *
         * @description
         *
         * Creates a new instance in feed of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed.create = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::create::image::feed"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Image.feed#createMany
         * @methodOf lbServices.Image.feed
         *
         * @description
         *
         * Creates a new instance in feed of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed.createMany = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::createMany::image::feed"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Image.feed#destroy
         * @methodOf lbServices.Image.feed
         *
         * @description
         *
         * Deletes feed of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.feed.destroy = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::destroy::image::feed"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Image.feed#update
         * @methodOf lbServices.Image.feed
         *
         * @description
         *
         * Update feed of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed.update = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::update::image::feed"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Image.likes
     * @header lbServices.Image.likes
     * @object
     * @description
     *
     * The object `Image.likes` groups methods
     * manipulating `Like` instances related to `Image`.
     *
     * Call {@link lbServices.Image#likes Image.likes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Image#likes
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Queries likes of image.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::get::image::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Image.likes#count
         * @methodOf lbServices.Image.likes
         *
         * @description
         *
         * Counts likes of image.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.likes.count = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::count::image::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Image.likes#create
         * @methodOf lbServices.Image.likes
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.create = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::create::image::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Image.likes#createMany
         * @methodOf lbServices.Image.likes
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.createMany = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::createMany::image::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Image.likes#destroyAll
         * @methodOf lbServices.Image.likes
         *
         * @description
         *
         * Deletes all likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.destroyAll = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::delete::image::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Image.likes#destroyById
         * @methodOf lbServices.Image.likes
         *
         * @description
         *
         * Delete a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.destroyById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::destroyById::image::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Image.likes#findById
         * @methodOf lbServices.Image.likes
         *
         * @description
         *
         * Find a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.findById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::findById::image::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Image.likes#updateById
         * @methodOf lbServices.Image.likes
         *
         * @description
         *
         * Update a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.updateById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::updateById::image::likes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Image.spaceEntity
     * @header lbServices.Image.spaceEntity
     * @object
     * @description
     *
     * The object `Image.spaceEntity` groups methods
     * manipulating `SpaceEntity` instances related to `Image`.
     *
     * Call {@link lbServices.Image#spaceEntity Image.spaceEntity()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Image#spaceEntity
         * @methodOf lbServices.Image
         *
         * @description
         *
         * Queries spaceEntity of image.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntity = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::get::image::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Image.spaceEntity#count
         * @methodOf lbServices.Image.spaceEntity
         *
         * @description
         *
         * Counts spaceEntity of image.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.spaceEntity.count = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::count::image::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Image.spaceEntity#create
         * @methodOf lbServices.Image.spaceEntity
         *
         * @description
         *
         * Creates a new instance in spaceEntity of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntity.create = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::create::image::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Image.spaceEntity#createMany
         * @methodOf lbServices.Image.spaceEntity
         *
         * @description
         *
         * Creates a new instance in spaceEntity of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntity.createMany = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::createMany::image::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Image.spaceEntity#destroyAll
         * @methodOf lbServices.Image.spaceEntity
         *
         * @description
         *
         * Deletes all spaceEntity of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.spaceEntity.destroyAll = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::delete::image::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Image.spaceEntity#destroyById
         * @methodOf lbServices.Image.spaceEntity
         *
         * @description
         *
         * Delete a related item by id for spaceEntity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for spaceEntity
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.spaceEntity.destroyById = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::destroyById::image::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Image.spaceEntity#findById
         * @methodOf lbServices.Image.spaceEntity
         *
         * @description
         *
         * Find a related item by id for spaceEntity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for spaceEntity
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntity.findById = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::findById::image::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Image.spaceEntity#updateById
         * @methodOf lbServices.Image.spaceEntity
         *
         * @description
         *
         * Update a related item by id for spaceEntity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for spaceEntity
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntity.updateById = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::updateById::image::spaceEntity"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Paint
 * @header lbServices.Paint
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Paint` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Paint",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/paints/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Paint#exists
         * @methodOf lbServices.Paint
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/paints/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Paint#findById
         * @methodOf lbServices.Paint
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Paint` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/paints/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Paint#find
         * @methodOf lbServices.Paint
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Paint` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/paints",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Paint#findOne
         * @methodOf lbServices.Paint
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Paint` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/paints/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Paint#count
         * @methodOf lbServices.Paint
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/paints/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Paint#similar
         * @methodOf lbServices.Paint
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `hex` – `{string}` -
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Paint` object.)
         * </em>
         */
        "similar": {
          isArray: true,
          url: urlBase + "/paints/similar",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Paint#bestMatchPerBrand
         * @methodOf lbServices.Paint
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `hex` – `{string}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Paint` object.)
         * </em>
         */
        "bestMatchPerBrand": {
          isArray: true,
          url: urlBase + "/paints/best-match-per-brand",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Paint#shadecards
         * @methodOf lbServices.Paint
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Paint` object.)
         * </em>
         */
        "shadecards": {
          url: urlBase + "/paints/shadecards",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Paint#info
         * @methodOf lbServices.Paint
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Paint` object.)
         * </em>
         */
        "info": {
          url: urlBase + "/paints/info",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Paint#modelName
    * @propertyOf lbServices.Paint
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Paint`.
    */
    R.modelName = "Paint";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Fusion
 * @header lbServices.Fusion
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Fusion` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Fusion",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/fusions/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Fusion#shopByColor
         * @methodOf lbServices.Fusion
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `hex` – `{string}` -
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Fusion` object.)
         * </em>
         */
        "shopByColor": {
          url: urlBase + "/fusions/shop-by-color",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Fusion#modelName
    * @propertyOf lbServices.Fusion
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Fusion`.
    */
    R.modelName = "Fusion";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Controller
 * @header lbServices.Controller
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Controller` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Controller",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/controllers/:id",
      { 'id': '@id' },
      {
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Controller#modelName
    * @propertyOf lbServices.Controller
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Controller`.
    */
    R.modelName = "Controller";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Job
 * @header lbServices.Job
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Job` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Job",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/jobs/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Job#create
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Job` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/jobs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#createMany
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Job` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/jobs",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#exists
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/jobs/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#findById
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Job` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/jobs/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#find
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Job` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/jobs",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#findOne
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Job` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/jobs/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#count
         * @methodOf lbServices.Job
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/jobs/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#prototype$cancelById
         * @methodOf lbServices.Job
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$cancelById": {
          url: urlBase + "/jobs/:id/cancel",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Job#cancelAll
         * @methodOf lbServices.Job
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `where` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Job` object.)
         * </em>
         */
        "cancelAll": {
          isArray: true,
          url: urlBase + "/jobs/cancel",
          method: "POST"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Job#modelName
    * @propertyOf lbServices.Job
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Job`.
    */
    R.modelName = "Job";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Ideaboard
 * @header lbServices.Ideaboard
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Ideaboard` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Ideaboard",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/ideaboards/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Ideaboard#exists
         * @methodOf lbServices.Ideaboard
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/ideaboards/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ideaboard#findById
         * @methodOf lbServices.Ideaboard
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ideaboard` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/ideaboards/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ideaboard#find
         * @methodOf lbServices.Ideaboard
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ideaboard` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/ideaboards",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ideaboard#findOne
         * @methodOf lbServices.Ideaboard
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ideaboard` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/ideaboards/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ideaboard#count
         * @methodOf lbServices.Ideaboard
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/ideaboards/count",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Ideaboard#modelName
    * @propertyOf lbServices.Ideaboard
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Ideaboard`.
    */
    R.modelName = "Ideaboard";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Page
 * @header lbServices.Page
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Page` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Page",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/pages/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Page.owner() instead.
        "prototype$__get__owner": {
          url: urlBase + "/pages/:id/owner",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__findById__followers
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Find a related item by id for followers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for followers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__findById__followers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/followers/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__exists__followers
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Check the existence of followers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for followers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__exists__followers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/followers/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__findById__followees
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Find a related item by id for followees.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for followees
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__findById__followees": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/followees/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__link__followees
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Add a related item by id for followees.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for followees
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__link__followees": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/followees/rel/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__unlink__followees
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Remove the followees relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for followees
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__unlink__followees": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/followees/rel/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__exists__followees
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Check the existence of followees relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for followees
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__exists__followees": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/followees/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Page.activities.findById() instead.
        "prototype$__findById__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/activities/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__findById__comments
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Find a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__findById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/comments/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__findById__members
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Find a related item by id for members.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for members
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__findById__members": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/members/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__destroyById__members
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Delete a related item by id for members.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for members
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__members": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/members/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Page.wall.findById() instead.
        "prototype$__findById__wall": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/wall/:fk",
          method: "GET"
        },

        // INTERNAL. Use Page.timeline.findById() instead.
        "prototype$__findById__timeline": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/timeline/:fk",
          method: "GET"
        },

        // INTERNAL. Use Page.myspace.findById() instead.
        "prototype$__findById__myspace": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/myspace/:fk",
          method: "GET"
        },

        // INTERNAL. Use Page.myspace.destroyById() instead.
        "prototype$__destroyById__myspace": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/myspace/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Page.myspace.updateById() instead.
        "prototype$__updateById__myspace": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/myspace/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__get__profile
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Fetches hasOne relation profile.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__get__profile": {
          url: urlBase + "/pages/:id/profile",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__create__profile
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Creates a new instance in profile of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__create__profile": {
          url: urlBase + "/pages/:id/profile",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__update__profile
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Update profile of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__update__profile": {
          url: urlBase + "/pages/:id/profile",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__destroy__profile
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Deletes profile of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroy__profile": {
          url: urlBase + "/pages/:id/profile",
          method: "DELETE"
        },

        // INTERNAL. Use Page.spaceEntities.findById() instead.
        "prototype$__findById__spaceEntities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/spaceEntities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Page.spaceEntities.destroyById() instead.
        "prototype$__destroyById__spaceEntities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/spaceEntities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Page.spaceEntities.updateById() instead.
        "prototype$__updateById__spaceEntities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/spaceEntities/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__get__followers
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Queries followers of page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__get__followers": {
          isArray: true,
          url: urlBase + "/pages/:id/followers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__count__followers
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Counts followers of page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__followers": {
          url: urlBase + "/pages/:id/followers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__get__followees
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Queries followees of page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__get__followees": {
          isArray: true,
          url: urlBase + "/pages/:id/followees",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__count__followees
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Counts followees of page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__followees": {
          url: urlBase + "/pages/:id/followees/count",
          method: "GET"
        },

        // INTERNAL. Use Page.activities() instead.
        "prototype$__get__activities": {
          isArray: true,
          url: urlBase + "/pages/:id/activities",
          method: "GET"
        },

        // INTERNAL. Use Page.activities.count() instead.
        "prototype$__count__activities": {
          url: urlBase + "/pages/:id/activities/count",
          method: "GET"
        },

        // INTERNAL. Use Page.likes() instead.
        "prototype$__get__likes": {
          isArray: true,
          url: urlBase + "/pages/:id/likes",
          method: "GET"
        },

        // INTERNAL. Use Page.likes.count() instead.
        "prototype$__count__likes": {
          url: urlBase + "/pages/:id/likes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__get__comments
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Queries comments of page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/pages/:id/comments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__count__comments
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Counts comments of page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__comments": {
          url: urlBase + "/pages/:id/comments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__get__members
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Queries members of page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__get__members": {
          isArray: true,
          url: urlBase + "/pages/:id/members",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__create__members
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Creates a new instance in members of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$__create__members": {
          url: urlBase + "/pages/:id/members",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$__count__members
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Counts members of page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__members": {
          url: urlBase + "/pages/:id/members/count",
          method: "GET"
        },

        // INTERNAL. Use Page.wall() instead.
        "prototype$__get__wall": {
          isArray: true,
          url: urlBase + "/pages/:id/wall",
          method: "GET"
        },

        // INTERNAL. Use Page.wall.count() instead.
        "prototype$__count__wall": {
          url: urlBase + "/pages/:id/wall/count",
          method: "GET"
        },

        // INTERNAL. Use Page.timeline() instead.
        "prototype$__get__timeline": {
          isArray: true,
          url: urlBase + "/pages/:id/timeline",
          method: "GET"
        },

        // INTERNAL. Use Page.timeline.count() instead.
        "prototype$__count__timeline": {
          url: urlBase + "/pages/:id/timeline/count",
          method: "GET"
        },

        // INTERNAL. Use Page.myspace() instead.
        "prototype$__get__myspace": {
          isArray: true,
          url: urlBase + "/pages/:id/myspace",
          method: "GET"
        },

        // INTERNAL. Use Page.myspace.create() instead.
        "prototype$__create__myspace": {
          url: urlBase + "/pages/:id/myspace",
          method: "POST"
        },

        // INTERNAL. Use Page.myspace.destroyAll() instead.
        "prototype$__delete__myspace": {
          url: urlBase + "/pages/:id/myspace",
          method: "DELETE"
        },

        // INTERNAL. Use Page.myspace.count() instead.
        "prototype$__count__myspace": {
          url: urlBase + "/pages/:id/myspace/count",
          method: "GET"
        },

        // INTERNAL. Use Page.spaceEntities() instead.
        "prototype$__get__spaceEntities": {
          isArray: true,
          url: urlBase + "/pages/:id/spaceEntities",
          method: "GET"
        },

        // INTERNAL. Use Page.spaceEntities.create() instead.
        "prototype$__create__spaceEntities": {
          url: urlBase + "/pages/:id/spaceEntities",
          method: "POST"
        },

        // INTERNAL. Use Page.spaceEntities.destroyAll() instead.
        "prototype$__delete__spaceEntities": {
          url: urlBase + "/pages/:id/spaceEntities",
          method: "DELETE"
        },

        // INTERNAL. Use Page.spaceEntities.count() instead.
        "prototype$__count__spaceEntities": {
          url: urlBase + "/pages/:id/spaceEntities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#create
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/pages",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#createMany
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/pages",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#exists
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/pages/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#findById
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/pages/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#find
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/pages",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#count
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/pages/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$updateAttributes
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/pages/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#prototype$profileImage
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Uploads a file
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `options` – `{object=}` -
         *
         * @param {Object} postData Request data.
         *
         *  - `ctx` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "prototype$profileImage": {
          url: urlBase + "/pages/:id/profileImage",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#findByName
         * @methodOf lbServices.Page
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `name` – `{string}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "findByName": {
          url: urlBase + "/pages/byname",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Page#default
         * @methodOf lbServices.Page
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        "default": {
          url: urlBase + "/pages/default",
          method: "GET"
        },

        // INTERNAL. Use Activity.page() instead.
        "::get::activity::page": {
          url: urlBase + "/activities/:id/page",
          method: "GET"
        },

        // INTERNAL. Use Like.page() instead.
        "::get::like::page": {
          url: urlBase + "/likes/:id/page",
          method: "GET"
        },

        // INTERNAL. Use Wall.page() instead.
        "::get::wall::page": {
          url: urlBase + "/walls/:id/page",
          method: "GET"
        },

        // INTERNAL. Use Timeline.page() instead.
        "::get::timeline::page": {
          url: urlBase + "/timelines/:id/page",
          method: "GET"
        },

        // INTERNAL. Use Space.page() instead.
        "::get::space::page": {
          url: urlBase + "/spaces/:id/page",
          method: "GET"
        },

        // INTERNAL. Use SpaceEntity.page() instead.
        "::get::spaceEntity::page": {
          url: urlBase + "/spaceEntities/:id/page",
          method: "GET"
        },

        // INTERNAL. Use Discussion.page() instead.
        "::get::discussion::page": {
          url: urlBase + "/discussions/:id/page",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Page#modelName
    * @propertyOf lbServices.Page
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Page`.
    */
    R.modelName = "Page";


        /**
         * @ngdoc method
         * @name lbServices.Page#owner
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Fetches belongsTo relation owner.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R.owner = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::page::owner"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Page.activities
     * @header lbServices.Page.activities
     * @object
     * @description
     *
     * The object `Page.activities` groups methods
     * manipulating `Activity` instances related to `Page`.
     *
     * Call {@link lbServices.Page#activities Page.activities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Page#activities
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Queries activities of page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::get::page::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.activities#count
         * @methodOf lbServices.Page.activities
         *
         * @description
         *
         * Counts activities of page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.activities.count = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::count::page::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.activities#findById
         * @methodOf lbServices.Page.activities
         *
         * @description
         *
         * Find a related item by id for activities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.findById = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::findById::page::activities"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Page.wall
     * @header lbServices.Page.wall
     * @object
     * @description
     *
     * The object `Page.wall` groups methods
     * manipulating `Feed` instances related to `Page`.
     *
     * Call {@link lbServices.Page#wall Page.wall()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Page#wall
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Queries wall of page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.wall = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::get::page::wall"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.wall#count
         * @methodOf lbServices.Page.wall
         *
         * @description
         *
         * Counts wall of page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.wall.count = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::count::page::wall"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.wall#findById
         * @methodOf lbServices.Page.wall
         *
         * @description
         *
         * Find a related item by id for wall.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for wall
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.wall.findById = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::findById::page::wall"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Page.timeline
     * @header lbServices.Page.timeline
     * @object
     * @description
     *
     * The object `Page.timeline` groups methods
     * manipulating `Feed` instances related to `Page`.
     *
     * Call {@link lbServices.Page#timeline Page.timeline()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Page#timeline
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Queries timeline of page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.timeline = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::get::page::timeline"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.timeline#count
         * @methodOf lbServices.Page.timeline
         *
         * @description
         *
         * Counts timeline of page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.timeline.count = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::count::page::timeline"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.timeline#findById
         * @methodOf lbServices.Page.timeline
         *
         * @description
         *
         * Find a related item by id for timeline.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for timeline
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.timeline.findById = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::findById::page::timeline"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Page.myspace
     * @header lbServices.Page.myspace
     * @object
     * @description
     *
     * The object `Page.myspace` groups methods
     * manipulating `Space` instances related to `Page`.
     *
     * Call {@link lbServices.Page#myspace Page.myspace()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Page#myspace
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Queries myspace of page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Space` object.)
         * </em>
         */
        R.myspace = function() {
          var TargetResource = $injector.get("Space");
          var action = TargetResource["::get::page::myspace"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.myspace#count
         * @methodOf lbServices.Page.myspace
         *
         * @description
         *
         * Counts myspace of page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.myspace.count = function() {
          var TargetResource = $injector.get("Space");
          var action = TargetResource["::count::page::myspace"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.myspace#create
         * @methodOf lbServices.Page.myspace
         *
         * @description
         *
         * Creates a new instance in myspace of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Space` object.)
         * </em>
         */
        R.myspace.create = function() {
          var TargetResource = $injector.get("Space");
          var action = TargetResource["::create::page::myspace"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.myspace#createMany
         * @methodOf lbServices.Page.myspace
         *
         * @description
         *
         * Creates a new instance in myspace of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Space` object.)
         * </em>
         */
        R.myspace.createMany = function() {
          var TargetResource = $injector.get("Space");
          var action = TargetResource["::createMany::page::myspace"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.myspace#destroyAll
         * @methodOf lbServices.Page.myspace
         *
         * @description
         *
         * Deletes all myspace of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.myspace.destroyAll = function() {
          var TargetResource = $injector.get("Space");
          var action = TargetResource["::delete::page::myspace"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.myspace#destroyById
         * @methodOf lbServices.Page.myspace
         *
         * @description
         *
         * Delete a related item by id for myspace.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for myspace
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.myspace.destroyById = function() {
          var TargetResource = $injector.get("Space");
          var action = TargetResource["::destroyById::page::myspace"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.myspace#findById
         * @methodOf lbServices.Page.myspace
         *
         * @description
         *
         * Find a related item by id for myspace.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for myspace
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Space` object.)
         * </em>
         */
        R.myspace.findById = function() {
          var TargetResource = $injector.get("Space");
          var action = TargetResource["::findById::page::myspace"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.myspace#updateById
         * @methodOf lbServices.Page.myspace
         *
         * @description
         *
         * Update a related item by id for myspace.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for myspace
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Space` object.)
         * </em>
         */
        R.myspace.updateById = function() {
          var TargetResource = $injector.get("Space");
          var action = TargetResource["::updateById::page::myspace"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Page.spaceEntities
     * @header lbServices.Page.spaceEntities
     * @object
     * @description
     *
     * The object `Page.spaceEntities` groups methods
     * manipulating `SpaceEntity` instances related to `Page`.
     *
     * Call {@link lbServices.Page#spaceEntities Page.spaceEntities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Page#spaceEntities
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Queries spaceEntities of page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntities = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::get::page::spaceEntities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.spaceEntities#count
         * @methodOf lbServices.Page.spaceEntities
         *
         * @description
         *
         * Counts spaceEntities of page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.spaceEntities.count = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::count::page::spaceEntities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.spaceEntities#create
         * @methodOf lbServices.Page.spaceEntities
         *
         * @description
         *
         * Creates a new instance in spaceEntities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntities.create = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::create::page::spaceEntities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.spaceEntities#createMany
         * @methodOf lbServices.Page.spaceEntities
         *
         * @description
         *
         * Creates a new instance in spaceEntities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntities.createMany = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::createMany::page::spaceEntities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.spaceEntities#destroyAll
         * @methodOf lbServices.Page.spaceEntities
         *
         * @description
         *
         * Deletes all spaceEntities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.spaceEntities.destroyAll = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::delete::page::spaceEntities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.spaceEntities#destroyById
         * @methodOf lbServices.Page.spaceEntities
         *
         * @description
         *
         * Delete a related item by id for spaceEntities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for spaceEntities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.spaceEntities.destroyById = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::destroyById::page::spaceEntities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.spaceEntities#findById
         * @methodOf lbServices.Page.spaceEntities
         *
         * @description
         *
         * Find a related item by id for spaceEntities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for spaceEntities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntities.findById = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::findById::page::spaceEntities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.spaceEntities#updateById
         * @methodOf lbServices.Page.spaceEntities
         *
         * @description
         *
         * Update a related item by id for spaceEntities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for spaceEntities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntities.updateById = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::updateById::page::spaceEntities"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Page.likes
     * @header lbServices.Page.likes
     * @object
     * @description
     *
     * The object `Page.likes` groups methods
     * manipulating `Like` instances related to `Page`.
     *
     * Call {@link lbServices.Page#likes Page.likes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Page#likes
         * @methodOf lbServices.Page
         *
         * @description
         *
         * Queries likes of page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::get::page::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Page.likes#count
         * @methodOf lbServices.Page.likes
         *
         * @description
         *
         * Counts likes of page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.likes.count = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::count::page::likes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Container
 * @header lbServices.Container
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Container` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Container",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/containers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Container#getContainers
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getContainers": {
          isArray: true,
          url: urlBase + "/containers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#createContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "createContainer": {
          url: urlBase + "/containers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#destroyContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        "destroyContainer": {
          url: urlBase + "/containers/:container",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getContainer
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getContainer": {
          url: urlBase + "/containers/:container",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getFiles
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getFiles": {
          isArray: true,
          url: urlBase + "/containers/:container/files",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#getFile
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` -
         *
         *  - `file` – `{string=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Container` object.)
         * </em>
         */
        "getFile": {
          url: urlBase + "/containers/:container/files/:file",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#removeFile
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` -
         *
         *  - `file` – `{string=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `` – `{undefined=}` -
         */
        "removeFile": {
          url: urlBase + "/containers/:container/files/:file",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#upload
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` -
         *
         *  - `res` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` -
         */
        "upload": {
          url: urlBase + "/containers/:container/upload",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Container#download
         * @methodOf lbServices.Container
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `container` – `{string=}` -
         *
         *  - `file` – `{string=}` -
         *
         *  - `res` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "download": {
          url: urlBase + "/containers/:container/download/:file",
          method: "GET"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Container#modelName
    * @propertyOf lbServices.Container
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Container`.
    */
    R.modelName = "Container";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Media
 * @header lbServices.Media
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Media` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Media",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/media/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Media#upload
         * @methodOf lbServices.Media
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` -
         *
         *  - `res` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `result` – `{object=}` -
         */
        "upload": {
          url: urlBase + "/media/upload",
          method: "POST"
        },
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Media#modelName
    * @propertyOf lbServices.Media
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Media`.
    */
    R.modelName = "Media";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Feed
 * @header lbServices.Feed
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Feed` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Feed",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/feeds/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Feed.product() instead.
        "prototype$__get__product": {
          url: urlBase + "/feeds/:id/product",
          method: "GET"
        },

        // INTERNAL. Use Feed.image() instead.
        "prototype$__get__image": {
          url: urlBase + "/feeds/:id/image",
          method: "GET"
        },

        // INTERNAL. Use Feed.activities.findById() instead.
        "prototype$__findById__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/feeds/:id/activities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Feed.activities.destroyById() instead.
        "prototype$__destroyById__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/feeds/:id/activities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Feed.activities.updateById() instead.
        "prototype$__updateById__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/feeds/:id/activities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Feed.article() instead.
        "prototype$__get__article": {
          url: urlBase + "/feeds/:id/article",
          method: "GET"
        },

        // INTERNAL. Use Feed.moodboard() instead.
        "prototype$__get__moodboard": {
          url: urlBase + "/feeds/:id/moodboard",
          method: "GET"
        },

        // INTERNAL. Use Feed.discussion() instead.
        "prototype$__get__discussion": {
          url: urlBase + "/feeds/:id/discussion",
          method: "GET"
        },

        // INTERNAL. Use Feed.activities() instead.
        "prototype$__get__activities": {
          isArray: true,
          url: urlBase + "/feeds/:id/activities",
          method: "GET"
        },

        // INTERNAL. Use Feed.activities.create() instead.
        "prototype$__create__activities": {
          url: urlBase + "/feeds/:id/activities",
          method: "POST"
        },

        // INTERNAL. Use Feed.activities.destroyAll() instead.
        "prototype$__delete__activities": {
          url: urlBase + "/feeds/:id/activities",
          method: "DELETE"
        },

        // INTERNAL. Use Feed.activities.count() instead.
        "prototype$__count__activities": {
          url: urlBase + "/feeds/:id/activities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feed#create
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/feeds",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feed#createMany
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/feeds",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feed#upsert
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/feeds",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feed#exists
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/feeds/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feed#findById
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/feeds/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feed#find
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/feeds",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feed#findOne
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/feeds/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feed#updateAll
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/feeds/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feed#deleteById
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/feeds/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feed#count
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/feeds/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feed#prototype$updateAttributes
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/feeds/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feed#createChangeStream
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/feeds/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feed#prototype$entity
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        "prototype$entity": {
          url: urlBase + "/feeds/:id/entity",
          method: "GET"
        },

        // INTERNAL. Use Product.feed() instead.
        "::get::product::feed": {
          url: urlBase + "/products/:id/feed",
          method: "GET"
        },

        // INTERNAL. Use Product.feed.create() instead.
        "::create::product::feed": {
          url: urlBase + "/products/:id/feed",
          method: "POST"
        },

        // INTERNAL. Use Product.feed.createMany() instead.
        "::createMany::product::feed": {
          isArray: true,
          url: urlBase + "/products/:id/feed",
          method: "POST"
        },

        // INTERNAL. Use Product.feed.update() instead.
        "::update::product::feed": {
          url: urlBase + "/products/:id/feed",
          method: "PUT"
        },

        // INTERNAL. Use Product.feed.destroy() instead.
        "::destroy::product::feed": {
          url: urlBase + "/products/:id/feed",
          method: "DELETE"
        },

        // INTERNAL. Use Image.feed() instead.
        "::get::image::feed": {
          url: urlBase + "/images/:id/feed",
          method: "GET"
        },

        // INTERNAL. Use Image.feed.create() instead.
        "::create::image::feed": {
          url: urlBase + "/images/:id/feed",
          method: "POST"
        },

        // INTERNAL. Use Image.feed.createMany() instead.
        "::createMany::image::feed": {
          isArray: true,
          url: urlBase + "/images/:id/feed",
          method: "POST"
        },

        // INTERNAL. Use Image.feed.update() instead.
        "::update::image::feed": {
          url: urlBase + "/images/:id/feed",
          method: "PUT"
        },

        // INTERNAL. Use Image.feed.destroy() instead.
        "::destroy::image::feed": {
          url: urlBase + "/images/:id/feed",
          method: "DELETE"
        },

        // INTERNAL. Use Page.wall.findById() instead.
        "::findById::page::wall": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/wall/:fk",
          method: "GET"
        },

        // INTERNAL. Use Page.timeline.findById() instead.
        "::findById::page::timeline": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/timeline/:fk",
          method: "GET"
        },

        // INTERNAL. Use Page.wall() instead.
        "::get::page::wall": {
          isArray: true,
          url: urlBase + "/pages/:id/wall",
          method: "GET"
        },

        // INTERNAL. Use Page.wall.count() instead.
        "::count::page::wall": {
          url: urlBase + "/pages/:id/wall/count",
          method: "GET"
        },

        // INTERNAL. Use Page.timeline() instead.
        "::get::page::timeline": {
          isArray: true,
          url: urlBase + "/pages/:id/timeline",
          method: "GET"
        },

        // INTERNAL. Use Page.timeline.count() instead.
        "::count::page::timeline": {
          url: urlBase + "/pages/:id/timeline/count",
          method: "GET"
        },

        // INTERNAL. Use Activity.feed() instead.
        "::get::activity::feed": {
          url: urlBase + "/activities/:id/feed",
          method: "GET"
        },

        // INTERNAL. Use Wall.feed() instead.
        "::get::wall::feed": {
          url: urlBase + "/walls/:id/feed",
          method: "GET"
        },

        // INTERNAL. Use Timeline.feed() instead.
        "::get::timeline::feed": {
          url: urlBase + "/timelines/:id/feed",
          method: "GET"
        },

        // INTERNAL. Use Article.feed() instead.
        "::get::article::feed": {
          url: urlBase + "/articles/:id/feed",
          method: "GET"
        },

        // INTERNAL. Use Article.feed.create() instead.
        "::create::article::feed": {
          url: urlBase + "/articles/:id/feed",
          method: "POST"
        },

        // INTERNAL. Use Article.feed.createMany() instead.
        "::createMany::article::feed": {
          isArray: true,
          url: urlBase + "/articles/:id/feed",
          method: "POST"
        },

        // INTERNAL. Use Article.feed.update() instead.
        "::update::article::feed": {
          url: urlBase + "/articles/:id/feed",
          method: "PUT"
        },

        // INTERNAL. Use Article.feed.destroy() instead.
        "::destroy::article::feed": {
          url: urlBase + "/articles/:id/feed",
          method: "DELETE"
        },

        // INTERNAL. Use Moodboard.feed() instead.
        "::get::moodboard::feed": {
          url: urlBase + "/moodboards/:id/feed",
          method: "GET"
        },

        // INTERNAL. Use Moodboard.feed.create() instead.
        "::create::moodboard::feed": {
          url: urlBase + "/moodboards/:id/feed",
          method: "POST"
        },

        // INTERNAL. Use Moodboard.feed.createMany() instead.
        "::createMany::moodboard::feed": {
          isArray: true,
          url: urlBase + "/moodboards/:id/feed",
          method: "POST"
        },

        // INTERNAL. Use Moodboard.feed.update() instead.
        "::update::moodboard::feed": {
          url: urlBase + "/moodboards/:id/feed",
          method: "PUT"
        },

        // INTERNAL. Use Moodboard.feed.destroy() instead.
        "::destroy::moodboard::feed": {
          url: urlBase + "/moodboards/:id/feed",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.feed() instead.
        "::get::discussion::feed": {
          url: urlBase + "/discussions/:id/feed",
          method: "GET"
        },

        // INTERNAL. Use Discussion.feed.create() instead.
        "::create::discussion::feed": {
          url: urlBase + "/discussions/:id/feed",
          method: "POST"
        },

        // INTERNAL. Use Discussion.feed.createMany() instead.
        "::createMany::discussion::feed": {
          isArray: true,
          url: urlBase + "/discussions/:id/feed",
          method: "POST"
        },

        // INTERNAL. Use Discussion.feed.update() instead.
        "::update::discussion::feed": {
          url: urlBase + "/discussions/:id/feed",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.feed.destroy() instead.
        "::destroy::discussion::feed": {
          url: urlBase + "/discussions/:id/feed",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Feed#updateOrCreate
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Feed#update
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Feed#destroyById
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Feed#removeById
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Feed#modelName
    * @propertyOf lbServices.Feed
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Feed`.
    */
    R.modelName = "Feed";


        /**
         * @ngdoc method
         * @name lbServices.Feed#product
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Fetches belongsTo relation product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R.product = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::get::feed::product"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Feed#image
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Fetches belongsTo relation image.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        R.image = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::get::feed::image"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Feed.activities
     * @header lbServices.Feed.activities
     * @object
     * @description
     *
     * The object `Feed.activities` groups methods
     * manipulating `Activity` instances related to `Feed`.
     *
     * Call {@link lbServices.Feed#activities Feed.activities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Feed#activities
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Queries activities of feed.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::get::feed::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Feed.activities#count
         * @methodOf lbServices.Feed.activities
         *
         * @description
         *
         * Counts activities of feed.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.activities.count = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::count::feed::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Feed.activities#create
         * @methodOf lbServices.Feed.activities
         *
         * @description
         *
         * Creates a new instance in activities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.create = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::create::feed::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Feed.activities#createMany
         * @methodOf lbServices.Feed.activities
         *
         * @description
         *
         * Creates a new instance in activities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.createMany = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::createMany::feed::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Feed.activities#destroyAll
         * @methodOf lbServices.Feed.activities
         *
         * @description
         *
         * Deletes all activities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.activities.destroyAll = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::delete::feed::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Feed.activities#destroyById
         * @methodOf lbServices.Feed.activities
         *
         * @description
         *
         * Delete a related item by id for activities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.activities.destroyById = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::destroyById::feed::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Feed.activities#findById
         * @methodOf lbServices.Feed.activities
         *
         * @description
         *
         * Find a related item by id for activities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.findById = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::findById::feed::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Feed.activities#updateById
         * @methodOf lbServices.Feed.activities
         *
         * @description
         *
         * Update a related item by id for activities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.updateById = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::updateById::feed::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Feed#article
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Fetches belongsTo relation article.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Article` object.)
         * </em>
         */
        R.article = function() {
          var TargetResource = $injector.get("Article");
          var action = TargetResource["::get::feed::article"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Feed#moodboard
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Fetches belongsTo relation moodboard.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Moodboard` object.)
         * </em>
         */
        R.moodboard = function() {
          var TargetResource = $injector.get("Moodboard");
          var action = TargetResource["::get::feed::moodboard"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Feed#discussion
         * @methodOf lbServices.Feed
         *
         * @description
         *
         * Fetches belongsTo relation discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R.discussion = function() {
          var TargetResource = $injector.get("Discussion");
          var action = TargetResource["::get::feed::discussion"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Activity
 * @header lbServices.Activity
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Activity` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Activity",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/activities/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Activity.page() instead.
        "prototype$__get__page": {
          url: urlBase + "/activities/:id/page",
          method: "GET"
        },

        // INTERNAL. Use Activity.feed() instead.
        "prototype$__get__feed": {
          url: urlBase + "/activities/:id/feed",
          method: "GET"
        },

        // INTERNAL. Use Activity.walls.findById() instead.
        "prototype$__findById__walls": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/walls/:fk",
          method: "GET"
        },

        // INTERNAL. Use Activity.walls.destroyById() instead.
        "prototype$__destroyById__walls": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/walls/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Activity.walls.updateById() instead.
        "prototype$__updateById__walls": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/walls/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Activity.walls.link() instead.
        "prototype$__link__walls": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/walls/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Activity.walls.unlink() instead.
        "prototype$__unlink__walls": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/walls/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Activity.walls.exists() instead.
        "prototype$__exists__walls": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/walls/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Activity.timelines.findById() instead.
        "prototype$__findById__timelines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/timelines/:fk",
          method: "GET"
        },

        // INTERNAL. Use Activity.timelines.destroyById() instead.
        "prototype$__destroyById__timelines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/timelines/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Activity.timelines.updateById() instead.
        "prototype$__updateById__timelines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/timelines/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Activity.timelines.link() instead.
        "prototype$__link__timelines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/timelines/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Activity.timelines.unlink() instead.
        "prototype$__unlink__timelines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/timelines/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Activity.timelines.exists() instead.
        "prototype$__exists__timelines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/timelines/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Activity.walls() instead.
        "prototype$__get__walls": {
          isArray: true,
          url: urlBase + "/activities/:id/walls",
          method: "GET"
        },

        // INTERNAL. Use Activity.walls.create() instead.
        "prototype$__create__walls": {
          url: urlBase + "/activities/:id/walls",
          method: "POST"
        },

        // INTERNAL. Use Activity.walls.destroyAll() instead.
        "prototype$__delete__walls": {
          url: urlBase + "/activities/:id/walls",
          method: "DELETE"
        },

        // INTERNAL. Use Activity.walls.count() instead.
        "prototype$__count__walls": {
          url: urlBase + "/activities/:id/walls/count",
          method: "GET"
        },

        // INTERNAL. Use Activity.timelines() instead.
        "prototype$__get__timelines": {
          isArray: true,
          url: urlBase + "/activities/:id/timelines",
          method: "GET"
        },

        // INTERNAL. Use Activity.timelines.create() instead.
        "prototype$__create__timelines": {
          url: urlBase + "/activities/:id/timelines",
          method: "POST"
        },

        // INTERNAL. Use Activity.timelines.destroyAll() instead.
        "prototype$__delete__timelines": {
          url: urlBase + "/activities/:id/timelines",
          method: "DELETE"
        },

        // INTERNAL. Use Activity.timelines.count() instead.
        "prototype$__count__timelines": {
          url: urlBase + "/activities/:id/timelines/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#create
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/activities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#createMany
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/activities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#upsert
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/activities",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#exists
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/activities/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#findById
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/activities/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#find
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/activities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#findOne
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/activities/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#updateAll
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/activities/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#deleteById
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/activities/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#count
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/activities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#prototype$updateAttributes
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/activities/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Activity#createChangeStream
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/activities/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Page.activities.findById() instead.
        "::findById::page::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/activities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Page.activities() instead.
        "::get::page::activities": {
          isArray: true,
          url: urlBase + "/pages/:id/activities",
          method: "GET"
        },

        // INTERNAL. Use Page.activities.count() instead.
        "::count::page::activities": {
          url: urlBase + "/pages/:id/activities/count",
          method: "GET"
        },

        // INTERNAL. Use Feed.activities.findById() instead.
        "::findById::feed::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/feeds/:id/activities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Feed.activities.destroyById() instead.
        "::destroyById::feed::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/feeds/:id/activities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Feed.activities.updateById() instead.
        "::updateById::feed::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/feeds/:id/activities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Feed.activities() instead.
        "::get::feed::activities": {
          isArray: true,
          url: urlBase + "/feeds/:id/activities",
          method: "GET"
        },

        // INTERNAL. Use Feed.activities.create() instead.
        "::create::feed::activities": {
          url: urlBase + "/feeds/:id/activities",
          method: "POST"
        },

        // INTERNAL. Use Feed.activities.createMany() instead.
        "::createMany::feed::activities": {
          isArray: true,
          url: urlBase + "/feeds/:id/activities",
          method: "POST"
        },

        // INTERNAL. Use Feed.activities.destroyAll() instead.
        "::delete::feed::activities": {
          url: urlBase + "/feeds/:id/activities",
          method: "DELETE"
        },

        // INTERNAL. Use Feed.activities.count() instead.
        "::count::feed::activities": {
          url: urlBase + "/feeds/:id/activities/count",
          method: "GET"
        },

        // INTERNAL. Use Wall.activities.findById() instead.
        "::findById::wall::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/walls/:id/activities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Wall.activities.destroyById() instead.
        "::destroyById::wall::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/walls/:id/activities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Wall.activities.updateById() instead.
        "::updateById::wall::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/walls/:id/activities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Wall.activities.link() instead.
        "::link::wall::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/walls/:id/activities/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Wall.activities.unlink() instead.
        "::unlink::wall::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/walls/:id/activities/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Wall.activities.exists() instead.
        "::exists::wall::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/walls/:id/activities/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Wall.activities() instead.
        "::get::wall::activities": {
          isArray: true,
          url: urlBase + "/walls/:id/activities",
          method: "GET"
        },

        // INTERNAL. Use Wall.activities.create() instead.
        "::create::wall::activities": {
          url: urlBase + "/walls/:id/activities",
          method: "POST"
        },

        // INTERNAL. Use Wall.activities.createMany() instead.
        "::createMany::wall::activities": {
          isArray: true,
          url: urlBase + "/walls/:id/activities",
          method: "POST"
        },

        // INTERNAL. Use Wall.activities.destroyAll() instead.
        "::delete::wall::activities": {
          url: urlBase + "/walls/:id/activities",
          method: "DELETE"
        },

        // INTERNAL. Use Wall.activities.count() instead.
        "::count::wall::activities": {
          url: urlBase + "/walls/:id/activities/count",
          method: "GET"
        },

        // INTERNAL. Use Timeline.activities.findById() instead.
        "::findById::timeline::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/timelines/:id/activities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Timeline.activities.destroyById() instead.
        "::destroyById::timeline::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/timelines/:id/activities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Timeline.activities.updateById() instead.
        "::updateById::timeline::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/timelines/:id/activities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Timeline.activities.link() instead.
        "::link::timeline::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/timelines/:id/activities/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Timeline.activities.unlink() instead.
        "::unlink::timeline::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/timelines/:id/activities/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Timeline.activities.exists() instead.
        "::exists::timeline::activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/timelines/:id/activities/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Timeline.activities() instead.
        "::get::timeline::activities": {
          isArray: true,
          url: urlBase + "/timelines/:id/activities",
          method: "GET"
        },

        // INTERNAL. Use Timeline.activities.create() instead.
        "::create::timeline::activities": {
          url: urlBase + "/timelines/:id/activities",
          method: "POST"
        },

        // INTERNAL. Use Timeline.activities.createMany() instead.
        "::createMany::timeline::activities": {
          isArray: true,
          url: urlBase + "/timelines/:id/activities",
          method: "POST"
        },

        // INTERNAL. Use Timeline.activities.destroyAll() instead.
        "::delete::timeline::activities": {
          url: urlBase + "/timelines/:id/activities",
          method: "DELETE"
        },

        // INTERNAL. Use Timeline.activities.count() instead.
        "::count::timeline::activities": {
          url: urlBase + "/timelines/:id/activities/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Activity#updateOrCreate
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Activity#update
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Activity#destroyById
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Activity#removeById
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Activity#modelName
    * @propertyOf lbServices.Activity
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Activity`.
    */
    R.modelName = "Activity";


        /**
         * @ngdoc method
         * @name lbServices.Activity#page
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Fetches belongsTo relation page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        R.page = function() {
          var TargetResource = $injector.get("Page");
          var action = TargetResource["::get::activity::page"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity#feed
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Fetches belongsTo relation feed.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::get::activity::feed"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Activity.walls
     * @header lbServices.Activity.walls
     * @object
     * @description
     *
     * The object `Activity.walls` groups methods
     * manipulating `Wall` instances related to `Activity`.
     *
     * Call {@link lbServices.Activity#walls Activity.walls()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Activity#walls
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Queries walls of activity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wall` object.)
         * </em>
         */
        R.walls = function() {
          var TargetResource = $injector.get("Wall");
          var action = TargetResource["::get::activity::walls"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity.walls#count
         * @methodOf lbServices.Activity.walls
         *
         * @description
         *
         * Counts walls of activity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.walls.count = function() {
          var TargetResource = $injector.get("Wall");
          var action = TargetResource["::count::activity::walls"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity.walls#create
         * @methodOf lbServices.Activity.walls
         *
         * @description
         *
         * Creates a new instance in walls of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wall` object.)
         * </em>
         */
        R.walls.create = function() {
          var TargetResource = $injector.get("Wall");
          var action = TargetResource["::create::activity::walls"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity.walls#createMany
         * @methodOf lbServices.Activity.walls
         *
         * @description
         *
         * Creates a new instance in walls of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wall` object.)
         * </em>
         */
        R.walls.createMany = function() {
          var TargetResource = $injector.get("Wall");
          var action = TargetResource["::createMany::activity::walls"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity.walls#destroyAll
         * @methodOf lbServices.Activity.walls
         *
         * @description
         *
         * Deletes all walls of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.walls.destroyAll = function() {
          var TargetResource = $injector.get("Wall");
          var action = TargetResource["::delete::activity::walls"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity.walls#destroyById
         * @methodOf lbServices.Activity.walls
         *
         * @description
         *
         * Delete a related item by id for walls.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for walls
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.walls.destroyById = function() {
          var TargetResource = $injector.get("Wall");
          var action = TargetResource["::destroyById::activity::walls"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity.walls#exists
         * @methodOf lbServices.Activity.walls
         *
         * @description
         *
         * Check the existence of walls relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for walls
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wall` object.)
         * </em>
         */
        R.walls.exists = function() {
          var TargetResource = $injector.get("Wall");
          var action = TargetResource["::exists::activity::walls"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity.walls#findById
         * @methodOf lbServices.Activity.walls
         *
         * @description
         *
         * Find a related item by id for walls.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for walls
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wall` object.)
         * </em>
         */
        R.walls.findById = function() {
          var TargetResource = $injector.get("Wall");
          var action = TargetResource["::findById::activity::walls"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity.walls#link
         * @methodOf lbServices.Activity.walls
         *
         * @description
         *
         * Add a related item by id for walls.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for walls
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wall` object.)
         * </em>
         */
        R.walls.link = function() {
          var TargetResource = $injector.get("Wall");
          var action = TargetResource["::link::activity::walls"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity.walls#unlink
         * @methodOf lbServices.Activity.walls
         *
         * @description
         *
         * Remove the walls relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for walls
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.walls.unlink = function() {
          var TargetResource = $injector.get("Wall");
          var action = TargetResource["::unlink::activity::walls"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity.walls#updateById
         * @methodOf lbServices.Activity.walls
         *
         * @description
         *
         * Update a related item by id for walls.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for walls
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wall` object.)
         * </em>
         */
        R.walls.updateById = function() {
          var TargetResource = $injector.get("Wall");
          var action = TargetResource["::updateById::activity::walls"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Activity.timelines
     * @header lbServices.Activity.timelines
     * @object
     * @description
     *
     * The object `Activity.timelines` groups methods
     * manipulating `Timeline` instances related to `Activity`.
     *
     * Call {@link lbServices.Activity#timelines Activity.timelines()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Activity#timelines
         * @methodOf lbServices.Activity
         *
         * @description
         *
         * Queries timelines of activity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Timeline` object.)
         * </em>
         */
        R.timelines = function() {
          var TargetResource = $injector.get("Timeline");
          var action = TargetResource["::get::activity::timelines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity.timelines#count
         * @methodOf lbServices.Activity.timelines
         *
         * @description
         *
         * Counts timelines of activity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.timelines.count = function() {
          var TargetResource = $injector.get("Timeline");
          var action = TargetResource["::count::activity::timelines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity.timelines#create
         * @methodOf lbServices.Activity.timelines
         *
         * @description
         *
         * Creates a new instance in timelines of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Timeline` object.)
         * </em>
         */
        R.timelines.create = function() {
          var TargetResource = $injector.get("Timeline");
          var action = TargetResource["::create::activity::timelines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity.timelines#createMany
         * @methodOf lbServices.Activity.timelines
         *
         * @description
         *
         * Creates a new instance in timelines of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Timeline` object.)
         * </em>
         */
        R.timelines.createMany = function() {
          var TargetResource = $injector.get("Timeline");
          var action = TargetResource["::createMany::activity::timelines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity.timelines#destroyAll
         * @methodOf lbServices.Activity.timelines
         *
         * @description
         *
         * Deletes all timelines of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.timelines.destroyAll = function() {
          var TargetResource = $injector.get("Timeline");
          var action = TargetResource["::delete::activity::timelines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity.timelines#destroyById
         * @methodOf lbServices.Activity.timelines
         *
         * @description
         *
         * Delete a related item by id for timelines.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for timelines
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.timelines.destroyById = function() {
          var TargetResource = $injector.get("Timeline");
          var action = TargetResource["::destroyById::activity::timelines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity.timelines#exists
         * @methodOf lbServices.Activity.timelines
         *
         * @description
         *
         * Check the existence of timelines relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for timelines
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Timeline` object.)
         * </em>
         */
        R.timelines.exists = function() {
          var TargetResource = $injector.get("Timeline");
          var action = TargetResource["::exists::activity::timelines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity.timelines#findById
         * @methodOf lbServices.Activity.timelines
         *
         * @description
         *
         * Find a related item by id for timelines.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for timelines
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Timeline` object.)
         * </em>
         */
        R.timelines.findById = function() {
          var TargetResource = $injector.get("Timeline");
          var action = TargetResource["::findById::activity::timelines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity.timelines#link
         * @methodOf lbServices.Activity.timelines
         *
         * @description
         *
         * Add a related item by id for timelines.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for timelines
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Timeline` object.)
         * </em>
         */
        R.timelines.link = function() {
          var TargetResource = $injector.get("Timeline");
          var action = TargetResource["::link::activity::timelines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity.timelines#unlink
         * @methodOf lbServices.Activity.timelines
         *
         * @description
         *
         * Remove the timelines relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for timelines
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.timelines.unlink = function() {
          var TargetResource = $injector.get("Timeline");
          var action = TargetResource["::unlink::activity::timelines"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Activity.timelines#updateById
         * @methodOf lbServices.Activity.timelines
         *
         * @description
         *
         * Update a related item by id for timelines.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for timelines
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Timeline` object.)
         * </em>
         */
        R.timelines.updateById = function() {
          var TargetResource = $injector.get("Timeline");
          var action = TargetResource["::updateById::activity::timelines"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Like
 * @header lbServices.Like
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Like` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Like",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/likes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Like.page() instead.
        "prototype$__get__page": {
          url: urlBase + "/likes/:id/page",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#prototype$__get__entityLike
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Fetches belongsTo relation entityLike.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        "prototype$__get__entityLike": {
          url: urlBase + "/likes/:id/entityLike",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#create
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/likes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#createMany
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/likes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#upsert
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/likes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#exists
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/likes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#findById
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/likes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#find
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/likes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#findOne
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/likes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#updateAll
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/likes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#deleteById
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/likes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#count
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/likes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#prototype$updateAttributes
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/likes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#createChangeStream
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/likes/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Product.likes.findById() instead.
        "::findById::product::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/likes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Product.likes.destroyById() instead.
        "::destroyById::product::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/likes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Product.likes.updateById() instead.
        "::updateById::product::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/likes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.likes() instead.
        "::get::product::likes": {
          isArray: true,
          url: urlBase + "/products/:id/likes",
          method: "GET"
        },

        // INTERNAL. Use Product.likes.create() instead.
        "::create::product::likes": {
          url: urlBase + "/products/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Product.likes.createMany() instead.
        "::createMany::product::likes": {
          isArray: true,
          url: urlBase + "/products/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Product.likes.destroyAll() instead.
        "::delete::product::likes": {
          url: urlBase + "/products/:id/likes",
          method: "DELETE"
        },

        // INTERNAL. Use Product.likes.count() instead.
        "::count::product::likes": {
          url: urlBase + "/products/:id/likes/count",
          method: "GET"
        },

        // INTERNAL. Use Image.likes.findById() instead.
        "::findById::image::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/images/:id/likes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Image.likes.destroyById() instead.
        "::destroyById::image::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/images/:id/likes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Image.likes.updateById() instead.
        "::updateById::image::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/images/:id/likes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Image.likes() instead.
        "::get::image::likes": {
          isArray: true,
          url: urlBase + "/images/:id/likes",
          method: "GET"
        },

        // INTERNAL. Use Image.likes.create() instead.
        "::create::image::likes": {
          url: urlBase + "/images/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Image.likes.createMany() instead.
        "::createMany::image::likes": {
          isArray: true,
          url: urlBase + "/images/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Image.likes.destroyAll() instead.
        "::delete::image::likes": {
          url: urlBase + "/images/:id/likes",
          method: "DELETE"
        },

        // INTERNAL. Use Image.likes.count() instead.
        "::count::image::likes": {
          url: urlBase + "/images/:id/likes/count",
          method: "GET"
        },

        // INTERNAL. Use Page.likes() instead.
        "::get::page::likes": {
          isArray: true,
          url: urlBase + "/pages/:id/likes",
          method: "GET"
        },

        // INTERNAL. Use Page.likes.count() instead.
        "::count::page::likes": {
          url: urlBase + "/pages/:id/likes/count",
          method: "GET"
        },

        // INTERNAL. Use SpaceEntity.likes.findById() instead.
        "::findById::spaceEntity::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/spaceEntities/:id/likes/:fk",
          method: "GET"
        },

        // INTERNAL. Use SpaceEntity.likes.destroyById() instead.
        "::destroyById::spaceEntity::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/spaceEntities/:id/likes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use SpaceEntity.likes.updateById() instead.
        "::updateById::spaceEntity::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/spaceEntities/:id/likes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use SpaceEntity.likes() instead.
        "::get::spaceEntity::likes": {
          isArray: true,
          url: urlBase + "/spaceEntities/:id/likes",
          method: "GET"
        },

        // INTERNAL. Use SpaceEntity.likes.create() instead.
        "::create::spaceEntity::likes": {
          url: urlBase + "/spaceEntities/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use SpaceEntity.likes.createMany() instead.
        "::createMany::spaceEntity::likes": {
          isArray: true,
          url: urlBase + "/spaceEntities/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use SpaceEntity.likes.destroyAll() instead.
        "::delete::spaceEntity::likes": {
          url: urlBase + "/spaceEntities/:id/likes",
          method: "DELETE"
        },

        // INTERNAL. Use SpaceEntity.likes.count() instead.
        "::count::spaceEntity::likes": {
          url: urlBase + "/spaceEntities/:id/likes/count",
          method: "GET"
        },

        // INTERNAL. Use Article.likes.findById() instead.
        "::findById::article::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/articles/:id/likes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Article.likes.destroyById() instead.
        "::destroyById::article::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/articles/:id/likes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Article.likes.updateById() instead.
        "::updateById::article::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/articles/:id/likes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Article.likes() instead.
        "::get::article::likes": {
          isArray: true,
          url: urlBase + "/articles/:id/likes",
          method: "GET"
        },

        // INTERNAL. Use Article.likes.create() instead.
        "::create::article::likes": {
          url: urlBase + "/articles/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Article.likes.createMany() instead.
        "::createMany::article::likes": {
          isArray: true,
          url: urlBase + "/articles/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Article.likes.destroyAll() instead.
        "::delete::article::likes": {
          url: urlBase + "/articles/:id/likes",
          method: "DELETE"
        },

        // INTERNAL. Use Article.likes.count() instead.
        "::count::article::likes": {
          url: urlBase + "/articles/:id/likes/count",
          method: "GET"
        },

        // INTERNAL. Use Moodboard.likes.findById() instead.
        "::findById::moodboard::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/moodboards/:id/likes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Moodboard.likes.destroyById() instead.
        "::destroyById::moodboard::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/moodboards/:id/likes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Moodboard.likes.updateById() instead.
        "::updateById::moodboard::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/moodboards/:id/likes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Moodboard.likes() instead.
        "::get::moodboard::likes": {
          isArray: true,
          url: urlBase + "/moodboards/:id/likes",
          method: "GET"
        },

        // INTERNAL. Use Moodboard.likes.create() instead.
        "::create::moodboard::likes": {
          url: urlBase + "/moodboards/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Moodboard.likes.createMany() instead.
        "::createMany::moodboard::likes": {
          isArray: true,
          url: urlBase + "/moodboards/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Moodboard.likes.destroyAll() instead.
        "::delete::moodboard::likes": {
          url: urlBase + "/moodboards/:id/likes",
          method: "DELETE"
        },

        // INTERNAL. Use Moodboard.likes.count() instead.
        "::count::moodboard::likes": {
          url: urlBase + "/moodboards/:id/likes/count",
          method: "GET"
        },

        // INTERNAL. Use Discussion.likes.findById() instead.
        "::findById::discussion::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/discussions/:id/likes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Discussion.likes.destroyById() instead.
        "::destroyById::discussion::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/discussions/:id/likes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.likes.updateById() instead.
        "::updateById::discussion::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/discussions/:id/likes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.likes() instead.
        "::get::discussion::likes": {
          isArray: true,
          url: urlBase + "/discussions/:id/likes",
          method: "GET"
        },

        // INTERNAL. Use Discussion.likes.create() instead.
        "::create::discussion::likes": {
          url: urlBase + "/discussions/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Discussion.likes.createMany() instead.
        "::createMany::discussion::likes": {
          isArray: true,
          url: urlBase + "/discussions/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Discussion.likes.destroyAll() instead.
        "::delete::discussion::likes": {
          url: urlBase + "/discussions/:id/likes",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.likes.count() instead.
        "::count::discussion::likes": {
          url: urlBase + "/discussions/:id/likes/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Like#updateOrCreate
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Like#update
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Like#destroyById
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Like#removeById
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Like#modelName
    * @propertyOf lbServices.Like
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Like`.
    */
    R.modelName = "Like";


        /**
         * @ngdoc method
         * @name lbServices.Like#page
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Fetches belongsTo relation page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        R.page = function() {
          var TargetResource = $injector.get("Page");
          var action = TargetResource["::get::like::page"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Myproduct
 * @header lbServices.Myproduct
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Myproduct` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Myproduct",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/myproducts/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Myproduct#create
         * @methodOf lbServices.Myproduct
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Myproduct` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/myproducts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Myproduct#createMany
         * @methodOf lbServices.Myproduct
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Myproduct` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/myproducts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Myproduct#upsert
         * @methodOf lbServices.Myproduct
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Myproduct` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/myproducts",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Myproduct#exists
         * @methodOf lbServices.Myproduct
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/myproducts/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Myproduct#findById
         * @methodOf lbServices.Myproduct
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Myproduct` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/myproducts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Myproduct#find
         * @methodOf lbServices.Myproduct
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Myproduct` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/myproducts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Myproduct#findOne
         * @methodOf lbServices.Myproduct
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Myproduct` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/myproducts/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Myproduct#updateAll
         * @methodOf lbServices.Myproduct
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/myproducts/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Myproduct#deleteById
         * @methodOf lbServices.Myproduct
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/myproducts/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Myproduct#count
         * @methodOf lbServices.Myproduct
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/myproducts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Myproduct#prototype$updateAttributes
         * @methodOf lbServices.Myproduct
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Myproduct` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/myproducts/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Myproduct#createChangeStream
         * @methodOf lbServices.Myproduct
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/myproducts/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Myproduct#upload
         * @methodOf lbServices.Myproduct
         *
         * @description
         *
         * Uploads a file
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `ctx` – `{object=}` -
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Myproduct` object.)
         * </em>
         */
        "upload": {
          url: urlBase + "/myproducts/upload",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Myproduct#prototype$moodboard
         * @methodOf lbServices.Myproduct
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Myproduct` object.)
         * </em>
         */
        "prototype$moodboard": {
          isArray: true,
          url: urlBase + "/myproducts/:id/moodboard",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Myproduct#updateOrCreate
         * @methodOf lbServices.Myproduct
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Myproduct` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Myproduct#update
         * @methodOf lbServices.Myproduct
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Myproduct#destroyById
         * @methodOf lbServices.Myproduct
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Myproduct#removeById
         * @methodOf lbServices.Myproduct
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Myproduct#modelName
    * @propertyOf lbServices.Myproduct
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Myproduct`.
    */
    R.modelName = "Myproduct";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Wall
 * @header lbServices.Wall
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Wall` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Wall",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/walls/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Wall.page() instead.
        "prototype$__get__page": {
          url: urlBase + "/walls/:id/page",
          method: "GET"
        },

        // INTERNAL. Use Wall.feed() instead.
        "prototype$__get__feed": {
          url: urlBase + "/walls/:id/feed",
          method: "GET"
        },

        // INTERNAL. Use Wall.activities.findById() instead.
        "prototype$__findById__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/walls/:id/activities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Wall.activities.destroyById() instead.
        "prototype$__destroyById__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/walls/:id/activities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Wall.activities.updateById() instead.
        "prototype$__updateById__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/walls/:id/activities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Wall.activities.link() instead.
        "prototype$__link__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/walls/:id/activities/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Wall.activities.unlink() instead.
        "prototype$__unlink__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/walls/:id/activities/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Wall.activities.exists() instead.
        "prototype$__exists__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/walls/:id/activities/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Wall.activities() instead.
        "prototype$__get__activities": {
          isArray: true,
          url: urlBase + "/walls/:id/activities",
          method: "GET"
        },

        // INTERNAL. Use Wall.activities.create() instead.
        "prototype$__create__activities": {
          url: urlBase + "/walls/:id/activities",
          method: "POST"
        },

        // INTERNAL. Use Wall.activities.destroyAll() instead.
        "prototype$__delete__activities": {
          url: urlBase + "/walls/:id/activities",
          method: "DELETE"
        },

        // INTERNAL. Use Wall.activities.count() instead.
        "prototype$__count__activities": {
          url: urlBase + "/walls/:id/activities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wall#create
         * @methodOf lbServices.Wall
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wall` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/walls",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wall#createMany
         * @methodOf lbServices.Wall
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wall` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/walls",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wall#upsert
         * @methodOf lbServices.Wall
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wall` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/walls",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wall#exists
         * @methodOf lbServices.Wall
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/walls/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wall#findById
         * @methodOf lbServices.Wall
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wall` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/walls/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wall#find
         * @methodOf lbServices.Wall
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wall` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/walls",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wall#findOne
         * @methodOf lbServices.Wall
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wall` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/walls/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wall#updateAll
         * @methodOf lbServices.Wall
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/walls/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wall#deleteById
         * @methodOf lbServices.Wall
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/walls/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wall#count
         * @methodOf lbServices.Wall
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/walls/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wall#prototype$updateAttributes
         * @methodOf lbServices.Wall
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wall` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/walls/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Wall#createChangeStream
         * @methodOf lbServices.Wall
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/walls/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Activity.walls.findById() instead.
        "::findById::activity::walls": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/walls/:fk",
          method: "GET"
        },

        // INTERNAL. Use Activity.walls.destroyById() instead.
        "::destroyById::activity::walls": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/walls/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Activity.walls.updateById() instead.
        "::updateById::activity::walls": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/walls/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Activity.walls.link() instead.
        "::link::activity::walls": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/walls/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Activity.walls.unlink() instead.
        "::unlink::activity::walls": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/walls/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Activity.walls.exists() instead.
        "::exists::activity::walls": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/walls/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Activity.walls() instead.
        "::get::activity::walls": {
          isArray: true,
          url: urlBase + "/activities/:id/walls",
          method: "GET"
        },

        // INTERNAL. Use Activity.walls.create() instead.
        "::create::activity::walls": {
          url: urlBase + "/activities/:id/walls",
          method: "POST"
        },

        // INTERNAL. Use Activity.walls.createMany() instead.
        "::createMany::activity::walls": {
          isArray: true,
          url: urlBase + "/activities/:id/walls",
          method: "POST"
        },

        // INTERNAL. Use Activity.walls.destroyAll() instead.
        "::delete::activity::walls": {
          url: urlBase + "/activities/:id/walls",
          method: "DELETE"
        },

        // INTERNAL. Use Activity.walls.count() instead.
        "::count::activity::walls": {
          url: urlBase + "/activities/:id/walls/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Wall#updateOrCreate
         * @methodOf lbServices.Wall
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Wall` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Wall#update
         * @methodOf lbServices.Wall
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Wall#destroyById
         * @methodOf lbServices.Wall
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Wall#removeById
         * @methodOf lbServices.Wall
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Wall#modelName
    * @propertyOf lbServices.Wall
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Wall`.
    */
    R.modelName = "Wall";


        /**
         * @ngdoc method
         * @name lbServices.Wall#page
         * @methodOf lbServices.Wall
         *
         * @description
         *
         * Fetches belongsTo relation page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        R.page = function() {
          var TargetResource = $injector.get("Page");
          var action = TargetResource["::get::wall::page"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wall#feed
         * @methodOf lbServices.Wall
         *
         * @description
         *
         * Fetches belongsTo relation feed.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::get::wall::feed"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Wall.activities
     * @header lbServices.Wall.activities
     * @object
     * @description
     *
     * The object `Wall.activities` groups methods
     * manipulating `Activity` instances related to `Wall`.
     *
     * Call {@link lbServices.Wall#activities Wall.activities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Wall#activities
         * @methodOf lbServices.Wall
         *
         * @description
         *
         * Queries activities of wall.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::get::wall::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wall.activities#count
         * @methodOf lbServices.Wall.activities
         *
         * @description
         *
         * Counts activities of wall.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.activities.count = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::count::wall::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wall.activities#create
         * @methodOf lbServices.Wall.activities
         *
         * @description
         *
         * Creates a new instance in activities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.create = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::create::wall::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wall.activities#createMany
         * @methodOf lbServices.Wall.activities
         *
         * @description
         *
         * Creates a new instance in activities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.createMany = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::createMany::wall::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wall.activities#destroyAll
         * @methodOf lbServices.Wall.activities
         *
         * @description
         *
         * Deletes all activities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.activities.destroyAll = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::delete::wall::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wall.activities#destroyById
         * @methodOf lbServices.Wall.activities
         *
         * @description
         *
         * Delete a related item by id for activities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.activities.destroyById = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::destroyById::wall::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wall.activities#exists
         * @methodOf lbServices.Wall.activities
         *
         * @description
         *
         * Check the existence of activities relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.exists = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::exists::wall::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wall.activities#findById
         * @methodOf lbServices.Wall.activities
         *
         * @description
         *
         * Find a related item by id for activities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.findById = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::findById::wall::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wall.activities#link
         * @methodOf lbServices.Wall.activities
         *
         * @description
         *
         * Add a related item by id for activities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.link = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::link::wall::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wall.activities#unlink
         * @methodOf lbServices.Wall.activities
         *
         * @description
         *
         * Remove the activities relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.activities.unlink = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::unlink::wall::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Wall.activities#updateById
         * @methodOf lbServices.Wall.activities
         *
         * @description
         *
         * Update a related item by id for activities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.updateById = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::updateById::wall::activities"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Timeline
 * @header lbServices.Timeline
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Timeline` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Timeline",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/timelines/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Timeline.page() instead.
        "prototype$__get__page": {
          url: urlBase + "/timelines/:id/page",
          method: "GET"
        },

        // INTERNAL. Use Timeline.feed() instead.
        "prototype$__get__feed": {
          url: urlBase + "/timelines/:id/feed",
          method: "GET"
        },

        // INTERNAL. Use Timeline.activities.findById() instead.
        "prototype$__findById__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/timelines/:id/activities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Timeline.activities.destroyById() instead.
        "prototype$__destroyById__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/timelines/:id/activities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Timeline.activities.updateById() instead.
        "prototype$__updateById__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/timelines/:id/activities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Timeline.activities.link() instead.
        "prototype$__link__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/timelines/:id/activities/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Timeline.activities.unlink() instead.
        "prototype$__unlink__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/timelines/:id/activities/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Timeline.activities.exists() instead.
        "prototype$__exists__activities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/timelines/:id/activities/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Timeline.activities() instead.
        "prototype$__get__activities": {
          isArray: true,
          url: urlBase + "/timelines/:id/activities",
          method: "GET"
        },

        // INTERNAL. Use Timeline.activities.create() instead.
        "prototype$__create__activities": {
          url: urlBase + "/timelines/:id/activities",
          method: "POST"
        },

        // INTERNAL. Use Timeline.activities.destroyAll() instead.
        "prototype$__delete__activities": {
          url: urlBase + "/timelines/:id/activities",
          method: "DELETE"
        },

        // INTERNAL. Use Timeline.activities.count() instead.
        "prototype$__count__activities": {
          url: urlBase + "/timelines/:id/activities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Timeline#create
         * @methodOf lbServices.Timeline
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Timeline` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/timelines",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Timeline#createMany
         * @methodOf lbServices.Timeline
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Timeline` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/timelines",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Timeline#upsert
         * @methodOf lbServices.Timeline
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Timeline` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/timelines",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Timeline#exists
         * @methodOf lbServices.Timeline
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/timelines/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Timeline#findById
         * @methodOf lbServices.Timeline
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Timeline` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/timelines/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Timeline#find
         * @methodOf lbServices.Timeline
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Timeline` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/timelines",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Timeline#findOne
         * @methodOf lbServices.Timeline
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Timeline` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/timelines/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Timeline#updateAll
         * @methodOf lbServices.Timeline
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/timelines/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Timeline#deleteById
         * @methodOf lbServices.Timeline
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/timelines/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Timeline#count
         * @methodOf lbServices.Timeline
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/timelines/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Timeline#prototype$updateAttributes
         * @methodOf lbServices.Timeline
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Timeline` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/timelines/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Timeline#createChangeStream
         * @methodOf lbServices.Timeline
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/timelines/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Activity.timelines.findById() instead.
        "::findById::activity::timelines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/timelines/:fk",
          method: "GET"
        },

        // INTERNAL. Use Activity.timelines.destroyById() instead.
        "::destroyById::activity::timelines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/timelines/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Activity.timelines.updateById() instead.
        "::updateById::activity::timelines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/timelines/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Activity.timelines.link() instead.
        "::link::activity::timelines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/timelines/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Activity.timelines.unlink() instead.
        "::unlink::activity::timelines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/timelines/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Activity.timelines.exists() instead.
        "::exists::activity::timelines": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/activities/:id/timelines/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Activity.timelines() instead.
        "::get::activity::timelines": {
          isArray: true,
          url: urlBase + "/activities/:id/timelines",
          method: "GET"
        },

        // INTERNAL. Use Activity.timelines.create() instead.
        "::create::activity::timelines": {
          url: urlBase + "/activities/:id/timelines",
          method: "POST"
        },

        // INTERNAL. Use Activity.timelines.createMany() instead.
        "::createMany::activity::timelines": {
          isArray: true,
          url: urlBase + "/activities/:id/timelines",
          method: "POST"
        },

        // INTERNAL. Use Activity.timelines.destroyAll() instead.
        "::delete::activity::timelines": {
          url: urlBase + "/activities/:id/timelines",
          method: "DELETE"
        },

        // INTERNAL. Use Activity.timelines.count() instead.
        "::count::activity::timelines": {
          url: urlBase + "/activities/:id/timelines/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Timeline#updateOrCreate
         * @methodOf lbServices.Timeline
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Timeline` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Timeline#update
         * @methodOf lbServices.Timeline
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Timeline#destroyById
         * @methodOf lbServices.Timeline
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Timeline#removeById
         * @methodOf lbServices.Timeline
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Timeline#modelName
    * @propertyOf lbServices.Timeline
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Timeline`.
    */
    R.modelName = "Timeline";


        /**
         * @ngdoc method
         * @name lbServices.Timeline#page
         * @methodOf lbServices.Timeline
         *
         * @description
         *
         * Fetches belongsTo relation page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        R.page = function() {
          var TargetResource = $injector.get("Page");
          var action = TargetResource["::get::timeline::page"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Timeline#feed
         * @methodOf lbServices.Timeline
         *
         * @description
         *
         * Fetches belongsTo relation feed.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::get::timeline::feed"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Timeline.activities
     * @header lbServices.Timeline.activities
     * @object
     * @description
     *
     * The object `Timeline.activities` groups methods
     * manipulating `Activity` instances related to `Timeline`.
     *
     * Call {@link lbServices.Timeline#activities Timeline.activities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Timeline#activities
         * @methodOf lbServices.Timeline
         *
         * @description
         *
         * Queries activities of timeline.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::get::timeline::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Timeline.activities#count
         * @methodOf lbServices.Timeline.activities
         *
         * @description
         *
         * Counts activities of timeline.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.activities.count = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::count::timeline::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Timeline.activities#create
         * @methodOf lbServices.Timeline.activities
         *
         * @description
         *
         * Creates a new instance in activities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.create = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::create::timeline::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Timeline.activities#createMany
         * @methodOf lbServices.Timeline.activities
         *
         * @description
         *
         * Creates a new instance in activities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.createMany = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::createMany::timeline::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Timeline.activities#destroyAll
         * @methodOf lbServices.Timeline.activities
         *
         * @description
         *
         * Deletes all activities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.activities.destroyAll = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::delete::timeline::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Timeline.activities#destroyById
         * @methodOf lbServices.Timeline.activities
         *
         * @description
         *
         * Delete a related item by id for activities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.activities.destroyById = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::destroyById::timeline::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Timeline.activities#exists
         * @methodOf lbServices.Timeline.activities
         *
         * @description
         *
         * Check the existence of activities relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.exists = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::exists::timeline::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Timeline.activities#findById
         * @methodOf lbServices.Timeline.activities
         *
         * @description
         *
         * Find a related item by id for activities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.findById = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::findById::timeline::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Timeline.activities#link
         * @methodOf lbServices.Timeline.activities
         *
         * @description
         *
         * Add a related item by id for activities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.link = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::link::timeline::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Timeline.activities#unlink
         * @methodOf lbServices.Timeline.activities
         *
         * @description
         *
         * Remove the activities relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.activities.unlink = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::unlink::timeline::activities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Timeline.activities#updateById
         * @methodOf lbServices.Timeline.activities
         *
         * @description
         *
         * Update a related item by id for activities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for activities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Activity` object.)
         * </em>
         */
        R.activities.updateById = function() {
          var TargetResource = $injector.get("Activity");
          var action = TargetResource["::updateById::timeline::activities"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Space
 * @header lbServices.Space
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Space` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Space",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/spaces/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Space.page() instead.
        "prototype$__get__page": {
          url: urlBase + "/spaces/:id/page",
          method: "GET"
        },

        // INTERNAL. Use Space.spaceEntities.findById() instead.
        "prototype$__findById__spaceEntities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/spaces/:id/spaceEntities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Space.spaceEntities.destroyById() instead.
        "prototype$__destroyById__spaceEntities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/spaces/:id/spaceEntities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Space.spaceEntities.updateById() instead.
        "prototype$__updateById__spaceEntities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/spaces/:id/spaceEntities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Space.spaceEntities() instead.
        "prototype$__get__spaceEntities": {
          isArray: true,
          url: urlBase + "/spaces/:id/spaceEntities",
          method: "GET"
        },

        // INTERNAL. Use Space.spaceEntities.create() instead.
        "prototype$__create__spaceEntities": {
          url: urlBase + "/spaces/:id/spaceEntities",
          method: "POST"
        },

        // INTERNAL. Use Space.spaceEntities.destroyAll() instead.
        "prototype$__delete__spaceEntities": {
          url: urlBase + "/spaces/:id/spaceEntities",
          method: "DELETE"
        },

        // INTERNAL. Use Space.spaceEntities.count() instead.
        "prototype$__count__spaceEntities": {
          url: urlBase + "/spaces/:id/spaceEntities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Space#create
         * @methodOf lbServices.Space
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Space` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/spaces",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Space#createMany
         * @methodOf lbServices.Space
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Space` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/spaces",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Space#upsert
         * @methodOf lbServices.Space
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Space` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/spaces",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Space#exists
         * @methodOf lbServices.Space
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/spaces/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Space#findById
         * @methodOf lbServices.Space
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Space` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/spaces/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Space#find
         * @methodOf lbServices.Space
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Space` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/spaces",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Space#findOne
         * @methodOf lbServices.Space
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Space` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/spaces/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Space#updateAll
         * @methodOf lbServices.Space
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/spaces/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Space#deleteById
         * @methodOf lbServices.Space
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/spaces/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Space#count
         * @methodOf lbServices.Space
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/spaces/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Space#prototype$updateAttributes
         * @methodOf lbServices.Space
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Space` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/spaces/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Space#createChangeStream
         * @methodOf lbServices.Space
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/spaces/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Page.myspace.findById() instead.
        "::findById::page::myspace": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/myspace/:fk",
          method: "GET"
        },

        // INTERNAL. Use Page.myspace.destroyById() instead.
        "::destroyById::page::myspace": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/myspace/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Page.myspace.updateById() instead.
        "::updateById::page::myspace": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/myspace/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Page.myspace() instead.
        "::get::page::myspace": {
          isArray: true,
          url: urlBase + "/pages/:id/myspace",
          method: "GET"
        },

        // INTERNAL. Use Page.myspace.create() instead.
        "::create::page::myspace": {
          url: urlBase + "/pages/:id/myspace",
          method: "POST"
        },

        // INTERNAL. Use Page.myspace.createMany() instead.
        "::createMany::page::myspace": {
          isArray: true,
          url: urlBase + "/pages/:id/myspace",
          method: "POST"
        },

        // INTERNAL. Use Page.myspace.destroyAll() instead.
        "::delete::page::myspace": {
          url: urlBase + "/pages/:id/myspace",
          method: "DELETE"
        },

        // INTERNAL. Use Page.myspace.count() instead.
        "::count::page::myspace": {
          url: urlBase + "/pages/:id/myspace/count",
          method: "GET"
        },

        // INTERNAL. Use SpaceEntity.space() instead.
        "::get::spaceEntity::space": {
          url: urlBase + "/spaceEntities/:id/space",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Space#updateOrCreate
         * @methodOf lbServices.Space
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Space` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Space#update
         * @methodOf lbServices.Space
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Space#destroyById
         * @methodOf lbServices.Space
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Space#removeById
         * @methodOf lbServices.Space
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Space#modelName
    * @propertyOf lbServices.Space
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Space`.
    */
    R.modelName = "Space";


        /**
         * @ngdoc method
         * @name lbServices.Space#page
         * @methodOf lbServices.Space
         *
         * @description
         *
         * Fetches belongsTo relation page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        R.page = function() {
          var TargetResource = $injector.get("Page");
          var action = TargetResource["::get::space::page"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Space.spaceEntities
     * @header lbServices.Space.spaceEntities
     * @object
     * @description
     *
     * The object `Space.spaceEntities` groups methods
     * manipulating `SpaceEntity` instances related to `Space`.
     *
     * Call {@link lbServices.Space#spaceEntities Space.spaceEntities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Space#spaceEntities
         * @methodOf lbServices.Space
         *
         * @description
         *
         * Queries spaceEntities of space.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntities = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::get::space::spaceEntities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Space.spaceEntities#count
         * @methodOf lbServices.Space.spaceEntities
         *
         * @description
         *
         * Counts spaceEntities of space.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.spaceEntities.count = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::count::space::spaceEntities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Space.spaceEntities#create
         * @methodOf lbServices.Space.spaceEntities
         *
         * @description
         *
         * Creates a new instance in spaceEntities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntities.create = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::create::space::spaceEntities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Space.spaceEntities#createMany
         * @methodOf lbServices.Space.spaceEntities
         *
         * @description
         *
         * Creates a new instance in spaceEntities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntities.createMany = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::createMany::space::spaceEntities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Space.spaceEntities#destroyAll
         * @methodOf lbServices.Space.spaceEntities
         *
         * @description
         *
         * Deletes all spaceEntities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.spaceEntities.destroyAll = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::delete::space::spaceEntities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Space.spaceEntities#destroyById
         * @methodOf lbServices.Space.spaceEntities
         *
         * @description
         *
         * Delete a related item by id for spaceEntities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for spaceEntities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.spaceEntities.destroyById = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::destroyById::space::spaceEntities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Space.spaceEntities#findById
         * @methodOf lbServices.Space.spaceEntities
         *
         * @description
         *
         * Find a related item by id for spaceEntities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for spaceEntities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntities.findById = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::findById::space::spaceEntities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Space.spaceEntities#updateById
         * @methodOf lbServices.Space.spaceEntities
         *
         * @description
         *
         * Update a related item by id for spaceEntities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for spaceEntities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntities.updateById = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::updateById::space::spaceEntities"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.SpaceEntity
 * @header lbServices.SpaceEntity
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `SpaceEntity` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "SpaceEntity",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/spaceEntities/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use SpaceEntity.likes.findById() instead.
        "prototype$__findById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/spaceEntities/:id/likes/:fk",
          method: "GET"
        },

        // INTERNAL. Use SpaceEntity.likes.destroyById() instead.
        "prototype$__destroyById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/spaceEntities/:id/likes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use SpaceEntity.likes.updateById() instead.
        "prototype$__updateById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/spaceEntities/:id/likes/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#prototype$__findById__comments
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Find a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        "prototype$__findById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/spaceEntities/:id/comments/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#prototype$__destroyById__comments
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Delete a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/spaceEntities/:id/comments/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#prototype$__updateById__comments
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Update a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        "prototype$__updateById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/spaceEntities/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use SpaceEntity.product() instead.
        "prototype$__get__product": {
          url: urlBase + "/spaceEntities/:id/product",
          method: "GET"
        },

        // INTERNAL. Use SpaceEntity.image() instead.
        "prototype$__get__image": {
          url: urlBase + "/spaceEntities/:id/image",
          method: "GET"
        },

        // INTERNAL. Use SpaceEntity.space() instead.
        "prototype$__get__space": {
          url: urlBase + "/spaceEntities/:id/space",
          method: "GET"
        },

        // INTERNAL. Use SpaceEntity.page() instead.
        "prototype$__get__page": {
          url: urlBase + "/spaceEntities/:id/page",
          method: "GET"
        },

        // INTERNAL. Use SpaceEntity.article() instead.
        "prototype$__get__article": {
          url: urlBase + "/spaceEntities/:id/article",
          method: "GET"
        },

        // INTERNAL. Use SpaceEntity.moodboard() instead.
        "prototype$__get__moodboard": {
          url: urlBase + "/spaceEntities/:id/moodboard",
          method: "GET"
        },

        // INTERNAL. Use SpaceEntity.likes() instead.
        "prototype$__get__likes": {
          isArray: true,
          url: urlBase + "/spaceEntities/:id/likes",
          method: "GET"
        },

        // INTERNAL. Use SpaceEntity.likes.create() instead.
        "prototype$__create__likes": {
          url: urlBase + "/spaceEntities/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use SpaceEntity.likes.destroyAll() instead.
        "prototype$__delete__likes": {
          url: urlBase + "/spaceEntities/:id/likes",
          method: "DELETE"
        },

        // INTERNAL. Use SpaceEntity.likes.count() instead.
        "prototype$__count__likes": {
          url: urlBase + "/spaceEntities/:id/likes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#prototype$__get__comments
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Queries comments of spaceEntity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/spaceEntities/:id/comments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#prototype$__create__comments
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        "prototype$__create__comments": {
          url: urlBase + "/spaceEntities/:id/comments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#prototype$__delete__comments
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__comments": {
          url: urlBase + "/spaceEntities/:id/comments",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#prototype$__count__comments
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Counts comments of spaceEntity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__comments": {
          url: urlBase + "/spaceEntities/:id/comments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#create
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/spaceEntities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#createMany
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/spaceEntities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#upsert
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/spaceEntities",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#exists
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/spaceEntities/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#findById
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/spaceEntities/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#find
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/spaceEntities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#findOne
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/spaceEntities/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#updateAll
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/spaceEntities/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#deleteById
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/spaceEntities/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#count
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/spaceEntities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#prototype$updateAttributes
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/spaceEntities/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#createChangeStream
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/spaceEntities/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Product.spaceEntity.findById() instead.
        "::findById::product::spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/spaceEntity/:fk",
          method: "GET"
        },

        // INTERNAL. Use Product.spaceEntity.destroyById() instead.
        "::destroyById::product::spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/spaceEntity/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Product.spaceEntity.updateById() instead.
        "::updateById::product::spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/products/:id/spaceEntity/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Product.spaceEntity() instead.
        "::get::product::spaceEntity": {
          isArray: true,
          url: urlBase + "/products/:id/spaceEntity",
          method: "GET"
        },

        // INTERNAL. Use Product.spaceEntity.create() instead.
        "::create::product::spaceEntity": {
          url: urlBase + "/products/:id/spaceEntity",
          method: "POST"
        },

        // INTERNAL. Use Product.spaceEntity.createMany() instead.
        "::createMany::product::spaceEntity": {
          isArray: true,
          url: urlBase + "/products/:id/spaceEntity",
          method: "POST"
        },

        // INTERNAL. Use Product.spaceEntity.destroyAll() instead.
        "::delete::product::spaceEntity": {
          url: urlBase + "/products/:id/spaceEntity",
          method: "DELETE"
        },

        // INTERNAL. Use Product.spaceEntity.count() instead.
        "::count::product::spaceEntity": {
          url: urlBase + "/products/:id/spaceEntity/count",
          method: "GET"
        },

        // INTERNAL. Use Image.spaceEntity.findById() instead.
        "::findById::image::spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/images/:id/spaceEntity/:fk",
          method: "GET"
        },

        // INTERNAL. Use Image.spaceEntity.destroyById() instead.
        "::destroyById::image::spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/images/:id/spaceEntity/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Image.spaceEntity.updateById() instead.
        "::updateById::image::spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/images/:id/spaceEntity/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Image.spaceEntity() instead.
        "::get::image::spaceEntity": {
          isArray: true,
          url: urlBase + "/images/:id/spaceEntity",
          method: "GET"
        },

        // INTERNAL. Use Image.spaceEntity.create() instead.
        "::create::image::spaceEntity": {
          url: urlBase + "/images/:id/spaceEntity",
          method: "POST"
        },

        // INTERNAL. Use Image.spaceEntity.createMany() instead.
        "::createMany::image::spaceEntity": {
          isArray: true,
          url: urlBase + "/images/:id/spaceEntity",
          method: "POST"
        },

        // INTERNAL. Use Image.spaceEntity.destroyAll() instead.
        "::delete::image::spaceEntity": {
          url: urlBase + "/images/:id/spaceEntity",
          method: "DELETE"
        },

        // INTERNAL. Use Image.spaceEntity.count() instead.
        "::count::image::spaceEntity": {
          url: urlBase + "/images/:id/spaceEntity/count",
          method: "GET"
        },

        // INTERNAL. Use Page.spaceEntities.findById() instead.
        "::findById::page::spaceEntities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/spaceEntities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Page.spaceEntities.destroyById() instead.
        "::destroyById::page::spaceEntities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/spaceEntities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Page.spaceEntities.updateById() instead.
        "::updateById::page::spaceEntities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/pages/:id/spaceEntities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Page.spaceEntities() instead.
        "::get::page::spaceEntities": {
          isArray: true,
          url: urlBase + "/pages/:id/spaceEntities",
          method: "GET"
        },

        // INTERNAL. Use Page.spaceEntities.create() instead.
        "::create::page::spaceEntities": {
          url: urlBase + "/pages/:id/spaceEntities",
          method: "POST"
        },

        // INTERNAL. Use Page.spaceEntities.createMany() instead.
        "::createMany::page::spaceEntities": {
          isArray: true,
          url: urlBase + "/pages/:id/spaceEntities",
          method: "POST"
        },

        // INTERNAL. Use Page.spaceEntities.destroyAll() instead.
        "::delete::page::spaceEntities": {
          url: urlBase + "/pages/:id/spaceEntities",
          method: "DELETE"
        },

        // INTERNAL. Use Page.spaceEntities.count() instead.
        "::count::page::spaceEntities": {
          url: urlBase + "/pages/:id/spaceEntities/count",
          method: "GET"
        },

        // INTERNAL. Use Space.spaceEntities.findById() instead.
        "::findById::space::spaceEntities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/spaces/:id/spaceEntities/:fk",
          method: "GET"
        },

        // INTERNAL. Use Space.spaceEntities.destroyById() instead.
        "::destroyById::space::spaceEntities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/spaces/:id/spaceEntities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Space.spaceEntities.updateById() instead.
        "::updateById::space::spaceEntities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/spaces/:id/spaceEntities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Space.spaceEntities() instead.
        "::get::space::spaceEntities": {
          isArray: true,
          url: urlBase + "/spaces/:id/spaceEntities",
          method: "GET"
        },

        // INTERNAL. Use Space.spaceEntities.create() instead.
        "::create::space::spaceEntities": {
          url: urlBase + "/spaces/:id/spaceEntities",
          method: "POST"
        },

        // INTERNAL. Use Space.spaceEntities.createMany() instead.
        "::createMany::space::spaceEntities": {
          isArray: true,
          url: urlBase + "/spaces/:id/spaceEntities",
          method: "POST"
        },

        // INTERNAL. Use Space.spaceEntities.destroyAll() instead.
        "::delete::space::spaceEntities": {
          url: urlBase + "/spaces/:id/spaceEntities",
          method: "DELETE"
        },

        // INTERNAL. Use Space.spaceEntities.count() instead.
        "::count::space::spaceEntities": {
          url: urlBase + "/spaces/:id/spaceEntities/count",
          method: "GET"
        },

        // INTERNAL. Use Article.spaceEntity.findById() instead.
        "::findById::article::spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/articles/:id/spaceEntity/:fk",
          method: "GET"
        },

        // INTERNAL. Use Article.spaceEntity.destroyById() instead.
        "::destroyById::article::spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/articles/:id/spaceEntity/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Article.spaceEntity.updateById() instead.
        "::updateById::article::spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/articles/:id/spaceEntity/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Article.spaceEntity() instead.
        "::get::article::spaceEntity": {
          isArray: true,
          url: urlBase + "/articles/:id/spaceEntity",
          method: "GET"
        },

        // INTERNAL. Use Article.spaceEntity.create() instead.
        "::create::article::spaceEntity": {
          url: urlBase + "/articles/:id/spaceEntity",
          method: "POST"
        },

        // INTERNAL. Use Article.spaceEntity.createMany() instead.
        "::createMany::article::spaceEntity": {
          isArray: true,
          url: urlBase + "/articles/:id/spaceEntity",
          method: "POST"
        },

        // INTERNAL. Use Article.spaceEntity.destroyAll() instead.
        "::delete::article::spaceEntity": {
          url: urlBase + "/articles/:id/spaceEntity",
          method: "DELETE"
        },

        // INTERNAL. Use Article.spaceEntity.count() instead.
        "::count::article::spaceEntity": {
          url: urlBase + "/articles/:id/spaceEntity/count",
          method: "GET"
        },

        // INTERNAL. Use Moodboard.spaceEntity.findById() instead.
        "::findById::moodboard::spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/moodboards/:id/spaceEntity/:fk",
          method: "GET"
        },

        // INTERNAL. Use Moodboard.spaceEntity.destroyById() instead.
        "::destroyById::moodboard::spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/moodboards/:id/spaceEntity/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Moodboard.spaceEntity.updateById() instead.
        "::updateById::moodboard::spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/moodboards/:id/spaceEntity/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Moodboard.spaceEntity() instead.
        "::get::moodboard::spaceEntity": {
          isArray: true,
          url: urlBase + "/moodboards/:id/spaceEntity",
          method: "GET"
        },

        // INTERNAL. Use Moodboard.spaceEntity.create() instead.
        "::create::moodboard::spaceEntity": {
          url: urlBase + "/moodboards/:id/spaceEntity",
          method: "POST"
        },

        // INTERNAL. Use Moodboard.spaceEntity.createMany() instead.
        "::createMany::moodboard::spaceEntity": {
          isArray: true,
          url: urlBase + "/moodboards/:id/spaceEntity",
          method: "POST"
        },

        // INTERNAL. Use Moodboard.spaceEntity.destroyAll() instead.
        "::delete::moodboard::spaceEntity": {
          url: urlBase + "/moodboards/:id/spaceEntity",
          method: "DELETE"
        },

        // INTERNAL. Use Moodboard.spaceEntity.count() instead.
        "::count::moodboard::spaceEntity": {
          url: urlBase + "/moodboards/:id/spaceEntity/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#updateOrCreate
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#update
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#destroyById
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#removeById
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.SpaceEntity#modelName
    * @propertyOf lbServices.SpaceEntity
    * @description
    * The name of the model represented by this $resource,
    * i.e. `SpaceEntity`.
    */
    R.modelName = "SpaceEntity";

    /**
     * @ngdoc object
     * @name lbServices.SpaceEntity.likes
     * @header lbServices.SpaceEntity.likes
     * @object
     * @description
     *
     * The object `SpaceEntity.likes` groups methods
     * manipulating `Like` instances related to `SpaceEntity`.
     *
     * Call {@link lbServices.SpaceEntity#likes SpaceEntity.likes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#likes
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Queries likes of spaceEntity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::get::spaceEntity::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity.likes#count
         * @methodOf lbServices.SpaceEntity.likes
         *
         * @description
         *
         * Counts likes of spaceEntity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.likes.count = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::count::spaceEntity::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity.likes#create
         * @methodOf lbServices.SpaceEntity.likes
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.create = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::create::spaceEntity::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity.likes#createMany
         * @methodOf lbServices.SpaceEntity.likes
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.createMany = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::createMany::spaceEntity::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity.likes#destroyAll
         * @methodOf lbServices.SpaceEntity.likes
         *
         * @description
         *
         * Deletes all likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.destroyAll = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::delete::spaceEntity::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity.likes#destroyById
         * @methodOf lbServices.SpaceEntity.likes
         *
         * @description
         *
         * Delete a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.destroyById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::destroyById::spaceEntity::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity.likes#findById
         * @methodOf lbServices.SpaceEntity.likes
         *
         * @description
         *
         * Find a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.findById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::findById::spaceEntity::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity.likes#updateById
         * @methodOf lbServices.SpaceEntity.likes
         *
         * @description
         *
         * Update a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.updateById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::updateById::spaceEntity::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#product
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Fetches belongsTo relation product.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Product` object.)
         * </em>
         */
        R.product = function() {
          var TargetResource = $injector.get("Product");
          var action = TargetResource["::get::spaceEntity::product"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#image
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Fetches belongsTo relation image.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Image` object.)
         * </em>
         */
        R.image = function() {
          var TargetResource = $injector.get("Image");
          var action = TargetResource["::get::spaceEntity::image"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#space
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Fetches belongsTo relation space.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Space` object.)
         * </em>
         */
        R.space = function() {
          var TargetResource = $injector.get("Space");
          var action = TargetResource["::get::spaceEntity::space"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#page
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Fetches belongsTo relation page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        R.page = function() {
          var TargetResource = $injector.get("Page");
          var action = TargetResource["::get::spaceEntity::page"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#article
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Fetches belongsTo relation article.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Article` object.)
         * </em>
         */
        R.article = function() {
          var TargetResource = $injector.get("Article");
          var action = TargetResource["::get::spaceEntity::article"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.SpaceEntity#moodboard
         * @methodOf lbServices.SpaceEntity
         *
         * @description
         *
         * Fetches belongsTo relation moodboard.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Moodboard` object.)
         * </em>
         */
        R.moodboard = function() {
          var TargetResource = $injector.get("Moodboard");
          var action = TargetResource["::get::spaceEntity::moodboard"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Article
 * @header lbServices.Article
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Article` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Article",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/articles/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Article.feed() instead.
        "prototype$__get__feed": {
          url: urlBase + "/articles/:id/feed",
          method: "GET"
        },

        // INTERNAL. Use Article.feed.create() instead.
        "prototype$__create__feed": {
          url: urlBase + "/articles/:id/feed",
          method: "POST"
        },

        // INTERNAL. Use Article.feed.update() instead.
        "prototype$__update__feed": {
          url: urlBase + "/articles/:id/feed",
          method: "PUT"
        },

        // INTERNAL. Use Article.feed.destroy() instead.
        "prototype$__destroy__feed": {
          url: urlBase + "/articles/:id/feed",
          method: "DELETE"
        },

        // INTERNAL. Use Article.likes.findById() instead.
        "prototype$__findById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/articles/:id/likes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Article.likes.destroyById() instead.
        "prototype$__destroyById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/articles/:id/likes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Article.likes.updateById() instead.
        "prototype$__updateById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/articles/:id/likes/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Article#prototype$__findById__comments
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Find a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Article` object.)
         * </em>
         */
        "prototype$__findById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/articles/:id/comments/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Article#prototype$__destroyById__comments
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Delete a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/articles/:id/comments/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Article#prototype$__updateById__comments
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Update a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Article` object.)
         * </em>
         */
        "prototype$__updateById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/articles/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Article.spaceEntity.findById() instead.
        "prototype$__findById__spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/articles/:id/spaceEntity/:fk",
          method: "GET"
        },

        // INTERNAL. Use Article.spaceEntity.destroyById() instead.
        "prototype$__destroyById__spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/articles/:id/spaceEntity/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Article.spaceEntity.updateById() instead.
        "prototype$__updateById__spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/articles/:id/spaceEntity/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Article.likes() instead.
        "prototype$__get__likes": {
          isArray: true,
          url: urlBase + "/articles/:id/likes",
          method: "GET"
        },

        // INTERNAL. Use Article.likes.create() instead.
        "prototype$__create__likes": {
          url: urlBase + "/articles/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Article.likes.destroyAll() instead.
        "prototype$__delete__likes": {
          url: urlBase + "/articles/:id/likes",
          method: "DELETE"
        },

        // INTERNAL. Use Article.likes.count() instead.
        "prototype$__count__likes": {
          url: urlBase + "/articles/:id/likes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Article#prototype$__get__comments
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Queries comments of article.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Article` object.)
         * </em>
         */
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/articles/:id/comments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Article#prototype$__create__comments
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Article` object.)
         * </em>
         */
        "prototype$__create__comments": {
          url: urlBase + "/articles/:id/comments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Article#prototype$__delete__comments
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__comments": {
          url: urlBase + "/articles/:id/comments",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Article#prototype$__count__comments
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Counts comments of article.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__comments": {
          url: urlBase + "/articles/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Article.spaceEntity() instead.
        "prototype$__get__spaceEntity": {
          isArray: true,
          url: urlBase + "/articles/:id/spaceEntity",
          method: "GET"
        },

        // INTERNAL. Use Article.spaceEntity.create() instead.
        "prototype$__create__spaceEntity": {
          url: urlBase + "/articles/:id/spaceEntity",
          method: "POST"
        },

        // INTERNAL. Use Article.spaceEntity.destroyAll() instead.
        "prototype$__delete__spaceEntity": {
          url: urlBase + "/articles/:id/spaceEntity",
          method: "DELETE"
        },

        // INTERNAL. Use Article.spaceEntity.count() instead.
        "prototype$__count__spaceEntity": {
          url: urlBase + "/articles/:id/spaceEntity/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Article#create
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Article` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/articles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Article#createMany
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Article` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/articles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Article#upsert
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Article` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/articles",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Article#exists
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/articles/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Article#findById
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Article` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/articles/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Article#find
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Article` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/articles",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Article#findOne
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Article` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/articles/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Article#updateAll
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/articles/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Article#deleteById
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/articles/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Article#count
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/articles/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Article#prototype$updateAttributes
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Article` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/articles/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Article#createChangeStream
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/articles/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Feed.article() instead.
        "::get::feed::article": {
          url: urlBase + "/feeds/:id/article",
          method: "GET"
        },

        // INTERNAL. Use SpaceEntity.article() instead.
        "::get::spaceEntity::article": {
          url: urlBase + "/spaceEntities/:id/article",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Article#updateOrCreate
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Article` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Article#update
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Article#destroyById
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Article#removeById
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Article#modelName
    * @propertyOf lbServices.Article
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Article`.
    */
    R.modelName = "Article";

    /**
     * @ngdoc object
     * @name lbServices.Article.feed
     * @header lbServices.Article.feed
     * @object
     * @description
     *
     * The object `Article.feed` groups methods
     * manipulating `Feed` instances related to `Article`.
     *
     * Call {@link lbServices.Article#feed Article.feed()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Article#feed
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Fetches hasOne relation feed.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::get::article::feed"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Article.feed#create
         * @methodOf lbServices.Article.feed
         *
         * @description
         *
         * Creates a new instance in feed of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed.create = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::create::article::feed"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Article.feed#createMany
         * @methodOf lbServices.Article.feed
         *
         * @description
         *
         * Creates a new instance in feed of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed.createMany = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::createMany::article::feed"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Article.feed#destroy
         * @methodOf lbServices.Article.feed
         *
         * @description
         *
         * Deletes feed of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.feed.destroy = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::destroy::article::feed"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Article.feed#update
         * @methodOf lbServices.Article.feed
         *
         * @description
         *
         * Update feed of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed.update = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::update::article::feed"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Article.likes
     * @header lbServices.Article.likes
     * @object
     * @description
     *
     * The object `Article.likes` groups methods
     * manipulating `Like` instances related to `Article`.
     *
     * Call {@link lbServices.Article#likes Article.likes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Article#likes
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Queries likes of article.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::get::article::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Article.likes#count
         * @methodOf lbServices.Article.likes
         *
         * @description
         *
         * Counts likes of article.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.likes.count = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::count::article::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Article.likes#create
         * @methodOf lbServices.Article.likes
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.create = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::create::article::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Article.likes#createMany
         * @methodOf lbServices.Article.likes
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.createMany = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::createMany::article::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Article.likes#destroyAll
         * @methodOf lbServices.Article.likes
         *
         * @description
         *
         * Deletes all likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.destroyAll = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::delete::article::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Article.likes#destroyById
         * @methodOf lbServices.Article.likes
         *
         * @description
         *
         * Delete a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.destroyById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::destroyById::article::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Article.likes#findById
         * @methodOf lbServices.Article.likes
         *
         * @description
         *
         * Find a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.findById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::findById::article::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Article.likes#updateById
         * @methodOf lbServices.Article.likes
         *
         * @description
         *
         * Update a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.updateById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::updateById::article::likes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Article.spaceEntity
     * @header lbServices.Article.spaceEntity
     * @object
     * @description
     *
     * The object `Article.spaceEntity` groups methods
     * manipulating `SpaceEntity` instances related to `Article`.
     *
     * Call {@link lbServices.Article#spaceEntity Article.spaceEntity()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Article#spaceEntity
         * @methodOf lbServices.Article
         *
         * @description
         *
         * Queries spaceEntity of article.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntity = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::get::article::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Article.spaceEntity#count
         * @methodOf lbServices.Article.spaceEntity
         *
         * @description
         *
         * Counts spaceEntity of article.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.spaceEntity.count = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::count::article::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Article.spaceEntity#create
         * @methodOf lbServices.Article.spaceEntity
         *
         * @description
         *
         * Creates a new instance in spaceEntity of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntity.create = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::create::article::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Article.spaceEntity#createMany
         * @methodOf lbServices.Article.spaceEntity
         *
         * @description
         *
         * Creates a new instance in spaceEntity of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntity.createMany = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::createMany::article::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Article.spaceEntity#destroyAll
         * @methodOf lbServices.Article.spaceEntity
         *
         * @description
         *
         * Deletes all spaceEntity of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.spaceEntity.destroyAll = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::delete::article::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Article.spaceEntity#destroyById
         * @methodOf lbServices.Article.spaceEntity
         *
         * @description
         *
         * Delete a related item by id for spaceEntity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for spaceEntity
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.spaceEntity.destroyById = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::destroyById::article::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Article.spaceEntity#findById
         * @methodOf lbServices.Article.spaceEntity
         *
         * @description
         *
         * Find a related item by id for spaceEntity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for spaceEntity
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntity.findById = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::findById::article::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Article.spaceEntity#updateById
         * @methodOf lbServices.Article.spaceEntity
         *
         * @description
         *
         * Update a related item by id for spaceEntity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for spaceEntity
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntity.updateById = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::updateById::article::spaceEntity"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Moodboard
 * @header lbServices.Moodboard
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Moodboard` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Moodboard",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/moodboards/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Moodboard.feed() instead.
        "prototype$__get__feed": {
          url: urlBase + "/moodboards/:id/feed",
          method: "GET"
        },

        // INTERNAL. Use Moodboard.feed.create() instead.
        "prototype$__create__feed": {
          url: urlBase + "/moodboards/:id/feed",
          method: "POST"
        },

        // INTERNAL. Use Moodboard.feed.update() instead.
        "prototype$__update__feed": {
          url: urlBase + "/moodboards/:id/feed",
          method: "PUT"
        },

        // INTERNAL. Use Moodboard.feed.destroy() instead.
        "prototype$__destroy__feed": {
          url: urlBase + "/moodboards/:id/feed",
          method: "DELETE"
        },

        // INTERNAL. Use Moodboard.likes.findById() instead.
        "prototype$__findById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/moodboards/:id/likes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Moodboard.likes.destroyById() instead.
        "prototype$__destroyById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/moodboards/:id/likes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Moodboard.likes.updateById() instead.
        "prototype$__updateById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/moodboards/:id/likes/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#prototype$__findById__comments
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Find a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Moodboard` object.)
         * </em>
         */
        "prototype$__findById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/moodboards/:id/comments/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#prototype$__destroyById__comments
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Delete a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/moodboards/:id/comments/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#prototype$__updateById__comments
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Update a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Moodboard` object.)
         * </em>
         */
        "prototype$__updateById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/moodboards/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Moodboard.spaceEntity.findById() instead.
        "prototype$__findById__spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/moodboards/:id/spaceEntity/:fk",
          method: "GET"
        },

        // INTERNAL. Use Moodboard.spaceEntity.destroyById() instead.
        "prototype$__destroyById__spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/moodboards/:id/spaceEntity/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Moodboard.spaceEntity.updateById() instead.
        "prototype$__updateById__spaceEntity": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/moodboards/:id/spaceEntity/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Moodboard.likes() instead.
        "prototype$__get__likes": {
          isArray: true,
          url: urlBase + "/moodboards/:id/likes",
          method: "GET"
        },

        // INTERNAL. Use Moodboard.likes.create() instead.
        "prototype$__create__likes": {
          url: urlBase + "/moodboards/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Moodboard.likes.destroyAll() instead.
        "prototype$__delete__likes": {
          url: urlBase + "/moodboards/:id/likes",
          method: "DELETE"
        },

        // INTERNAL. Use Moodboard.likes.count() instead.
        "prototype$__count__likes": {
          url: urlBase + "/moodboards/:id/likes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#prototype$__get__comments
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Queries comments of moodboard.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Moodboard` object.)
         * </em>
         */
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/moodboards/:id/comments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#prototype$__create__comments
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Moodboard` object.)
         * </em>
         */
        "prototype$__create__comments": {
          url: urlBase + "/moodboards/:id/comments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#prototype$__delete__comments
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__comments": {
          url: urlBase + "/moodboards/:id/comments",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#prototype$__count__comments
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Counts comments of moodboard.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__comments": {
          url: urlBase + "/moodboards/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Moodboard.spaceEntity() instead.
        "prototype$__get__spaceEntity": {
          isArray: true,
          url: urlBase + "/moodboards/:id/spaceEntity",
          method: "GET"
        },

        // INTERNAL. Use Moodboard.spaceEntity.create() instead.
        "prototype$__create__spaceEntity": {
          url: urlBase + "/moodboards/:id/spaceEntity",
          method: "POST"
        },

        // INTERNAL. Use Moodboard.spaceEntity.destroyAll() instead.
        "prototype$__delete__spaceEntity": {
          url: urlBase + "/moodboards/:id/spaceEntity",
          method: "DELETE"
        },

        // INTERNAL. Use Moodboard.spaceEntity.count() instead.
        "prototype$__count__spaceEntity": {
          url: urlBase + "/moodboards/:id/spaceEntity/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#create
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Moodboard` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/moodboards",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#createMany
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Moodboard` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/moodboards",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#upsert
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Moodboard` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/moodboards",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#exists
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/moodboards/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#findById
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Moodboard` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/moodboards/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#find
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Moodboard` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/moodboards",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#findOne
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Moodboard` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/moodboards/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#updateAll
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/moodboards/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#deleteById
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/moodboards/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#count
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/moodboards/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#prototype$updateAttributes
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Moodboard` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/moodboards/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#createChangeStream
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/moodboards/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Feed.moodboard() instead.
        "::get::feed::moodboard": {
          url: urlBase + "/feeds/:id/moodboard",
          method: "GET"
        },

        // INTERNAL. Use SpaceEntity.moodboard() instead.
        "::get::spaceEntity::moodboard": {
          url: urlBase + "/spaceEntities/:id/moodboard",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Moodboard#updateOrCreate
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Moodboard` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#update
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#destroyById
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Moodboard#removeById
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Moodboard#modelName
    * @propertyOf lbServices.Moodboard
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Moodboard`.
    */
    R.modelName = "Moodboard";

    /**
     * @ngdoc object
     * @name lbServices.Moodboard.feed
     * @header lbServices.Moodboard.feed
     * @object
     * @description
     *
     * The object `Moodboard.feed` groups methods
     * manipulating `Feed` instances related to `Moodboard`.
     *
     * Call {@link lbServices.Moodboard#feed Moodboard.feed()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Moodboard#feed
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Fetches hasOne relation feed.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::get::moodboard::feed"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Moodboard.feed#create
         * @methodOf lbServices.Moodboard.feed
         *
         * @description
         *
         * Creates a new instance in feed of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed.create = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::create::moodboard::feed"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Moodboard.feed#createMany
         * @methodOf lbServices.Moodboard.feed
         *
         * @description
         *
         * Creates a new instance in feed of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed.createMany = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::createMany::moodboard::feed"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Moodboard.feed#destroy
         * @methodOf lbServices.Moodboard.feed
         *
         * @description
         *
         * Deletes feed of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.feed.destroy = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::destroy::moodboard::feed"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Moodboard.feed#update
         * @methodOf lbServices.Moodboard.feed
         *
         * @description
         *
         * Update feed of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed.update = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::update::moodboard::feed"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Moodboard.likes
     * @header lbServices.Moodboard.likes
     * @object
     * @description
     *
     * The object `Moodboard.likes` groups methods
     * manipulating `Like` instances related to `Moodboard`.
     *
     * Call {@link lbServices.Moodboard#likes Moodboard.likes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Moodboard#likes
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Queries likes of moodboard.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::get::moodboard::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Moodboard.likes#count
         * @methodOf lbServices.Moodboard.likes
         *
         * @description
         *
         * Counts likes of moodboard.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.likes.count = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::count::moodboard::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Moodboard.likes#create
         * @methodOf lbServices.Moodboard.likes
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.create = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::create::moodboard::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Moodboard.likes#createMany
         * @methodOf lbServices.Moodboard.likes
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.createMany = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::createMany::moodboard::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Moodboard.likes#destroyAll
         * @methodOf lbServices.Moodboard.likes
         *
         * @description
         *
         * Deletes all likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.destroyAll = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::delete::moodboard::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Moodboard.likes#destroyById
         * @methodOf lbServices.Moodboard.likes
         *
         * @description
         *
         * Delete a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.destroyById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::destroyById::moodboard::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Moodboard.likes#findById
         * @methodOf lbServices.Moodboard.likes
         *
         * @description
         *
         * Find a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.findById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::findById::moodboard::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Moodboard.likes#updateById
         * @methodOf lbServices.Moodboard.likes
         *
         * @description
         *
         * Update a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.updateById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::updateById::moodboard::likes"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Moodboard.spaceEntity
     * @header lbServices.Moodboard.spaceEntity
     * @object
     * @description
     *
     * The object `Moodboard.spaceEntity` groups methods
     * manipulating `SpaceEntity` instances related to `Moodboard`.
     *
     * Call {@link lbServices.Moodboard#spaceEntity Moodboard.spaceEntity()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Moodboard#spaceEntity
         * @methodOf lbServices.Moodboard
         *
         * @description
         *
         * Queries spaceEntity of moodboard.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntity = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::get::moodboard::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Moodboard.spaceEntity#count
         * @methodOf lbServices.Moodboard.spaceEntity
         *
         * @description
         *
         * Counts spaceEntity of moodboard.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.spaceEntity.count = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::count::moodboard::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Moodboard.spaceEntity#create
         * @methodOf lbServices.Moodboard.spaceEntity
         *
         * @description
         *
         * Creates a new instance in spaceEntity of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntity.create = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::create::moodboard::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Moodboard.spaceEntity#createMany
         * @methodOf lbServices.Moodboard.spaceEntity
         *
         * @description
         *
         * Creates a new instance in spaceEntity of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntity.createMany = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::createMany::moodboard::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Moodboard.spaceEntity#destroyAll
         * @methodOf lbServices.Moodboard.spaceEntity
         *
         * @description
         *
         * Deletes all spaceEntity of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.spaceEntity.destroyAll = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::delete::moodboard::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Moodboard.spaceEntity#destroyById
         * @methodOf lbServices.Moodboard.spaceEntity
         *
         * @description
         *
         * Delete a related item by id for spaceEntity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for spaceEntity
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.spaceEntity.destroyById = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::destroyById::moodboard::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Moodboard.spaceEntity#findById
         * @methodOf lbServices.Moodboard.spaceEntity
         *
         * @description
         *
         * Find a related item by id for spaceEntity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for spaceEntity
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntity.findById = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::findById::moodboard::spaceEntity"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Moodboard.spaceEntity#updateById
         * @methodOf lbServices.Moodboard.spaceEntity
         *
         * @description
         *
         * Update a related item by id for spaceEntity.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for spaceEntity
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `SpaceEntity` object.)
         * </em>
         */
        R.spaceEntity.updateById = function() {
          var TargetResource = $injector.get("SpaceEntity");
          var action = TargetResource["::updateById::moodboard::spaceEntity"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Discussion
 * @header lbServices.Discussion
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Discussion` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Discussion",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/discussions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Discussion.page() instead.
        "prototype$__get__page": {
          url: urlBase + "/discussions/:id/page",
          method: "GET"
        },

        // INTERNAL. Use Discussion.feed() instead.
        "prototype$__get__feed": {
          url: urlBase + "/discussions/:id/feed",
          method: "GET"
        },

        // INTERNAL. Use Discussion.feed.create() instead.
        "prototype$__create__feed": {
          url: urlBase + "/discussions/:id/feed",
          method: "POST"
        },

        // INTERNAL. Use Discussion.feed.update() instead.
        "prototype$__update__feed": {
          url: urlBase + "/discussions/:id/feed",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.feed.destroy() instead.
        "prototype$__destroy__feed": {
          url: urlBase + "/discussions/:id/feed",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.likes.findById() instead.
        "prototype$__findById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/discussions/:id/likes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Discussion.likes.destroyById() instead.
        "prototype$__destroyById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/discussions/:id/likes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.likes.updateById() instead.
        "prototype$__updateById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/discussions/:id/likes/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Discussion#prototype$__findById__comments
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Find a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "prototype$__findById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/discussions/:id/comments/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Discussion#prototype$__destroyById__comments
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Delete a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/discussions/:id/comments/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Discussion#prototype$__updateById__comments
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Update a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "prototype$__updateById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/discussions/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Discussion.likes() instead.
        "prototype$__get__likes": {
          isArray: true,
          url: urlBase + "/discussions/:id/likes",
          method: "GET"
        },

        // INTERNAL. Use Discussion.likes.create() instead.
        "prototype$__create__likes": {
          url: urlBase + "/discussions/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Discussion.likes.destroyAll() instead.
        "prototype$__delete__likes": {
          url: urlBase + "/discussions/:id/likes",
          method: "DELETE"
        },

        // INTERNAL. Use Discussion.likes.count() instead.
        "prototype$__count__likes": {
          url: urlBase + "/discussions/:id/likes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Discussion#prototype$__get__comments
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Queries comments of discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/discussions/:id/comments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Discussion#prototype$__create__comments
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "prototype$__create__comments": {
          url: urlBase + "/discussions/:id/comments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Discussion#prototype$__delete__comments
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__comments": {
          url: urlBase + "/discussions/:id/comments",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Discussion#prototype$__count__comments
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Counts comments of discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__comments": {
          url: urlBase + "/discussions/:id/comments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Discussion#create
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/discussions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Discussion#createMany
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/discussions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Discussion#upsert
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/discussions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Discussion#exists
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/discussions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Discussion#findById
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/discussions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Discussion#find
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/discussions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Discussion#findOne
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/discussions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Discussion#updateAll
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/discussions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Discussion#deleteById
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/discussions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Discussion#count
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/discussions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Discussion#prototype$updateAttributes
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/discussions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Discussion#createChangeStream
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/discussions/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Feed.discussion() instead.
        "::get::feed::discussion": {
          url: urlBase + "/feeds/:id/discussion",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Discussion#updateOrCreate
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Discussion` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Discussion#update
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Discussion#destroyById
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Discussion#removeById
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Discussion#modelName
    * @propertyOf lbServices.Discussion
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Discussion`.
    */
    R.modelName = "Discussion";


        /**
         * @ngdoc method
         * @name lbServices.Discussion#page
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Fetches belongsTo relation page.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Page` object.)
         * </em>
         */
        R.page = function() {
          var TargetResource = $injector.get("Page");
          var action = TargetResource["::get::discussion::page"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Discussion.feed
     * @header lbServices.Discussion.feed
     * @object
     * @description
     *
     * The object `Discussion.feed` groups methods
     * manipulating `Feed` instances related to `Discussion`.
     *
     * Call {@link lbServices.Discussion#feed Discussion.feed()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Discussion#feed
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Fetches hasOne relation feed.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::get::discussion::feed"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Discussion.feed#create
         * @methodOf lbServices.Discussion.feed
         *
         * @description
         *
         * Creates a new instance in feed of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed.create = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::create::discussion::feed"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Discussion.feed#createMany
         * @methodOf lbServices.Discussion.feed
         *
         * @description
         *
         * Creates a new instance in feed of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed.createMany = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::createMany::discussion::feed"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Discussion.feed#destroy
         * @methodOf lbServices.Discussion.feed
         *
         * @description
         *
         * Deletes feed of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.feed.destroy = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::destroy::discussion::feed"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Discussion.feed#update
         * @methodOf lbServices.Discussion.feed
         *
         * @description
         *
         * Update feed of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feed` object.)
         * </em>
         */
        R.feed.update = function() {
          var TargetResource = $injector.get("Feed");
          var action = TargetResource["::update::discussion::feed"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Discussion.likes
     * @header lbServices.Discussion.likes
     * @object
     * @description
     *
     * The object `Discussion.likes` groups methods
     * manipulating `Like` instances related to `Discussion`.
     *
     * Call {@link lbServices.Discussion#likes Discussion.likes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Discussion#likes
         * @methodOf lbServices.Discussion
         *
         * @description
         *
         * Queries likes of discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::get::discussion::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Discussion.likes#count
         * @methodOf lbServices.Discussion.likes
         *
         * @description
         *
         * Counts likes of discussion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.likes.count = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::count::discussion::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Discussion.likes#create
         * @methodOf lbServices.Discussion.likes
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.create = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::create::discussion::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Discussion.likes#createMany
         * @methodOf lbServices.Discussion.likes
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.createMany = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::createMany::discussion::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Discussion.likes#destroyAll
         * @methodOf lbServices.Discussion.likes
         *
         * @description
         *
         * Deletes all likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.destroyAll = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::delete::discussion::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Discussion.likes#destroyById
         * @methodOf lbServices.Discussion.likes
         *
         * @description
         *
         * Delete a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.destroyById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::destroyById::discussion::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Discussion.likes#findById
         * @methodOf lbServices.Discussion.likes
         *
         * @description
         *
         * Find a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.findById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::findById::discussion::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Discussion.likes#updateById
         * @methodOf lbServices.Discussion.likes
         *
         * @description
         *
         * Update a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R.likes.updateById = function() {
          var TargetResource = $injector.get("Like");
          var action = TargetResource["::updateById::discussion::likes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
