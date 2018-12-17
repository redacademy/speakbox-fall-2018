import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/styles";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  modal: {
    flex: 1
  },
  transparent: {
    flex: 1,
    backgroundColor: "transparent"
  },

  input: {
    flex: 2,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    opacity: 0.9,
    padding: 10
  },

  inputName: {
    fontSize: 12,
    lineHeight: 14
  }
});

export default styles;
