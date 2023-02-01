import React from "react";
import * as S from "./style";

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ ...rest }) => {
  return <S.Button {...rest} />;
};

export default Button;
