import { Input, Button, AuthForm } from "components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "shared/instance";

const SigninContainer = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(true);
  const [passwordError, setPasswordError] = useState<boolean>(true);

  const handleSignin = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const { data } = await instance.post("/auth/signin", { email, password });
      localStorage.setItem("access_token", data.access_token);

      instance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${data.access_token}`;

      navigate("/todo");
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
        data-testid="signin-button"
        disabled={emailError || passwordError}
        onClick={handleSignin}
      >
        로그인
      </Button>
    </AuthForm>
  );
};

export default SigninContainer;
