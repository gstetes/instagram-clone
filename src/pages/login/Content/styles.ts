import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-top: 3rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  border: 1px solid #999;
  background: #fff;
  align-items: center;

  .recovery {
    font-size: 12px;
    margin-top: 1.5rem;
    color: #385185;
    cursor: pointer;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const InputContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: .3rem;
  flex-direction: column;
  width: 100%;

  button {
    margin-top: .5rem;
  }
`;

export const Separator = styled.div`
  border-top: 1px solid #AAA;
  width: 100%;
  height: 1px;
`;

export const FacebookContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #385185;
  gap: .5rem;

  a {
    font-size: 14px;
    cursor: pointer;
  }
`;

export const RegisterContainer = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: 1px solid #999;
  margin-top: .5rem;
  padding-left: 2rem;
  padding-right: 2rem;

  font-size: 14px;

  span {
    color: #444;

    a {
      color: #3696F6; 
      font-weight: bold;
    }
  }
`;

export const GetApplicationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-top: .5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  gap: 1rem;

  font-size: 14px;

  span {
    color: #555;
    font-size: 16px;
  }
`;