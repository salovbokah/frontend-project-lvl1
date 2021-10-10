import getRandomInt from '../utilities.js';
import startNewGame from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateQuestionAnswer = () => {
  const question = getRandomInt(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

const primeBrainGames = () => startNewGame(description, generateQuestionAnswer);

export default primeBrainGames;
