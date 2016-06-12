function SearchService($http) {
  var searchUrl = bbmCmsConfig['bbmSolrUrl'];

  this.getGeneralQuery = function (query) {
    return searchUrl + query + '&json.wrf=JSON_CALLBACK';
  }

  this.getGeneralBrandQueryUrl = function (term) {
    return searchUrl + '&q=' + term + '&fq=ns:"solr.page"&fq=type:"brand"&json.wrf=JSON_CALLBACK';
  }

  this.getGeneralExpertQueryUrl = function (term) {
    return searchUrl + '&q=' + term + '&fq=ns:"solr.page"&fq=type:"expert"&json.wrf=JSON_CALLBACK';
  }

  this.getGeneralArticleQueryUrl = function (term) {
    return searchUrl + '&q=' + term + '&fq=ns:"solr.article"&json.wrf=JSON_CALLBACK';
  }

  this.getGeneralProductQueryUrl = function (term) {
    return searchUrl + '&q=' + term + '&fq=ns:"solr.product"&json.wrf=JSON_CALLBACK';
  }

  this.getGeneralConversationQueryUrl = function (term) {
    return searchUrl + '&q=' + term + '&fq=ns:"solr.discussion"&json.wrf=JSON_CALLBACK';
  }

  this.getGeneralImageQueryUrl = function (term) {
    return searchUrl + '&q=' + term + '&fq=ns:"solr.image"&json.wrf=JSON_CALLBACK';
  }

  this.getAllExpertQueryUrl = function (start) {
    return searchUrl + '&start=' + start + '&fq=ns:"solr.page"&fq=type:"expert"&json.wrf=JSON_CALLBACK';
  }

  this.getAllBrandQueryUrl = function (start) {
    return searchUrl + '&start=' + start + '&fq=ns:"solr.page"&fq=type:"brand"&json.wrf=JSON_CALLBACK';
  }

  this.searchBrands = function (term) {
    var url = this.getGeneralBrandQueryUrl(term);
    return $http.jsonp(url);
  }

  this.getBrands = function (page) {
    var url = this.getAllBrandQueryUrl((page-1) * 10);
    return $http.jsonp(url);
  }


  this.searchExperts = function (term) {
    var url = this.getGeneralExpertQueryUrl(term);
    return $http.jsonp(url);
  }

  this.getExperts = function (page) {
    var url = this.getAllExpertQueryUrl((page-1) * 10);
    return $http.jsonp(url);
  }

  this.searchArticles = function (term) {
    var url = this.getGeneralArticleQueryUrl(term);
    return $http.jsonp(url);
  }

  this.searchProducts = function (term) {
    var url = this.getGeneralProductQueryUrl(term);
    return $http.jsonp(url);
  }

  this.searchConversations = function (term) {
    var url = this.getGeneralConversationQueryUrl(term);
    return $http.jsonp(url);
  }

  this.searchImages = function (term) {
    var url = this.getGeneralImageQueryUrl(term);
    return $http.jsonp(url);
  }

  this.search = function (query) {
    var url = this.getGeneralQuery(query);
    return $http.jsonp(url);
  }
}

SearchService.$inject = ['$http'];

bbmCms.service('SearchService', SearchService);
