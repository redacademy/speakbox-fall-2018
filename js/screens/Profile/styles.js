import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/styles";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  profileContainer: {
    height,
    width,
    alignItems: "center",
    justifyContent: "space-around"
  },
  accountName: {
    // fontFamily: globalStyles.titleFont.fontFamily,
    fontSize: globalStyles.titleFont.fontSize,
    ...globalStyles.greyTextColor,
    letterSpacing: globalStyles.titleFont.letterSpacing
  },
  editAccountButton: {
    // fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    color: "white",
    backgroundColor: "#FFB5BA",
    borderRadius: 20,
    height: 37,
    width: 168,
    alignItems: "center",
    justifyContent: "center"
  },
  editAccount: {
    // fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    color: "white"
  },
  plantContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  plantName: {
    marginBottom: 5,
    fontSize: globalStyles.textFont.fontSize,
    ...globalStyles.greyTextColor
  },
  plant: {
    height: height / 6,
    width: width / 7,
    resizeMode: "center"
  },
  plantDescription: {
    // fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    ...globalStyles.greyTextColor,
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10
  },
  logoutButton: {
    // fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    color: "white",
    backgroundColor: "#6BCCFD",
    borderRadius: 20,
    height: 37,
    width: 168,
    alignItems: "center",
    justifyContent: "center"
  },
  logout: {
    // fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    color: "white"
  }
});

export default styles;
