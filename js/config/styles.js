import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  titleFont: {
    fontFamily: "sans-serif", // Change to Quicksand when imported
    fontSize: 25
  },

  textFont: {
    fontFamily: "sans-serif", // Change to Quicksand Light when imported
    fontWeight: "lighter",
    fontSize: 14
  },

  inputBoxFont: {
    fontFamily: "sans-serif", // Change to Avenir Light when imported
    fontSize: 13
  },

  greyTextColor: { color: "#5D5D5D" },
  blueGradientColor: { start: { color: "#A4E8FF" }, end: { color: "#6BCCFD" } },
  pinkGradientColor: { start: { color: "#FFB5BA" }, end: { color: "#FBE3D7" } }
});

export default globalStyles;
