const readlineSync = require('readline-sync')

const username=readlineSync.question("What's your name? ")
console.log('Welcome! '+username)

const highScores= [
  {
    name: 'gurdeep',
    score: 10
  },
  {
    name: 'gilroy clancy',
    score: 8
  },
  {
    name: 'anne gozpel',
    score: 4
  }
]

let score = 0

const questions = [
  {
    question:'is my age greater than 25? (y/n) ',
    answer:'n'
    },
  {
    question:'Am i good at singing? (y/n) ',
    answer:'y'
  },
  {
    question:'do i like anime? (y/n) ',
    answer:'n'
  },
  {
    question:'Am i scared of heights?  (y/n) ',
    answer:'n'
  },
  {
    question:"what's my favorite color? ",
    answer:"blue"
  }
]

function checkAnswer(value,answer) {
  if(value.toLowerCase()===answer.toLowerCase()) {
    score+=2
    console.log('right!')
    console.log('Score: '+score)
  } else {
    console.log('wrong!!')
  }
}
for(let i=0;i<questions.length;i++){
  console.log('-------')
  const userInput = readlineSync.question(questions[i].question)
  checkAnswer(userInput,questions[i].answer)
}

console.log('-------')
console.log('Current Highscores:')

function displayHighscores() {
  console.log('Current Highscores:')
  for(let i=0;i<highScores.length;i++){
    console.log('')
    console.log('name: '+highScores[i].name)
    console.log('score: '+highScores[i].score)
    }
}
displayHighscores()

console.log('P.S send me a screenshot of your score to get your name in the highscores')
