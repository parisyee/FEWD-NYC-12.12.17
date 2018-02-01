window.onload = function() {
  var stopLight = document.querySelector('#stopLight');
  var slowLight = document.querySelector('#slowLight');
  var goLight = document.querySelector('#goLight');

  function clearLights () {
    stopLight.style.background = 'black';
    slowLight.style.background = 'black';
    goLight.style.background = 'black';
  }

  function illuminateRed () {
    clearLights();
    stopLight.style.background = 'red';
  }

  function illuminateYellow () {
    clearLights();
    slowLight.style.background = 'yellow';
  }

  function illuminateGreen () {
    clearLights();
    goLight.style.background = 'green';
  }

  var stopButton = document.querySelector('#stopButton');
  var slowButton = document.querySelector('#slowButton');
  var goButton = document.querySelector('#goButton');

  stopButton.addEventListener('click', illuminateRed);
  slowButton.addEventListener('click', illuminateYellow);
  goButton.addEventListener('click', illuminateGreen);
}
