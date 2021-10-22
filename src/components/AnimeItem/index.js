import React from 'react';
import { Wrapper, Image, Text } from '../AnimeItem/AnimeItem.styles';

const AnimeItem = ({ animeInfo }) => {
  return (
    <Wrapper className='flex flex-row bg-gray-50 rounded-xl'>
      <Image image={animeInfo.coverImage.medium} className='rounded-l-xl' />
      <Text className='px-5 py-9 font-medium text-lg'>
        {animeInfo.title.romaji}
      </Text>
    </Wrapper>
  );
};

export default AnimeItem;
