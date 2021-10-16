import getRandomInt from '../utilities.js';
import startNewGame from '../index.js';

const description = 'What number is missing in the progression?';
const progressionLength = getRandomInt(5, 10);

const getProgression = (start, step, length = progressionLength) => {
  const progressions = [];
  for (let i = 0; i < length; i += 1) {
    progressions.push(start + step * i);
  }
  return progressions;
};

const generateQuestionAnswer = () => {
  const progressions = getProgression(getRandomInt(0, 100), getRandomInt(0, 100));
  const hiddenItem = getRandomInt(1, progressionLength - 1);

  const getHiddenItem = (arr, index) => {
    const newArr = [];
    for (let item = 0; item < arr.length; item += 1) {
      if (arr[item] === arr[index]) {
        newArr.push('..');
      } else {
        newArr.push(arr[item]);
      }
    }
    return newArr.join(' ');
  };

  const answer = progressions[hiddenItem].toString();

  const question = getHiddenItem(progressions, hiddenItem);

  return [question, answer];
};

const progressionBrainGames = () => startNewGame(description, generateQuestionAnswer);

export default progressionBrainGames;
