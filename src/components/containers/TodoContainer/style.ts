import styled from "@emotion/styled";
import { palette } from "shared/Palette";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f2f4f6;
`;

export const TodoForm = styled.form`
  width: 800px;
  height: 100vh;
  border-right: 1px solid #d1d6db;
  border-left: 1px solid #d1d6db;
  background-color: #fff;
  padding: 200px 100px;
`;

export const Label = styled.p`
  color: ${palette.colors.main};
  font-weight: bold;
  margin-bottom: 10px;
`;

export const InputSection = styled.div`
  display: flex;
`;

export const Todo = styled.div`
  width: 100%;
`;
