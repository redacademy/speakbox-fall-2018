import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/styles";
const { height, width } = Dimensions.get("window");

export default (style = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%"
  },
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
    textTransform: "uppercase"
  },
  barGraph: {
    width,
    height: height / 2
  },
  checkinButton: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    height: height / 20,
    width: width / 2.5,
    alignItems: "center",
    justifyContent: "center"
  },
  checkin: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    color: "white",
    textTransform: "uppercase"
  },
  gradient: {
    height: "100%",
    width: "100%",
    borderRadius: 20
  }
}));
