import React from 'react';
import HeroBackground from '../HeroBackground';
import HeroThumbnail from '../HeroThumbnail';
import {
  concatenateAnilistId,
  removeHtmlMarkupFromString,
  concatenateGenres,
} from '../../helpers';
import { Information, Thumbnail } from './HeroPoster.styles';

const HeroPoster = ({ anime }) => (
  <>
    {anime.bannerImage ? (
      <HeroBackground imageUrl={anime.bannerImage} />
    ) : (
      <div className='h-32' />
    )}
    <Thumbnail className='flex justify-center mb-5'>
      <HeroThumbnail
        anilistLink={concatenateAnilistId(anime.id)}
        image={anime.coverImage.large}
      />
    </Thumbnail>
    <div className='mx-5 md:mx-20 lg:mx-40 xl:mx-60 2xl:mx-80'>
      <div className='sm:flex'>
        <Information className='w-full h-full mb-5'>
          <h1 className='mb-2 font-black text-center text-3xl'>
            {anime.title.romaji}
          </h1>
          <p className='mb-2 italic text-center text-lg'>
            {concatenateGenres(anime.genres)}
          </p>
          <p className='mb-2 text-xl'>
            {anime.description ? (
              removeHtmlMarkupFromString(anime.description)
            ) : (
              <>No Description</>
            )}
          </p>
          <div className='mb-2 sm:flex sm:gap-2'>
            <div className='flex-auto p-3 mb-2 sm:mb-0 rounded-lg bg-blue-300 text-lg'>
              <h4 className='font-semibold'>Score</h4>
              <p>{anime.averageScore ? anime.averageScore : <>TBA</>}</p>
            </div>
            <div className='flex-auto p-3 mb-2 sm:mb-0 rounded-lg bg-blue-300 text-lg'>
              <h4 className='font-semibold'>Year</h4>
              <p>{anime.seasonYear ? anime.seasonYear : <>TBA</>}</p>
            </div>
            <div className='flex-auto p-3 mb-2 sm:mb-0 rounded-lg bg-blue-300 text-lg'>
              <h4 className='font-semibold'>Episodes</h4>
              <p>{anime.episodes ? anime.episodes : <>TBA</>}</p>
            </div>
            <div className='flex-auto p-3 mb-2 sm:mb-0 rounded-lg bg-blue-300 text-lg'>
              <h4 className='font-semibold'>Status</h4>
              <p>{anime.status ? anime.status : <>TBA</>}</p>
            </div>
          </div>
        </Information>
      </div>
    </div>
  </>
);

export default HeroPoster;
