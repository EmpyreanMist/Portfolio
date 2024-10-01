//Logic variables

let score = 0;
let questionIndex = 0;

const questionsAndAnswers = [
  {
    question: "Fråga 1",
    answer: "svar1",
  },
  {
    question: "Fråga 2",
    answer: "svar2",
  },
  {
    question: "Fråga 3",
    answer: "Svar 3",
  },
];

// HTMl elements
const questionText = document.querySelector("#questionText");
const inputAnswer = document.querySelector("#inputAnswer");
const checkAnswerBtn = document.querySelector("#checkAnswerBtn");
const showResult = document.querySelector("#showResult");
const h1 = document.querySelector("#h1");

questionText.innerHTML = questionsAndAnswers[0].question;

// Function to handle both click and enter keypress
checkAnswerBtn.addEventListener("click", function () {
  console.log("Btn clicked");

  let yourAnswer = inputAnswer.value;
  let correctAnswer = questionsAndAnswers[questionIndex].answer;

  if (yourAnswer.length !== 0 && yourAnswer === correctAnswer) {
    questionIndex++;

    h1.innerHTML = "Quiz Game!";
  } else {
    h1.innerHTML = "You have to write something";
  }
});

if (yourAnswer === correctAnswer) {
  h1.innerHTMl = "Correct";
} else {
  h1.innerHTMl = "Wrong!";
}

inputAnswer.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    console.log("Enter Pressed");
  }
});

console.log(questionsAndAnswers[1].question);
