$(document).ready(function() {
  var stopLight = $('#stopLight');
  var slowLight = $('#slowLight');
  var goLight = $('#goLight');

  function clearLights () {
    stopLight.css('background', 'black');
    slowLight.css('background', 'black');
    goLight.css('background', 'black');
  }

  function illuminateRed () {
    clearLights();
    stopLight.css('background', 'red');
  }

  function illuminateYellow () {
    clearLights();
    slowLight.css('background', 'yellow');
  }

  function illuminateGreen () {
    clearLights();
    goLight.css('background', 'green');
  }

  var slowButton = document.querySelector('#slowButton');
  var goButton = document.querySelector('#goButton');

  $('#stopButton').click(illuminateRed);
  $('#slowButton').click(illuminateYellow);
  $('#goButton').click(illuminateGreen);
});
