import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/styles";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  formContainer: {
    alignItems: 'center'
  },
  formTitle: {
    marginBottom: 10,
    marginTop: 10,
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    color: "#5D5D5D"
  },
  formInput: {
    width: width / 1.3,
    backgroundColor: "#FFF",
    padding: 15,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
  },
  confirmButton: {
    marginTop: 30,
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    height: height / 20,
    width: width / 2.5,
    alignItems: "center",
    justifyContent: "center"
  },
  confirm: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    color: "white",
    textTransform: 'uppercase'
  }
});
export default styles;
