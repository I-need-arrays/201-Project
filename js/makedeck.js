'use strict';
// **********************DOM*******************************
let deckForm = document.getElementById('make-deck');
let list = document.getElementById('list');
let showDeck = document.getElementById('showdeck');
let resultsBtn = document.getElementById('resultbtn');
// ************************global varible
let createDeck = [];
let customDeck =[];

//**************** Constroctor object********************** 
function Deck (question,answer,deck) {
  this.question = question;
  this.answer = answer;
  this.deck = deck;
  this.views = 0;
  this.correct = 0;

  // pushed to the empty array based on deck name
  // createDeck.push(this);
  if (this.deck === 'default') {
    createDeck.push(this);

  }else{
    customDeck.push(this);
  }
  let strDeck = JSON.stringify(createDeck);
  localStorage.setItem('decks',strDeck);
}
// gets info from local storage to updated it, and checks if there is a local storage, other wise we hard coded some questions
function getDeck (){
  let returnDeck = localStorage.getItem('decks');
  if(returnDeck){
    let parsedDeck = JSON.parse(returnDeck);
    // separating the stored information
    for(let i in parsedDeck) {
      if(parsedDeck[i].deck === 'default'){
        createDeck.push(parsedDeck[i]);
      }else{
        customDeck.push(parsedDeck[i]);
      }
    }

  }else{

    new Deck ('how old are you','1000','default');
    new Deck ('how whats your name','bob','default');
    new Deck ('how do you say cool in english','cool','default');
    new Deck ('how tall are you','10ft','default'); 

    // let strDeck = JSON.stringify(createDeck);
    // localStorage.setItem('decks',strDeck);
  }

}

// ************* event function **********
function handelSubmit (event) {
  event.preventDefault();

  let question = event.target.question.value;
  let answer = event.target.answer.value;
  let deck = event.target.deck.value;

  let newDeck = new Deck(question,answer,deck);
  // saving to local storage
  deckForm.reset();
}
// shows a list of the decks that they have 
function handelResults (event) {
  event.preventDefault();

  if (showDeck.value === 'default'){
    for(let i in createDeck) {
      let liElem = document.createElement('li');
      liElem.textContent = `${createDeck[i].question}? ${createDeck[i].answer}` ;
      list.appendChild(liElem);
    }
  }else{
    for(let i in customDeck) {
      let liElem = document.createElement('li');
      liElem.textContent = `${customDeck[i].question}? ${customDeck[i].answer}` ;
      list.appendChild(liElem);
    }
  }


}
getDeck();
// event call 
deckForm.addEventListener('submit',handelSubmit);
resultsBtn.addEventListener('click',handelResults);