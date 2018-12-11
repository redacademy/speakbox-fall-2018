import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/styles";
const styles = StyleSheet.create({
  formView: {
    flex: 1,
    justifyContent: "space-around"
  },
  formLabel: {
    padding: 4,
    ...globalStyles.greyTextColor,
    fontSize: globalStyles.textFont.fontSize
  },
  questionInput: {
    backgroundColor: "#FFFFFF",
    height: Dimensions.get("window").height / 8,

    borderRadius: 10,
    opacity: 0.9,
    padding: 5
  },
  questionContext: {
    backgroundColor: "#FFFFFF",
    height: Dimensions.get("window").height / 6,

    borderRadius: 10,
    opacity: 0.9,
    padding: 5
  },
  submitButton: {
    alignSelf: "center",
    borderRadius: 20,
    width: Dimensions.get("window").width / 3
  },

  picker: {
    flex: 1,
    justifyContent: "center"
  },

  pickerItems: {
    fontSize: 13,
    ...globalStyles.greyTextColor
  }
});

export default styles;
