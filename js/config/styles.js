import { StyleSheet } from "react-native";

const globalStyles = {
  titleFont: {
    fontFamily: "Quicksand",
    fontSize: 25,
    letterSpacing: 2
  },

  textFont: {
    fontFamily: "Quicksand",
    fontSize: 14
  },

  inputBoxFont: {
    fontFamily: "Avenir",
    fontSize: 13,
    fontWeight: "900"
  },

  greyTextColor: { color: "#5D5D5D" },
  blueGradientColor: { start: { color: "#A4E8FF" }, end: { color: "#6BCCFD" } },
  pinkGradientColor: { start: { color: "#FDCCC8" }, end: { color: "#FFB5BA" } },

  screenGradientColor: {
    start: { color: "#BBDED6" },
    end: { color: "#FAE3D9" }
  },
  modalGradientColor: {
    start: { color: "#F3E3D8" },
    end: { color: "#fff" }
  },

  navigationHeader: {
    backgroundColor: "#bbded6",
    borderBottomColor: "transparent"
  },
  navigationTitle: {
    color: "#fff"
  }
};

export default globalStyles;
