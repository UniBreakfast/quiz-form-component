import questions from './questions.js'
import options from './options.js'
import QuizForm from './quiz-form/qf.js'

const selector = '#body'

const quizForm = new QuizForm(questions, selector, options)

/* let currentQuestion = 0

setInterval(() => {
  currentQuestion = (currentQuestion + 1) % questions.length
  quizForm.goToQuestion(currentQuestion)
}, 1000)
 */
