import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    height
  },

  formView: {
    flex: 1,
    alignItems: "center"
  },

  contentInput: {
    backgroundColor: "#FFFFFF",
    height: height / 3,
    width: width * 0.9,
    borderRadius: 10,
    opacity: 0.9,
    padding: 5,
    marginBottom: 10
  },

  tagsInput: {
    backgroundColor: "#FFFFFF",
    height: height / 13,
    width: width * 0.9,
    borderRadius: 10,
    opacity: 0.9,
    padding: 5
  },

  submitButton: {
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
    borderRadius: 20,
    width: width / 2.5,
    height: height / 16
  },

  submitText: {
    color: "#FFFFFF",
    textAlign: "center",
    textTransform: "uppercase"
  },

  notNowText: {
    color: "#B5ADAD",
    textTransform: "uppercase",
    lineHeight: 20,
    textDecorationLine: "underline"
  },

  cameraIconContainer: {
    width: width * 0.9,
    flexDirection: "row",
    alignItems: "center"
  },

  cameraIcon: {
    tintColor: "#FFFFFF",
    resizeMode: "contain",
    width: width * 0.1,
    height: height * 0.1,
    alignSelf: "flex-start"
  },
  images: {
    width: width / 9,
    height: height / 16,
    resizeMode: "center",
    marginLeft: 5
  },
  removeButton: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 1
  },
  removeIcon: {
    color: "pink"
  }
});

export default styles;
