import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

const SignupContainer = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<boolean>(true);
  const [passwordError, setPasswordError] = useState<boolean>(true);

  const handleSignup = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://pre-onboarding-selection-task.shop/auth/signup",
        { email, password }
      );
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (email.includes("@")) setEmailError(false);
    if (password.length >= 8) setPasswordError(false);
  }, [email, password]);

  return (
    <S.Conainer>
      <S.SigninForm>
        <div>
          <S.Label>이메일</S.Label>
          <S.EmailInput
            data-testid="email-input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.Label>비밀번호</S.Label>
          <S.PasswordInput
            data-testid="password-input"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <S.SubmitButton
          data-testid="signup-button"
          disabled={emailError || passwordError}
          onClick={handleSignup}
        >
          회원가입
        </S.SubmitButton>
      </S.SigninForm>
    </S.Conainer>
  );
};

export default SignupContainer;
