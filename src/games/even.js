import getRandomNumber from '../utilities.js';
import startNewGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateQuestionAnswer = () => {
  const fromNumber = 0;

  const question = getRandomNumber(fromNumber);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const evenBrainGame = () => startNewGame(description, generateQuestionAnswer);

export default evenBrainGame;
