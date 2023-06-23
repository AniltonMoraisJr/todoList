import React, { createContext, useState, useCallback } from "react";

// import { Container } from './styles';

type TodoList = {
  id: number;
  description: string;
  isDone: boolean;
};

interface TodoListContextState {
  todoList: TodoList[];
  createNewTask: (taskName: string) => void;
  switchTaskIsDone: (id: number) => void;
  removeTask: (id: number) => void;
}

export const TodoListContext = createContext<TodoListContextState>({
  todoList: [],
  createNewTask: (taskName: string) => {},
  switchTaskIsDone: (id: number) => {},
  removeTask: (id: number) => {},
});

interface TodoListContextProviderProps {
  children: React.ReactNode;
}

export const TodoListContextProvider: React.FC<
  TodoListContextProviderProps
> = ({ children }) => {
  const [todoList, setTodoList] = useState<TodoList[]>([]);
  const createNewTask = useCallback((taskName: string) => {
    const newTask: TodoList = {
      id: new Date().getTime(),
      description: taskName,
      isDone: false,
    };
    setTodoList((prevState) => [...prevState, newTask]);
  }, []);
  const switchTaskIsDone = useCallback((id: number) => {}, []);
  const removeTask = useCallback((id: number) => {}, []);
  return (
    <TodoListContext.Provider
      value={{ todoList, createNewTask, switchTaskIsDone, removeTask }}
    >
      {children}
    </TodoListContext.Provider>
  );
};
