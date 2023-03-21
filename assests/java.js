
const quiz = document.getElementById("quiz");
const startQuiz = document.getElementById("startQuiz");
const submit = document.getElementById("submit");
const resultsBox = document.getElementById("results");
const resultButton = document.getElementById("viewResults");
const timerEl = document.getElementById("timer");

let timeleft = 90;
let currentQuestion = 0;
let score = 0;
let timerInt;

var quiz = [
    {
        question: " commonly used data types Do Not include",
        answers:[
            "A string",
            "boolean",
            "alerts",
            "numbers"
        ],
        correctanswer: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with?",
        answers:[
            "Quotes",
            "curly brackets",
            "parenthesis",
            "Square brackets"
        ],
        correctanswer: "curly brackets"   
            
    },
    {
        question: "Arrays in javascript can be used to store?",
        answers:[
            "Number of strings",
            "other arrays",
            "booleans",
            "All the above"
        ],
        correctanswer: "All the above"
    },
    {
        question:"a very useful tool used during development and debugging for printing content to the debugger is",
        answers:[
            "javascript",
            "terminal/bash",
            "for loops",
            "console logs"
        ],
        correctanswer:"javascript"
    },
]


function quiz(index) {
    const questions = document.querySelectorAll(".quiz");
    const options = document.querySelectorAll(".options");
  
    for (let i = 0; i < quiz.length; i++) {
      quiz[i].classList.add("showNone");
      options[i].classList.add("showNone");
    }
  
    quiz[index].classList.remove("showNone");
    options[index].classList.remove("showNone");
  }
  
  function moveToNextQuestion() {
    if (currentQuestion < quiz.length - 1) {
      currentQuestion++;
      showQuestion(Question);
    } else {
      clearInterval(timerInt);
      const scoreElem = document.createElement("h2");
      scoreElem.textContent = `Your score is: ${timeleft} seconds`;
      while (quiz.firstChild) {
        quiz.removeChild(quiz.firstChild);
      }
      quiz.appendChild(viewResults);
    }
  }
  
  quiz.forEach(function (question, index) {
    const quiz = document.createElement("h2"); 
    quiz.textContent =
      "Question " + (index + 1) + " : " + question.question; 
    questionElem.classList.add("question");
  
    const optionsEl = document.createElement("div");
    optionsEl.classList.add("options");
    question.answers.forEach(function (answer) { 
      const optionEl = document.createElement("button");
      optionEl.addEventListener("click", function () {
        if (answer === question.correctanswer) { 
          score++;
          moveToNextQuestion();
        } else {
          timeleft -= 5;
          moveToNextQuestion(); 
        }
      });
      optionEl.textContent = answer; 
      optionsEl.appendChild(optionEl); 
    });

    });
  
  
  startButt.addEventListener("click", startQuiz);
  
  function startQuiz() {
    quizContainer.classList.remove("showNone");
    startQuiz.classList.add("showNone"); 
    submit.classList.remove("showNone"); 
    timerEl.classList.remove("showNone"); 
  
    showQuestion(currentQuestion);
  
    timerInt = setInterval(timer, 1000);
    function timer() {
      let timerSpan = document.getElementById("timer");
      timeleft = timeleft - 1;
      if (timeleft <= 0) {
        clearInterval(timerInt);
        timerEl.innerHTML = "Time's up!";
    }
    
      timerSpan.textContent = timeleft + " seconds remaining";
      console.log(timeleft);
      quiz.insertBefore(timerEl, quiz.firstChild);
    }
    quiz.removeChild(error); 
  }
  
  const viewResults = document.getElementById("viewResults");
  
  const results = `
      <h2>Score Board</h2>
      <form id="scoreForm">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required>
          <label for="score">Score:</label>
          <input type="number" id="score" name="score" required>
          <button type="submit">Submit</button>
      </form>
      <div id="ViewResults">
          <h3>Scores:</h3>
          <ul id="scores"></ul>
      </div>
  `;
  
  viewResults.innerHTML = viewResults;
  
  const viewResults = document.getElementById("viewResults");
console.log(results);

  
  function loadScores() {
    const results = localStorage.getItem("results");
    if (results) {
      const scores = JSON.parse(results);
      scores.forEach((results) => {
        const li = document.createElement("li");
        li.textContent = `${results.name}: ${results.results}`;
        results.appendChild(li);
      });
    }
  }
  
  loadScores();
  
  viewResults.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const results = document.getElementById("results").value;
  
    const li = document.createElement("li");
    li.textContent = `${name}: ${results}`;
    viewResults.appendChild(li);
  
    results.reset();
  });
  
  console.log(results.viewResults);