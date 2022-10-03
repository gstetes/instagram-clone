import styled from 'styled-components';

export const InputField = styled.input`
  background: #fafafa;
  border: 1px solid #999;
  padding: .4rem;
  outline: none;

  &::placeholder {
    max-width: 90%;
    text-overflow: ellipsis;
  };
`;