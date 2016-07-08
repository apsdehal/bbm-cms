bbmCms.service('ArticleResource', ['$resource', function ($resource) {
  return $resource(
    'api/article/:type', { type: 'createMany' }, {
      'createMany': {method: 'post', params: { type: 'createMany' }},
      'update': {method: 'put', params: { type: 'update' }},
      'delete': {method: 'delete', params: { type: 'delete' }},
      'all': {method: 'get', params: { type: 'all' }, isArray: true},
      'deleteAll': {method: 'delete', params: { type: 'all' }}
    }
  )
}])
