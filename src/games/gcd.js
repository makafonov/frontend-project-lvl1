import { getRandomIntBetween } from '../utils.js';

export const rule = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 51;

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

export const getQuestionAndAnswer = () => {
  const num1 = getRandomIntBetween(minNumber, maxNumber);
  const num2 = getRandomIntBetween(minNumber, maxNumber);
  const question = `${num1} ${num2}`;
  const answer = getGcd(num1, num2);
  return [question, answer];
};
