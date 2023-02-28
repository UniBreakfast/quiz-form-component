export default class RadioAnswer {
  constructor(answer) {
    this.answer = answer
    this.render()
  }

  render() {
    const li = document.createElement('li')
    const label = document.createElement('label')
    const input = document.createElement('input')
    const span = document.createElement('span')
    const { pic, text, value } = this.answer

    li.className = 'radio-answer'
    input.type = 'radio'
    input.name = 'answer'
    input.value = value
    span.textContent = text
    if (pic) {
      const img = document.createElement('img')
      img.src = pic
      label.append(img)
    }
    label.append(input, span)
    li.append(label)

    this.el = li
  }
}
