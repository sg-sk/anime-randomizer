import { ANILIST_URL_PREFIX_ANIME } from './config';

export const getRandomizedNumber = (min, max) => {
  let randomNumber = Math.random() * (max - min) + min;
  return Number.parseInt(randomNumber);
};

export const removeHtmlMarkupFromString = (description) => {
  return description.replace(/<\/?[^>]+(>|$)/g, '');
};

export const concatenateAnilistId = (id) => {
  return ANILIST_URL_PREFIX_ANIME.concat(id);
};

export const isPersistedState = (stateName) => {
  const localState = localStorage.getItem(stateName);
  return localState && JSON.parse(localState);
};

export const concatenateGenres = (genres) => {
  let genreString = '';
  for (let i = 0; i < genres.length; i++) {
    if (i !== genres.length - 1) {
      genreString += genres[i].concat(', ');
    } else {
      genreString += genres[i];
    }
  }
  return genreString;
};
