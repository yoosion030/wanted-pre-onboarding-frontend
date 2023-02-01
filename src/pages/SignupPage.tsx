import { SignupContainer } from "components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) navigate("/todo");
  }, []);
  return <SignupContainer />;
};

export default SignupPage;
