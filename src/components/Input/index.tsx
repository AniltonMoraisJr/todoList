import React, { useState, useEffect } from "react";
import { TextInput, TextInputProps } from "react-native";
import styles from "./styles";

// import { Container } from './styles';

interface InputProps extends TextInputProps {}

const Input: React.FC<InputProps> = ({ value, ...rest }) => {
  const [isFilled, setIsFilled] = useState(false);
  useEffect(() => {
    if (value) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, [value]);
  return (
    <TextInput
      style={isFilled ? [styles.input, styles.inputFilled] : styles.input}
      value={value}
      placeholderTextColor={"#808080"}
      {...rest}
    />
  );
};

export default Input;
