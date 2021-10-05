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

const getRandomProgressionItem = (min = 5, max = 10) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateQuestionAnswer = () => {
  const itemsCount = getRandomProgressionItem();

  const progressions = getProgression(getRandomInt(), getRandomInt(), itemsCount);

  const firstItem = 1;
  const lastItem = itemsCount - 1;
  const hiddenItem = getRandomInt(firstItem, lastItem);

  const answer = progressions[hiddenItem].toString();

  progressions[hiddenItem] = '..';

  const question = progressions.join(' ');

  return [question, answer];
};

const progressionBrainGames = () => startNewGame(description, generateQuestionAnswer);

export default progressionBrainGames;
