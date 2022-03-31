'use strict';
// **********************DOM*******************************
let deckForm = document.getElementById('make-deck');
let list = document.getElementById('list');
let showDeck = document.getElementById('showdeck');
let resultsBtn = document.getElementById('resultbtn');
// ************************global varible
let createDeck = [];
let customDeck =[];
let allDeck = [];

//**************** Constroctor object********************** 
function Deck (question,answer,img,deck) {
  this.question = question;
  this.answer = answer;
  this.img = img;
  if (this.img) {
    this.img = img;
  }else{
    this.img = 0;
  }
  this.deck = deck;
  this.views = 0;
  this.correct = 0;

  allDeck.push(this);

  // pushed to the empty array based on deck name
  // createDeck.push(this);
  if (this.deck === 'default') {
    createDeck.push(this);

  }else{
    customDeck.push(this);
  }
  let strDeck = JSON.stringify(allDeck);
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

    // hard coding in question for default
    new Deck ('Is this an apple','yes','https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?b=1&k=20&m=185262648&s=170667a&w=0&h=2ouM2rkF5oBplBmZdqs3hSOdBzA4mcGNCoF2P0KUMTM=','default');

    new Deck ('what HTML tag is this','paragraph','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREqAZHnb9nmmWG7br7HozAqbF2kcM7J0cXmQ&usqp=CAU','default');

    new Deck ('How old is the oldest man alive',' Kane Tanaka','','default');

    new Deck ('What language is this "ታዲያስ"','amharic','','default');

    new Deck ('How many times do we breatheach day','20,000','https://i.guim.co.uk/img/media/d8b7a69601c6ac049fd8e57819786adc91506003/0_2_2545_1528/master/2545.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=694f53610eb345e25c763f20935d7c90','default');

    new Deck ('Which Dr Seuss book has exactly 50 words in it','green eggs and ham','','default');

    new Deck ('What state has the most tornadoes','Texas','https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/F5_tornado_Elie_Manitoba_2007.jpg/1200px-F5_tornado_Elie_Manitoba_2007.jpg','default');

    new Deck ('How many dreams does the average person have in one night','4','https://cdn.shopify.com/s/files/1/2420/9425/files/Man_Sleeping_large.jpg?v=1574182163','default');

    new Deck ('Whats the cookie monsters real name','Sid','https://i.scdn.co/image/ab6761610000e5eba3a7cba23d68a4e73c3b8155','default');

    new Deck ('What percentage of U.S money havs cocaine traces','90%','','default');

    new Deck ('When were oreos invented','1912','https://pbs.twimg.com/profile_images/1139616271836884992/FMZSOlcz_400x400.png','default');

    new Deck ('What is HTML', 'HTML is a programing laguage for structuring a web page', 'www/static/pic','custom');

    new Deck ('How would you identify a style for an element with an id of text in CSS?', '#text', 'www/static/pic','custom');

    new Deck ('What character do you input to start of Doctype when coding HTML?', '!', 'www/static/pic','custom');

    new Deck ('How do you select HTML elements using CSS?', 'Via CSS Selectors','','custom');

    new Deck ('How is HTML Structured', 'Semantically','','custom');

    new Deck ('What is Javascript','A scripting Language.','','custom');

    new Deck ('How would you identify a style for an element with an id of text in CSS','#text','','custom');

    new Deck ('What is the Css selector for a class','.','custom');

    new Deck ('Which language is better Css or javascript','javascript','','custom');



    // let strDeck = JSON.stringify(createDeck);
    // localStorage.setItem('decks',strDeck);
  }

}

// ************* event function **********
function handelSubmit (event) {
  event.preventDefault();

  let question = event.target.question.value;
  let answer = event.target.answer.value;
  let img = event.target.img.value;
  let deck = event.target.deck.value;

  let newDeck = new Deck(question,answer,img,deck);
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