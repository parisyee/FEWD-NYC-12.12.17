var grayButton = document.querySelector('#grayButton');
var whiteButton = document.querySelector('#whiteButton');

function changeToWhite() {
  document.body.style.background = 'white';
}

function changeToGray() {
  document.body.style.background = 'gray';
}

grayButton.addEventListener('click', changeToGray);
whiteButton.addEventListener('click', changeToWhite);
