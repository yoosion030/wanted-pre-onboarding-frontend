import axios from "axios";
import { Input, Button, AuthForm } from "components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  }, [email]);

  useEffect(() => {
    if (password.length >= 8) setPasswordError(false);
    else setPasswordError(true);
  }, [password]);

  return (
    <AuthForm>
      <div>
        <p>이메일</p>
        <Input
          data-testid="email-input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <p>비밀번호</p>
        <Input
          data-testid="password-input"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
          type="password"
        />
      </div>
      <Button
        data-testid="signup-button"
        disabled={emailError || passwordError}
        onClick={handleSignup}
      >
        회원가입
      </Button>
    </AuthForm>
  );
};

export default SignupContainer;
