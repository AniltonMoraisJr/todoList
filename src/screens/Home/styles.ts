import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#1A1A1A",
  },

  header: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    height: 175,
    backgroundColor: "#0d0d0d",
  },
  inputWrapper: {
    position: "absolute",
    width: "100%",
    paddingHorizontal: 24,
    bottom: -20,
    backgroundColor: "transparent",
    height: 54,
  },
});

export default styles;
