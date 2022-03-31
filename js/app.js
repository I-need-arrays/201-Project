// 'use strict'


let dailyLimit = 10;
let cardsRemaining =dailyLimit ;
let randomList = []; // GET LENGTH OF LOCAL STORAGE // MAKE LIST // MAKE RANDOM LIST 
let createDeck=[] ;
let randList_2 =[] ;
let currentIndex=0;
let adjustmentForZero =0 ;
let uniqueDecks=[];
let temp = [];
let deckAdjustedIndex = null;

let deck_drop_down = document.getElementById("deck_drop_down") ;
//##
let currentDeck = deck_drop_down.value;
// let currentDeck = 'custom';


 let suspender =0;  // turns to 1 every suspend so that on the final card when suspend is hit next will throw an error.
    

getDeck();
    
//##
// changeCurrentDeck();


///////////////////////////////////////////////////////////////////////////////////
//////After storage is verified these functions pull the JSON then convert this JSON
//////To a list that can be used for logic 
///////////////////////////////////////////////////////////////////////////////////
let retreivedQuestions = localStorage.getItem('decks');
//##
let parsedQuestions = JSON.parse(retreivedQuestions) ; 


///////////////////////////////////////////////////////////////////////////////////
//////Checks length of questions in memory. 
//////Makes the initial random list 
///////////////////////////////////////////////////////////////////////////////////

makeCardList();

getUniqueDecks();

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
////// Acts like NO and YES but does does not push to the 2nd list effectively 
////// preventing it from being used in the future. 
///////////////////////////////////////////////////////////////////////////////////
function  handleSuspend(){
  incrementViews() ;
  incrementCorrect() ; 
  // console.log(randList_2);

  //increments the View count 
  // For strect play with the date and see if you can get it to stay out for 4 days 
  if(pause===1){
  showAnswer()
 
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

  if(deck_drop_down.value != currentDeck){
    //this needs to filter the data
    //make the parsed based on this deck
    //
    // changeDeck() ;
    //##
    // changeCurrentDeck();
    console.log('handleNext registered deck swap') ;
    // makeCardList();


  }

  showQuestion() ; 
pause =1 ;

}

function changeCurrentDeck(){
  currentDeck = deck_drop_down.value ;
}




///////////////////////////////////////////////////////////////////////////////////
//////Makes a random list 
//////Known cards will be popped cards that need to be repeated will go to the front
///////////////////////////////////////////////////////////////////////////////////
function makeCardList(){
  //##add decks fn
  // changeCurrentDeck();

  //sorts the deck by the deck only
  //this way you only see those cards 
  
  //##
//  parsedQuestions = JSON.parse(retreivedQuestions)
//  console.log('parsed inside ' + parsedQuestions.length);
//  parsedQuestions;
  

  for (let i =0;i<parsedQuestions.length; i++){
  //  console.log(  parsedQuestions[i].deck  );
   
  if(parsedQuestions[i].deck === currentDeck){
      temp.push(i) ;
      console.log('pushing @201   ' +parsedQuestions[i]  ) ;
                }


  }// end for 

  // reassigns the parsed questions to the new sorted value 
  




  //##add decks fn

  // console.log('in make cards ' + parsedQuestions.length);

  //make sequence 
  //https://stackoverflow.com/questions/3751520/how-to-generate-sequence-of-numbers-chars-in-javascript
 //## to select only the deck I populated the sequence with those that match the deck 
  // sequence = Array(parsedQuestions.length).fill().map((element, index) => index )
  
  // shuffle sequence  set initial random list to this list 
  //##
  // randomList =   shuffle(sequence) ;
  randomList =   shuffle(temp) ;
  //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

setFirstCard() ;

                     }

///////////////////////////////////////////////////////////////////////////////////
//////On startup checks the length of the list 
//////Prepopulates the question field
///////////////////////////////////////////////////////////////////////////////////

function setFirstCard(){
  //sets the index position
  
  
  //## this is not updating the cards now that there is a deck in it 
  currentIndex = randomList.length-1 ;
  // this should give me the value of the card that should be adjusted
      //  deckAdjustedIndex=randomList[currentIndex];

    // currentIndex = currentIndex[randomList.length-1];
  
    //##
  // console.log("currentIndex = " + currentIndex) ;

  //displays the first question 
  showQuestion();

}


function incrementViews(){
  //increments the views 
  // console.log( parsedQuestions[currentIndex].views+1);

  //##
  // parsedQuestions[currentIndex].views+=1 ; 
  deckAdjustedIndex=randomList[currentIndex];
  parsedQuestions[deckAdjustedIndex].views+=1 ; 

  //clear out the old data 
  localStorage.removeItem('decks') ;
  //write in new data with incremented values
  let strDeck = JSON.stringify(parsedQuestions);
  localStorage.setItem('decks',strDeck);


}

function incrementCorrect(){
  //##
  //parsedQuestions[currentIndex].correct += 1 ; 
    parsedQuestions[deckAdjustedIndex].correct += 1 ; 
  
  //clear out the old data 
  localStorage.removeItem('decks') ;
  //write in new data with incremented values
  let strDeck = JSON.stringify(parsedQuestions);
  localStorage.setItem('decks',strDeck);


}





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

  //##
  // Question.textContent = parsedQuestions[currentIndex].question;
  deckAdjustedIndex=randomList[currentIndex];
  console.log(deckAdjustedIndex , randomList);
  Question.textContent = parsedQuestions[deckAdjustedIndex].question;

  

}

function showAnswer(){
  let bar = document.createElement('hr');
  Question_list.appendChild(bar) ;
  bar.id='removable_divider';

  // if(parsedQuestions[currentIndex].img !=0 ){
  //   // console.log('if works');
  //   let img_1 = document.createElement('img');
  //   Question_list.appendChild(img_1);
  //   img_1.id = 'img_1';
  //   // console.log(parsedQuestions[currentIndex].img);
  //   img_1.src=parsedQuestions[currentIndex].img;
  //   img_1.alt="Not Available";

  // } 

  if(parsedQuestions[deckAdjustedIndex].img !=0 ){
    // console.log('if works');
    let img_1 = document.createElement('img');
    Question_list.appendChild(img_1);
    img_1.id = 'img_1';
    // console.log(parsedQuestions[currentIndex].img);
    img_1.src=parsedQuestions[deckAdjustedIndex].img;
    img_1.alt="Not Available";

  } 


  let answer = document.createElement('li');
  // answer.textContent= parsedQuestions[currentIndex].answer ;
  answer.textContent= parsedQuestions[deckAdjustedIndex].answer ;
  answer.id = 'answer' ;
  Question_list.appendChild(answer);


}

function removeQuestion(){
  Question.removeChild(question);
  

}



function removeAnswer(){
let answer1 = document.getElementById('answer');
let bar = document.getElementById('removable_divider');

let img_1 = document.getElementById('img_1');

// Some cards will have pictures some not 
if(img_1){  
Question_list.removeChild(img_1);
}


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
    // new Deck ('how old are you','1000','default');
    // new Deck ('how whats your name','bob','default');
    // new Deck ('how do you say cool in english','cool','defualt');
    // new Deck ('how tall are you','10ft','defualt');


    new Deck ('how old are you','1000','https://picsum.photos/200','default');
    new Deck ('how whats your name','bob',"https://picsum.photos/201",'default');
    new Deck ('how do you say cool in english','cool',"https://picsum.photos/202",'default');
    new Deck ('how tall are you','10ft',"https://picsum.photos/203",'default'); 
    new Deck ('check','10ft',"https://picsum.photos/203",'custom'); 

    //##
    new Deck ('What is HTML', 'HTML is a programing laguage for structuring a web page', 'www/static/pic','custom');

    new Deck ('How would you identify a style for an element with an id of text in CSS?', '#text', 'www/static/pic','custom');

    new Deck ('What character do you input to start of Doctype when coding HTML?', '!', 'www/static/pic','custom');

    new Deck ('How do you select HTML elements using CSS?', 'Via CSS Selectors','','custom');

    new Deck ('How is HTML Structured', 'Semantically','','custom');

    new Deck ('What is Javascript','A scripting Language.','','custom');

    new Deck ('How would you identify a style for an element with an id of text in CSS','#text','','custom');

    new Deck ('What is the Css selector for a class','.','custom');

    new Deck ('Which language is better Css or javascript','javascript','','custom');
    //##
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    let strDeck = JSON.stringify(createDeck);
    localStorage.setItem('decks',strDeck);

          }

  }


  function Deck (question,answer,img=0 ,deck='default') {
    // console.log('Deck constructor');

    this.question = question;
    this.answer = answer;
    this.deck = deck;
    this.views = 0;
    this.correct = 0;
    // console.log('heya');

    this.img = img;

   

    // console.log(  this.views) ;

  // pushed to the empty array
    createDeck.push(this);
  }


function getUniqueDecks(){
  
  
  for(let i =0;i<parsedQuestions.length;i++){
    let temp =   parsedQuestions[i].deck;

    if( !uniqueDecks.includes(temp)){
      uniqueDecks.push(temp) ;
    }
      
    }

 }//end getUniqueDecks()