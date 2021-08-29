import { useEffect, useState } from 'react';
import { ANILIST_MAX_PER_PAGE, MAX_RECENT_ANIME_RESULTS } from '../config';
import { getRandomizedNumber, isPersistedState } from '../helpers';
import API from '../API';

export const useAnimeFetch = () => {
  const [randomAnime, setRandomAnime] = useState({});
  const [randomAnimeList, setRandomAnimeList] = useState([]);
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

      setRandomAnime(randomAnimeInfo);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };

  // Initial Render
  useEffect(() => {
    fetchAnimeInfos();

    // Display recent anime results from localStorage
    const localState = isPersistedState('homeState');
    if (localState) {
      setRandomAnimeList(localState);
      return;
    }
  }, []);

  // Fetch new random anime
  useEffect(() => {
    if (!isFetchingNewRandomAnime) return;

    fetchAnimeInfos();
    setRandomAnimeList((previousRandomAnimeInfos) => {
      // Shift first anime object if it reaches the maximum displayed anime results
      if (previousRandomAnimeInfos.length === MAX_RECENT_ANIME_RESULTS)
        previousRandomAnimeInfos.shift();
      return [...previousRandomAnimeInfos, randomAnime];
    });
    setIsFetchNewRandomAnime(false);
  }, [randomAnime, isFetchingNewRandomAnime]);

  // Write to localStorage
  useEffect(() => {
    localStorage.setItem('homeState', JSON.stringify(randomAnimeList));
  }, [randomAnimeList]);

  return {
    randomAnime,
    randomAnimeList,
    loading,
    error,
    setIsFetchNewRandomAnime,
  };
};
