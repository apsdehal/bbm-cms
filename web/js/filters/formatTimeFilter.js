bbmCms.filter('formatTime', function() {
    return function(input) {
      if (!input) {
        return '';
      }
      return moment(input).format("MMM Do, YYYY [at] h:mma");
    }
});

bbmCms.filter('getTimePassed', function() {
    return function(input) {
      if (!input) {
        return '';
      }

      moment.locale( 'en', {
          relativeTime : {
              future: "in %s",
              past:   "%s ago",
              s:  "seconds",
              m:  "1 minute",
              mm: "%d minutes",
              h:  "an hour",
              hh: "%d hours",
              d:  "a day",
              dd: "%d days",
              M:  "a month",
              MM: "%d months",
              y:  "a year",
              yy: "%d years"
          }
      });
      return moment(input).fromNow();
    }
});
