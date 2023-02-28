export default class QuestionSet {
  constructor(question) {
    this.question = question
    this.render()
  }

  render() {
    const qSet = document.createElement('fieldset')
    const qTitle = document.createElement('h3')
    const qAnswerGroup = document.createElement('ul')
    const radioAnswers = this.question.answers.map(
      answer => new RadioAnswer(answer)
    )

    qSet.className = 'question-set'
    qTitle.textContent = this.question.title
    qAnswerGroup.append(
      ...radioAnswers.map(ra => ra.el)
    )
    qSet.append(qTitle, qAnswerGroup)

    this.el = qSet
  }
}

import RadioAnswer from './radio-answer.js'
