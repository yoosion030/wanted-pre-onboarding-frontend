import styled from "@emotion/styled";
import { palette } from "shared/Palette";

export const Button = styled.button`
  display: inline-block;
  height: 60px;
  background-color: ${palette.colors.main};
  color: #ffffff;
  border: none;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
  }
`;
