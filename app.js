import questions from './questions.js'
import options from './options.js'
import QuizForm from './quiz-form/qf.js'

const selector = '#body'

new QuizForm(questions, selector, options)
