$(document).ready(function(){
  //Access the first p element by its id and change the text
  $('p#first').html('text changed');

  //Change the image on the screen to http://www.podcastplanet.com/wp-content/uploads/2015/06/cat1.jpg
  $('img').attr('src', 'http://www.podcastplanet.com/wp-content/uploads/2015/06/cat1.jpg');

  //Change the styling of the li tags to display: inline
  $('li').css('display', 'inline');

  //Make a new p tag and append it to the 'container' div. It should say 'Farm-to-table Godard roof party bespoke, fashion axe mustache vinyl.'
  var newP = $('<p></p>')
  newP.html('Farm-to-table Godard roof party bespoke, fashion axe mustache vinyl.');
  var container = $('#container');
  container.append(newP);

  var domStuff = ['vanilla js', 'jquery', 'html', 'css']

  //Create a new <ul> element and append it to the container div
  var newUl = $('<ul></ul>');
  container.append(newUl);

  //Loop over the domStuff array and make a new <li> for each element and append it to the new <ul>
  domStuff.forEach(function(thing) {
    newUl.append($(`<li>${thing}</li>`));
  });

  //Hide the long-info text
  $('.long-info').hide();

  //Change the background of the entire page to a different color
  //My personal favorites are papayawhip, rebeccapurple or cornflowerblue
  $('body').css({ background: 'rebeccapurple' });

  //Create a <div> with the class 'my-jquery-class'
  var newDiv = $('<div></div>');
  container.append(newDiv); 

  //Append an <img> to the new div with the url http://d2fbmjy3x0sdua.cloudfront.net/cdn/farfuture/kkZmM00WZS2MbetKL2zCqhYuJKcPuY2Qx9S0LptBFPc/mtime:1486670872/sites/default/files/styles/article_hero_inline/public/sfw_2015_kristenmauzy_275511_americankestrel.jpg?itok=OAZur4ZR
  var newImg = $('<img></img>');
  newImg.attr('src', 'http://d2fbmjy3x0sdua.cloudfront.net/cdn/farfuture/kkZmM00WZS2MbetKL2zCqhYuJKcPuY2Qx9S0LptBFPc/mtime:1486670872/sites/default/files/styles/article_hero_inline/public/sfw_2015_kristenmauzy_275511_americankestrel.jpg?itok=OAZur4ZR');
  newDiv.append(newImg);

  //Add a class 'smaller-font' to the p tags with the info class
  $('p.info').addClass('smaller-font');


}) //end of document.ready; Don't touch this!!
