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
  const [todo, setTodo] = useState<string>();

  const getAndUpdateTodos = async () => {
    const { data } = await instance.get("/todos");
    setTodos(data);
  };

  useEffect(() => {
    getAndUpdateTodos();
  }, []);
  console.log(todos);

  const createTodo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      const { data } = await instance.post("/todos", {
        todo,
      });
      getAndUpdateTodos();
      console.log(data);
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
          />
          <Button data-testid="new-todo-add-button" onClick={createTodo}>
            추가
          </Button>
        </S.InputSection>
        <>
          {todos?.map((todo) => (
            <S.Todo key={todo.id}>
              <input type="checkbox" checked={todo.isCompleted} />
              <span>{todo.todo}</span>
            </S.Todo>
          ))}
        </>
      </S.TodoForm>
    </S.Container>
  );
};

export default TodoContainer;
