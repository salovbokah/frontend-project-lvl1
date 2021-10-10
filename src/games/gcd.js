import getRandomInt from '../utilities.js';
import startNewGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const calculateGCD = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return calculateGCD(secondNumber, firstNumber % secondNumber);
};

const generateQuestionAnswer = () => {
  const firstNumber = getRandomInt(0, 100);
  const secondNumber = getRandomInt(0, 100);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = calculateGCD(firstNumber, secondNumber).toString();

  return [question, answer];
};

const gcdBrainGames = () => startNewGame(description, generateQuestionAnswer);

export default gcdBrainGames;
