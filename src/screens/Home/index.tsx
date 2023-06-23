import React, { useState, useCallback } from "react";

import { View, Text, Image } from "react-native";
import styles from "./styles";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import Buttons from "../../components/Buttons";
import { TodoListContextProvider } from "../../contexts/TodoList/index.context";
import TodoList from "../../components/TodoList";
import useTodoListContext from "../../hooks/useTodoListContext";

// import { Container } from './styles';

const HomeLayout: React.FC = () => {
  const [newTask, setNewTask] = useState<string | undefined>();
  const { createNewTask } = useTodoListContext();

  const handleCreate = useCallback(() => {
    if (newTask) {
      createNewTask(newTask);
      setNewTask(undefined);
    }
  }, [newTask]);

  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logo.png")}
          alt="Logo Todo List"
        />
        <View style={styles.inputWrapper}>
          <Input
            width={270}
            value={newTask}
            placeholder="Adicione uma nova tarefa"
            keyboardType="default"
            onChangeText={setNewTask}
          />
          <Buttons buttonType="create" onPress={handleCreate} />
        </View>
      </View>
      <TodoList />
    </View>
  );
};

const Home: React.FC = () => {
  return (
    <TodoListContextProvider>
      <HomeLayout />
    </TodoListContextProvider>
  );
};

export default Home;
