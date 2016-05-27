function ExpertService($http) {
  var searchUrl = bbmCmsConfig['bbmSolrUrl'];

  this.getGeneralExpertQueryUrl = function (term) {
    return searchUrl + '&q=' + term + '&fq=ns:"solr.page"&fq=type:"expert"&json.wrf=JSON_CALLBACK';
  }
  this.search = function (term) {
    var url = this.getGeneralExpertQueryUrl(term);
    return $http.jsonp(url);
  }
}

ExpertService.$inject = ['$http'];

bbmCms.service('ExpertService', ExpertService);
