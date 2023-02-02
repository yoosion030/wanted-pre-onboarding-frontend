import Button from "components/Button";
import Input from "components/Input";
import { useEffect, useState } from "react";
import instance from "shared/instance";
import * as S from "./style";

interface TodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const TodoContainer = () => {
  const [todos, setTodos] = useState<TodoType[]>();
  const [todo, setTodo] = useState<string>("");

  const getAndUpdateTodos = async () => {
    const { data } = await instance.get("/todos");
    setTodos(data);
  };

  useEffect(() => {
    getAndUpdateTodos();
  }, []);

  const createTodo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      const { data } = await instance.post("/todos", {
        todo,
      });
      getAndUpdateTodos();
      console.log(data);
      setTodo("");
    } catch (e) {
      console.log(e);
    }
  };

  const deleteTodo = async (id: number) => {
    try {
      await instance.delete(`/todos/${id}`);
      getAndUpdateTodos();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <S.Container>
      <S.TodoForm>
        <S.Label>할 일 입력</S.Label>
        <S.InputSection>
          <Input
            data-testid="new-todo-input"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTodo(e.target.value)
            }
            value={todo}
          />
          <Button data-testid="new-todo-add-button" onClick={createTodo}>
            추가
          </Button>
        </S.InputSection>
        <>
          {todos?.map((todo) => (
            <S.Todo key={todo.id}>
              <input type="checkbox" defaultChecked={todo.isCompleted} />
              <span>{todo.todo}</span>
              <button data-testid="modify-input">수정</button>
              <button type="button" onClick={(e) => deleteTodo(todo.id)}>
                삭제
              </button>
            </S.Todo>
          ))}
        </>
      </S.TodoForm>
    </S.Container>
  );
};

export default TodoContainer;
