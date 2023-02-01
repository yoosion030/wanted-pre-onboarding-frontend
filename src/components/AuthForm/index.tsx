import React from "react";
import * as S from "./style";

interface AuthFormProps {
  children: React.ReactNode;
}

const AuthForm = ({ children }: AuthFormProps) => {
  return (
    <S.Container>
      <S.AuthForm>{children}</S.AuthForm>;
    </S.Container>
  );
};

export default AuthForm;
