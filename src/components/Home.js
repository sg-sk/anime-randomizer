import React from 'react';
import Button from './Button';
import Spinner from './Spinner';
import { useAnimeFetch } from '../hooks/useAnimeFetch';
import { concatenateAnilistId, removeHtmlMarkupFromString } from '../helpers';

const Home = () => {
  const { randomAnime, loading, error, setIsFetchNewRandomAnime } =
    useAnimeFetch();

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <div>
      <a href={concatenateAnilistId(randomAnime.id)}>View More</a>
      <br />
      <span>{randomAnime.title.romaji}</span>
      <br />
      <span>{removeHtmlMarkupFromString(randomAnime.description)}</span>
      <Button
        text='Random Anime'
        callback={() => setIsFetchNewRandomAnime(true)}
      />
      <br />
      <img src={randomAnime.coverImage.large} alt='large-cover-img' />
    </div>
  );
};

export default Home;
