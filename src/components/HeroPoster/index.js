import React from 'react';
import HeroThumbnail from '../HeroThumbnail';
import {
  concatenateAnilistId,
  removeHtmlMarkupFromString,
} from '../../helpers';
import { Information } from './HeroPoster.styles';

const HeroPoster = ({ anime }) => (
  <div className='sm:flex'>
    <div className='flex justify-center sm:flex-none'>
      <HeroThumbnail
        anilistLink={concatenateAnilistId(anime.id)}
        image={anime.coverImage.large}
      />
    </div>
    <Information className='sm:mx-8'>
      <p className='mb-2 font-black'>
        {anime.title.romaji} ({anime.seasonYear ? anime.seasonYear : <>TBD</>})
      </p>
      <div className='sm:inline-flex bg-blue-500 text-white text-center font-extrabold mb-2 px-4 py-5 shadow rounded'>
        {anime.averageScore ? <>{anime.averageScore}%</> : <>N/A</>}
      </div>
      <p className='text-justify'>
        {anime.description ? (
          removeHtmlMarkupFromString(anime.description)
        ) : (
          <>No Description</>
        )}
      </p>
    </Information>
  </div>
);

export default HeroPoster;
