window.onload = function() {
  document.querySelector('#output').style.display = 'none';

  document
    .querySelector('#game-form')
    .addEventListener('submit', function(event) {
      event.preventDefault();

      var adj = document.querySelector('input[name="adjective"]').value;
      document.querySelector('#adjective-spot').innerText = adj;

      var verb = document.querySelector('select[name="verb"]').value;
      document.querySelector('#verb-spot').innerText = verb;
      
      var liquid = document.querySelector('input[name="liquid"]:checked').value;
      document.querySelector('#liquid-spot').innerText = liquid;
      
      var num = document.querySelector('input[name="number"]').value;
      document.querySelector('#number-spot').innerText = num;
      
      var date = document.querySelector('input[name="date"]').value;
      document.querySelector('#date-spot').innerText = date;
      
      document.querySelector('#output').style.display = 'block';
    });

  document
    .querySelector('#game-form')
    .addEventListener('reset', function(event) {
      document.querySelector('#output').style.display = 'none';
    });
};

