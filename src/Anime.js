import React from 'react';

import { useAnimeFetch } from './hooks/useAnimeFetch';

import { removeHtmlMarkupFromString } from './helpers';

const Anime = () => {
  const { randomAnime, error } = useAnimeFetch();

  if (error) return <div>Something went wrong...</div>;

  return (
    <div>
      {randomAnime.title ? (
        <span>
          Title: {randomAnime.title.romaji}
          <br />
          Description: {removeHtmlMarkupFromString(randomAnime.description)}
        </span>
      ) : (
        <span>Loading</span>
      )}
    </div>
  );
};

export default Anime;
