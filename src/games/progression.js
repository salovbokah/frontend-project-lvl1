import getRandomInt from '../utilities.js';
import startNewGame from '../index.js';

const getProgression = (start, step, length) => {
  const progressions = [];
  for (let i = 0; i < length; i += 1) {
    progressions.push(start + step * i);
  }
  return progressions;
};

const description = 'What number is missing in the progression?';

const generateQuestionAnswer = () => {
  const itemsCount = getRandomInt(5, 10);

  const progressions = getProgression(getRandomInt(0, 100), getRandomInt(0, 100), itemsCount);

  const hiddenItem = getRandomInt(1, itemsCount - 1);

  const answer = progressions[hiddenItem].toString();

  progressions[hiddenItem] = '..';

  const question = progressions.join(' ');

  return [question, answer];
};

const progressionBrainGames = () => startNewGame(description, generateQuestionAnswer);

export default progressionBrainGames;
