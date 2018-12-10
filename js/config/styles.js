import { StyleSheet } from "react-native";

const globalStyles = {
  titleFont: {
    fontFamily: "sans-serif", // Change to Quicksand when imported
    fontSize: 25,
    letterSpacing: 2
  },

  textFont: {
    fontFamily: "sans-serif", // Change to Quicksand Light when imported
    fontSize: 14
  },

  inputBoxFont: {
    fontFamily: "sans-serif", // Change to Avenir Light when imported
    fontSize: 13,
    fontWeight: "900"
  },

  greyTextColor: { color: "#5D5D5D" },
  blueGradientColor: { start: { color: "#A4E8FF" }, end: { color: "#6BCCFD" } },
  pinkGradientColor: { start: { color: "#FFB5BA" }, end: { color: "#FBE3D7" } },

  screenGradientColor: {
    start: { color: "#BBDED6" },
    end: { color: "#FAE3D9" }
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
