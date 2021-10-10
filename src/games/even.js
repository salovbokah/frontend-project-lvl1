import getRandomInt from '../utilities.js';
import startNewGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateQuestionAnswer = () => {
  const question = getRandomInt(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const evenBrainGames = () => startNewGame(description, generateQuestionAnswer);

export default evenBrainGames;
