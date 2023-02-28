export default class PictureBlock {
  constructor(count, image, imageText) {
    this.count = count
    this.image = image
    this.imageText = imageText
    this.render()
  }

  render() {
    const block = document.createElement('div')
    const { count, image } = this
    const { el } = this
    const img = document.createElement('img')
    const p = document.createElement('p')
    const countSpan = document.createElement('span')
    const [leftPart, rightPart] = this.imageText.split('{X}')

    block.className = 'picture-block'
    img.src = image
    img.alt = 'quiz image'
    img.className = 'quiz-image'

    p.append(leftPart, countSpan, rightPart)
    countSpan.append(count)

    block.append(img, p)

    this.el = block
    this.counter = countSpan
  }

  updateCount(count) {
    this.count = count
    this.counter.innerText = count
  }
}
