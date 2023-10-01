let userChoice;
let computerChoice;

const computerChoiceDisplay = document.getElementById('computer_choice');
const userChoiceDisplay = document.getElementById('user_choice');
const resultDisplay =  document.getElementById('result');

const possibleChoices = document.querySelectorAll('button');

console.log(possibleChoices)


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChoice = e.target.id;
userChoiceDisplay.innerHTML = userChoice;
generateComputerChoice();
getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor( Math.random() * 3) ;
    console.log(randomNumber)

    if (randomNumber === 0) {
        computerChoice = 'rock';
    }

    if (randomNumber === 1) {
        computerChoice = 'papper';
    }

    if (randomNumber === 2) {
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult () {
 if (computerChoice === userChoice)
 { result = 'it a draw!'}
 if (computerChoice == 'rock' && userChoice == 'papper') {
    result ='You Win!'
 }
 if (computerChoice == 'rock' && userChoice == 'scissors') {
    result ='You Lost!'
 }
 if (computerChoice == 'scissors' && userChoice == 'papper') {
    result ='You Lost!'
 }
 if (computerChoice == 'scissors' && userChoice == 'rock') {
    result ='You Win!'
 }
 if (computerChoice == 'papper' && userChoice == 'scissors') {
    result ='You Win!'
 }
 if (computerChoice == 'papper' && userChoice == 'rock') {
    result ='You Lost'
    
}
resultDisplay.innerHTML =result}