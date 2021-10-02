import getRandomInt from '../utilities.js';
import startNewGame from '../index.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculateExpression = (firstNumber, operator, secondNumber) => {
  let correctAnswer;

  switch (operator) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;

    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;

    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;

    default:
      correctAnswer = null;
  }

  return correctAnswer;
};

const generateQuestionAnswer = () => {
  const fromNumber = 0;

  const firstNumber = getRandomInt(fromNumber);
  const secondNumber = getRandomInt(fromNumber);

  const toNumber = operators.length - 1;

  const operator = operators[getRandomInt(fromNumber, toNumber)];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = calculateExpression(firstNumber, operator, secondNumber).toString();

  return [question, answer];
};

const calcBrainGames = () => startNewGame(description, generateQuestionAnswer);

export default calcBrainGames;
