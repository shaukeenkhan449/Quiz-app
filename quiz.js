const quizCont = document.getElementById('quiz-container');
const awardCont = document.getElementById('award-container');
const questionEle = document.getElementById('question');
const optionsEle = document.getElementById('options');
const submitBut = document.getElementById('submit');
const resultEle = document.getElementById('result');
const awardEle = document.getElementById('award');

const questions = [
  {
    question: 'HTML stands for ?',
    options: ['HighText Machine Language','HyperText and links Markup Language',
        'HyperText Markup Language','None of these'],
    answer: 'HyperText Markup Language'
  },
  {
    question: 'Which type of JavaScript language is ___?',
    options: ['Object-Oriented','Object-Based','Assembly-language','High-level'],
    answer: 'Object-Based'
  },
  {
    question: 'Which of the following methods is used to access HTML elements using Javascript?',
    options: ['getElementbyId()','getElementsByClassNmae()','both A and B','none in above'],
    answer: 'both A and B'
  },
  // Add more questions here
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  questionEle.textContent = q.question;
  
  optionsEle.innerHTML = '';
  q.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => checkAnswer(option));
    optionsEle.appendChild(button);
  });
}

function checkAnswer(selectedAnswer) {
  const q = questions[currentQuestion];
  if (selectedAnswer === q.answer) {
    score++;
    resultEle.textContent = 'Correct!';
  } else {
    resultEle.textContent = 'Incorrect!';
  }
  currentQuestion++;
  
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizCont.style.display = 'none';
  awardCont.style.display = 'block';
  
  let awardText = '';
  if (score === questions.length) {
    awardText = 'you won some award!';
  } else if (score >= Math.floor(questions.length / 2)) {
    awardText = 'Good job! You answered some questions correctly.';
  } else {
    awardText = 'Better luck next time!';
  }
  
  awardEle.textContent = awardText;
}

showQuestion();
