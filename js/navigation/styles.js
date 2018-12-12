import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  header: {
    borderBottomColor: "transparent",
    backgroundColor: "transparent",
  },
  profileIcon: {
    alignSelf: "flex-end",
    width: width / 8,
    height: height / 8,
    resizeMode: "center",
    position: "absolute",
    top: -40,
  },
  navIcons: {
    width: width / 12,
    height: height / 12,
    resizeMode: "center"
  }
});

export default styles;
