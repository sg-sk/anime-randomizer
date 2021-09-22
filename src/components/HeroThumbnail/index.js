import React from 'react';
import { Image } from './HeroThumbnail.styles';

const HeroThumbnail = ({ anilistLink, image }) => (
  <a href={anilistLink} target='_blank' rel='noreferrer'>
    <Image
      className='rounded shadow-md transform hover:scale-105'
      src={image}
      alt='hero-anime-thumbnail'
    />
  </a>
);

export default HeroThumbnail;
