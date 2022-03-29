'use strict';
// **********************DOM*******************************
let deckForm = document.getElementById('make-deck');
// ************************global varible
let createDeck = [];
//**************** Constroctor object********************** 
function Deck (question,answer,deck) {
  this.question = question;
  this.answer = answer;
  this.deck = deck;

// pushed to the empty array
  createDeck.push(this);
}
// ************* event function **********
function handelSubmit (event) {
  event.preventDefault();

  let question = event.target.question.value;
  let answer = event.target.answer.value;
  let deck = event.target.deck.value;

  let newDeck = new Deck(question,answer,deck);
// saving to local storage
  let strDeck = JSON.stringify(createDeck);
  localStorage.setItem('decks',strDeck);

  deckForm.reset();
}
// event call 
deckForm.addEventListener('submit',handelSubmit);