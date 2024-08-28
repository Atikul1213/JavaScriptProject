/**
 

document.querySelector(".message").textContent = 'Correct Number !';

document.querySelector(".number").textContent = 13;

document.querySelector(".score").textContent = 10;


document.querySelector(".guess").value = 23;

*/
 
let target = Math.ceil(Math.random()*100);
console.log("target: ",target);

//document.querySelector(".number").innerHTML = target;


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