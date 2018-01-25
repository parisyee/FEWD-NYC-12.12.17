var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
var deck = [];
var players = [];

function buildDeck() {
  var rank = 0;
  values.forEach(function(value) {
    suits.forEach(function(suit) {
      // create an object with a `suit`, `value` and `rank` property
      // and assign the values accordingly.
      // then add the card to the end of the deck.

      // incriment `rank` by 1
    });
  });
};

function shuffleDeck() {
  var shuffledDeck = []

  while(shuffledDeck.length < deck.length) {
    // generate a random number between 0 and 51

    // assign a card variable to the card from the deck, using
    // the random number you generated as the index.

    // if the card is not undefined, replace the card in the original
    // deck with an `undefined` and then push the card into `shuffledDeck`
  }

  deck = shuffledDeck;
};

function getMorePlayers() {
  var response;

  do {
    if (response) {
      players.push({ name: response });
    }
    response = prompt('Add a player and hit <enter>. Type \'STOP\' when finished');
  } while (response && response !== 'STOP');
};

function deal() {
  // iterate through the array of player Objects
  // for each player, remove the last card from the deck
  // and assign it a proptery called `card` on the player object
};

function findHighestCard() {
  // use the array `sort` method to sort the player Objects
  // in the players array by the `rank` value of their card.
};

function announceWinners() {
  // construct a message string that declares the win and
  // lists all players witht he suits and values of their cards.

  // use `alert` to display the message to the user.
};

function playANewGame() {
  buildDeck();
  shuffleDeck();
  getMorePlayers();
  deal();
  findHighestCard();
  announceWinners();
};
