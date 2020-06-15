var pageContentEl = document.querySelector("#page-content");
var timerEl = document.querySelector("#countdown");
var initials = document.querySelector("#form")
var ansButton = document.querySelector("#ansButton")

var questionNumber = 0
var score = 0
var highScores = []

// questions
var questions = [
    {
        question: "Commonly used data types DO not Include?",
        option1: "1. strings",
        option2: "2. booleans",
        option3: "3. alerts",
        option4: "4. numbers",
        answer: "3. alerts"
    },

    {
        question: "The condition in an if / else statement is enclosed with ____.",
        option1: "1. quotes",
        option2: "2. curly brackets",
        option3: "3. parenthesis",
        option4: "4. square brackets",
        answer: "3. parenthesis"
    },

    {
        question: "Arrays in JavaScript can be used to store ____.",
        option1: "1. numbers and strings",
        option2: "2. other arrays",
        option3: "3. booleans",
        option4: "4. all of the above",
        answer: "4. all of the above"
    },

    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        option1: "1. commas",
        option2: "2. curly brackets",
        option3: "3. quotes",
        option4: "4. parenthesis",
        answer: "4. parenthesis"
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        option1: "1. JavaScript",
        option2: "2. terminal/bash",
        option3: "3. for loops",
        option4: "4. console log",
        answer: "4. console log"
    }
]

var timeLeft = 100;

var timer = function () {
    var interval = setInterval(function () {
        timerEl.textContent = "Timer: " + timeLeft;

        if (timeLeft < 0) {
            timerEl.textContent = "0";
            clearInterval(interval);
        }
        timeLeft--;
    }, 1000);
}


var startQuiz = function () {
    timer();
    // clear content
    document.getElementById("prequiz").innerHTML = "";

    // loop through questions
    for (var i = 0; i < questions.length; i++) {
        // display question
        var quizQuestion = document.createElement("div");
        quizQuestion.setAttribute("quiz", questionNumber);
        quizQuestion.textContent = questions[i].question;

        // display options
        var ansOption1 = document.createElement("button");
        ansOption1.textContent = questions[i].option1;
        quizQuestion.appendChild(ansOption1);

        var ansOption2 = document.createElement("button");
        ansOption2.textContent = questions[i].option2;
        quizQuestion.appendChild(ansOption2);

        var ansOption3 = document.createElement("button");
        ansOption3.textContent = questions[i].option3;
        quizQuestion.appendChild(ansOption3);

        var ansOption4 = document.createElement("button");
        ansOption4.textContent = questions[i].option4;
        quizQuestion.appendChild(ansOption4);

        document.querySelector("#prequiz").appendChild(quizQuestion);

        if (ans === questions[questionNumber].answer) {
            questionNumber++;
            score++;
        } else {
            questionNumber++;
            timeLeft = timeLeft - 10;
            timerEl.textContent = timeLeft;
        }
    }
}


var answerHandler = function() {


}

var quizEnd = function () {
}

var renderHighScores = function () {
}

var saveScore = function () {

    var initials = document.querySelector("#initials").value;
    var score = document.querySelector("#score").value;

    if (initials === "") {
        displayMessage("error", "Initials cannot be blank");
    } else {
        displayMessage("success", "Registered successfully");

        localStorage.setItem("Initials", initials);
        localStorage.setItem("Score", score);
        renderLastRegistered();
    }
}
pageContentEl.addEventListener("click", startQuiz);

