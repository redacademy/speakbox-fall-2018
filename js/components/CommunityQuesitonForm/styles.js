import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/styles";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  formView: {
    flex: 1,
    justifyContent: "space-between"
  },

  formLabel: {
    padding: 4,
    ...globalStyles.greyTextColor,
    fontSize: globalStyles.textFont.fontSize
  },

  questionInput: {
    backgroundColor: "#FFFFFF",
    height: height / 8,
    borderRadius: 10,
    opacity: 0.9,
    padding: 5
  },

  questionContext: {
    backgroundColor: "#FFFFFF",
    height: height / 7,
    borderRadius: 10,
    opacity: 0.9,
    padding: 5
  },

  submitButton: {
    marginTop: 10,
    alignSelf: "center",
    borderRadius: 20,
    width: width / 3
  },

  picker: {
    height: height / 6,

    backgroundColor: "#FFFFFF",
    borderRadius: 10
  },

  pickerItems: {
    height: height / 6,
    fontSize: 13,
    ...globalStyles.greyTextColor
  },

  switchContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },

  switchLabel: {
    fontSize: 13,
    ...globalStyles.greyTextColor,
    lineHeight: 18
  }
});

export default styles;
