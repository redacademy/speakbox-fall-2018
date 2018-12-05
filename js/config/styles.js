import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  // Touchable Opacity :
  // activityOpacity is 0.6

  titleFont: {
    fontFamily: "sans-serif", // Change to Quicksand when imported
    fontSize: 25,
    letterSpacing: 2
  },

  textFont: {
    fontFamily: "sans-serif", // Change to Quicksand Light when imported
    // fontWeight: "lighter",
    fontSize: 15
  },

  inputBoxFont: {
    fontFamily: "sans-serif", // Change to Avenir Light when imported
    fontSize: 13,
    fontWeight: "900"
  },

  greyTextColor: { color: "#5D5D5D" }
  // blueGradientColor: { start: { color: "#A4E8FF" }, end: { color: "#6BCCFD" } },
  // pinkGradientColor: { start: { color: "#FFB5BA" }, end: { color: "#FBE3D7" } }
});

export default globalStyles;
