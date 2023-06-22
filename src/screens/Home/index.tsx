import React, { useState } from "react";

import { View, Text, Image } from "react-native";
import styles from "./styles";
import Input from "../../components/Input";

// import { Container } from './styles';

const Home: React.FC = () => {
  const [newTask, setNewTask] = useState<string | undefined>();
  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/logo.png")}
          alt="Logo Todo List"
        />
        <View style={styles.inputWrapper}>
          <Input
            value={newTask}
            placeholder="Adicione uma nova tarefa"
            onChangeText={setNewTask}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
