const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const collectAnsewrs = require('./lib/collectAnswers');

const questions = [
  'What is your name?',
  'Where do you live?',
  'What are you going to do with Node.js?',
];

// function collectAnsewrs(questions, done) {
//   const answers = [];

//   const questionAnswered = (answer) => {
//     answers.push(answer.trim());

//     if (answers.length < questions.length) {
//       rl.question(questions[answers.length], questionAnswered);
//     } else {
//       return done(answers);
//     }
//   };

//   rl.question(questions[0], questionAnswered);
// }

// rl.question('How do you like Node? ', (answer) => {
//   console.log(`Your ansewr ${answer}`);
// });

const answerEveents = collectAnsewrs(questions, (answers) => {
  console.log('Thank you for your answers!');
  console.log(answers);
  process.exit();
});

answerEveents.on('answer', (answer) => console.log(`The answer is ${answer}`));
