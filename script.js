


/* Code for the quiz game */

function startGame() {

  /* Declaring variables for the buttons that are answers to the first question */
 const answer1 = document.getElementById("answer1");
 const answer2 = document.getElementById("answer2");
 const answer3 = document.getElementById("answer3");
 const answer4 = document.getElementById("answer4");
 const restartGame = document.getElementById("restartGame");

 /* Changing the text to first question */
 const currentText = document.getElementById("currentText");
 currentText.innerText = "Which animal is known as the king of the jungle?"



 /* Removing the start and try again button */
 const startBtn = document.getElementById("startBtn");
 startBtn.hidden = true;


/* Making the 4 buttons appear */
 answer1.hidden = false;
 answer2.hidden = false;
 answer3.hidden = false;
 answer4.hidden = false;
 restartGame.hidden = true;

 /* Changing the text on the 4 buttons to answers */
 answer1.innerText = "Lion";
 answer2.innerText = "Tiger";
 answer3.innerText = "Airplane";
 answer4.innerText = "Elephant";

}

function answerCorrect() {

 /* Declaring variables for the buttons */
  const answer1 = document.getElementById("answer1");
  const answer2 = document.getElementById("answer2");
  const answer3 = document.getElementById("answer3");
  const answer4 = document.getElementById("answer4");
  const answer5 = document.getElementById("answer5");
  const answer6 = document.getElementById("answer6");
  const answer7 = document.getElementById("answer7");
  const answer8 = document.getElementById("answer8");

  const nextQuestion = document.getElementById("nextQuestion");

  /* Hiding all buttons but the next question one */
  answer1.hidden = true;
  answer2.hidden = true;
  answer3.hidden = true;
  answer4.hidden = true;
  answer5.hidden = true;
  answer6.hidden = true;
  answer7.hidden = true;
  answer8.hidden = true;
  nextQuestion.hidden = false;


  const currentText = document.getElementById("currentText");
  currentText.innerText = "Correct!";
}

function answerWrong() {

  /* Declaring the buttons to variables */

  const answer1 = document.getElementById("answer1");
  const answer2 = document.getElementById("answer2");
  const answer3 = document.getElementById("answer3");
  const answer4 = document.getElementById("answer4");
  const answer5 = document.getElementById("answer5");
  const answer6 = document.getElementById("answer6");
  const answer7 = document.getElementById("answer7");
  const answer8 = document.getElementById("answer8");

  const restartGame = document.getElementById("restartGame");
  const currentText = document.getElementById("currentText");

  /* Changing the text to show that the person has failed */
  currentText.innerText = "God damn you suck!";

  /* Hiding all buttons except restartGame button */

  answer1.hidden = true;
  answer2.hidden = true;
  answer3.hidden = true;
  answer4.hidden = true;
  answer5.hidden = true;
  answer6.hidden = true;
  answer7.hidden = true;
  answer8.hidden = true;
  restartGame.hidden = false;
  

}

function nextQuestion() {

  const answer5 = document.getElementById("answer5");
  const answer6 = document.getElementById("answer6");
  const answer7 = document.getElementById("answer7");
  const answer8 = document.getElementById("answer8");
  const nextQuestion = document.getElementById("nextQuestion");
  const currentText = document.getElementById("currentText");
  
  nextQuestion.hidden = true;
  answer5.hidden = false;
  answer6.hidden = false;
  answer7.hidden = false;
  answer8.hidden = false;

  currentText.innerText = "What is the fastest land animal?";

  answer5.innerText = "Lion";
  answer6.innerText = "Gazelle";
  answer7.innerText = "Cheetah";
  answer8.innerText = "Horse";


}

function questionThree() {

  const answer9 = document.getElementById("answer9");
  const answer10 = document.getElementById("answer10");
  const answer11 = document.getElementById("answer11");
  const answer12 = document.getElementById("answer12");
  const currentText = document.getElementById("currentText");



  currentText.innerText = "Well done!";

  answer5.hidden = true;
  answer6.hidden = true;
  answer7.hidden = true;
  answer8.hidden = true;
  

  


}


function questionFour() {
  
}