import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  text-align: center;
  padding: .1rem;

  border: 1px solid red;

  span {
    font-size: 14px;
  }

  img {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    cursor: pointer;
  };
`;