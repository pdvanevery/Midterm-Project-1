//move(player('assets/buggy-filler.jpeg')).to(200, 450)//

//Global Vairables
const yourMove;
const oppMove;
const savedOppMove;
const yourHealth = 100;
const oppHealth = 100;

//turn counters
const totRounds = 0;


//Variables for moves
const result;
const yourHealth = document.getElementById("yourHealth");
const oppHealth = document.getElementById("oppHealth");
const attackButtonL = document.getElementById("attack1");
const attackButtonM = document.getElementById("attack2");
const attackButtonH = document.getElementById("attack3");
const counterButton = document.getElementById("counter");
const playAgain = document.getElementById("playAgain");

//run on load bc will disable during opp turn
function enableButtons() {
    attackButtonL.disabled = false;
    attackButtonM.disabled = false;
    attackButtonH.disabled = false;
    counterButton.disabled = false;
}

//starts the fight
function fight(id) {
    addRound();
    oppMove(id);
    healthChange();
    gameOver();
}

//adds a round to the round counter
function addRound() {
    totRounds += 1;
}

//adds counter action to the attacks
//counter to light attack
function counter(y, o) {
    const move = Math.floor((Math.random()*6));
    if (move >=6 && y === "attack1") {
        result = "Opponent's counter was successful! You took 10 damage";
        yourHealth -= 10;
    } else if (move >= 6 && y === "counter") {
        result = "Your counter was succcessful! Opponent took 10 damage";
        oppHealth -= 10;
    } else if (move < 6 && y === "attack1") {
        result = "Opponent's counter failed! You dealt 12 damage!";
        oppHealth -= 12;
    } else if (move < 6 && y === "counter") {
        result = "Your counter was not successful! your were dealth 12 damage!";
        yourHealth -= 12;
    }

    const move = Math.floor((Math.random()*6));
    if (move >=5 && y === "attack2") {
        result = "Opponent's counter was successful! You took 15 damage";
        yourHealth -= 15;
    } else if (move >= 5 && y === "counter") {
        result = "Your counter was succcessful! Opponent took 15 damage";
        oppHealth -= 15;
    } else if (move < 5 && y === "attack2") {
        result = "Opponent's counter failed! You dealt 17 damage!";
        oppHealth -= 17;
    } else if (move < 5 && y === "counter") {
        result = "Your counter was not successful! your were dealth 17 damage!";
        yourHealth -= 17;
    }     
    
    const move = Math.floor((Math.random()*6));
    if (move >=4 && y === "attack3") {
        result = "Opponent's counter was successful! You took 15 damage";
        yourHealth -= 20;
    } else if (move >= 4 && y === "counter") {
        result = "Your counter was succcessful! Opponent took 15 damage";
        oppHealth -= 20;
    } else if (move < 4 && y === "attack3") {
        result = "Opponent's counter failed! You dealt 25 damage!";
        oppHealth -= 25;
    } else if (move < 4 && y === "counter") {
        result = "Your counter was not successful! your were dealth 25 damage!";
        yourHealth -= 25;
    }     
}

//Display results for the round and health bar
function roundResults(result) {
    playByPlay.innerHTML += result + "<br>";
}

function healthChange() {
    yourHealthBar.style.width = yourHealth + "%";
    oppHealthBar.style.width = oppHealth + "%";
}

//game over function
function gameOver() {
    if (yourHealth <= 0 || oppHealth <= 0) {
        result = "Game Over!";
        roundResults(result);
        attackButtonL.disabled = true;
        attackButtonM.disabled = true;
        attackButtonH.disabled = true;
        counterButton.disabled = true;
        playAgain.disabled = true;
    }
}

//Game mechanics

//Generates a move for the opponent to use after the player chooses a move
function oppMove(id) {
    const move = 
    Math.floor((Math.random()*5)+1);
    if (move <= 4) {
        savedOppMove = "attack1";
    } else if (move = 3)  {
        savedOppMove = "attack2";
    } else if (move = 2) {
        savedOppMove = "attack3";
    } else {
        savedOppMove = "counter";
    };

    result = ("Your move is <span>" + id + "</span> and the computers move is <span>" + savedOppMove + "</span> on round " + totRounds):
    damageStep(id, savedOppMove):
    roundResults(result);

}


//actually applies the damage step
function damageStep(y, o) {
    if (y === "attack1" && o === "attack1") {
        result = "Both players took damage";
        if (oppHealth >=10 && yourHealth >= 10) {
            oppHealth -= 10;
            yourHealth -= 10;
        } else {
            oppHealth = 0;
            yourHealth = 0
        }
    } else if (y === "counter" && o === "counter") {
        result = "Both players attempted to counter, counters failed";
    } else if ( y === "attack1" && o === "counter") {
        result = "Opponent is ready to counter";
        counter(y, o);
    } else if (y === "counter" && c === "attack1") {
        result = "You are ready to counter";
        counter(y, o );
    }
}

window.onload=enableButtons();