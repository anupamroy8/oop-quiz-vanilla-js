class Question {
  constructor(title, options = [], answerIndex) {
    this.title = title;
    this.options = options;
    this.answerIndex = answerIndex;
  }
  isCorrect(value) {
    return this.options[this.answerIndex] === value;
  }
  getCorrectAnswer() {
    return this.options[this.answerIndex];
  }
  createUI() {
    let optionsUI = this.options
      .map(
        (option, i) => `<div>
        <input type="radio" id="${option}" name="${this.title}" value="${option}" />
        <label for="${option}">${option}</label>
        </div>`
      )
      .join("");
    return `
    <form style="margin-bottom: 3rem;">
  <fieldset>
  <legend>${this.title}</legend>
  <div class="options">${optionsUI}</div>
      <div>
      <button type="submit">Submit</button>
    </div>
  </fieldset>
</form>`;
  }
}

class Quiz {
  constructor() {
    this.questions = [];
  }
  addQuestion(title, options, answerIndex) {
    this.questions.push(new Question(title, options, answerIndex));
    return this.questions;
  }
  removeQuestion(index) {
    let questionToRemove = this.questions[index];
    this.questions.splice(index, 1);
    return questionToRemove;
  }
  accessQuestion(index) {
    return this.questions[index];
  }
  render(rootElement) {
    rootElement.innerHTML = this.questions
      .map(question => {
        return question.createUI();
      })
      .join("");
  }
}

let quiz = new Quiz();
quiz.addQuestion(
  "Inside which HTML element do we put the JavaScript?",
  [`a`, `b`, `c`, `d`],
  1
);
quiz.addQuestion(
  "Inside which HTML element do we put",
  [`a`, `b`, `c`, `d`],
  1
);
quiz.addQuestion(
  "Inside which HTML element do the JavaScript?",
  [`a`, `b`, `c`, `d`],
  1
);
quiz.render(document.querySelector("div"));
