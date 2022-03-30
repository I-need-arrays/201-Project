// 'use strict'


let dailyLimit = 10;
let cardsRemaining =dailyLimit ;
let randomList = []; // GET LENGTH OF LOCAL STORAGE // MAKE LIST // MAKE RANDOM LIST 
let createDeck=[] ;
let randList_2 =[] ;
let currentIndex=0;
 let adjustmentForZero =0 ;

 let suspender =0;  // turns to 1 every suspend so that on the final card when suspend is hit next will throw an error.

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
// let Question_list  = document.getElementById("Question_list");
let no_button  = document.getElementById("b1"); 
let yes_button  = document.getElementById("b2"); 
let suspend_button  = document.getElementById("b3"); 
let next_button  = document.getElementById("b4"); 

no_button.addEventListener('click', handleNo);
yes_button.addEventListener('click', handleYes);
suspend_button.addEventListener('click', handleSuspend);
next_button.addEventListener('click', handleNext);


let pause =1;  // Prevents adding in another answer when card is already displayed 


///////////////////////////////////////////////////////////////////////////////////
//////Puts the card index in the front so that it will be seen again after all 
//////unseen cards are done 
///////////////////////////////////////////////////////////////////////////////////
function  handleNo(){
  // alert('No handler works');
 
  // logic to make increment times shown
  
  // console.log('no before -'+ currentIndex);

  //increments the View count 

  incrementViews();

  randList_2.push(  randomList[currentIndex]);

  if(pause===1){
  
  showAnswer()


  // increments position in list 
  // incrementList();

  // console.log('no after -'+ currentIndex);
  }

  pause=0;

suspender=0;
}
///////////////////////////////////////////////////////////////////////////////////
//////Puts the card index in the front so that it will be seen again after all 
//////unseen cards are done 
///////////////////////////////////////////////////////////////////////////////////
function  handleYes(){

incrementViews();
incrementCorrect() ; 

if(pause=== 1){
  randList_2.push(  randomList[currentIndex]);
  // console.log(randList_2);
  showAnswer()

  //increments the View count AND NUMBER OF CORRECT 
  // incrementList();
 }

 pause=0;
  
suspender =0;
}

///////////////////////////////////////////////////////////////////////////////////
//////
////// 
///////////////////////////////////////////////////////////////////////////////////
function  handleSuspend(){
  incrementViews() ;
  incrementCorrect() ; 
  // console.log(randList_2);

  //increments the View count 
  // For strect play with the date and see if you can get it to stay out for 4 days 
  if(pause===1){
  showAnswer()
  // incrementList();
  }

  suspender =1;
  pause=0;
}

///////////////////////////////////////////////////////////////////////////////////
////// Increments the item in the List Reassigns the question
////// Removes answer (also divider if I get there )
//////
///////////////////////////////////////////////////////////////////////////////////

function  handleNext(){

  if(currentIndex===0 && randList_2.length === 0 &suspender==1){
    alert("Sorry all cards have been suspended.\nPlease reload the page to continue playing.")

    // The alert is firing one to early because arrays have a 0 index
    // so on the handle next this will allow it to show the final card
    // On next click of suspend it should throw a terminal error 
    adjustmentForZero =1;
  
                           }

                           incrementList();
  removeAnswer() ;
  showQuestion() ; 
pause =1 ;

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
  // console.log("currentIndex = " + currentIndex) ;

  //displays the first question 
  showQuestion();

}


function incrementViews(){
  //increments the views 
  // console.log( parsedQuestions[currentIndex].views+1);

 
  parsedQuestions[currentIndex].views+=1 ; 
  //clear out the old data 
  localStorage.removeItem('decks') ;
  //write in new data with incremented values
  let strDeck = JSON.stringify(parsedQuestions);
  localStorage.setItem('decks',strDeck);


}

function incrementCorrect(){
  parsedQuestions[currentIndex].correct += 1 ; 
  //clear out the old data 
  localStorage.removeItem('decks') ;
  //write in new data with incremented values
  let strDeck = JSON.stringify(parsedQuestions);
  localStorage.setItem('decks',strDeck);


}

// function incrementQuestion(){

// }



// For the logic make sure that you first pop or move the values 
// then adjust the current index 
//if NO
//its a pop then push so it goes to the first of the list so LENGTH IS THE SAME
///////// So dont change index 

// if yes or suspend for 4 days then you need to pop and then use the end 
/////// of that list 
let qquestion = document.getElementById("Question");  //li

///////////////////////////////////////////////////////////////////////////////////
//////
///////////////////////////////////////////////////////////////////////////////////

//Get a  new question
function showQuestion(){

  // let question = document.createElement('li') ;  
  Question.textContent = parsedQuestions[currentIndex].question;
  // question.textContent = parsedQuestions[currentIndex].question
  // Question.appendChild(question);
  // question.textContent = parsedQuestions[currentIndex].question; 
  // Question.appendChild(question); // li -> li

  // question.textContent = parsedQuestions[currentIndex].question; 
  // Question_list.appendChild(question);
  

}

function showAnswer(){
  let bar = document.createElement('hr');
  Question_list.appendChild(bar) ;
  bar.id='removable_divider';


  let answer = document.createElement('li');
  answer.textContent= parsedQuestions[currentIndex].answer ;
  answer.id = 'answer' ;
  Question_list.appendChild(answer);
  // let answer1 = document.getElementById('answer');
  // Question_list.appendChild(answer1);

}

function removeQuestion(){
  Question.removeChild(question);
  

}



function removeAnswer(){
let answer1 = document.getElementById('answer');
let bar = document.getElementById('removable_divider');

Question_list.removeChild(answer1);
Question_list.removeChild(bar);

}



///////////////////////////////////////////////////////////////////////////////////
//////
///////////////////////////////////////////////////////////////////////////////////

function incrementList(){

console.log('increment list CurrentINDEX = ' +currentIndex + 'randList_2.length  = ' + randList_2.length );

 








if(currentIndex===0 && randList_2.length > 0 ){
        // alert('incrementList else if ');

      //Once you have sorted thru the first loop this will go take the elements from the secondary list 
      // reassign them to the main list so that you can iterate again.
      // it will go until there are no more in the secondary loop because as you suspend they are not put 
      // back into the secondary loop.
      //  So on the press of the suspend there will be nothing to display so it will give you an alert.
            randomList = randList_2;
            currentIndex = randomList.length-1 ;
            randList_2 = [];

          } else if(  currentIndex>0  ){
            console.log("should have gotten an a alert");
            currentIndex = currentIndex-1;
                }
                
                
          //       else if(currentIndex===0 && randList_2.length === 0){
          //     alert("Sorry all cards have been suspended.\nPlease reload the page to continue playing.")

          //     // possibly reset all the things. 

          // }
        
        
          // if(currentIndex===0 && randList_2.length === 0){
          //   alert("Sorry all cards have been suspended.\nPlease reload the page to continue playing.")

          //                          }
        
        
        }// end increment 



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
    // console.log('Deck constructor');

    this.question = question;
    this.answer = answer;
    this.deck = deck;
    this.views = 0;
    this.correct = 0;

    // console.log(  this.views) ;

  // pushed to the empty array
    createDeck.push(this);
  }


