import styled from 'styled-components';

export const Banner = styled.div`
  background-image: url(${({ image }) => image});
  background-position: center 35%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 400px;
`;

export const Information = styled.div`
  @media screen and (max-width: 640px) {
    margin-top: 2rem;
  }
`;

export const Thumbnail = styled.div`
  margin-top: -100px;
`;
