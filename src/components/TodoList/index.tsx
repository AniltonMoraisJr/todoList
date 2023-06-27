import React, { useMemo } from "react";
import { FlatList, Image, Text, View } from "react-native";
import useTodoListContext from "../../hooks/useTodoListContext";
import styles from "./styles";
import TodoListItem from "./Item";

// import { Container } from './styles';

const TodoList: React.FC = () => {
  const { todoList } = useTodoListContext();
  const countCreated = useMemo(() => {
    return todoList.length;
  }, [todoList]);
  const countIsDone = useMemo(() => {
    return todoList.filter((todo) => todo.isDone).length;
  }, [todoList]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.labelWrapper}>
          <Text style={styles.labelCreated}>Criadas</Text>
          <View style={styles.counter}>
            <Text style={styles.counterText}>{countCreated}</Text>
          </View>
        </View>
        <View style={styles.labelWrapper}>
          <Text style={styles.labelDone}>Concluídas</Text>
          <View style={styles.counter}>
            <Text style={styles.counterText}>{countIsDone}</Text>
          </View>
        </View>
      </View>
      <FlatList
        style={{ flex: 1 }}
        data={todoList}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={
          <View style={styles.emptyList}>
            <Image
              source={require("../../assets/images/clipboard.png")}
              alt="Clipboard"
            />
            <Text style={styles.emptyListTextBold}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.emptyListTextRegular}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        }
        renderItem={({ item }) => <TodoListItem item={item} />}
      />
    </View>
  );
};

export default TodoList;
