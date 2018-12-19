import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  dimContainer: {
    flex: 1,
    alignSelf: "center",
    width: width / 1.1
  },
  text: {
    color: "#B0B0AD"
  },
  journalList: {
    height: height / 6,
    backgroundColor: "#FFFFFF",
    margin: 10,
    borderRadius: 5,
    opacity: 0.85,
    padding: 15,
    justifyContent: "space-around"
  },
  emotions: {
    color: "#B0B0AD"
  }
});

export default styles;
