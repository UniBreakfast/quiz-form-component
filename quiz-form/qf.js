export default class QuizForm {
  constructor(questions, selector, options) {
    this.questions = questions
    this.selector = selector
    this.options = options
    this.name = `qf${qfCount++}`
    this.render()

    this.el.addEventListener('change', e => {
      const i = +e.target.closest('fieldset').firstChild.value + 1

      this.goToQuestion(i)
    })
  }

  render() {
    const { image, imageText, btnLabels } = this.options
    const count = this.questions.length
    const questionBlock = new QuestionBlock(this.questions, this.name)
    const pictureBlock = new PictureBlock(count, image, imageText)
    const progressBlock = new ProgressBlock(count)
    const buttonBlock = new ButtonBlock(btnLabels)
    const form = document.createElement('form')

    form.className = 'quiz-form'

    form.append(questionBlock.el, pictureBlock.el, progressBlock.el, buttonBlock.el)

    document.querySelector(this.selector)?.append(form)

    this.el = form
    this.pictureBlock = pictureBlock
  }

  goToQuestion(i) {
    const radios = this.el.querySelectorAll(`[name=${this.name}]`)
    const nextRadio = radios[i]

    if (nextRadio) {
      nextRadio.checked = true
      this.pictureBlock.updateCount(this.questions.length - i)
    } else {
      this.el.submit()
    }
  }
}

let qfCount = 0

import QuestionBlock from './question-block.js'
import PictureBlock from './picture-block.js'
import ProgressBlock from './progress-block.js'
import ButtonBlock from './button-block.js'
