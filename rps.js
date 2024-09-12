

function checkWin(number) {

  // AI variable random number 1 - 3 so AI can choose rock, paper or scissor
  const rng = Math.ceil(Math.random() * 3);
  
  let scoreElement = document.querySelector("#score");

  // Makes the scoreElement div into an integer
  let currentScore = parseInt(scoreElement.innerText);
  console.log(rng);

  // When player picks rock versus rock, player equal
  if(number == rng) {
    document.querySelector("#result").innerHTML = "You both picked the same, try again";

  // When player picks rock versus paper, player lose
  } else if (number == 1 && rng == 2) {
    document.querySelector("#result").innerHTML = "AI picked paper, you lose :(";
    scoreElement.innerText = currentScore - 1;

  // When player picks rock versus scissor, player win
  } else if (number == 1 && rng == 3) {
    document.querySelector("#result").innerHTML = "AI picked scissor, you win!";
    scoreElement.innerText = currentScore + 1;

  // When player picks paper verus rock, player win
  } else if (number == 2 && rng == 1) {
    document.querySelector("#result").innerHTML = "AI picked rock, you win!";
    scoreElement.innerText = currentScore + 1;

  // When player picks paper versus scissor, player lose 
  } else if (number == 2 && rng == 3) {
    document.querySelector("#result").innerHTML = "AI picked scissor, hehe noob";
    scoreElement.innerText = currentScore - 1;

  // When player picks scissor versus rock, player lose
  } else if (number == 3 && rng == 1) {
    document.querySelector("#result").innerHTML = "AI picked rock, you know better :(";
    scoreElement.innerText = currentScore - 1;

  // When player picks scissor versus paper, player win
  } else if (number == 3 && rng == 2) {
    document.querySelector("#result").innerHTML = "AI picked paper, Well Done!";
    scoreElement.innerText = currentScore + 1;
  }
}