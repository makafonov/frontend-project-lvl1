import readlineSync from 'readline-sync';

let attempts = 3;

const engine = (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(game.rule);
  while (attempts) {
    const [question, rightAnswer] = game.getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== String(rightAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    attempts -= 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default engine;
