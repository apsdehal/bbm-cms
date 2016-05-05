bbmCms.service('UserResource', ['$resource', function ($resource) {
  return $resource(
    'user/:type', { type: 'login' }, {
      'login': {method: 'post', params: { type: 'login' }},
      'signup': {method: 'post'}
    }

  )
}])
