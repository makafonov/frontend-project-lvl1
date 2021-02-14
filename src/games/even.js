import { getRandomInt } from '../utils.js';

const maxNumber = 100;
export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getQuestionAndAnswer = () => {
  const question = getRandomInt(maxNumber);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};
