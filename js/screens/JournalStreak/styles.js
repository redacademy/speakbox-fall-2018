import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  background: {
    width: width,
    height: height
  },
  awesome: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 50,
    color: "#606060"
  },
  flower: {
    resizeMode: "contain",
    height: height / 3,
    width: width / 3,
    alignSelf: "center"
  },
  message: {
    textAlign: "center",
    marginHorizontal: 15,
    fontSize: 14,
    color: "#606060"
  },
  streakSection: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
    alignSelf: "center"
  },
  streak: {
    fontSize: 25,
    width: width / 2.5,
    color: "#B0B0AD"
  },
  streakNumber: {
    fontSize: 50,
    marginHorizontal: 5,
    color: "#fff"
  },
  days: {
    fontSize: 30,
    alignSelf: "center",
    color: "#fff"
  },
  question: {
    textAlign: "center"
  },
  options: {
    marginVertical: 5
  },
  yesButton: {
    padding: 5,
    borderRadius: 25,
    width: width / 2.5,
    marginVertical: 5,
    alignSelf: "center"
  },
  yes: {
    textAlign: "center",
    color: "#fff"
  },
  noButton: {
    textAlign: "center",
    textDecorationLine: "underline",
    marginVertical: 5,
    color: "#B0B0AD"
  }
});
export default styles;
