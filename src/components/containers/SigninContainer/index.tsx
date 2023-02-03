import { Input, Button, Layout } from "components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import instance from "shared/instance";
import { css } from "@emotion/react";

const SigninContainer = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(true);
  const [passwordError, setPasswordError] = useState<boolean>(true);

  const handleSignin = async () => {
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
        data-testid="signin-button"
        disabled={emailError || passwordError}
        onClick={handleSignin}
        style={{ width: "100%" }}
      >
        로그인
      </Button>
    </Layout>
  );
};

export default SigninContainer;
