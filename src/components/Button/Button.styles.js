import styled from 'styled-components';

export const Content = styled.button`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  height: 64px;
  width: 64px;
`;
