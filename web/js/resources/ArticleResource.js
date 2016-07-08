bbmCms.service('ArticleResource', ['$resource', function ($resource) {
  return $resource(
    'api/article/:type', { type: 'createMany' }, {
      'createMany': {method: 'post', params: { type: 'createMany' }},
      'update': {method: 'post', params: { type: 'update' }},
      'delete': {method: 'post', params: { type: 'delete' }},
      'all': {method: 'get', params: { type: 'all' }, isArray: true},
      'deleteAll': {method: 'delete', params: { type: 'all' }}
    }
  )
}])
