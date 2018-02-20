$(function() {
  var baseUrl = 'http://api.openweathermap.org/data/2.5/weather'
  var apiKey = 'your-api-key';

  function requestUrl() {
    var zip = $('#zip').val();
    return `${baseUrl}?APPID=${apiKey}&zip=${zip}&units=imperial`;
  }

  function displayWeatherData(data) {
    $('#weather-report').show();
    $('#weather-temp').text(Math.round(data.main.temp));
    $('#weather-title').text(data.weather[0].main);
    $('#weather-description').text(data.weather[0].description);
  }

  $('form').submit(function(event) {
    event.preventDefault();

    $.ajax({
      url: requestUrl(),
      method: 'GET'
    }).done(displayWeatherData);
  });
});
