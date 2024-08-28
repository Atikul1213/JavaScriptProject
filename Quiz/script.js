const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];



const quiz = document.getElementById("quiz");
const answerE1s = document.querySelectorAll(".answer");
const questionE1 = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

}


function deselectAnswer(){
    answerE1s.forEach(x=>x.checked=false);
}


function getSelected(){
    let answer="";

    answerE1s.forEach(x=>{
        if(x.checked){
            answer = x.id;
        }
    });

    return answer;
}


submitBtn.addEventListener('click',function(){
    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct)
            score++;

        currentQuiz++;

        if(currentQuiz<quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = ` 
                <h2> You answered ${score}/ ${quizData.length} question correctly</h2>
                <button onclick="location.reload()"> Reload</button>
            `
        }
    }
});