import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  header: {
    flex: 1,
    borderBottomColor: "white"
  },
  profileIcon: {
    width: Dimensions.get("window").width / 9,
    height: Dimensions.get("window").height / 9,
    resizeMode: "center",
    alignSelf: "flex-end",
    marginRight: 10
  },
  navIcons: {
    width: Dimensions.get("window").width / 13,
    height: Dimensions.get("window").height / 13,
    resizeMode: "center"
  }
});

export default styles;
