import React from 'react';
import { Title, Content } from './Grid.styles';

const Grid = ({ header, children }) => (
  <div>
    <Title className='px-8 pt-8'>{header}</Title>
    <Content className='p-8 flex flex-row flex-wrap gap-4'>{children}</Content>
  </div>
);

export default Grid;
