// you can write js here
console.log('exo-3');
function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    //console.log(userInput);
    if ((userInput === 'rock') || (userInput === 'paper') || (userInput === 'scissors') || (userInput === 'bomb') ){
        return userInput;
     } else {
         console.log('erreur');
         return 1;
     }
}

function getComputerChoice(min, max) {
    var computerChoice = Math.floor(Math.random() * (max - min + 1) ) + min;
    //console.log(computerChoice);
    if (computerChoice === 0) {
        return 'rock';
    } else if (computerChoice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function determineWinner(userChoice, computerChoice){

    if(userChoice === computerChoice){
        return 'tied';
    } 
    
    else if(userChoice === 'rock' && computerChoice === 'scissors'){
        return 'Won';
    } 

    else if(userChoice === 'paper' && computerChoice === 'rock'){
            return 'Won';
    }
    
    else if(userChoice === 'scissors' && computerChoice === 'paper'){
            return 'Won';
    }
    
    else if(userChoice ==='bomb'){
        return 'Won';
    } 
    
    else {
            return 'Lost';
        }
 }
 
function playGame(){
    let uChoice = getUserChoice('bomb');    
    console.log(uChoice);
    
    let computerChoice = getComputerChoice(0,2)
    console.log(computerChoice);

    let resultat = determineWinner(uChoice, computerChoice);
    console.log(resultat);
}

playGame();  

