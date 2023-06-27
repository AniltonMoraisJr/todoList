import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { ButtonsProps } from "..";
import styles from "./styles";

// import { Container } from './styles';

interface ButtonDeleteProps extends Omit<ButtonsProps, "buttonType"> {}

const ButtonDelete: React.FC<ButtonDeleteProps> = (props) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <MaterialIcons name="delete-outline" color={"#808080"} size={24} />
    </TouchableOpacity>
  );
};

export default ButtonDelete;
