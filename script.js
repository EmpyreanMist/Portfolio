


/* Code for the quiz game */

function startGame() {

  /* Declaring variables for the buttons that are answers to the first question */
 const answer1 = document.getElementById("answer1");
 const answer2 = document.getElementById("answer2");
 const answer3 = document.getElementById("answer3");
 const answer4 = document.getElementById("answer4");
 const restartGame = document.getElementById("restartGame");

 /* Changing the text to first question */
 const startText = document.getElementById("currentText");
 startText.innerText = "What is the fastest land animal?"



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
 answer1.innerText = "Cheetah";
 answer2.innerText = "Lion";
 answer3.innerText = "Airplane";
 answer4.innerText = "Tiger";

}

function firstAnswerCorrect() {

 /* Declaring variables for the buttons */
  const answer1 = document.getElementById("answer1");
  const answer2 = document.getElementById("answer2");
  const answer3 = document.getElementById("answer3");
  const answer4 = document.getElementById("answer4");
  const nextQuestion = document.getElementById("nextQuestion");

  /* Hiding all buttons but 1 */
  answer1.hidden = true;
  answer2.hidden = true;
  answer3.hidden = true;
  answer4.hidden = true;
  nextQuestion.hidden = false;


  const currentText = document.getElementById("currentText");
  currentText.innerText = "Correct!";
}

function firstAnswerWrong() {

  const answer1 = document.getElementById("answer1");
  const answer2 = document.getElementById("answer2");
  const answer3 = document.getElementById("answer3");
  const answer4 = document.getElementById("answer4");
  const restartGame = document.getElementById("restartGame");
  const currentText = document.getElementById("currentText");

  currentText.innerText = "God damn you suck!";

  answer1.hidden = true;
  answer2.hidden = true;
  answer3.hidden = true;
  answer4.hidden = true;
  restartGame.hidden = false;
  

}

function nextQuestion() {

  const answer1 = document.getElementById("answer1");
  const answer2 = document.getElementById("answer2");
  const answer3 = document.getElementById("answer3");
  const answer4 = document.getElementById("answer4");
  const nextQuestion = document.getElementById("nextQuestion");
  
  nextQuestion.hidden = true;
  answer1.hidden = false;
  answer2.hidden = false;
  answer3.hidden = false;
  answer4.hidden = false;
}