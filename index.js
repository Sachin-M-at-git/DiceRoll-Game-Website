var title = document.getElementById("title");

var diceFace = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"]


var d1 = Math.floor(6*Math.random());
var d2 = Math.floor(6*Math.random());

document.querySelector(".player1 img").setAttribute("src",diceFace[d1]);
document.querySelector(".player2 img").setAttribute("src",diceFace[d2]);

if(d1>d2)
    title.textContent = "🚩Player 1 wins!";
else if(d2>d1)
    title.textContent = "Player 2 wins!🚩";
else
    title.textContent = "Draw!";
