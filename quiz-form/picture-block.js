export default class PictureBlock {
  constructor(count, image) {
    this.count = count
    this.image = image
    this.el = document.createElement('div')
    this.el.className = 'picture-block'
    this.render()
  }
}
