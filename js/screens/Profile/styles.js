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
  avatar: {
    resizeMode: 'contain',
    width: width / 4,
    height: height / 8,
  },
  accountName: {
    fontFamily: globalStyles.titleFont.fontFamily,
    fontSize: globalStyles.titleFont.fontSize,
    ...globalStyles.greyTextColor,
    letterSpacing: globalStyles.titleFont.letterSpacing
  },
  editAccountButton: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    height: height / 20,
    width: width / 2.5,
    alignItems: "center",
    justifyContent: "center"
  },
  editAccount: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    color: "white",
    textTransform: "uppercase"
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
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    ...globalStyles.greyTextColor,
    textAlign: "center",
    width: width / 1.5
  },
  logoutButton: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    height: height / 20,
    width: width / 2.5,
    alignItems: "center",
    justifyContent: "center"
  },
  logout: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    color: "white",
    textTransform: "uppercase"
  }
});

export default styles;
