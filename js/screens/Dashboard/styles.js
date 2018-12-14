import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/styles";
const { height, width } = Dimensions.get("window");

export default (style = StyleSheet.create({
 dashContainer: {
    height,
    width,
    alignItems: "center",
    justifyContent: "space-around"
  },
  dashTitle: {
    fontFamily: globalStyles.titleFont.fontFamily,
    fontSize: globalStyles.titleFont.fontSize,
    ...globalStyles.greyTextColor,
    letterSpacing: globalStyles.titleFont.letterSpacing,
    textTransform: 'uppercase',
  },
  barGraph: {
    width,
    height: height / 2,
  }
}));
