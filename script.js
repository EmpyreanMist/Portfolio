


/* Code for the quiz game */

function startGame() {

  /* Declaring variables for the 4 buttons that are answers to the first question */
 const answer1 = document.getElementById("answer1");
 const answer2 = document.getElementById("answer2");
 const answer3 = document.getElementById("answer3");
 const answer4 = document.getElementById("answer4");

 /* Showing the first question */
 const startText = document.getElementById("startText");
 startText.innerText = "What is the fastest land animal?";

 /* Removing the start button */
 const startBtn = document.getElementById("startBtn");
 startBtn.hidden = true;

/* Making the 4 buttons appear */
 answer1.hidden = false;
 answer2.hidden = false;
 answer3.hidden = false;
 answer4.hidden = false;

 /* Changing the text on the 4 buttons to answers */
 answer1.innerText = "Cheetah";
 answer2.innerText = "Lion";
 answer3.innerText = "Airplane";
 answer4.innerText = "Tiger";

}