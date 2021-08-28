import { useEffect, useState } from 'react';
import { ANILIST_MAX_PER_PAGE } from '../config';
import { getRandomizedNumber } from '../helpers';
import API from '../API';

export const useAnimeFetch = () => {
  const [randomAnime, setRandomAnime] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isFetchingNewRandomAnime, setIsFetchNewRandomAnime] = useState(false);

  const fetchAnimeInfos = async () => {
    try {
      setLoading(true);
      setError(false);

      const fullAnimeInfosJson = await API.fetchAnimeList();
      const animeInfoArray = fullAnimeInfosJson.data.Page.media;
      const randomAnimeInfo =
        animeInfoArray[getRandomizedNumber(0, ANILIST_MAX_PER_PAGE - 1)];
      console.log(randomAnimeInfo);

      setRandomAnime(randomAnimeInfo);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  // Initial Render
  useEffect(() => {
    fetchAnimeInfos();
  }, []);

  // Fetch new random anime
  useEffect(() => {
    if (!isFetchingNewRandomAnime) return;

    fetchAnimeInfos();
    setIsFetchNewRandomAnime(false);
  }, [isFetchingNewRandomAnime]);

  return { randomAnime, loading, error, setIsFetchNewRandomAnime };
};
