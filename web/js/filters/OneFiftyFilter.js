bbmCms.filter('oneFifty', function() {
    return function(input) {
      if (!input) {
        // Return empty input if there is nothing passed
        return '';
      }
      // Return only 150 chars
      if (input.length > 150) {
       return input.substring(0, 150) + '...';
      } else {
        return input;
      }
    }
});
