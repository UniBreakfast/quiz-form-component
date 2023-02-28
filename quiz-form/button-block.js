export default class ButtonBlock {
  constructor(btnLabels, hanleBack) {
    this.btnLabels = btnLabels
    this.hanleBack = hanleBack
    this.render()
  }

  render() {
    const block = document.createElement('div')
    const { btnLabels } = this
    
    const buttons = btnLabels.map((label) => {
      const button = document.createElement('button')

      button.type = 'button'
      button.textContent = label

      return button
    })

    block.className = 'button-block'
    buttons[1].disabled = true
    buttons[1].addEventListener('click', this.hanleBack)

    block.append(...buttons)

    this.el = block
    this.backButton = buttons[1]
  }
}
