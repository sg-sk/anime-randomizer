import React from 'react';
import Button from './Button';
import List from './List';
import AnimeItem from './AnimeItem';
import Spinner from './Spinner';
import HeroPoster from './HeroPoster';
import { useAnimeFetch } from '../hooks/useAnimeFetch';
import Refresh from '../images/refresh.png';

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
      <Button
        text='Random Anime'
        callback={() => setIsFetchNewRandomAnime(true)}
        image={Refresh}
      />
      <div>
        <HeroPoster anime={randomAnime} />
        <h3 className='flex justify-center mb-5 mx-5 md:mx-20 lg:mx-40 xl:mx-60 2xl:mx-80 text-2xl '>
          Most Recent Results
        </h3>
        <List>
          {randomAnimeList.length > 0 ? (
            randomAnimeList
              .slice(0)
              .reverse()
              .map((anime) => <AnimeItem key={anime.id} animeInfo={anime} />)
          ) : (
            <div className='flex justify-center text-lg'>
              <span>No recently viewed anime 🔎</span>
            </div>
          )}
        </List>
      </div>
    </div>
  );
};

export default Home;
