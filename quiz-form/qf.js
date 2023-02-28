export default class QuizForm {
  constructor(questions, selector, options) {
    this.questions = questions
    this.selector = selector
    this.options = options
    this.render()
  }

  render() {
    const { image } = this.options
    const count = this.questions.length
    const questionBlock = new QuestionBlock(this.questions)
    const pictureBlock = new PictureBlock(count, image)
    const progressBlock = new ProgressBlock(count)
    const buttonBlock = new ButtonBlock(btnLabels)
    const form = document.createElement('form')

    form.className = 'quiz-form'

    form.append(questionBlock.el, pictureBlock.el, progressBlock.el, buttonBlock.el)
  }
}

import QuestionBlock from './question-block.js'
import PictureBlock from './picture-block.js'
import ProgressBlock from './progress-block.js'
import ButtonBlock from './button-block.js'
