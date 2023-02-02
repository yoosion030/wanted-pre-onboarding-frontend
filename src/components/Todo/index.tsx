import Button from "components/Button";
import Input from "components/Input";
import { useState } from "react";
import instance from "shared/instance";
import { TodoType } from "types/Todo";
import * as S from "./style";

interface TodoProps {
  getAndUpdateTodos: () => void;
  todo: TodoType;
}

const Todo = ({ getAndUpdateTodos, todo }: TodoProps) => {
  const [updatedContent, setUpdatedContent] = useState<string>(todo.todo);
  const [update, setUpdate] = useState<boolean>(false);
  const [isCompleted, setIsCompleted] = useState<boolean>(todo.isCompleted);

  const deleteTodo = async (id: number) => {
    try {
      await instance.delete(`/todos/${id}`);
      getAndUpdateTodos();
    } catch (e) {
      console.log(e);
    }
  };

  const updateTodo = async (todo: TodoType) => {
    try {
      await instance.put(`/todos/${todo.id}`, {
        id: todo.id,
        todo: updatedContent,
        isCompleted,
        userId: todo.userId,
      });
      getAndUpdateTodos();
      setUpdate(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={todo.isCompleted}
        onChange={() => setIsCompleted(!isCompleted)}
      />

      {update ? (
        <>
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUpdatedContent(e.target.value)
            }
            defaultValue={todo.todo}
          />

          <Button
            type="button"
            data-testid="modify-input"
            onClick={() => updateTodo(todo)}
          >
            제출
          </Button>
          <Button type="button" onClick={() => setUpdate(false)}>
            취소
          </Button>
        </>
      ) : (
        <>
          <span>{todo.todo}</span>
          <Button
            type="button"
            data-testid="modify-input"
            onClick={() => setUpdate(true)}
          >
            수정
          </Button>
          <Button type="button" onClick={() => deleteTodo(todo.id)}>
            삭제
          </Button>
        </>
      )}
    </div>
  );
};

export default Todo;
