export default class ButtonBlock {
  constructor(btnLabels) {
    this.btnLabels = btnLabels
    this.el = document.createElement('div')
    this.el.className = 'button-block'
    this.render()
  }

  render() {
    const { btnLabels } = this
    const { el } = this
    const buttons = btnLabels.map((label) => {
      const button = document.createElement('button')

      button.className = 'btn'
      button.textContent = label

      return button
    })

    el.append(...buttons)
  }
}
