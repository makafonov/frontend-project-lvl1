export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const getRandomChoice = (choices) => {
  const index = getRandomInt(choices.length);
  return choices[index];
};
