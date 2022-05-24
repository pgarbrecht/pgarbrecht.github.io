//Defining the elements we will work with 
const myChoiceDisplay = document.getElementById("my-choice")
const computerChoiceDisplay = document.getElementById("computer-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let myChoice
let ComputerChoice
let result
var myChoiceImage = document.getElementById("my-choice-image")
var computerChoiceImage = document.getElementById("computer-choice-image")

//Adding event listener for the player's button clicks.
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (e) => {
  myChoice = e.target.id
  myChoiceDisplay.innerHTML = myChoice
  generateComputerChoice()
  getResult()
}))

//Using a random number function to generate the computer choice
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1
  console.log(randomNumber)
  
  if (randomNumber === 1) {
    computerChoice = "rock"
  }
  else if (randomNumber === 2) {
    computerChoice = "paper"
  }
  else if (randomNumber === 3) {
    computerChoice = "scissors"
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

//Comparing the player and computer choice to determine the result and display it
function getResult () {

 //If computer and player both choose rock
  if (computerChoice === "rock" && myChoice === "rock") {
    result = " It's a tie!";
    myChoiceImage.src = "https://i.imgur.com/7wafHBN.png";
    computerChoiceImage.src = "https://i.imgur.com/7wafHBN.png";
  }
  
  //If computer and player both choose paper
  else if (computerChoice === "paper" && myChoice === "paper") {
    result = " It's a tie!";
    myChoiceImage.src = "https://i.imgur.com/syul1t6.png";
    computerChoiceImage.src = "https://i.imgur.com/syul1t6.png";
  }
  
  //If computer and player both choose scissors
  else if (computerChoice === "scissors" && myChoice === "scissors") {
    result = " It's a tie!";
    myChoiceImage.src = "https://i.imgur.com/J1UZHgo.png";
    computerChoiceImage.src = "https://i.imgur.com/J1UZHgo.png";
  }
  
  //If computer chooses rock and player chooses paper
  else if (computerChoice === "rock" && myChoice === "paper") {
    result = " Woohoo, you won!";
    myChoiceImage.src = "https://i.imgur.com/syul1t6.png";
    computerChoiceImage.src = "https://i.imgur.com/7wafHBN.png";
  }
  
  //If computer chooses rock and player chooses scissors
  else if (computerChoice === "rock" && myChoice === "scissors") {
    result = " Oh no, you lost!";
    myChoiceImage.src = "https://i.imgur.com/J1UZHgo.png";
    computerChoiceImage.src = "https://i.imgur.com/7wafHBN.png";
  }
  
  //If computer chooses paper and player chooses rock
  else if (computerChoice === "paper" && myChoice === "rock") {
    result = " Oh no, you lost!";
    myChoiceImage.src = "https://i.imgur.com/7wafHBN.png";
    computerChoiceImage.src = "https://i.imgur.com/syul1t6.png";
  }
  
  //If computer chooses paper and player chooses scissors
  else if (computerChoice === "paper" && myChoice === "scissors") {
    result = " Woohoo, you won!";
    myChoiceImage.src = "https://i.imgur.com/J1UZHgo.png";
    computerChoiceImage.src = "https://i.imgur.com/syul1t6.png";
  }
  
  //If computer chooses scissors and player chooses rock
  else if (computerChoice === "scissors" && myChoice === "rock") {
    result = " Woohoo, you won!";
    myChoiceImage.src = "https://i.imgur.com/7wafHBN.png";
    computerChoiceImage.src = "https://i.imgur.com/J1UZHgo.png";
  }
  
  //If computer chooses scissors and player chooses paper
  else if (computerChoice === "scissors" && myChoice === "paper") {
    result = " Oh no, you lost!";
    myChoiceImage.src = "https://i.imgur.com/syul1t6.png";
    computerChoiceImage.src = "https://i.imgur.com/J1UZHgo.png";
  }
  
  resultDisplay.innerHTML = result
}
