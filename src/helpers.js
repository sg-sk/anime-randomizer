import { ANILIST_URL_PREFIX_ANIME } from './config';

export const getRandomizedNumber = (min, max) => {
  let randomNumber = Math.random() * (max - min) + min;
  return Number.parseInt(randomNumber);
};

export const removeHtmlMarkupFromString = (description) => {
  return description.replace(/<\/?[^>]+(>|$)/g, '');
};

export const concatenateAnilistId = (id) => {
  return ANILIST_URL_PREFIX_ANIME + id;
};
