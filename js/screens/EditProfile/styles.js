import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/styles";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  editProfileContainer: {
    height,
    width,
    alignItems: "center",
    justifyContent: "space-around"
  },
});

export default styles
