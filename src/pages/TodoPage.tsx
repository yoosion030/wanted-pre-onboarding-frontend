import { TodoContainer } from "components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TodoPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) navigate("/signin");
  }, []);
  return <TodoContainer />;
};

export default TodoPage;
