import readlineSync from 'readline-sync';

const maxNumber = 100;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
let attempts = 3;

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getQuestionAndAnswer = () => {
  const question = getRandomInt(maxNumber);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(rule);
  while (attempts) {
    const [question, rightAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    attempts -= 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default startGame;
