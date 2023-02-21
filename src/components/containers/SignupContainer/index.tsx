import { Input, Button, Layout } from "components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "shared/instance";

const SignupContainer = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(true);
  const [passwordError, setPasswordError] = useState<boolean>(true);

  const handleSignup = async () => {
    try {
      await instance.post("/auth/signup", { email, password });
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!email.includes("@")) setEmailError(true);
    else setEmailError(false);
  }, [email]);

  useEffect(() => {
    if (password.length >= 8) setPasswordError(false);
    else setPasswordError(true);
  }, [password]);

  return (
    <Layout>
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
        type="button"
        data-testid="signup-button"
        disabled={emailError || passwordError}
        onClick={handleSignup}
        style={{ width: "100%" }}
      >
        회원가입
      </Button>
    </Layout>
  );
};

export default SignupContainer;
