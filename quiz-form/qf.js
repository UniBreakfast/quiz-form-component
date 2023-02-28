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
    const { image, imageText, progressWord, progressText, btnLabels } = this.options
    const count = this.questions.length
    const questionBlock = new QuestionBlock(this.questions, this.name)
    const pictureBlock = new PictureBlock(count, image, imageText)
    const progressBlock = new ProgressBlock(count, progressWord, progressText)
    const buttonBlock = new ButtonBlock(btnLabels, () => this.goToQuestion(this.currentIndex - 1))
    const form = document.createElement('form')

    form.className = 'quiz-form'

    form.append(questionBlock.el, pictureBlock.el, progressBlock.el, buttonBlock.el)

    document.querySelector(this.selector)?.append(form)

    this.el = form
    this.pictureBlock = pictureBlock
    this.progressBlock = progressBlock
    this.buttonBlock = buttonBlock
  }

  goToQuestion(i) {
    const radios = this.el.querySelectorAll(`[name=${this.name}]`)
    const nextRadio = radios[i]

    if (nextRadio) {
      nextRadio.checked = true
      this.pictureBlock.updateCount(this.questions.length - i)
      this.progressBlock.updateProgress(i)
    } else {
      this.el.submit()
    }

    this.buttonBlock.backButton.disabled = !i
  }

  get currentIndex() {
    const checkedRadio = this.el.querySelector(`[name=${this.name}]:checked`)

    return +checkedRadio?.value
  }
}

let qfCount = 0

import QuestionBlock from './question-block.js'
import PictureBlock from './picture-block.js'
import ProgressBlock from './progress-block.js'
import ButtonBlock from './button-block.js'
