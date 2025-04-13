
let score0 = document.getElementById("score--0");
let score1 = document.getElementById("score--1");
let dice = document.querySelector(".dice");
let btnRoll = document.querySelector(".btn--roll");
let btnNew = document.querySelector(".btn--new");
let btnHold = document.querySelector(".btn--hold");
let currentScore0 = document.getElementById("current--0");
let currentScore1 = document.getElementById("current--1");
let player0 = document.querySelector(".player--0");
let player1 = document.querySelector(".player--1");

let score  = [0 , 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const init = function()
{
    score = [0,0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0.textContent = 0;
    score1.textContent = 0;
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;

    dice.classList.add('hidden');
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
}

// Roiling dice functionality
// 1. Generating a rondom dice roll
// 2. Display dice 
// 3. Check for rolled 1: if true, switch to next player

const switchPlayer = function()
{
    currentScore = 0;
    activePlayer == 0 ? (currentScore0.textContent = 0) : (currentScore1.textContent = 0);
    activePlayer = (activePlayer === 0) ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};


btnRoll.addEventListener('click', function(){
    if(playing == true)
    {
        let diceNum = Math.ceil(Math.random()*6);
        dice.classList.remove('hidden');
        console.log('diceNum: ',diceNum);
        dice.src = `dice/dice-${diceNum}.png`;
        console.log("activePlayer: ",activePlayer);
    
        if(diceNum == 1){
            switchPlayer();
        }
        else{
            currentScore += diceNum;
            
            if(activePlayer == 0)
                currentScore0.textContent = currentScore;
            else
                currentScore1.textContent = currentScore;
        }
    }
});

btnHold.addEventListener('click', function(){
    // 1. Add current score to active player score
    score[activePlayer] += currentScore;
    
    if(activePlayer == 0)
        score0.textContent = score[activePlayer];
    else 
        score1.textContent = score[activePlayer];

    // 2. Check if player score is >= 100 
    if(score[activePlayer] >= 30)
    {
        playing = false;

        if(activePlayer == 0)
        {
            player0.classList.add("player--winner");
            player0.classList.remove("player--active");
        }
        else{
            player1.classList.add("player--winner");
            player1.classList.remove("player--active");
        }
    }
    else{
        switchPlayer();
    }
});



btnNew.addEventListener('click',function(){
    init();
});


init();

 