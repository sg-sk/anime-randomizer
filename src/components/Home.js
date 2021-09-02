import React from 'react';
import Button from './Button';
import Grid from './Grid';
import Spinner from './Spinner';
import HeroPoster from './HeroPoster';
import Poster from './Poster';
import { useAnimeFetch } from '../hooks/useAnimeFetch';

const Home = () => {
  const {
    randomAnime,
    randomAnimeList,
    loading,
    error,
    setIsFetchNewRandomAnime,
  } = useAnimeFetch();

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
    <div>
      <div className='flex justify-center'>
        <Button
          text='Random Anime'
          callback={() => setIsFetchNewRandomAnime(true)}
        />
      </div>
      <div>
        <HeroPoster anime={randomAnime} />
      </div>
      <Grid header='Recent Anime Results'>
        {randomAnimeList ? (
          randomAnimeList
            .slice(0)
            .reverse()
            .map((anime) => <Poster key={anime.id} animeInfo={anime} />)
        ) : (
          <span>No recently viewed anime</span>
        )}
      </Grid>
    </div>
  );
};

export default Home;
