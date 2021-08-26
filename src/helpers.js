export const getRandomizedNumber = (min, max) => {
  let randomNumber = Math.random() * (max - min) + min;
  return Number.parseInt(randomNumber);
};

export const removeHtmlMarkupFromString = (description) => {
  return description.replace(/<\/?[^>]+(>|$)/g, '');
};
