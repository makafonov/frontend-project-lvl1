import { getRandomIntBetween } from '../utils.js';

export const rule = 'What number is missing in the progression?';

const minNumber = 1;
const maxNumber = 11;
const minProgressionIndex = 0;
const progressionLength = 10;

const getProgression = (start, length, step) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

export const getQuestionAndAnswer = () => {
  const start = getRandomIntBetween(minNumber, maxNumber);
  const step = getRandomIntBetween(minNumber, maxNumber);
  const index = getRandomIntBetween(minProgressionIndex, progressionLength);
  const progression = getProgression(start, progressionLength, step);
  const answer = progression[index];
  progression[index] = '..';
  const separator = ' ';
  return [progression.join(separator), answer];
};
