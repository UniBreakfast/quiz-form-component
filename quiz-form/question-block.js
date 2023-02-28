export default class QuestionBlock {
  constructor(questions) {
    this.questions = questions
    this.el = document.createElement('div')
    this.el.className = 'question-block'
    this.render()
  }
}
