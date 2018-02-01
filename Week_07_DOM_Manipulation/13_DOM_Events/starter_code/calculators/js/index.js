window.onload = function(){

  // START HELPER FUNCTIONS
  function hide(id) {
    document.getElementById(id).style.display = 'none';
  }

  function hideAllAnswers() {
    [
      'basic-answer',
      'trip-answer',
      'bmi-answer',
      'mortgage-answer'
    ].forEach(function(id) {
      hide(id);
    });
  };

  function unhide(id) {
    var element = document.getElementById(id);
    element.classList.remove('hide');
    element.style.display = 'block';
  };

  function getValue(id) {
    return document.getElementById(id).value
  };

  function getFloat(id) {
    return parseFloat(getValue(id))
  };

  function roundToTwoDp(value) {
    return Math.round(value * 100) / 100
  };

  function setHtml(id, html) {
    document.getElementById(id).innerHTML = html;
  };
  // END HELPER FUNCTIONS

  function basicCalc() {
    var num1 = getFloat('basic-num-1');
    var num2 = getFloat('basic-num-2');
    var op = getValue('basic-operation');
    var answer;

    // Use these variables and your mastery of js to calculate an answer.

    setHtml('basic-answer-alert', num1 + ' ' + op + ' ' + num2 + ' = ' + answer);
    hideAllAnswers();
    unhide('basic-answer');
  }

  function tripCalc() {

  };

  function changeBmiUnits() {

  };

  function bmiCalc() {

  };

  function mortgageCalc() {

  };

  // Set up event listeners for #basic-calc, #trip-calc, #bmi-calc, and #mortgage-calc
  // here. These should be click listeners. Use the functions you've defined as the
  // event handlers.
};
