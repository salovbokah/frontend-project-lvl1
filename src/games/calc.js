import getRandomInt from '../utilities.js';
import startNewGame from '../index.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculateExpression = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Operation ${operator} is not supported`);
  }
};

const generateQuestionAnswer = () => {
  const firstNumber = getRandomInt(0, 100);
  const secondNumber = getRandomInt(0, 100);

  const operator = operators[getRandomInt(0, operators.length - 1)];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const answer = calculateExpression(firstNumber, secondNumber, operator).toString();

  return [question, answer];
};

const calcBrainGames = () => startNewGame(description, generateQuestionAnswer);

export default calcBrainGames;
