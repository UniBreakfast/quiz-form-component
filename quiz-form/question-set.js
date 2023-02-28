export default class QuestionSet {
  constructor(question, name, i) {
    this.question = question
    this.name = name
    this.render(i)
  }

  render(i) {
    const qSet = document.createElement('fieldset')
    const radio = document.createElement('input')
    const qTitle = document.createElement('h3')
    const qAnswerGroup = document.createElement('ul')
    const radioAnswers = this.question.answers.map(
      answer => new RadioAnswer(answer)
    )

    Object.assign(radio, {type: 'radio', name: this.name, hidden: true, checked: !i})
    qSet.className = 'question-set'
    qTitle.textContent = this.question.title
    qAnswerGroup.append(
      ...radioAnswers.map(ra => ra.el)
    )
    qSet.append(radio, qTitle, qAnswerGroup)

    this.el = qSet
  }
}

import RadioAnswer from './radio-answer.js'
