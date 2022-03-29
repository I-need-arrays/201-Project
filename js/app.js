let dailyLimit = 10;
let cardsRemaining =dailyLimit ;
let randomList = []; // GET LENGTH OF LOCAL STORAGE // MAKE LIST // MAKE RANDOM LIST 
let createDeck=[] ;
let randList_2 =[] ;
let currentIndex=0;

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
 
  // logic to make increment times shown
  
  console.log('no before -'+ currentIndex);

  randList_2.push(  randomList[currentIndex]);
  incrementList();

  console.log('no after -'+ currentIndex);
 


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

  //removeAnswer() ;
  //showQuestion() ; 


  

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
  
  //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

setFirstCard() ;

}




///////////////////////////////////////////////////////////////////////////////////
//////On startup checks the length of the list 
//////Prepopulates the question field
///////////////////////////////////////////////////////////////////////////////////

function setFirstCard(){
  //sets the index position
  currentIndex = randomList.length-1 ;
  console.log("currentIndex = " + currentIndex) ;

  //displays the first question 
  // showQuestion();

}

// For the logic make sure that you first pop or move the values 
// then adjust the current index 
//if NO
//its a pop then push so it goes to the first of the list so LENGTH IS THE SAME
///////// So dont change index 

// if yes or suspend for 4 days then you need to pop and then use the end 
/////// of that list 


///////////////////////////////////////////////////////////////////////////////////
//////
///////////////////////////////////////////////////////////////////////////////////
//Get a  new question
function showQuestion(){

}
///////////////////////////////////////////////////////////////////////////////////
//////
///////////////////////////////////////////////////////////////////////////////////

function incrementList(){

console.log('increment list CurrentINDEX = ' +currentIndex + 'randList_2.length  = ' + randList_2.length );

  if(currentIndex===0 && randList_2.length >0 ){
        alert('incrementList else if ');
            randomList = randList_2;
            currentIndex = randomList.length-1 ;
            randList_2 = [];

          } else if(currentIndex>=0){
            currentIndex = currentIndex-1;
                }else{
              alert("Sorry all cards have been suspended.\nPlease reload the page to continue playing.")
          }
        }

function showAnswer(){

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
    new Deck ('how whats your name','bob','default');
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


