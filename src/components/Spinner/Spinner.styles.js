import styled from 'styled-components';

export const Spinner = styled.div`
  order: 5px solid #eee;
  border-top: 5px solid #353535;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 0.8s linear infinite;
  margin: 500px auto;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
