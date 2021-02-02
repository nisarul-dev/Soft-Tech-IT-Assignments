var playerOneScore = 0;
var playerTwoScore = 0;

document.querySelector("button").addEventListener("click", function() {
    game();
    winningCounter();
});

function game() {
    var diceRandom1 = (Math.floor(Math.random() * 6)) + 1;
    var diceRandom2 = (Math.floor(Math.random() * 6)) + 1;

    var dice1 = "images/dice" + diceRandom1 + ".png";
    var dice2 = "images/dice" + diceRandom2 + ".png";

    document.getElementsByClassName("img1")[0].setAttribute("src", dice1);
    document.getElementsByClassName("img2")[0].setAttribute("src", dice2);

    if (diceRandom1 > diceRandom2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
        playerOneScore++;
    } else if (diceRandom1 < diceRandom2) {
        document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
        playerTwoScore++;
    } else {
        document.querySelector("h1").innerHTML = "Draw";
    }
}

function winningCounter() {
    document.querySelectorAll("span")[0].innerText = playerOneScore;
    document.querySelectorAll("span")[1].innerText = playerTwoScore;
}