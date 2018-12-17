import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/styles";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  backgroundImage: {
    height: "100%",
    width: "100%"
  },
  checkinContainer: {
    justifyContent: "space-around"
  },
  addEmotionsContainer: {
    marginBottom: 20
  },
  slideContainer: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  formContainer: {
    marginBottom: 30
  },
  mainCheckin: {
    marginTop: 20,
    paddingHorizontal: 15,
    width,
    justifyContent: "space-around"
  },
  checkinFace: {
    resizeMode: "contain",
    height: height / 8,
    width: width / 4,
    alignSelf: "center"
  },
  mainCheckinTitle: {
    fontFamily: globalStyles.titleFont.fontFamily,
    fontSize: globalStyles.titleFont.fontSize,
    ...globalStyles.greyTextColor,
    letterSpacing: globalStyles.titleFont.letterSpacing,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20
  },
  checkinTitle: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.titleFont.fontSize,
    ...globalStyles.greyTextColor,
    alignSelf: "center"
  },
  arrowUp: {
    resizeMode: "contain",
    height: height / 20,
    width: width / 15,
    position: "absolute",
    bottom: -20,
    left: width / 2.2,
    transform: [{ rotateX: "180deg" }],
    tintColor: globalStyles.greyTextColor.color
  },
  arrowDown: {
    resizeMode: "contain",
    height: height / 20,
    width: width / 15,
    position: "absolute",
    bottom: -20,
    left: width / 2.2,
    tintColor: globalStyles.greyTextColor.color
  },
  rating: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width,
    paddingLeft: 10,
    paddingRight: 25
  },
  noHighlight: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    color: globalStyles.greyTextColor.color
  },
  highlight: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: 16,
    color: "#000"
  },
  submitButton: {
    marginTop: 30,
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    height: height / 20,
    width: width / 2.5,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  submit: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    color: "white",
    textTransform: "uppercase"
  }
});
export default styles;
