import React from 'react';
import Thumbnail from '../Thumbnail';
import { concatenateAnilistId } from '../../helpers';
import { Wrapper, Text } from './Poster.styles';

const Poster = ({ animeInfo }) => (
  <Wrapper>
    <Thumbnail
      anilistLink={concatenateAnilistId(animeInfo.id)}
      image={animeInfo.coverImage.large}
    />
    <Text className='my-8'>{animeInfo.title.romaji}</Text>
  </Wrapper>
);

export default Poster;
