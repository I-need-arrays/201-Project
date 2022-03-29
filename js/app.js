let dailyLimit = 10;
let cardsRemaining =dailyLimit ;
let randomList = []; // GET LENGTH OF LOCAL STORAGE // MAKE LIST // MAKE RANDOM LIST 
let createDeck=[] ;

getDeck();



///////////////////////////////////////////////////////////////////////////////////
//////After storage is verified these functions pull the JSON then convert this JSON
//////To a list that can be used for logic 
///////////////////////////////////////////////////////////////////////////////////
let retreivedQuestions = localStorage.getItem('decks');
let parsedQuestions = JSON.parse(retreivedQuestions) ; 


///////////////////////////////////////////////////////////////////////////////////
//////Checks length of questions in memory. 
//////Makes the initial random list 
///////////////////////////////////////////////////////////////////////////////////

makeCardList();



// makeDB{
//   //check if it database exists
// // //else{
// //   1-20 questions 
// // }
// }

// add Event listeners 

let buttonHolder = document.getElementById("question_area");
let no_button  = document.getElementById("b1"); 
let yes_button  = document.getElementById("b2"); 
let suspend_button  = document.getElementById("b3"); 
let next_button  = document.getElementById("b4"); 

no_button.addEventListener('click', handleNo);
yes_button.addEventListener('click', handleYes);
suspend_button.addEventListener('click', handleSuspend);
next_button.addEventListener('click', handleNext);


///////////////////////////////////////////////////////////////////////////////////
//////Puts the card index in the front so that it will be seen again after all 
//////unseen cards are done 
///////////////////////////////////////////////////////////////////////////////////
function  handleNo(){
  // alert('No handler works');

}
///////////////////////////////////////////////////////////////////////////////////
//////Puts the card index in the front so that it will be seen again after all 
//////unseen cards are done 
///////////////////////////////////////////////////////////////////////////////////
function  handleYes(){


}

///////////////////////////////////////////////////////////////////////////////////
//////
////// 
///////////////////////////////////////////////////////////////////////////////////
function  handleSuspend(){
  

}

///////////////////////////////////////////////////////////////////////////////////
////// Increments the item in the List Reassigns the question
////// Removes answer (also divider if I get there )
//////
///////////////////////////////////////////////////////////////////////////////////

function  handleNext(){
  

}


///////////////////////////////////////////////////////////////////////////////////
//////Makes a random list 
//////Known cards will be popped cards that need to be repeated will go to the front
///////////////////////////////////////////////////////////////////////////////////
function makeCardList(){

  // console.log('in make cards ' + parsedQuestions.length);

  //make sequence 
  //https://stackoverflow.com/questions/3751520/how-to-generate-sequence-of-numbers-chars-in-javascript
  sequence = Array(parsedQuestions.length).fill().map((element, index) => index )
  
  // shuffle sequence  set initial random list to this list 
  randomList =   shuffle(sequence) ;




}



//Get a  new question

function newQuestion(){

}

// No button function

// Yes button function

// Suspend 4 days function 

//Next button function

//possible functions

// if statement for when cards reach daily limit 
// Congrats function 







function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}




///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// from local storage
function getDeck (){
  // console.log('in getDeck()') ;
  let returnDeck = localStorage.getItem('decks')
  if(returnDeck){
    createDeck = JSON.parse(returnDeck);

  }else{
    // console.log('in getdeck() else') ;
    new Deck ('how old are you','1000','defualt');
    new Deck ('how whats your name','bob','defualt');
    new Deck ('how do you say cool in english','cool','defualt');
    new Deck ('how tall are you','10ft','defualt');

    let strDeck = JSON.stringify(createDeck);
    localStorage.setItem('decks',strDeck);

          }

  }


  function Deck (question,answer,deck) {
    console.log('Deck constructor');

    this.question = question;
    this.answer = answer;
    this.deck = deck;
  
  // pushed to the empty array
    createDeck.push(this);
  }


