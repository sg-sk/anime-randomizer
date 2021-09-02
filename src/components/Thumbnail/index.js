import React from 'react';
import { Image } from './Thumbnail.styles';

const Thumbnail = ({ anilistLink, image }) => (
  <a href={anilistLink} target='_blank' rel='noreferrer'>
    <Image className='rounded shadow-2xl' src={image} alt='anime-thumbnail' />
  </a>
);

export default Thumbnail;
