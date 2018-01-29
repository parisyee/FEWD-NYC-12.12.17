var values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
var deck = [];
var players = [];
var hands = [];

function buildDeck() {
  var rank = 0;
  values.forEach(function(value) {
    suits.forEach(function(suit) {
      // adding the rank here since the cards are added to the deck in reverse
      // order according to their rank. This will make sorting players based on their
      // cards easier later on.
      deck.push({value: value, suit: suit, rank: rank});
      rank++;
    });
  });
};

function shuffleDeck() {
  var shuffledDeck = []

  while(shuffledDeck.length < deck.length) {
    var randomIndex = Math.floor(Math.random() * 52);
    card = deck[randomIndex];
    
    if (card) {
      deck.splice(randomIndex, 1, undefined)
      shuffledDeck.push(card);
    }
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
  players.forEach(function(player) {
    player.card = deck.pop();
  });
};

function findHighestCard() {
  // sorting players list based on card rank - highest rank first
  players.sort(function(player1, player2) {
    return player1.card.rank < player2.card.rank;
  });
};

function announceWinners() {
  var message = ''

  for(var i = 0; i < players.length; i++) {
    message += players[i].name + ' came in ' + (i + 1) + ' place!\n'
  }

  alert(message);
};

function playANewGame() {
  buildDeck();
  shuffleDeck();
  getMorePlayers();
  deal();
  findHighestCard();
  announceWinners();
};

