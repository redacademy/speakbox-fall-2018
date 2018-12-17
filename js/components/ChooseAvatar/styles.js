import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/styles";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  modalContentContainer: {
    flex: 1,
    position: "absolute",
    height: height / 1.75,
    top: height / 4.5,
    width: width / 1.2,
    alignSelf: "center",
    justifyContent: "space-around"
  },
  chooseAvatarTitle: {
    paddingTop: 30,
    alignSelf: "center",
    fontFamily: globalStyles.titleFont.fontFamily,
    fontSize: globalStyles.titleFont.fontSize,
    ...globalStyles.greyTextColor,
    letterSpacing: globalStyles.titleFont.letterSpacing,
    textTransform: "uppercase"
  },
  avatarContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  mainTouch: {
    borderWidth: 5,
    borderColor: "#EAE3D9",
    borderRadius: 80
  },
  touch: {
    borderWidth: 1,
    borderColor: "#64BEBD",
    borderRadius: 50
  },
  avatar: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    resizeMode: "contain",
    width: width / 5,
    height: height / 9
  },
  avatarSelected: {
    marginLeft: 9,
    marginRight: 9,
    marginTop: 4,
    marginBottom: 4,
    resizeMode: "contain",
    width: width / 5,
    height: height / 9
  },
  editAvatar: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 15,
    resizeMode: "contain",
    width: width / 4,
    height: height / 8
  },
  cameraIcon: {
    resizeMode: "contain",
    width: width / 12,
    height: height/ 25,
    position: "absolute",
    bottom: 0,
    right: 0,
    tintColor: "#fff",
    backgroundColor: "#FDCCC8",
    borderRadius: 10
  },
  saveButton: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    height: height / 20,
    width: width / 2.5,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center"
  },
  save: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    color: "white",
    textTransform: "uppercase"
  }
});
export default styles;
