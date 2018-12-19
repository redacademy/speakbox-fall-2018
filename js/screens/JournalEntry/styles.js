import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/styles";

const { height } = Dimensions.get("window");
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    height
  },

  container: {
    flexGrow: 1,
    alignItems: "center"
  },
  date: {
    ...globalStyles.greyTextColor,
    fontSize: 25,
    lineHeight: 31
  },
  dateContainer: {
    margin: 10
  },
  streak: {
    ...globalStyles.greyTextColor,
    fontSize: 16
  },
  streakContainer: {
    margin: 10
  },
  formContainer: {
    margin: 10
  }
});

export default styles;
