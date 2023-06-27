import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  conteiner: {
    borderRadius: 8,
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 12,
    paddingRight: 8,
    paddingVertical: 12,

    backgroundColor: "#262626",

    marginBottom: 8,
  },
  descriptionText: {
    flex: 1,

    fontFamily: "Inter_400Regular",
    fontSize: 14,
    textAlign: "left",
    color: "#f2f2f2",
  },

  descriptionTextDone: {
    color: "#808080",
    textDecorationLine: "line-through",
  },
});

export default styles;
