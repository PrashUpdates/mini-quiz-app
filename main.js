let Qcount = document.getElementById("count");
let btns = document.getElementById("btns");

let btnFirst = document.querySelector(".btn1");
let btnSecond = document.querySelector(".btn2");
let btnThird = document.querySelector(".btn3");
let btnFour = document.querySelector(".btn4");

let optionButtons = [btnFirst, btnSecond, btnThird, btnFour];

let question = document.getElementById("question");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");

let nextBtn = document.querySelector(".next");
let previousBtn = document.querySelector(".previous");
let box1 = document.querySelector(".box1");

let currentIndex = 0;
let score = 0;

let answeredStatus = new Array(5).fill(false);

const Qdata = [
  {
    question: "Question 1: What is the largest planet in our solar system?",
    option1: "A) Earth",
    option2: "B) Mars",
    option3: "C) Jupiter",
    option4: "D) Venus",
    correct: "option3"
  },
  {
    question: "Question 2: Which planet is known as the Red Planet?",
    option1: "A) Venus",
    option2: "B) Mars",
    option3: "C) Jupiter",
    option4: "D) Saturn",
    correct: "option2"
  },
  {
    question: "Question 3: How many days are there in a leap year?",
    option1: "A) 365",
    option2: "B) 364",
    option3: "C) 366",
    option4: "D) 360",
    correct: "option3"
  },
  {
    question: "Question 4: What is the capital of Japan?",
    option1: "A) Seoul",
    option2: "B) Beijing",
    option3: "C) Bangkok",
    option4: "D) Tokyo",
    correct: "option4"
  },
  {
    question: "Question 5: Which gas do plants absorb from the atmosphere?",
    option1: "A) Oxygen",
    option2: "B) Nitrogen",
    option3: "C) Carbon dioxide",
    option4: "D) Hydrogen",
    correct: "option3"
  }
];

function resetButtons() {
  optionButtons.forEach(function (btn) {
    btn.style.border = "";
    btn.disabled = false;
  });
}

function theData() {
  question.textContent = Qdata[currentIndex].question;
  option1.textContent = Qdata[currentIndex].option1;
  option2.textContent = Qdata[currentIndex].option2;
  option3.textContent = Qdata[currentIndex].option3;
  option4.textContent = Qdata[currentIndex].option4;

  if (Qcount) {
    Qcount.textContent = currentIndex + 1;
  }

  resetButtons();

  nextBtn.disabled = !answeredStatus[currentIndex];
}

function showResultScreen() {
  box1.innerHTML = `
    <div class="result-box">
      <h2>Congratulations!</h2>
      <p>Quiz completed.</p>
      <p><strong>Your Score:</strong> ${score} / ${Qdata.length}</p>
      <button type="button" class="restart-btn">Restart Quiz</button>
    </div>
  `;

  let restartBtn = box1.querySelector(".restart-btn");
  restartBtn.addEventListener("click", function () {
    location.reload();
  });
}

theData();

nextBtn.addEventListener("click", function () {
  if (!answeredStatus[currentIndex]) return;

  if (currentIndex < Qdata.length - 1) {
    currentIndex++;
    theData();
  } else {
    showResultScreen();
  }
});

previousBtn.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    theData();
  }
});

btns.addEventListener("click", function (e) {
  let clickedBtn = e.target.closest("button");
  if (!clickedBtn || answeredStatus[currentIndex]) return;

  answeredStatus[currentIndex] = true;
  nextBtn.disabled = false;

  let currentQuestion = Qdata[currentIndex];
  let correctBtnId = currentQuestion.correct;
  let correctBtn = document.getElementById(correctBtnId);

  optionButtons.forEach(function (btn) {
    btn.disabled = true;
  });

  if (clickedBtn.id === correctBtnId) {
    clickedBtn.style.border = "3px solid green";
    score++;
  } else {
    clickedBtn.style.border = "3px solid red";
    if (correctBtn) {
      correctBtn.style.border = "3px solid green";
    }
  }
});
