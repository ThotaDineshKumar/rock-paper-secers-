const buttons = document.querySelectorAll('button');

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById('computer-score')

let playerScore =0;
let computerScore =0;




buttons.forEach((button) =>{
          button.addEventListener("click",()=>{
                   const result = playRound(button.id,computerPlay());
                   resultEl.textContent = result;
          });
});


function computerPlay(){
          const choises = ["rock", "paper", "scissors"];
          const ramdomchoice = Math.floor(Math.random()*choises.length);
          return choises[ramdomchoice];
}


function playRound(playerSelection,computerSelection){
          if(playerSelection === computerSelection){
                    return "it's a Tie!";
          }else if(
                    (playerSelection === "rock" && computerSelection === "scissors")||
                    (playerSelection === "paper" && computerSelection === "rock")||
                    (playerSelection === "scissors" && computerSelection === "paper")
          ){
                    playerScore++;
                    playerScoreEl.textContent=playerScore;
                    return "You Win!" + playerSelection +"beats"+ computerSelection;
          }else{
                    computerScore++;
                    computerScoreEl.textContent=computerScore;

                    return "You Loss!"+ computerSelection +"beats"+ playerSelection;
          };
}