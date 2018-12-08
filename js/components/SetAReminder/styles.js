import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/styles";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  modalContentContainer: {
    flex: 1,
    position: "absolute",
    height: height / 2,
    top: height / 4,
    width: width / 1.3,
    alignSelf: "center",
    justifyContent: "space-around"
  },
  setAReminderTitle: {
    paddingTop: 30,
    alignSelf: "center",
    fontFamily: globalStyles.titleFont.fontFamily,
    fontSize: globalStyles.titleFont.fontSize,
    ...globalStyles.greyTextColor,
    letterSpacing: globalStyles.titleFont.letterSpacing,
    textTransform: "uppercase"
  },
  habit: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    ...globalStyles.greyTextColor,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 15,
    width: width / 1.5,
    color: "#5D5D5D"
  },
  setReminderButton: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    height: height / 20,
    width: width / 2.5,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center"
  },
  setReminder: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    color: "white",
    textTransform: "uppercase"
  },
  skip: {
    marginTop: 15,
    alignSelf: "center",
    textTransform: "uppercase",
    color: "#B5ADAD",
    textDecorationLine: "underline"
  },
  reminder: {
    marginBottom: 10,
    fontSize: globalStyles.textFont.fontSize,
    ...globalStyles.greyTextColor
  },
  reminderColumn: {
    backgroundColor: "white",
    width: width / 1.1,
    padding: 10,
    borderRadius: 5
  },
  reminderRow1: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    fontWeight: globalStyles.textFont.fontWeight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 5
  },
  reminderRow2: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    fontWeight: globalStyles.textFont.fontWeight,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 5
  }
});

export default styles;
