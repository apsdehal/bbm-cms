function BrandService($http) {
  var searchUrl = bbmCmsConfig['bbmSolrUrl'];

  this.getGeneralBrandQueryUrl = function (term) {
    return searchUrl + '&q=' + term + '&fq=ns:"solr.page"&fq=type:"brand"&json.wrf=JSON_CALLBACK';
  }

  this.getAllBrandQueryUrl = function (start) {
    return searchUrl + '&start=' + start + '&fq=ns:"solr.page"&fq=type:"brand"&json.wrf=JSON_CALLBACK';
  }

  this.search = function (term) {
    var url = this.getGeneralBrandQueryUrl(term);
    return $http.jsonp(url);
  }

  this.getBrands = function (page) {
    var url = this.getAllBrandQueryUrl((page-1) * 10);
    return $http.jsonp(url);
  }
}

BrandService.$inject = ['$http'];

bbmCms.service('BrandService', BrandService);
