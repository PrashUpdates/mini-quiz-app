<h1 align="center">🧠 Mini Quiz App</h1>

<p align="center">
  <strong>A lightweight, interactive quiz app built with vanilla HTML, CSS and JavaScript.</strong>
</p>


## 📖 About

**Mini Quiz App** is a browser-based quiz with 5 multiple-choice questions. Pick an answer, get instant feedback, move between questions, and see your final score at the end. No frameworks, no libraries, just plain JavaScript.

Each question is stored as an object in the `Qdata` array:

```js
{
  question: "Your question here",
  option1: "Option A",
  option2: "Option B",
  option3: "Option C",
  option4: "Option D",
  correct: "option2" // ID of the correct option button
}
```



## ✨ Features

**🧩 Questions**
- Questions, options and progress (`1/5`, `2/5`...) are rendered dynamically from `Qdata` using `currentIndex`
- `theData()` runs automatically on page load

**🧭 Navigation**
- **Next** and **Previous** buttons move through the questions
- Boundary checks prevent going out of range (`currentIndex < Qdata.length - 1` for Next, `currentIndex > 0` for Previous)
- **Next** stays disabled until the current question is answered (`answeredStatus`), and is enabled again if you go back to an already answered question

**✅ Answer Checking**
- Event delegation on `#btns` with `e.target.closest("button")`
- Selected answer gets a `3px solid green` border if correct, `3px solid red` if wrong
- On a wrong answer, the correct option is also highlighted in green
- Option buttons are disabled after answering, so one question can't be answered twice

**🔄 Reset Logic**
- `resetButtons()` clears inline border styles and re-enables the option buttons whenever a new question is rendered

**🏆 Score & Result**
- Score increases only for correct answers, with no duplicate points when revisiting a question using Previous
- After the last question, clicking Next shows a **Congratulations** screen inside `.box1` with `score / Qdata.length` and a **Restart Quiz** button (`showResultScreen()`)



## 🛠️ Tech Stack

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,css,js&perline=3" />
  </a>
</p>

| Technology | Purpose |
|---|---|
| <img src="https://skillicons.dev/icons?i=html" width="20" /> **HTML5** | Quiz layout and structure |
| <img src="https://skillicons.dev/icons?i=css" width="20" /> **CSS3** | Styling the quiz card and buttons |
| <img src="https://skillicons.dev/icons?i=js" width="20" /> **JavaScript (ES6+)** | Logic, DOM manipulation, event delegation |



## 🏗️ Project Structure

```
Mini-Quiz-App/
│
├── index.html   # Layout, question area, option buttons, step counter, Next/Previous
├── app.css      # Styling for the quiz card, buttons and layout
├── main.js      # Qdata, state (currentIndex, score, answeredStatus), rendering, validation, result screen
└── README.md
```


## ⚙️ How to Run Locally

**Option 1: Open directly**

1. Clone the repository
   ```bash
   git clone YOUR_REPOSITORY_URL
   cd Mini-Quiz-App
   ```
2. Double-click `index.html` to open it in your browser.

**Option 2: VS Code Live Server**

1. Open the project folder in VS Code
2. Install the **Live Server** extension
3. Right-click `index.html` and choose **Open with Live Server**

No installation or build step is needed.


## 🚀 Future Improvements

- [ ] Remember the selected option colors when going back with **Previous**
- [ ] Add a timer for each question
- [ ] Add more questions
- [ ] Add categories (e.g. HTML, CSS, JavaScript)
- [ ] Shuffle questions and options
