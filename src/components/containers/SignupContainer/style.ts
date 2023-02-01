import styled from "@emotion/styled";
import { palette } from "shared/Palette";

export const Conainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f2f4f6;
`;

export const SigninForm = styled.form`
  width: 800px;
  height: 100vh;
  border-right: 1px solid #d1d6db;
  border-left: 1px solid #d1d6db;
  background-color: #fff;
  padding: 200px 100px;
  display: flex;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Label = styled.p`
  color: color;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 100%;
  display: block;
  height: 60px;
  font-size: 16px;
  margin-bottom: 36px;
  outline: none;
  border: none;
  border-bottom: 1.5px solid #d1d6db;

  &::placeholder {
    color: #808080;
  }
  :focus {
    border-color: ${palette.colors.main};
    outline: none;
  }

  // 크롬 최적화
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #fff inset !important;
    -webkit-text-fill-color: #000;
  }
`;

export const PasswordInput = styled(Input)``;
export const EmailInput = styled(Input)``;

export const SubmitButton = styled.button`
  height: 60px;
  background-color: ${palette.colors.main};
  color: #ffffff;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
  }
`;
