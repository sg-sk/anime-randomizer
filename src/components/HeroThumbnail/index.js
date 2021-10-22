import React from 'react';
import { Image } from './HeroThumbnail.styles';

const HeroThumbnail = ({ image }) => (
  <Image
    className='rounded-full border-4 border-white shadow-md'
    image={image}
  />
);

export default HeroThumbnail;
