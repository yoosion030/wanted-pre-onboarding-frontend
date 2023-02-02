import { Todo, Input, Button } from "components";
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
    try {
      const { data } = await instance.get("/todos");
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAndUpdateTodos();
  }, []);

  const createTodo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      await instance.post("/todos", {
        todo,
      });
      getAndUpdateTodos();

      setTodo("");
    } catch (error) {
      console.log(error);
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
          <Button
            type="submit"
            data-testid="new-todo-add-button"
            onClick={createTodo}
          >
            추가
          </Button>
        </S.InputSection>
        {todos?.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            getAndUpdateTodos={getAndUpdateTodos}
          />
        ))}
      </S.TodoForm>
    </S.Container>
  );
};

export default TodoContainer;
