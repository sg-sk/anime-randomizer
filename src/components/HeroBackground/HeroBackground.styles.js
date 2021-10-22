import styled from 'styled-components';

export const Image = styled.div`
  background-image: url(${({ image }) => image});
  background-position: center 35%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
`;
