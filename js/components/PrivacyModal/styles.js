import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/styles";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "#DEDEDE",
    position: "absolute",
    height: height / 2,
    width: width / 1.5,
    top: height / 4,
    alignSelf: "center",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-evenly"
  },

  title: {
    fontSize: globalStyles.titleFont.fontSize,
    ...globalStyles.greyTextColor,
    textTransform: "uppercase",
    lineHeight: 33,
    textAlign: "center"
  },

  text: {
    lineHeight: 18,
    fontSize: 13,
    textAlign: "center",
    ...globalStyles.greyTextColor
  },
  buttonText: {
    lineHeight: 18,
    fontSize: 13,
    textAlign: "center",
    color: "white"
  },

  linearGradientButton: {
    borderRadius: 20,
    padding: 8,
    width: width / 4
  }
});

export default styles;
