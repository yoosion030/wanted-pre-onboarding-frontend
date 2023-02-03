import React from "react";
import * as S from "./style";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Container>
      <S.Layout>{children}</S.Layout>
    </S.Container>
  );
};

export default Layout;
