bbmCms.filter('oneFifty', function() {
    return function(input) {
      // Return only 150 chars
      if (input.length > 150) {
       return input.substring(0, 150) + '...';
      } else {
        return input;
      }
    }
});
