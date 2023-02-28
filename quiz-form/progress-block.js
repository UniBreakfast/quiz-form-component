export default class ProgressBlock {
  constructor(count) {
    this.count = count
    this.el = document.createElement('div')
    this.el.className = 'progress-block'
    this.render()
  }

  render() {
    const { count, el } = this

    for (let i = 0; i < count; i++) {
      const div = document.createElement('div')

      div.className = 'progress-item'
      el.append(div)
    }
  }
}
