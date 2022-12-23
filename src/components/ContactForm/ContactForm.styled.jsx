import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  padding: 20px;
  height: 100px;
  width: 300px;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-radius: 5px;
`;

export const FormLabel = styled.label`
  color: black;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const FormInput = styled.input`
  border: 0px solid transparent;
`;

export const FormButton = styled.button`
  margin-top: 15px;
  width: 100px;
  height: 25px;
  background-color: rgba(120, 116, 118, 0.8);
  border: 1px solid transparent;
  border-radius: 5px;
  &:hover,
  &:focus {
    color: #fff;
    border-color: #fff;
  }
`;
