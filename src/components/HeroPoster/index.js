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
    <Information className='mx-8'>
      <h3 className='mb-2 font-bold'>{anime.title.romaji}</h3>
      <p className='text-justify'>
        {removeHtmlMarkupFromString(anime.description)}
      </p>
    </Information>
  </div>
);

export default HeroPoster;
