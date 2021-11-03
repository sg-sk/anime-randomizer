import styled from 'styled-components';

export const Image = styled.div`
  background-image: url(${({ image }) => image});
  background-position: center 35%;
  background-repeat: no-repeat;
  height: 100px;
  width: 75px;
  margin: 0;
`;

export const Text = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
