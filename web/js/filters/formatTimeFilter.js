bbmCms.filter('formatTime', function() {
    return function(input) {
      if (!input) {
        return '';
      }
      return moment(input).format("MMM Do, YYYY [at] h:mma");
    }
});
