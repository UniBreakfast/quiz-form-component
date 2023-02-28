export default class ProgressBlock {
  constructor(count, progressWord, progressText) {
    this.count = count
    this.progressWord = progressWord
    this.progressText = progressText
    this.render()
  }
  
  render() {
    const block = document.createElement('div')
    const leftP = document.createElement('p')
    const rightP = document.createElement('p')
    const percentageSpan = document.createElement('span')
    const iSpan = document.createElement('span')
    const countSpan = document.createElement('span')
    const { count } = this
    const [leftPart, middlePart, rightPart] = this.progressText.split(/\{X\}|\{Y\}/)

    block.className = 'progress-block'
    percentageSpan.append('0%')
    iSpan.append(0)
    countSpan.append(count)

    leftP.append(this.progressWord, percentageSpan)
    rightP.append(leftPart, iSpan, middlePart, countSpan, rightPart)

    block.append(leftP, rightP)

    this.el = block
    this.percentageSpan = percentageSpan
    this.iSpan = iSpan
  }

  updateProgress(i) {
    const percentage = Math.round((i / this.count) * 100)

    this.percentageSpan.innerText = `${percentage}%`
    this.iSpan.innerText = i
  }
}
