////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return  move  || getInput();
}

function getComputerMove(move) {
  
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if ((playerMove == "rock") && (computerMove == "scissor")) {
    winner = "player";
}
        else if ((playerMove == "scissor") && (computerMove == "paper")) {
    winner = "player";
}
        else if ((playerMove == "paper") && (computerMove == "rock")) {
    winner = "player";
}
        else if (playerMove == computerMove) {
    winner = "tie";
}
        else {
    winner = "computer";
}
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
        // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    var roShamBo;
    while ((playerWins < 5) && (computerWins < 5)) {
    roShamBo = getWinner (getPlayerMove(), getComputerMove());
    if (roShamBo == "player") {
        console.log ("You won! Let's go again!");
        playerWins += 1;
    }
    else if (roShamBo == "computer") {
        console.log ("You lost... Let's go again!");
        computerWins += 1;
    }
    else {
        console.log ("You picked the same thing! It's a tie! Try again!");
    }
    console.log ("The score currently, You: " + playerWins + " to Computer: " + computerWins + "!");
    }
    return [playerWins, computerWins];
}
