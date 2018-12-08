import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/styles";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  loadingContainer: {
    height,
    width,
    alignItems: "center",
    justifyContent: "space-around"
  },
  loadingTitle: {
    fontFamily: globalStyles.titleFont.fontFamily,
    fontSize: 30,
    ...globalStyles.greyTextColor,
    letterSpacing: globalStyles.titleFont.letterSpacing
  },
  logo: {
    width: 100,
    height: 100,
    tintColor: "#5D5D5D"
  }
});

export default styles;
