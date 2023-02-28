export default class ProgressBlock {
  constructor(count) {
    this.count = count
    this.el = document.createElement('div')
    this.el.className = 'progress-block'
    this.render()
  }
}
