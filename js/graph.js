`use strict`

//Array for holding cards
let cards = [];
//Parse stored data
function parseData(){

};

// Test Data: Key	Question 	Answer	Picture	Correct 	easy_correct	reviewed_today	DECK	Date Last Reviewed 	#of times Reviewed today

//Constructor for creating cards
function Card(key, question, answer, pic, correct, easyCorrect, lReviewed, deck, dateLR, rToday) {
    this.key = key;
    this.question = question;
    this.answer = answer;
    this.pic = pic;
    this.correct = correct;
    this.easyCorrect = easyCorrect;
    this.lReviewed = lReviewed;
    this.deck = deck;
    this.dateLR = dateLR;
    this.rToday = rToday;
  };

//Create a test object
const card1 = new Card(2, "What is JS", "A scripting Language.", "https://w7.pngwing.com/pngs/114/579/png-transparent-pink-cross-stroke-ink-brush-pen-red-ink-brush-ink-leave-the-material-text.png", 'Yes', 'Yes', "3/29/22", "Javascript", "3/29/22", "Yes");

const card2 = new Card(1, "What is HTML", "HTML is for structure", "www/static/pic,'No', 'No', "3/29/22", "Javascript", "3/29/22", "Yes");

//Push to cards array
cards.push(card1);

//show cards array contents
console.table(cards);

function displayResults(cards) {
    //
};

function chartResults(){

};
