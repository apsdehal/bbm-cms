bbmCms.service('ImageResource', ['$resource', function ($resource) {
  return $resource(
    'api/image/:type', { type: 'createMany' }, {
      'createMany': {method: 'post', params: { type: 'createMany' }},
      'update': {method: 'post', params: { type: 'update' }},
      'delete': {method: 'post', params: { type: 'delete' }}
    }
  )
}])
