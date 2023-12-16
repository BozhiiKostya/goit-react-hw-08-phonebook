import { Form, ErrorMessage, Field } from 'formik';

const { styled } = require('styled-components');

export const StyledForm = styled(Form)`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

export const StyledLabel = styled.label`
  font-size: 20px;
`;
export const StyledError = styled(ErrorMessage)`
  color: red;
`;
export const StyledField = styled(Field)`
  width: 250px;
  height: 35px;
  box-sizing: border-box;
  padding: 6px 12px;
  border-radius: 3px;
  font-size: 18px;
`;
export const StyledButton = styled.button`
  height: 35px;
  box-sizing: border-box;
  padding: 6px 30px;
  border-radius: 3px;
  font-size: 18px;
`;
