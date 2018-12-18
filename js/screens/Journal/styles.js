import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    justifyContent: "flex-start"
  },
  body: {
    flex: 1
  },
  background: {
    width: width,
    height: height
  },
  title: {
    textAlign: "center",
    fontSize: 30
  },
  header: {
    flex: 1,
    justifyContent: "space-evenly"
  },
  datePicker: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  date: {
    textAlign: "center",
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: "200"
  },
  arrowLeft: {
    fontSize: 20,
    transform: [{ rotate: "180deg" }]
  },
  arrowRight: {
    fontSize: 20
  },
  dynamicTabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "center",
    width: width,
    marginVertical: 5
  },

  button: {
    padding: 5,
    borderRadius: 25,
    width: width / 2.5,
    marginVertical: 5,
    alignSelf: "center"
  },

  buttonTitle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    lineHeight: 15 * 1.5
  },
  dimButtonTitle: {
    textAlign: "center",
    color: "#EBECEB",
    fontSize: 16,
    lineHeight: 15 * 1.5
  },
  plusIcon: {
    textAlign: "center",
    paddingTop: 5,
    alignSelf: "center",
    color: "#fff"
  },
  navigateButton: {
    padding: 10,
    borderRadius: 35,
    width: width / 5.5,
    height: height / 10
  },
  positionAbsolute: {
    position: "absolute",
    right: 20,
    bottom: 120,
    zIndex: 2
  }
});
export default styles;
