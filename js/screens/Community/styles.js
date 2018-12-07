import { StyleSheet } from "react-native";
import globalStyles from "../../config/styles";
export default (style = StyleSheet.create({
  linearGradient: {
    flex: 1,
    backgroundColor: "#000000"
  },

  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  dimContainer: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#000000",
    opacity: 0.42
  },

  categories: {
    backgroundColor: "#FFFFFF",
    width: 250,
    padding: 25,
    borderRadius: 15
  },

  categoryText: {
    ...globalStyles.greyTextColor,
    fontSize: 16,
    textTransform: "uppercase",
    letterSpacing: 4,
    lineHeight: 20,
    textAlign: "center"
  }
}));
