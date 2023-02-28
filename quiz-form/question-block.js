export default class QuestionBlock {
  constructor(questions) {
    this.questions = questions
    this.render()
  }

  render() {
    const block = document.createElement('div')

    const questionSets = this.questions.map(
      question => new QuestionSet(question)
    )

    block.className = 'question-block'

    block.append(...questionSets.map(qs => qs.el))

    this.el = block
  }
}

import QuestionSet from './question-set.js'
