var startInfo = document.querySelector("#gameInfo");
var startHeader = document.querySelector("#startHeader");
var startButton = document.querySelector(".button");
var timer = document.querySelector("#countdown");
var highscores = document.querySelector("#highscoresLink");

highscores.setAttribute("style", "margin:15px; text-align:left;")
timer.setAttribute("style", "text-align:right; margin:10px;")
startHeader.setAttribute("style", "font-size:42px; padding-top:50px; margin:20px; text-align:center;");
startInfo.setAttribute("style", "font-size:18px; text-align:center; padding:20px; padding-bottom:50px; margin:10px;");
startButton.setAttribute("style", "text-align:center;")
startButton.querySelector("button").setAttribute("style", "padding-left:40px; padding-right:40px; padding-top:10px; padding-bottom:10px;")

startButton.addEventListener('click',  function () {
    
    startHeader.setAttribute("style", "display:none;");
    startInfo.setAttribute("style", "display:none;");
    startButton.setAttribute("style", "display:none;");
    
    countdown();
    displayQuestions();
})

function countdown() {
    var timeLeft = 60;
    var timeCycle = setInterval(function () {
      if (timeLeft > 1) {
        timer.textContent = "Timer: " + timeLeft + ' ';
        timeLeft--;
        localStorage.setItem("timeLeft", timeLeft);
      } else if (timeLeft === 1) {
        timeLeft--;
        localStorage.setItem("timeLeft", timeLeft);
      } else {
        timer.textContent = '';
        clearInterval(timeCycle);
      }
    }, 1000);
}

function displayQuestions () {
    var mainDiv = document.createElement("div");
    var q1 = document.createElement("h1");
    var answers = document.createElement("div");
    var ans1 = document.createElement("button");
    var ans2 = document.createElement("button");
    var ans3 = document.createElement("button");
    var ans4 = document.createElement("button");
    
    q1.setAttribute("style", "text-align:center; margin:20px; padding-top:100px;");
    q1.textContent = "What is the DOM?";

    answers.setAttribute("style", "display:flex; flex-direction:column; align-items:center;");

    ans1.setAttribute("style", "margin:10px; padding:5px;");
    ans1.textContent = "1.) Document Object Main ";
    
    ans2.setAttribute("style", "margin:10px; padding:5px;");
    ans2.textContent = "2.) Document Object Model ";

    ans3.setAttribute("style", "margin:10px; padding:5px;");
    ans3.textContent = "3.) Document Original Module ";

    ans4.setAttribute("style", "margin:10px; padding:5px;");
    ans4.textContent = "4.) Diorama Object Main ";

    document.body.append(mainDiv);
    mainDiv.append(q1);
    mainDiv.append(answers);
    answers.append(ans1);
    answers.append(ans2);
    answers.append(ans3);
    answers.append(ans4);

    ans1.addEventListener("click", function () {
       
    })

}

console.log("hello");