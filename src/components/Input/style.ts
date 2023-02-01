import styled from "@emotion/styled";
import { palette } from "shared/Palette";

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
