import getRandomInt from '../utilities.js';
import startNewGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const calculatedGCD = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }
  return calculatedGCD(secondNumber, firstNumber % secondNumber);
};

const generateQuestionAnswer = () => {
  const fromNumber = 0;

  const firstNumber = getRandomInt(fromNumber);
  const secondNumber = getRandomInt(fromNumber);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = calculatedGCD(firstNumber, secondNumber).toString();

  return [question, answer];
};

const gcdBrainGames = () => startNewGame(description, generateQuestionAnswer);

export default gcdBrainGames;
