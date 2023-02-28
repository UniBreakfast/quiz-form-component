export default class QuestionBlock {
  constructor(questions, name) {
    this.questions = questions
    this.name = name
    this.render()
  }

  render() {
    const block = document.createElement('div')

    const questionSets = this.questions.map(
      (question, i) => new QuestionSet(question, this.name, i)
    )

    block.className = 'question-block'

    block.append(...questionSets.map(qs => qs.el))

    this.el = block
  }
}

import QuestionSet from './question-set.js'
