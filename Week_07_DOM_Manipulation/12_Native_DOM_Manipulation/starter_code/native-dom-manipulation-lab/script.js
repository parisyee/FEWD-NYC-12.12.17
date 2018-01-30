let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

// Do all of your work inside the document.addEventListener
document.addEventListener('DOMContentLoaded', function(event) {

  // Random quote of the day generator
  function randomQuote() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Part 1
  function changeTitle() {

  };
  changeTitle();


  // Part 2
  function changeColor() {

  };
  changeColor();


  // Part 3
  function removeLastFavListItem() {

  };
  removeLastFavListItem();


  // Part 4
  function changeFontSize() {

  };
  changeFontSize();


  // Part 5
  function removeChicago() {

  };
  removeChicago();


  // Part 6
  function addCityToPastRaces() {

  };
  addCityToPastRaces();


  // Part 7
  function addBlogPost() {

  };
  addBlogPost();


  // Part 8

  function setClickHandler() {

  };
  setClickHandler();


  // Part 9

  function setColorChangeHandlers() {

  };
  setColorChangeHandlers();
});
