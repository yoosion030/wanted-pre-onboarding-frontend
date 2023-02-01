import { SigninContainer } from "components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) navigate("/todo");
  }, []);

  return (
    <>
      <SigninContainer />
    </>
  );
};

export default SigninPage;
