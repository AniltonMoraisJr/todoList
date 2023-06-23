import { useContext } from "react";
import { TodoListContext } from "../../contexts/TodoList/index.context";

const useTodoListContext = () => {
  const value = useContext(TodoListContext);

  return value;
};

export default useTodoListContext;
