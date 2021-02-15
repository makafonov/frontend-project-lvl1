import { getRandomIntBetween } from '../utils.js';

export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minNumber = 2;
const maxNumber = 101;

const isPrime = (number) => {
  if (number % 2 === 0) {
    return number === 2;
  }
  let div = 3;
  while (div ** 2 <= number && number % div !== 0) {
    div += 2;
  }
  return div ** 2 > number;
};

export const getQuestionAndAnswer = () => {
  const number = getRandomIntBetween(minNumber, maxNumber);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [number, answer];
};
