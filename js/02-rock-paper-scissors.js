var choice,result;
function playGame(){
    choice = window.prompt("Enter your choice : rock, paper or scissors?");

    if((choice !== "rock")  && (choice !== "paper") && (choice !== "scissors")){
        window.alert("Invalid choice. Please enter rock, paper or scissors");
    }
    var computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice === 0){
        result = "rock";
    }else if (computerChoice === 1){
        result = "paper";
    }else if (computerChoice === 2){
        result = "scissors";
    }
    if (result === choice){
        window.alert ("It's a tie!")
    }else if ((choice === "rock" && computerChoice === "scissors") || 
    (choice === "scissors" && computerChoice === "paper") ||
    (choice === "paper" && computerChoice === "rock")) {
        window.alert ("You win!")
    }else {
        window.alert ("You lose! Computer wins!!")
    }
}
playGame();