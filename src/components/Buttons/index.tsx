import React from "react";
import { TouchableOpacityProps, View } from "react-native";
import ButtonCreate from "./create";

// import { Container } from './styles';

export interface ButtonsProps extends TouchableOpacityProps {
  buttonType: "create" | "delete";
}

const Buttons: React.FC<ButtonsProps> = ({ buttonType, ...rest }) => {
  switch (buttonType) {
    case "create":
      return <ButtonCreate {...rest} />;
    default:
      return null;
  }
};

export default Buttons;
