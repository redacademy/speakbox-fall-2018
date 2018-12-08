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
<<<<<<< HEAD
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
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
    resizeMode: "contain",
    width: width / 4,
    height: height / 8
  },
  cameraIcon: {
    resizeMode: "contain",
    width: 40,
    height: 40,
    position: "absolute",
    bottom: -5,
    right: -10,
    tintColor: "#fff",
    backgroundColor: "#FDCCC8",
    borderRadius: 20
=======
    height: height / 4,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10
  },
  avatar: {
    resizeMode: "center",
    width: width / 4,
    height: height / 8,
    marginTop: 15,
    backgroundColor: "#FFF",
    borderRadius: 10
  },
  avatarSelected: {
    resizeMode: "center",
    width: width / 4,
    height: height / 8,
    marginTop: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#64BEBD"
>>>>>>> add Loading Component with animation
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
