import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  background: {
    width: width,
    height: height
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    height: height * 1.4
  },
  title: {
    fontSize: 35,
    alignSelf: "center",
    marginTop: 20
  },
  sectionTitle: {
    marginLeft: 10
  },
  theme: {
    fontSize: 25,
    marginBottom: 10,
    fontWeight: "200",
    letterSpacing: 5
  },
  carousel: {
    marginLeft: 10
  },
  image: {
    marginRight: 10,
    width: width / 1.3,
    height: height / 5.2
  }
});
export default styles;
