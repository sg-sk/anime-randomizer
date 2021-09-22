import React from 'react';
import { Title, Content } from './Grid.styles';

const Grid = ({ header, children }) => (
  <div>
    <Title className='pt-8 pb-4'>{header}</Title>
    <Content className='flex flex-row flex-wrap gap-6'>{children}</Content>
  </div>
);

export default Grid;
