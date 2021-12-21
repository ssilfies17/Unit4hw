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
      } else if (timeLeft === 1) {
        timeLeft--;
      } else {
        timer.textContent = '';
        clearInterval(timeCycle);
      }
    }, 1000);
}

function displayQuestions () {
    var q1 = document.createElement("h1")
    
    q1.setAttribute("style", "text-align:center; margin:20px; padding-top:100px;")
    q1.textContent = "What is the DOM?"

    document.body.append(q1);

}

console.log("hello");