import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  header: {
    marginTop: 32,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  labelWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  labelCreated: {
    fontFamily: "Inter_700Bold",
    fontSize: 14,
    color: "#1E6F9F",
  },
  labelDone: {
    fontFamily: "Inter_700Bold",
    fontSize: 14,
    color: "#5E60CE",
  },
  counter: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333333",
    borderRadius: 999,
  },
  counterText: {
    fontFamily: "Inter_700Bold",
    fontSize: 12,
    color: "#D9D9D9",
  },
  emptyList: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 48,
    gap: 8,

    height: "100%",
    borderTopColor: "#333333",
    borderTopWidth: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  emptyListTextBold: {
    marginTop: 8,
    fontFamily: "Inter_700Bold",
    fontSize: 14,
    color: "#808080",
  },
  emptyListTextRegular: {
    fontFamily: "Inter_400Regular",
    fontSize: 14,
    color: "#808080",
  },
});

export default styles;
