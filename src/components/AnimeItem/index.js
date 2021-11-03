import React from 'react';
import { concatenateAnilistId } from '../../helpers';
import { Image, Text } from '../AnimeItem/AnimeItem.styles';

const AnimeItem = ({ animeInfo }) => {
  return (
    <div>
      <a
        href={concatenateAnilistId(animeInfo.id)}
        target='_blank'
        rel='noopener noreferrer'
      >
        <div className='flex flex-row bg-gray-50 rounded-xl'>
          <Image image={animeInfo.coverImage.medium} className='rounded-l-xl' />
          <Text className='px-5 py-9 font-medium text-lg'>
            {animeInfo.title.romaji}
          </Text>
        </div>
      </a>
    </div>
  );
};

export default AnimeItem;
