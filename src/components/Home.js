import React from 'react';
import Button from './Button';
import Grid from './Grid';
import Spinner from './Spinner';
import Thumbnail from './Thumbnail';
import { useAnimeFetch } from '../hooks/useAnimeFetch';
import { concatenateAnilistId, removeHtmlMarkupFromString } from '../helpers';

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
      <span>{randomAnime.title.romaji}</span>
      <br />
      <span>{removeHtmlMarkupFromString(randomAnime.description)}</span>
      <br />
      <Button
        text='Random Anime'
        callback={() => setIsFetchNewRandomAnime(true)}
      />
      <br />
      <img src={randomAnime.coverImage.large} alt='large-cover-img' />
      <br />
      <a href={concatenateAnilistId(randomAnime.id)}>Find More On AniList</a>
      <br />
      <Grid header='Recent Anime Results'>
        {randomAnimeList
          ? randomAnimeList.map((anime) => (
              <Thumbnail
                key={anime.id}
                anilistLink={concatenateAnilistId(anime.id)}
                image={anime.coverImage.large}
              />
            ))
          : null}
      </Grid>
    </div>
  );
};

export default Home;
