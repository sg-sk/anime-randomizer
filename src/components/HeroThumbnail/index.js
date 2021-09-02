import React from 'react';
import { Image } from './HeroThumbnail.styles';

const HeroThumbnail = ({ anilistLink, image }) => (
  <a href={anilistLink} target='_blank' rel='noreferrer'>
    <Image
      className='sm:ml-8 rounded shadow-md'
      src={image}
      alt='hero-anime-thumbnail'
    />
  </a>
);

export default HeroThumbnail;
