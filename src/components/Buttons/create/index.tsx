import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { ButtonsProps } from "..";
import styles from "./styles";

// import { Container } from './styles';

interface ButtonCreateProps extends Omit<ButtonsProps, "buttonType"> {}

const ButtonCreate: React.FC<ButtonCreateProps> = (props) => {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      <MaterialIcons name="add-circle-outline" color={"#f2f2f2"} size={24} />
    </TouchableOpacity>
  );
};

export default ButtonCreate;
