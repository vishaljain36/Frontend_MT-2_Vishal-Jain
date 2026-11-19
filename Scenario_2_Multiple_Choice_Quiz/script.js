const questions = [
  {
    question: "Which keyword declares a constant variable?",
    options: ["var", "let", "const", "static"],
    correct: 2
  },
  {
    question: "Which method adds an element to the end of an array?",
    options: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0
  },
  {
    question: "Which operator is used for strict equality in JavaScript?",
    options: ["=", "==", "===", "!="],
    correct: 2
  },
  {
    question: "Which method selects the first matching element using a CSS selector?",
    options: ["getElementById()", "querySelector()", "getElementsByClassName()", "createElement()"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionScreen = document.querySelector("#question-screen");
const resultScreen = document.querySelector("#result-screen");
const questionCount = document.querySelector("#question-count");
const progressPercent = document.querySelector("#progress-percent");
const progressFill = document.querySelector("#progress-fill");
const questionText = document.querySelector("#question-text");
const optionsContainer = document.querySelector("#options-container");
const nextButton = document.querySelector("#next-button");
const selectionMessage = document.querySelector("#selection-message");

function showQuestion() {
  const current = questions[currentQuestion];
  selectedAnswer = null;
  nextButton.disabled = true;

  questionCount.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  progressPercent.textContent = `${progress}%`;
  progressFill.style.width = `${progress}%`;

  questionText.textContent = current.question;
  optionsContainer.innerHTML = current.options.map((option, index) => `
    <label class="option">
      <input type="radio" name="answer" value="${index}">
      <span>${option}</span>
    </label>
  `).join("");

  selectionMessage.textContent = "Select one option to continue.";
  nextButton.textContent = currentQuestion === questions.length - 1 ? "Finish" : "Next";
}

optionsContainer.addEventListener("change", event => {
  if (event.target.name !== "answer") return;
  selectedAnswer = Number(event.target.value);
  nextButton.disabled = false;
  selectionMessage.textContent = "Answer selected. You can continue.";
});

nextButton.addEventListener("click", () => {
  if (selectedAnswer === null) return;

  if (selectedAnswer === questions[currentQuestion].correct) {
    score += 1;
  }

  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionScreen.hidden = true;
  resultScreen.hidden = false;

  const percentage = Math.round((score / questions.length) * 100);
  document.querySelector("#score").textContent = `${score} / ${questions.length}`;
  document.querySelector("#percentage").textContent = `You scored ${percentage}%.`;

  let message;
  if (percentage === 100) {
    message = "Excellent work!";
  } else if (percentage >= 50) {
    message = "Good job!";
  } else {
    message = "Keep practising!";
  }

  document.querySelector("#result-message").textContent = message;
}

document.querySelector("#restart-button").addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  selectedAnswer = null;
  resultScreen.hidden = true;
  questionScreen.hidden = false;
  showQuestion();
});

showQuestion();
