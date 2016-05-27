function ExpertService($http) {
  var searchUrl = bbmCmsConfig['bbmSolrUrl'];

  this.getGeneralExpertQueryUrl = function (term) {
    return searchUrl + '&q=' + term + '&fq=ns:"solr.page"&fq=type:"expert"&json.wrf=JSON_CALLBACK';
  }

  this.getAllExpertQueryUrl = function (start) {
    return searchUrl + '&start=' + start + '&fq=ns:"solr.page"&fq=type:"expert"&json.wrf=JSON_CALLBACK';
  }

  this.search = function (term) {
    var url = this.getGeneralExpertQueryUrl(term);
    return $http.jsonp(url);
  }

  this.getExperts = function (page) {
    var url = this.getAllExpertQueryUrl((page-1) * 10);
    return $http.jsonp(url);
  }
}

ExpertService.$inject = ['$http'];

bbmCms.service('ExpertService', ExpertService);
