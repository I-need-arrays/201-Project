`use strict`

let lStorage = JSON.parse(localStorage.getItem("decks"));

// console.log(lStorage);

//If there is no data in local storage, notify the user
if (lStorage === null){
  alert("Looks like we don't have your deck info stored. Please visit the home page to get started!");
}

//Array for holding cards
let cards = [];

//Array for holding views
let viewArray=[]

// Test Data: Key	Question 	Answer	Picture	Correct 	easy_correct	reviewed_today	DECK	Date Last Reviewed 	#of times Reviewed today

//Constructor for creating cards
function Card(question, answer, deck, views, correct, img) {
  this.question = question;
  this.answer = answer;
  this.deck= deck;
  this.views = views;
  this.correct = correct;
  this.img = img;
};



//Loop to push the card decks from local storage to the cards array
for (let index = 0; index< lStorage.length; index++) {

  const question = lStorage[index].question;
  const answer = lStorage[index].answer;
  const correct = lStorage[index].correct;
  const deck = lStorage[index].deck;
  const views = lStorage[index].views;
  const img = lStorage[index].img;

  cards.push([question, answer, deck,correct, views,  img]);
  viewArray.push(views);
  
};
console.table(cards);

console.table(viewArray);

//Array for holding card data
let cardData = [];

// console.log(cardData);
//Temporary array for holding data
let tempData=[];

//Variables that change with each loop iteration
let correctNum = 0;

//Array for holding deck names
let deckArray = [];


//Function to display results on a chart
function chartResults() {

//Calculate unique Deck
    let dTotal = 0;
    let num = 0;
  //Loop through card objects
  for (let index = 0 ; index < cards.length; index++) {
    //Getting Correect status
    const correct = cards[index][3]; // Yes or No
    const deck = cards[index][2]; // Name of the deck or category

    tempData.push(deck + ',' +correct); 
    
    //Get DeckName if unique and push to deck array
    if (deckArray.includes(deck) === false) {
      deckArray.push(deck);
    };

  };

  //Temporary array to hold correct
  let x = [];

  //Temporary array to hold views
  let viewCounter = 0;
  //Loop through the cards and save decks and values for display
  for (let index = 0; index < deckArray.length; index++) { 
    let counter = 0;

    //Define the deck id
    let deckID = deckArray[index];

    for (let i = 0; i < cards.length; i++) {
      //console.log(target[0]);
      let cardDeck = cards[i][2];
      let card_Array = cards[i];
      // console.log(x);
      let num = cards[i][3];
      let viewNum=cards[i][4];
      
      // console.log(x);

      //Increment 
      if (card_Array.includes(deckID) === true) {
        counter=counter + num;
      };

      if (deckID === cardDeck) {
        viewCounter=viewCounter + viewNum
      };


    };
    cardData.push(counter);
    viewArray.push(viewCounter);
    // console.table('Data :' + cardData);
  };
  viewArray =viewArray.splice(-2, 2); // Remove last two values
  console.table('View Counter:' + viewArray);
  console.table(cards);


// console.table(cardData);

//Define the chart for display
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: deckArray,
      datasets: [{
        label: '# of Correct Questions',
        data: cardData,
        backgroundColor: [
          'rgba(216,191,216, 0.2)',
          'rgba(216,191,216, 0.2)',
          'rgba(216,191,216, 0.2)',
          'rgba(216,191,216, 0.2)',
          'rgba(216,191,216, 0.2)',
          'rgba(216,191,216, 0.2)'
        ],
        borderColor: [
          'white',
          'white',
          'white',
          'white',
          'white',
          'white',
        ],
        borderWidth: 1
      },{
      label: '# of Views',
      data: viewArray,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'white',
        'white',
        'white',
        'white',
        'white',
        'white',
      ],
      borderWidth: 1
    }]
  },
    options: {
      scales: {
        y: {
          ticks: { color: 'white', beginAtZero: true }
        },
        x: {
          ticks: { color: 'white', beginAtZero: true }
        }
      }
    }
  })



};

//Run chart function
chartResults();

//Display
function displayResults() {
  
  //Display sum
   let sum = cardData.reduce(function(a, b){
    return a + b;
    }, 0);
    console.log("Sum:" + sum)

  //Display average
  let avg = cardData.reduce(function(a, b){
    return Math.round(a + b/cardData.length);
    }, 0);

  //Change the total correct on the webpage
  let y = document.getElementById(`total`);
  y.innerText = "Total Correct: " + sum;
  
//change the average on the webpage
  let g = document.getElementById("average");
  g.innerText = "Average Score: " + avg;


  // Found the syntax for calculating the min/max at https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript
  
  //Calculate lowest category
  let min_of_array = Math.min.apply(Math, cardData);
  console.log(min_of_array);

  let r = cardData[min_of_array];
  r = deckArray[r];
  
  let x = document.getElementById('lowest');
  x.innerText = 'Deck With Lowest Score: ' + r;

  //Calculate highest category
  let max_of_array = Math.max.apply(Math, cardData);
  let f = cardData[max_of_array];
  console.log(f);
  f = deckArray[f];
  console.log(f);
  let z = document.getElementById('highest');
  z.innerText= 'Deck With Highest Score: ' + f;

};

//Run chart function
displayResults();
