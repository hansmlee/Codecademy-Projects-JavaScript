const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput==='rock'||userInput==='paper'||userInput==='scissors'){
    return userInput;
  }else{
    console.log('ERROR!');
  }
}
function getComputerChoice(){
  num = Math.floor(Math.random()*2)
  switch(num){
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  } 
}

/*console.log(getComputerChoice())
console.log(getComputerChoice())
console.log(getComputerChoice())
*/
function determineWinner(userChoice,computerChoice) {
  if(userChoice === computerChoice){
    return 'Tie!';
  }else{
    if(userChoice  === 'rock'&&computerChoice==='paper'){ return 'Computer Won!';}else{ return 'User Won!';}
    if(userChoice === 'paper'&& computerChoice==='scissors'){ return 'Computer Won!';}else{ return 'User Won!';}
    if(userChoice  === 'scissors'&& computerChoice==='rock'){ return 'Computer Won!';}else{ return 'User Won!';}
}
}
//console.log(determineWinner('rock','rock'))

function playGame(){
  userChoice = getUserChoice('paper');
  computerChoice = getComputerChoice();
  console.log(userChoice,computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}
playGame();
