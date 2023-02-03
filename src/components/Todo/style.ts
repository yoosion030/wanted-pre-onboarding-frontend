import styled from "@emotion/styled";
import { palette } from "shared/Palette";

export const TodoContainer = styled.li`
  list-style: none;

  background-color: #ffffff;
  height: 50px;
  margin-bottom: 40px;
`;

export const Todo = styled.label`
  display: flex;
  align-items: center;

  button {
    width: 50px;
    height: 40px;
  }

  justify-content: space-between;
  line-height: 40px;
`;

export const TodoInput = styled.input`
  width: 400px;
  height: 40px;
  font-size: 16px;
  border: 0;
  border-bottom: 1px solid #d1d6db;
  padding: 0;

  :focus {
    border-color: ${palette.colors.main};
    outline: none;
  }
`;

export const Content = styled.span`
  width: 400px;
`;
