import React from 'react';

const Button = ({ text, callback }) => (
  <button
    type='button'
    onClick={callback}
    className='bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
    {text}
  </button>
);

export default Button;
