function SearchService($http) {
  var searchUrl = bbmCmsConfig['bbmSolrUrl'];

  this.getGeneralQuery = function (query) {
    return searchUrl + query + '&json.wrf=JSON_CALLBACK';
  }

  this.getGeneralTermQuery = function (term, query) {
    return searchUrl + '&q=' + term + query + '&rows=40&json.wrf=JSON_CALLBACK';
  }

  this.getGeneralBrandQueryUrl = function (term) {
    return searchUrl + '&q=' + term + '&fq=ns:"solr.page"&rows=25&fq=type:"brand"&json.wrf=JSON_CALLBACK';
  }

  this.getGeneralExpertQueryUrl = function (term) {
    return searchUrl + '&q=' + term + '&fq=ns:"solr.page"&rows=25&fq=type:"expert"&json.wrf=JSON_CALLBACK';
  }

  this.getGeneralArticleQueryUrl = function (term) {
    return searchUrl + '&q=' + term + '&fq=ns:"solr.article"&rows=25&json.wrf=JSON_CALLBACK&fl=title,_id';
  }

  this.getGeneralProductQueryUrl = function (term, query) {
    return this.getGeneralTermQuery(term, query) + '&fq=ns:"solr.product"&fl=title,_id';
  }

  this.getGeneralConversationQueryUrl = function (term) {
    return searchUrl + '&q=' + term + '&fq=ns:"solr.discussion"&rows=25&json.wrf=JSON_CALLBACK&fl=title,_id';
  }

  this.getGeneralImageQueryUrl = function (term) {
    return searchUrl + '&q=' + term + '&fq=ns:"solr.image"&rows=25&json.wrf=JSON_CALLBACK&fl=title,_id';
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

  this.searchProducts = function (term, query) {
    var url = this.getGeneralProductQueryUrl(term, query);
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
