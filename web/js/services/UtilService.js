bbmCms.service('UtilService', ['AuthService', function (AuthService) {
  this.getTagsFromTagString = function (current) {
    current.tags = current.tagString.split(',').map(function (tag) {
      return tag.trim();
    });
    current.oldtags = current.tags;
  }


  this.setTagString = function (current) {
    current.tagString = current.tags.map(function (tag) {
      return tag.name;
    }).join(', ');
    this.getTagsFromTagString(current);
  }

  this.setSelectedPage = function (current) {
    var page = AuthService.getCurrentUser();
    current.author = page.displayName;
    current.pageId = page.id;

    if (page['_profile']['email'] === 'admin@bedbathmore.com') {
        current.pageId = current.page.id || current.pageId;
        current.author = current.page.displayName || current.author;
    }
  }

}]);
