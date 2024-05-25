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

function getHumanChoice(){
  let humanChoice = prompt("please enter your choice:(0=rock;1=paper;2=scissors)");
  if(humanChoice==0){
    return "rock";
  }else if(humanChoice==1){
    return "paper";
  }else{
    return "scissors";
  }
}

function playRound(humanChoice,computerChoice){
  if(humanChoice==computerChoice){
    console.log(`${humanChoice} vs ${humanChoice}. It's a draw.`);
    return "draw";
  }else if(humanChoice=="rock"&&computerChoice=="paper"){
    console.log("You lose! Paper beats Rock");
    return "lose";
  }else if(humanChoice=="rock"&&computerChoice=="scissors"){
    console.log("You win! Rock beats scissors");
    return "win";
  }else if(humanChoice=="paper"&&computerChoice=="rock"){
    console.log("You win! Paper beats scissors");
    return "win";
  }else if(humanChoice=="paper"&&computerChoice=="scissors"){
    console.log("You lose! Scissors beats paper");
    return "lose";
  }else if(humanChoice=="scissors"&&computerChoice=="rock"){
    console.log("You lose! Rock beats scissors");
    return "lose";
  }else if(humanChoice=="scissors"&&computerChoice=="paper"){
    console.log("You win! Scissors beats paper");
    return "win";
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