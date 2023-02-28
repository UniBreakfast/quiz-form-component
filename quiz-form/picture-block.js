export default class PictureBlock {
  constructor(count, image) {
    this.count = count
    this.image = image
    this.el = document.createElement('div')
    this.el.className = 'picture-block'
    this.render()
  }

  render() {
    const { count, image } = this
    const { el } = this
    const img = document.createElement('img')

    img.src = image
    img.alt = 'quiz image'
    img.className = 'quiz-image'

    el.append(img)

    for (let i = 0; i < count; i++) {
      const div = document.createElement('div')

      div.className = 'picture-item'
      el.append(div)
    }
  }
}
