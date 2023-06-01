function randomChoice(): string {
    let randomNum = Math.floor(Math.random() * 3);
    //console.log(randomNum)
    if(randomNum === 0) {
        return "rock";
    } else if(randomNum === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

//console.log(randomChoice())

function winner(player1: string, player2: string): string {
    if(player1 == "rock" && player2 == "paper") {
        return "Player 2 wins!!"
    } else if(player1 == "rock" && player2 == "scissors") {
        return "Player 1 wins!!"
    } else if(player1 == "paper" && player2 == "rock") {
        return "Player 1 wins!!"
    } else if(player1 == "paper" && player2 == "scissors") {
        return "Player 2 wins!!"
    } else if(player1 == "scissors" && player2 == "rock") {
        return "Player 2 wins!!"
    } else if(player1 == "scissors" && player2 == "paper") {
        return "Player 1 wins!!"
    } else {
        return "It's a tie"
    }
}

let player1 = randomChoice()
let player2 = randomChoice()
let result = winner(player1, player2)

let P1score = 0
let P2score = 0

function score(result: string): string {
    if(result == "Player 1 wins!!") {
        P1score += 1
        return `SCORE OVERALL: P1: ${P1score}, P2: ${P2score}`
    } else if(result == "Player 2 wins!!") {
        P2score += 1
        return `SCORE OVERALL: P1: ${P1score}, P2: ${P2score}`
    } else {
        return `SCORE OVERALL: P1: ${P1score}, P2: ${P2score}`
    }
}

function clearScore(): void {
    P1score = 0;
    P2score = 0;
}

console.log("Player1 plays:", player1, "Player2 plays:", player2, "The result is:", result, score(result))

export {}