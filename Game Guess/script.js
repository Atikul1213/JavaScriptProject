
let target = Math.ceil(Math.random()*100);
console.log("target: ",target);
 
var highscore = Number(document.querySelector(".highscore").innerHTML);
console.log("highScore: ",highscore);
console.log("type of highscore: ",typeof highscore);

var score = Number(document.querySelector(".score").innerHTML);
console.log("score: ",score);
console.log("type of score: ",typeof score);

document.querySelector(".check").addEventListener('click',function(){
    const guess = Number(document.querySelector(".guess").value);
    console.log("guess: ",guess);
    console.log("type of guess: ",typeof guess);

    if(score<1){
        document.querySelector(".message").innerHTML = "You lost the game!";
        return;
    }

    if(!guess){
        document.querySelector(".message").innerHTML = "No number!";
    }
    else{
        if(guess===target){
            document.querySelector(".message").innerHTML = "Correct Number!";
            document.querySelector("body").style.backgroundColor="#60b347";
            document.querySelector(".number").style.width = "30rem";
            document.querySelector(".number").innerHTML = guess;
            if(score>highscore){
                highscore = score;
                document.querySelector(".highscore").innerHTML = highscore;
            }
        }
        else if(target<guess){
            document.querySelector(".message").innerHTML = "Too high!";
            score--;
            document.querySelector(".score").innerHTML = score;
        }
        else{
            document.querySelector(".message").innerHTML = "Too low!";
            score--;
            document.querySelector(".score").innerHTML = score;           
        }
    }
    document.querySelector(".guess").value="";
});

document.querySelector(".again").addEventListener('click',function(){
    score = 20;
    target = Math.ceil(Math.random()*100);
    document.querySelector(".message").textContent = 'Start guessing...';
    document.querySelector(".score").innerHTML = score;

    document.querySelector(".number").textContent = "?";

    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = '15rem';
});

/*

let checkBtn = document.querySelector('.check');
let guess = document.querySelector('.guess');
let  msg = document.querySelector('.message');
let num = document.querySelector(".number");
let secretNumber = Math.ceil(Math.random()*100);
let score = document.querySelector(".score");
let scoreValue = 20;
let hscore = 0;
let highscore = document.querySelector('.highscore');
console.log("secretNumber: ",secretNumber);
console.log("score: ",score.textContent);
console.log("checkbtn: ",checkBtn);
console.log("guess: ",guess);
//num.textContent = secretNumber;
checkBtn.addEventListener("click",function(){
    console.log("click the button", guess.value);
    console.log("type: ", typeof guess.value);

    if(!guess.value){
        msg.textContent = 'No number';
        console.log("msg content: ",msg.textContent);
    }
    else{
        if(guess.value > secretNumber){
            console.log("Greater");
            msg.textContent = 'Greater....';
            scoreValue = scoreValue - 1;
            score.textContent = scoreValue;
        }
        else if(guess.value < secretNumber){
            console.log("Smaller");
            msg.textContent = 'Smaller....';
            scoreValue = scoreValue - 1;
            score.textContent = scoreValue;
        }
        else{
            console.log("Correct");
            msg.textContent = 'Correct...';
            document.querySelector('body').style.backgroundColor= "#60b347";
            num.style.width = '30rem';
            num.textContent = secretNumber;
            if(scoreValue < hscore)
            {
                hscore = scoreValue;
                highscore.textContent = hscore;
            }

        }
    }
});



let again = document.querySelector('.again');
again.addEventListener('click',function(){
    console.log("call the again button");
    scoreValue = 20;
    secretNumber = Math.ceil(Math.random()*100);
    msg.textContent = 'Start guessing.....';
    score.textContent = scoreValue;
    num.textContent = '?';
    guess.value = '';
});






*/

