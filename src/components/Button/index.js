import React from 'react';

import { Content } from './Button.styles';

const Button = ({ callback, image }) => (
  <Content
    type='button'
    onClick={callback}
    className='fixed bottom-20 right-5 md:right-12 lg:right-12 xl:right-32 rounded-lg border-black border-2 bg-gray-100 transform hover:scale-110'
    image={image}
  />
);

export default Button;
