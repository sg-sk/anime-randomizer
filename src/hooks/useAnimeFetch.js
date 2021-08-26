import { useEffect, useState } from 'react';
import { getRandomizedNumber } from '../helpers';
import API from '../API';

export const useAnimeFetch = () => {
  const [randomAnime, setRandomAnime] = useState({});
  const [error, setError] = useState(false);

  const fetchAnimeInfos = async () => {
    try {
      setError(false);

      const fullAnimeInfosJson = await API.fetchAnimeList();
      const animeInfoArray = fullAnimeInfosJson.data.Page.media;
      const randomAnimeInfo = animeInfoArray[getRandomizedNumber(0, 49)];

      setRandomAnime(randomAnimeInfo);
    } catch (error) {
      setError(true);
    }
  };

  // Initial Render
  useEffect(() => {
    fetchAnimeInfos();
  }, []);

  return { randomAnime, error };
};
