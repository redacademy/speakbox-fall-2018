import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/styles";
export default (style = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    padding: 10
  },

  dimContainer: {
    flex: 1,
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "#A3A3A3",
    opacity: 0.42
  },

  title: {
    fontSize: globalStyles.titleFont.fontSize,
    ...globalStyles.greyTextColor,
    letterSpacing: 2,
    textTransform: "uppercase",
    textAlign: "center"
  },

  crisisButton: {
    padding: 8,
    borderRadius: 20,
    alignSelf: "center"
  },
  crisisText: {
    textTransform: "uppercase",
    textAlign: "center"
  }
}));
