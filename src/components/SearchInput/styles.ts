import styled from 'styled-components';

export const Container = styled.div`
  background: #EEE;
  padding: .5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: .5rem;

  input {
    background: transparent;
    border: none;
    outline: none;
    font-size: 16px;

    &::placeholder {
      color: #888;
    };
  };
`;