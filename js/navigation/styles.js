import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  header: {
    flex: 1,
    borderBottomColor: "white"
  },
  profileIcon: {
    width: Dimensions.get("window").width / 8,
    height: Dimensions.get("window").height / 8,
    resizeMode: "center",
    alignSelf: "flex-end",
    marginRight: 10
  },
  navIcons: {
    width: Dimensions.get("window").width / 12,
    height: Dimensions.get("window").height / 12,
    resizeMode: "center"
  }
});

export default styles;
