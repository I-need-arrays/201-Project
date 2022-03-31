`use strict`

//Array for holding cards
let cards = [];

/////////////////////
let defaultViews =0;
let defaultCorrect =0;
let customViews =0;
let customCorrect =0;
let returnDeck = localStorage.getItem('decks')
if(returnDeck){
  createDeck = JSON.parse(returnDeck);
        }


  for(let i = 0 ;i<createDeck.length ; i++){
    console.log(i , createDeck[i].views) ;
    if(createDeck[i].deck === 'default'){
      defaultViews =  defaultViews   +   createDeck[i].views;
      defaultCorrect =defaultCorrect +  createDeck[i].correct;

    }else{
      customViews   = customViews +   createDeck[i].views;
      customCorrect = customCorrect +  createDeck[i].correct;
    }

  }

  /////////////////////

  



//Parse stored data
function parseData() {

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

//Create test objects
const card1 = new Card(1, "What is JS", "A scripting Language.", "https://w7.pngwing.com/pngs/114/579/png-transparent-pink-cross-stroke-ink-brush-pen-red-ink-brush-ink-leave-the-material-text.png", 'Yes', 'Yes', "3/29/22", "Javascript", "3/29/22", "Yes");

const card2 = new Card(2, 'What is HTML', "HTML is for structure", "www/static/pic", 'No', 'No', '3/29/22', 'HTML', "3/29/22", "Yes");

const card3 = new Card(12, 'How is HTML Structured', "Semantically", "www/static/pic", 'No', 'No', '3/29/22', 'HTML', "3/29/22", "Yes");

const card4 = new Card(2, 'How would you identify a style for an element with an id of text in CSS?', "#text", "www/static/pic", 'Yes', 'No', '3/29/22', 'CSS', "3/29/22", "Yes");

const card5 = new Card(7, 'How do you declare a function with the name charter?', "function Charter(){};", "www/static/pic", 'No', 'No', '3/29/22', 'Javascript', "3/29/22", "Yes");

const card6 = new Card(8, 'How would you attach a function to an element?', 'onSumbit=myFunction()', "0", 'Yes', 'No', '3/29/22', 'HTML', "2/29/22", "Yes");

const card7 = new Card(10, 'What character do you input to start of Doctype when coding HTML?', "!", "www/static/pic", 'No', 'No', '3/29/22', 'HTML', "3/09/22", "Yes");


const card8 = new Card(9, 'How do you select HTML elements using CSS?', "Via CSS Selectors", "www/static/pic", 'Yes', 'Yes', '3/29/22', 'CSS', "3/22/22", "Yes");


//Push to cards array
cards.push(card1);
cards.push(card2);
cards.push(card3);
cards.push(card4);
cards.push(card5);
cards.push(card6);
cards.push(card7);
cards.push(card8);

//show cards array contents
console.table(cards);


// function sum(a){
//   let b = 1;
//   return a + b;
// }
function displayResults(cards) {
  //Loop to consolidate values
};

function chartResults() {

//Array for holding card data
let cardData = [];

let tempData=[];

//Variables that change with each loop iteration
let correctNum = 0;

//Array for holding deck names
let deckArray = [];

//Calculate unique Deck
    let dTotal = 0;
    let num = 0;
  //Loop through card objects
  for (let index = 0 ; index < cards.length; index++) {
    //Getting Correect status
    const correct = cards[index].correct; // Yes or No
    const deck = cards[index].deck; // Name of the deck or category

    tempData.push(deck + ',' +correct); 
    
    //Get DeckName if unique and push to deck array
    if (deckArray.includes(deck) === false) {
      deckArray.push(deck);
    };

  };

  // console.table(tempData);
  // //Loop through card and add questions to deck array
  // for (let i = 0; i < deckArray.length; i++) {
  //   let deckId = deckArray[i];

  //   //Loop through answers and write to cardData array
  //   for (let index = 0; index < cards.length; index++) {
  //     const correct = cards[index].correct; // Yes or No
  //     const deck = cards[index].deck; // Name of the deck or category

  //     if (correct === 'Yes' && deckId === deck) {
  //       correctNum++;
  //     }
  //     //[2,1,1]

  //   };
  //   cardData.push(correctNum);
  // };
  let x = [];
 


  for (let index = 0; index < deckArray.length; index++) { 
    let counter = 0;

    let deckID = deckArray[index];
   // console.log(deckArray[index]);


    for (let i = 0; i < cards.length; i++) {
      //console.log(target[0]);
      let x = [cards[i].deck,cards[i].correct];
      // console.log(x);

      if (x.includes(deckID) === true && x.includes('Yes') === true) {
        counter++;

      };
      // expected output: tru
      
    };
   
    cardData.push(counter);  
   console.table('Data :' + cardData);
  };

console.table(cardData);

  // console.table(deckArray);
  
  // [javascript, html, css]
  // [1,1,2]  <cardData

// cardData.push(correctNum);

//cardData = [1,1,2];
//Generate chart

  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: deckArray,
      datasets: [{
        label: '# of Correct Questions',
        data: cardData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  })



};

//Run chart function
chartResults();