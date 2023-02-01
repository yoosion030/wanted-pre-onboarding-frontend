import * as S from "./style";

const SigninContainer = () => {
  return (
    <S.Conainer>
      <S.SigninForm>
        <div>
          <S.Label>이메일</S.Label>
          <S.EmailInput data-testid="email-input" />
          <S.Label>비밀번호</S.Label>
          <S.PasswordInput data-testid="password-input" />
        </div>
        <S.SubmitButton data-testid="signup-button">로그인</S.SubmitButton>
      </S.SigninForm>
    </S.Conainer>
  );
};

export default SigninContainer;
