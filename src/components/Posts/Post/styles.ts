import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 1px solid #CCC;
  border-radius: 5px;

  display: flex;
  flex-direction: column;

  svg {
    cursor: pointer;
  }
`;

export const PostHeader = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }

  div {
    display: flex;
    gap: 1rem;

    span {
      cursor: pointer;
      font-weight: bold;
    }
  }
`;

export const ImageFooter = styled.div`
  display: flex;
  padding: .5rem;
  justify-content: space-between;

  div {
    display: flex;
    gap: 1rem;
  }
`;

export const LikeDescription = styled.span`
  margin-left: .5rem;
  margin-top: .5rem;
  font-weight: bold;
  margin-bottom: .5rem;
`;

export const PostDescription = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  p {
    margin-left: .5rem;
    margin-right: .5rem;

    color: #555;
    
    strong {
      color: #000;
    };
  }
`;

export const Comments = styled.p`
  margin-top: .5rem;
  color: #999;
  cursor: pointer;
  font-size: 14px;
`;

export const DaysAgo = styled.p`
  margin-top: .5rem;
  font-size: 10px;
  color: #999;
`;

export const CommnetContainer = styled.div`
  border-top: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: .5rem;

    input {
      border: none;
      width: 100%;
      outline: none;

      &::placeholder {
        color: #888;
      }
    };
  }

  span {
    color: #3696F6;
  }
`;