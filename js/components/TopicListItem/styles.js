import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/styles";
export default (style = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    height: Dimensions.get("window").height / 6,
    margin: 10,
    borderRadius: 10,
    opacity: 0.9,
    padding: 5,
    justifyContent: "space-evenly"
  },

  date: {
    flex: 1,
    ...globalStyles.greyTextColor
  },

  text: {
    ...globalStyles.greyTextColor
  },
  commentCount: {
    ...globalStyles.greyTextColor,
    color: "#61C0BF",
    fontSize: 12
  }
}));
