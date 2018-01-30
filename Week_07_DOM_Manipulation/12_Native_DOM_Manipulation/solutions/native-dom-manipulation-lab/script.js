let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener('DOMContentLoaded', function(event) {
  // Random quote of the day generator
  function randomQuote() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  function changeTitle() {
    var mainTitle = document.querySelector('#main-title');
    mainTitle.innerHTML = 'Something shorter!';
  };

  changeTitle();


  // Part 2
  function changeColor() {
    document.body.setAttribute('style', 'background: pink;');
  };

  changeColor();

  
  // Part 3
  function removeLastFavListItem() {
    var favList = document.querySelector('#favorite-things');
    var allFavListItems = favList.children;
    var lastFavListItem = allFavListItems[allFavListItems.length - 1];
    favList.removeChild(lastFavListItem);
  };

  removeLastFavListItem();


  // Part 4
  function changeFontSize() {
    document.querySelectorAll('.special-title').forEach(function(element) {
      element.style.fontSize = '2rem';
    });
  };

  changeFontSize();


  // Part 5
  function removeChicago() {
    var raceList = document.querySelector('ul#past-races');
    var raceListItems = raceList.children;
    var chicagoIndex;
    for(var i = 0; i < raceListItems.length; i++) {
      if (raceListItems[i].innerHTML === 'Chicago') {
        chicagoIndex = i;
      }
    };
    var chicagoListItem = raceListItems[chicagoIndex]
    raceList.removeChild(chicagoListItem);
  };

  removeChicago();


  // Part 6
  function addCityToPastRaces() {
    var li = document.createElement('li');
    li.innerHTML = 'New York';
    document.querySelector('ul#past-races').appendChild(li);
  };
  
  addCityToPastRaces();


  // Part 7
  function addBlogPost() {
    var p = document.createElement('p');
    var h1 = document.createElement('h1');
    var div = document.createElement('div');

    p.innerText = 'I HIT A LOT OF TRAFFIC!';
    h1.innerText = 'New York';
    div.classList.add('blog-post', 'purple');
    
    div.appendChild(h1);
    div.appendChild(p);

    document.querySelector('.main').appendChild(div);
  };

  addBlogPost();


  // Part 8
  
  function setClickHandler() {
    document.querySelector('div#quote-title').addEventListener('click', randomQuote);
  };

  setClickHandler();


  // Part 9
  
  function setColorChangeHandlers() {
    var posts = document.querySelectorAll('.blog-post');

    for(var i = 0; i < posts.length; i++) {
      var post = posts[i];

      post.addEventListener('mouseout', function(event) {
        event.target.classList.toggle('purple');
      });
      
      post.addEventListener('mouseenter', function(event) {
        event.target.classList.toggle('red');
      });
    };
  };

  setColorChangeHandlers();
});
