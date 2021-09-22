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
    <div className='bg-blue-100'>
      <div className='flex justify-center pt-8'>
        <Button
          text='Random Anime'
          callback={() => setIsFetchNewRandomAnime(true)}
        />
      </div>
      <div className='px-8'>
        <div className='pt-8'>
          <HeroPoster anime={randomAnime} />
        </div>
        <Grid header='Recent Anime Results'>
          {randomAnimeList.length > 0 ? (
            randomAnimeList
              .slice(0)
              .reverse()
              .map((anime) => <Poster key={anime.id} animeInfo={anime} />)
          ) : (
            <span>No recently viewed anime</span>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default Home;
