import { getRandomChoice, getRandomInt } from '../utils.js';

export const rule = 'What is the result of the expression?';
const maxNumber = 10;
const operations = '+-*';

const calculate = (operandOne, operandTwo, operation) => {
  let result;
  switch (operation) {
    case '+':
      result = operandOne + operandTwo;
      break;
    case '-':
      result = operandOne - operandTwo;
      break;
    case '*':
      result = operandOne * operandTwo;
      break;
    default:
      break;
  }
  return result;
};

export const getQuestionAndAnswer = () => {
  const operandOne = getRandomInt(maxNumber);
  const operandTwo = getRandomInt(maxNumber);
  const operation = getRandomChoice(operations);
  const question = `${operandOne} ${operation} ${operandTwo}`;
  const answer = calculate(operandOne, operandTwo, operation);
  return [question, answer];
};
