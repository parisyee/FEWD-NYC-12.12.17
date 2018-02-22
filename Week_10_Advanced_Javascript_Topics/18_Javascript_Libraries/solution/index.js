$(function() {
  function requestUrl() {
    var rootUrl = 'https://api.gdax.com'
    var endpoint = '/products/BTC-USD/candles';
    var queryString = Qs.stringify({
      start: '2018-02-22T00:00:00-05:00',
      end: '2018-02-22T12:00:00-05:00',
      granularity: 3600
    });

    return `${rootUrl}${endpoint}?${queryString}`;
  }

  function parseTimesForChart(data) {
    return data.map(function(point) {
      return point[0]*1000;
    });
  }

  function parsePricesForChart(data) {
    return data.map(function(point) {
      return point[4];
    });
  }

  $.ajax({
    url: requestUrl(),
    method: 'GET'
  }).done(function(data) {
    var chart = c3.generate({
      bindto: '#chart',
      data: {
        x: 'time',
        columns: [
          ['time'].concat(parseTimesForChart(data)),
          ['price'].concat(parsePricesForChart(data))
        ]
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%m/%d/%y %H:%M'
          }
        },
        y: {
          tick: {
            format: d3.format("$,")
          }
        }
      }
    });
  });
});
