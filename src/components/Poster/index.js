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
    <Text className='mt-4'>{animeInfo.title.romaji}</Text>
  </Wrapper>
);

export default Poster;
