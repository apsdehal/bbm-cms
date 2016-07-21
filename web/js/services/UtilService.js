bbmCms.service('UtilService', function () {
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

});
