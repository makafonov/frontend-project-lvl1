export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const getRandomChoice = (choices) => {
  const index = getRandomInt(choices.length);
  return choices[index];
};

/*
 * Returns a random number between min (inclusive) and max (exclusive)
 */
export const getRandomIntBetween = (min, max) => Math.floor(Math.random() * (max - min) + min);
