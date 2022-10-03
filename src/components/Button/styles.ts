import styled from 'styled-components';

export const ButtonCustom = styled.button`
  border: none;
  padding: .4rem;
  border-radius: 3px;
  color: #fff;
  background: #3696F6;
  cursor: pointer;
  font-weight: bold;

  &:disabled {
    background: #B8DEFC;
  };
`;