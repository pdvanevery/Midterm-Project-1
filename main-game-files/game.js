//move(player('assets/buggy-filler.jpeg')).to(200, 450)//

//Global Vairables
let yourMove;
let oppMove;
let savedOppMove;
let yourHealth = 100;
let oppHealth = 100;


//turn counters
let totRounds = 0;


//Variables for moves
let result = "";
let result2 = "";
const oppResults = document.getElementById("oppResults") && result2;
const playByPlay = document.getElementById("announcements");
const yourHealthBar = document.getElementById("yourHealthBar");
const oppHealthBar = document.getElementById("oppHealthBar");
const attackButtonL = document.getElementById("attack1");
const attackButtonM = document.getElementById("attack2");
const attackButtonH = document.getElementById("attack3");
const counterButton = document.getElementById("counter");
const playAgain = document.getElementById("playAgain");

attackButtonL.addEventListener("click", fight);
attackButtonM.addEventListener("click", fight);
attackButtonH.addEventListener("click", fight);
counterButton.addEventListener("click", fight);
playAgain.addEventListener("click", refreshPage);


//run on load bc will disable during opp turn
function enableButtons() {
    attackButtonL.disabled = false;
    attackButtonM.disabled = false;
    attackButtonH.disabled = false;
    counterButton.disabled = false;
}

//starts the fight
function fight(e) {
    addRound();
    oppMoveA(e.target.id);
    healthChange();
    gameOver();
    console.log ("Your Health", yourHealth);
    console.log ("Opponent Health", oppHealth);
    
}

//adds a round to the round counter
function addRound() {
    totRounds += 1;
}

//adds counter action to the attacks
//counter to light attack
function counter(y, o) {
    let move = Math.floor((Math.random()*6)+1);
    if (y === "attack1") {
        if (move >=6){
            result = "Your Light Attack missed!";
            
            console.log("Player Health", yourHealth);
        } 
        else {
            result = "You strike your Opponent with a Light Attack for 12 DMG!";
            oppHealth -= 12;
            // gameOver();
            console.log("Opponent Health", oppHealth);
        } 
    } 
     else if (y === "attack2") {
        if (move >=5){
            result = "Your Medium Attack missed!";
           
            console.log("Player Health", yourHealth);
        } 
        else {
            result = "You strike your Opponent with a Medium Attack for 17 DMG!";
            oppHealth -= 17;
            // gameOver();
            console.log("Opponent Health", oppHealth);
        }
    }
   else if (y === "attack3") {
        if (move >=4){
            result = "Your Heavy Attack missed!";
            
            console.log("Player Health", yourHealth);
        }
        else {
            result = "You strike your Opponent with a Heavy Attack for 25 DMG!";
            oppHealth -= 25;
            // gameOver();
            console.log("Opponent Health", oppHealth);
        }
    }
    else if (y === "counter") {
        if (move >=3){
            result = "Your Counter failed!";
            yourHealth -=5;
            // gameOver();
            console.log("Player Health",yourHealth);
        }
        else {
            result = "Your Counter succeeded!";
            oppHealth -= 12;
            // gameOver();
           if (yourHealth <= 85) yourHealth += 15;
        //    gameOver();
            console.log("Player Health", yourHealth);
            console.log("Opponent Health", oppHealth);
        }
    }

}

function counter2(y, o) {
    let move = Math.floor((Math.random()*6)+1);
    if (o === "attack1") {
        if (move >=6){
            result2 = "Opponent's Light Attack missed!";
            console.log("Opponent Health", oppHealth);
        } 
        else {
            result2 = "Your Opponent lands a Light Attack for 12 DMG!";
            yourHealth -= 12;
            // gameOver();
            console.log("Player Health", yourHealth);
        } 
    } 
     else if (o === "attack2") {
        if (move >=5){
            result2 = "Opponent's Medium Attack missed!";
            console.log("Opponent Health", oppHealth);
        } 
        else {
            result2 = "Your Opponent lands a Medium Attack for 17 DMG!"
            yourHealth -= 17;
            // gameOver();
            console.log("Player Health", yourHealth);
        }
    }
   else if (o === "attack3") {
        if (move >=4){
            result2 = "Opponent's Heavy Attack missed!";
            console.log("Opponent Health", oppHealth);
        }
        else {
            result2 = "Your Opponent lands a Heavy Attack for 25 DMG!";
            yourHealth -= 25;
            // gameOver();
            console.log("Player Health", yourHealth);
        }
    }
    else if (o === "counter") {
        if (move >=3){
            result2 = "Your Opponent's Counter failed!";
            oppHealth -=5;
            // gameOver();
            console.log("Opponent Health",oppHealth);
        }
        else {
            result2 = "Your Opponent's Counter succeeded!";
            yourHealth -= 12;
            // gameOver();
           if (yourHealth <= 85) oppHealth += 15;
        //    gameOver();
            console.log("Player Health", yourHealth);
            console.log("Opponent Health", oppHealth);
        }
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
    if (yourHealth <= 0) {
        yourHealth -= 100;
        yourHealthBar.style.width = 0;
        if (oppHealth <= 0) {
            oppHealth == 10;
        }
        result = "You Lose!";
        roundResults(result);
        attackButtonL.disabled = true;
        attackButtonM.disabled = true;
        attackButtonH.disabled = true;
        counterButton.disabled = true;
        playAgain.disabled = false;
    }
    else {
        if (oppHealth <= 0) {
            oppHealth -= 100;
            oppHealthBar.style.width = 0;
            if (yourHealth < 0) {
                yourHealth == 10;
            }
            result = "You Win!";
            roundResults(result);
        attackButtonL.disabled = true;
        attackButtonM.disabled = true;
        attackButtonH.disabled = true;
        counterButton.disabled = true;
        playAgain.disabled = false;
        }
    }
}



//Game mechanics

//Generates a move for the opponent to use after the player chooses a move
function oppMoveA(id) {
    let moveC = 
    Math.floor((Math.random()*6)+1);
    if (moveC >= 4) {
        savedOppMove = "attack1";
    } else if (moveC == 3)  {
        savedOppMove = "attack2";
    } else if (moveC == 2) {
        savedOppMove = "attack3";
    } else {
        savedOppMove = "counter";
    };
    

    result = ("Your move is <span>" + id + "</span> and the computers move is <span>" + savedOppMove + "</span> on round " + totRounds);
    console.log(id, savedOppMove);
    damageStep(id, savedOppMove);
    damageStep2(id, savedOppMove);
    damageStep3(id, savedOppMove);
    roundResults(result);
    if (result2) {
        roundResults(result2)
    }

}


//actually applies the damage step
function damageStep(y, o) {
    if (y === "attack1" && o === "attack1") {
        counter(y, o);
        counter2(y, o);
        // result = "Both players took damage";
        // result2 = "";
        // if (oppHealth >=10 && yourHealth >= 10) {
        //     oppHealth -= 10;
        //     yourHealth -= 10;
        //     console.log("line 202", oppHealth);
        //     console.log("line 203", yourHealth);
        // } else {
        //     oppHealth = 0;         
        //     yourHealth = 0;
        //}
    } else if (y === "counter" && o === "attack1") {
        result = "Both players attempted to counter, counters failed";
        counter(y, o);
        counter2(y, o);
    } else if ( y === "attack1" && o === "attack2") {
        result = "You strike your opponent with a Light Attack, but they strike back with a Medium Attack!";
        counter(y, o);
        counter2(y, o);
    } else if (y === "attack1" && o === "attack3") {
        result = "You strike your opponent with a Light Attack, but they strike back with a Heavy Attack!";
        counter(y, o );
        counter2(y, o);
    }
    else if (y === "attack1" && o === "counter"){
        counter(y, o);
        counter2(y, o);
    }
    else if (y === "counter" && o === "counter"){
        counter(y, o);
        counter2(y, o);
    }
}

function damageStep2(y, o) {
    if (y === "attack2" && o === "attack2") {
        counter(y, o);
        counter2(y, o);
        // result = "Both players took damage";
        // result2 = "";
        // if (oppHealth >=15 && yourHealth >= 15) {
        //     oppHealth -= 15;
        //     yourHealth -= 15;
        //     console.log("line 229", oppHealth);
        //     console.log("line 230", yourHealth);
        // } else {
        //     oppHealth = 0;
        //     yourHealth = 0;
        // }
    } else if (y === "counter" && o === "attack2") {
        result = "Both players attempted to counter, counters failed";
        counter(y, o);
        counter2(y, o);
    } else if ( y === "attack2" && o === "attack1") {
        result = "You strike your opponent with a Medium Attack, but they strike back with a Light Attack!";
        counter(y, o);
        counter2(y, o);
    } else if (y === "attack2" && o === "attack3") {
        result = "You strike your opponent with a Medium Attack, but they strike back with a Heavy Attack!";
        counter(y, o );
        counter2(y, o);
    } 
    else if (y === "attack2" && o === "counter"){
        
        counter(y, o);
        counter2(y, o);
    }
}


function damageStep3(y, o) {
    if (y === "attack3" && o === "attack3") {
        counter(y, o);
        counter2(y, o);
        // result = "Both players took damage";
        // result2 = "";
        // if (oppHealth >=22 && yourHealth >= 22) {
        //     oppHealth -= 22;
        //     yourHealth -= 22;
        //     console.log("line 257", oppHealth);
        //     console.log("line 258", yourHealth);
        // } else {
        //     oppHealth = 0;
        //     yourHealth = 0;
        // }
    } else if (y === "counter" && o === "attack3") {
        result = "Both players attempted to counter, counters failed";
        counter(y, o);
        counter2(y, o);
    } else if ( y === "attack3" && o === "attack1") {
        result = "You strike your opponent with a Heavy Attack, but they strike back with a Light Attack!";
        counter(y, o);
        counter2(y, o);
    } else if (y === "attack3" && o === "attack2") {
        result = "You strike your opponent with a Heavy Attack, but they strike back with a Medium Attack!";
        counter(y, o );
        counter2(y, o);
    } 
    else if (y === "attack3" && o === "counter"){
        
        counter(y, o);
        counter2(y, o);
    }
}

function refreshPage() {
    window.location.reload();
}


window.onload=enableButtons();