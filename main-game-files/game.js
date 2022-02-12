//move(player('assets/buggy-filler.jpeg')).to(200, 450)//

//Global Vairables//
const yourMove;
const oppMove;
const savedOppMove;
const yourHealth = 100;
const oppHealth = 100;

//turn counters//
const totRounds = 0;


//Variables for moves//
const res;
const yourHealth = document.getElementById("yourHealth");
const oppHealth = document.getElementById("oppHealth");
const attackButtonL = document.getElementById("attack1");
const attackButtonM = document.getElementById("attack2");
const attackButtonH = document.getElementById("attack3");
const counterbutton = document.getElementById("counter");
const playAgain = document.getElementById("playAgain");

//run on load bc will disable during opp turn// 
function enableButtons() {
    attackButtonL.disabled = false;
    attackButtonM.disabled = false;
    attackButtonH.disabled = false;
    counterbutton.disabled = false;
}

//starts the fight//
function fight(id) {
    addRound();
    oppMove(id);
    healthChange();
    gameOver();
}

//adds a round to the round counter//
function addRound() {
    totRounds += 1;
}

//adds counter action to the attacks//
//counter to light attack//
function counter(y, c) {
    const move = Math.floor((Math.random()*6));
    if (move >=6 && y === "attack1") {
        res = "Opponent's counter was successful! You took 10 damage";
        yourHealth -= 10;
    } else if (move >= 6 && y === "counter") {
        res = "Your counter was succcessful! Opponent took 10 damage";
    } else if (move < 6 && y === "counter") {
        res = "Your counter was not successful! your were dealth 12 damage!";
        yourHealth -= 12;
    }
}