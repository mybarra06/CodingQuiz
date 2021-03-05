var startBtn = document.querySelector ("#start");
var timer = document.querySelector ("#timer");
var totalTime = 90;
var start = document.querySelector ('#start-prompt');
var time = 90;
var startScreen = $('#start-screen');
var myInterval;
var questions = $('#question-container')   

    

function startTimer(){
   startBtn.on("click",startTimer) 
   myInterval = setInterval(function() {
        totalTime = totalTime -1;
        console.log(totalTime)
        if (totalTime === 0){
            clearInterval(myInterval),
            sendMessage();
        }
        time--;
        timer.textContent = time;
  }, 1000)

}

var questions = $("question-container");
 [
    {
        question: "What what does JS mean?",
        correctAnswer: "JavaScript",
        choices: ["JavaScript", "JavaShoot", "JivaScatch"],
    },

    {
        question: "What is a div?",
        correctAnswer: "HTML tag",
        choices: ["javascript tag", "HTML tag", "css tag"],
    },
    {
        question: "What is considered the bones of coding?",
        correctAnswer: "HTML",
        choices: ["javascript", "HTML", "CSS"]
    },
 ]


startBtn.on("click", startTimer);

start.style.disply = "none";

questions[0].answers.forEach(function (item){
    var correctAnswer = document.createElement("button");
    answerBtn.textContent = item;
    answerBtn.addEventListener("click", handleAnswerClick);
    answers.append(answerBtn);
});
