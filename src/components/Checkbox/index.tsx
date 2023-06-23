import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import styles from "./styles";

// import { Container } from './styles';
interface CheckboxProps {
  value: boolean;
  disabled?: boolean;
  onValueChange: (value: boolean) => void;
}
const Checkbox: React.FC<CheckboxProps> = ({
  value,
  disabled,
  onValueChange,
}) => {
  return (
    <TouchableOpacity
      style={
        value ? [styles.container, styles.container_hover] : styles.container
      }
      onPress={() => onValueChange(!value)}
    >
      {value && <MaterialIcons name="check" size={16} color="#f2f2f2" />}
    </TouchableOpacity>
  );
};

export default Checkbox;
