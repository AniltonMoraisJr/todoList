import React from "react";
import { Text, View } from "react-native";
import { TodoList } from "../../../contexts/TodoList/index.context";
import styles from "./styles";
import Checkbox from "../../Checkbox";
import useTodoListContext from "../../../hooks/useTodoListContext";
import ButtonDelete from "../../Buttons/delete";

type Props = {
  item: TodoList;
};

const TodoListItem: React.FC<Props> = ({ item }) => {
  const { switchTaskIsDone, removeTask } = useTodoListContext();
  return (
    <View style={styles.conteiner} key={item.id}>
      <Checkbox
        value={item.isDone}
        onValueChange={() => switchTaskIsDone(item.id)}
      />
      <Text
        style={
          item.isDone
            ? [styles.descriptionText, styles.descriptionTextDone]
            : styles.descriptionText
        }
      >
        {item.description}
      </Text>
      <ButtonDelete onPress={() => removeTask(item.id)} />
    </View>
  );
};

export default TodoListItem;
