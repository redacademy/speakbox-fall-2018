import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  loadingContainer: {
    height,
    width,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    resizeMode: "contain",
    position: "absolute",
    top: height / 3,
    left: width / 3,
    width: width / 3,
    height: height / 7,
    tintColor: "#5D5D5D"
  }
});

export default styles;
