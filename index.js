"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function randomChoice() {
    var randomNum = Math.floor(Math.random() * 3);
    //console.log(randomNum)
    if (randomNum === 0) {
        return "rock";
    }
    else if (randomNum === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
//console.log(randomChoice())
function winner(player1, player2) {
    if (player1 == "rock" && player2 == "paper") {
        return "Player 2 wins!!";
    }
    else if (player1 == "rock" && player2 == "scissors") {
        return "Player 1 wins!!";
    }
    else if (player1 == "paper" && player2 == "rock") {
        return "Player 1 wins!!";
    }
    else if (player1 == "paper" && player2 == "scissors") {
        return "Player 2 wins!!";
    }
    else if (player1 == "scissors" && player2 == "rock") {
        return "Player 2 wins!!";
    }
    else if (player1 == "scissors" && player2 == "paper") {
        return "Player 1 wins!!";
    }
    else {
        return "It's a tie";
    }
}
var player1 = randomChoice();
var player2 = randomChoice();
var result = winner(player1, player2);
var P1score = 0;
var P2score = 0;
function score(result) {
    if (result == "Player 1 wins!!") {
        P1score += 1;
        return "SCORE OVERALL: P1: ".concat(P1score, ", P2: ").concat(P2score);
    }
    else if (result == "Player 2 wins!!") {
        P2score += 1;
        return "SCORE OVERALL: P1: ".concat(P1score, ", P2: ").concat(P2score);
    }
    else {
        return "SCORE OVERALL: P1: ".concat(P1score, ", P2: ").concat(P2score);
    }
}
function clearScore() {
    P1score = 0;
    P2score = 0;
}
console.log("Player1 plays:", player1, "Player2 plays:", player2, "The result is:", result, score(result));
