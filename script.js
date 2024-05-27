function getComputerChoice(){
  let num = Math.floor(Math.random()*3);
  if(num==0){
    return "rock";
  }else if(num==1){
    return "paper";
  }else{
    return "scissors";
  }
}

function playRound(humanChoice,computerChoice){
  if(humanChoice==computerChoice){
    return [`${humanChoice} vs ${humanChoice}. It's a draw.`,"draw"];
  }else if(humanChoice=="rock"&&computerChoice=="paper"){
    return ["You lose! Paper beats Rock","lose"];
  }else if(humanChoice=="rock"&&computerChoice=="scissors"){
    return ["You win! Rock beats scissors","win"];
  }else if(humanChoice=="paper"&&computerChoice=="rock"){
    return ["You win! Paper beats scissors","win"]
  }else if(humanChoice=="paper"&&computerChoice=="scissors"){
    return ["You lose! Scissors beats paper","lose"];
  }else if(humanChoice=="scissors"&&computerChoice=="rock"){
    return ["You lose! Rock beats scissors","lose"];
  }else if(humanChoice=="scissors"&&computerChoice=="paper"){
    return ["You win! Scissors beats paper","win"];
  }
}

function playGame(time){
  let humanScore=0;
  let computerScore=0;
  for(let i=0;i<time;i++){
    let humanChoice=getHumanChoice();
    let computerChoice=getComputerChoice();
    let result=playRound(humanChoice,computerChoice);
    if(result=="win"){
      humanScore++;
    }else if(result=="lose"){
      computerScore++;
    }
  }
  console.log(`Game Over! HumanScore:${humanScore} and ComputerScore:${computerScore}`);
}

const scoreHuman = document.querySelector('.score-human');
const scoreCom = document.querySelector('.score-computer');
const butRock = document.querySelector('.rock');
const butPaper = document.querySelector('.paper');
const butScissors = document.querySelector('.scissors');
const roundResult = document.querySelector('.result');
const gameResult = document.querySelector('.game-over');
const butReset = document.querySelector('.reset')

let humanScore=0;
let computerScore=0;

butRock.addEventListener('click',()=>{
  if(humanScore==5||computerScore==5){
    gameResult.textContent = 'Game over! Please Reset.';
    roundResult.textContent = "It's time to reset.";
    return ;
  }

  const computerChoice=getComputerChoice();
  const [resultText, resultValue] = playRound('rock',computerChoice);
  roundResult.textContent = resultText;

  if(resultValue=="win"){
    humanScore++;
  }else if(resultValue=="lose"){
    computerScore++;
  }
  scoreHuman.textContent=humanScore;
  scoreCom.textContent=computerScore;
  if(humanScore==5){
    gameResult.textContent = 'You Win!';
  }
  if(computerScore==5){
    gameResult.textContent = 'You Lose!';
  }
});

butPaper.addEventListener('click',()=>{
  if(humanScore==5||computerScore==5){
    gameResult.textContent = 'Game over! Please Reset.';
    roundResult.textContent = "It's time to reset.";
    return ;
  }

  const computerChoice=getComputerChoice();
  const [resultText, resultValue] = playRound('paper',computerChoice);
  roundResult.textContent = resultText;

  if(resultValue=="win"){
    humanScore++;
  }else if(resultValue=="lose"){
    computerScore++;
  }
  scoreHuman.textContent=humanScore;
  scoreCom.textContent=computerScore;
  if(humanScore==5){
    gameResult.textContent = 'You Win!';
  }
  if(computerScore==5){
    gameResult.textContent = 'You Lose!';
  }
});

butScissors.addEventListener('click',()=>{
  if(humanScore==5||computerScore==5){
    gameResult.textContent = 'Game over! Please Reset.';
    roundResult.textContent = "It's time to reset.";
    return ;
  }

  const computerChoice=getComputerChoice();
  const [resultText, resultValue] = playRound('scissors',computerChoice);
  roundResult.textContent = resultText;

  if(resultValue=="win"){
    humanScore++;
  }else if(resultValue=="lose"){
    computerScore++;
  }
  scoreHuman.textContent=humanScore;
  scoreCom.textContent=computerScore;
  if(humanScore==5){
    gameResult.textContent = 'You Win!';
  }
  if(computerScore==5){
    gameResult.textContent = 'You Lose!';
  }
});

butReset.addEventListener('click',()=>{
  humanScore=0;
  computerScore=0;
  scoreHuman.textContent=humanScore;
  scoreCom.textContent=computerScore;
  gameResult.textContent = "Let's play game!";
  roundResult.textContent = 'Please make your choice';
});