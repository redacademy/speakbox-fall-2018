import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  background: {
    width: width,
    height: height
  },
  activityImage: {
    height: height / 5,
    width: width / 1.3,
    alignSelf: "center"
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    height: height * 1.1
  },
  title: {
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "300",
    marginTop: 15,
    marginBottom: 15
  },
  description: {
    alignSelf: "center",
    width: width / 2,
    textAlign: "center"
  },
  sectionTitle: {
    marginLeft: 10
  },
  theme: {
    fontSize: 25,
    marginBottom: 10,
    fontWeight: "200"
  },
  carousel: {
    marginLeft: 10
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
  image: {
    marginRight: 10,
    width: width / 1.3,
    height: height / 5.2
  },
  time: {
    fontWeight: "700"
  }
});
export default styles;
