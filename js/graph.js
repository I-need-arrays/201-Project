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

const card2 = new Card(1, 'What is HTML', "HTML is for structure", "www/static/pic",'No', 'No', '3/29/22', 'Javascript',"3/29/22", "Yes");

//Push to cards array
cards.push(card1);
cards.push(card2)

//show cards array contents
console.table(cards);

function displayResults(cards) {
    //Loop to consolidate values
};

function chartResults(){
   




  const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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