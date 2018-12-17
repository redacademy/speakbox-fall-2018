import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  background: {
    width,
    height
  },
  activityImage: {
    height: height / 3,
    width: width / 1.3,
    alignSelf: "center"
  },
  container: {
    flex: 1,
    height: height * 1.5
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "300"
  },
  activityTitle: {
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "300"
  },
  question: {
    textAlign: "center",
    marginVertical: 10
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
    width: width / 3,
    height: height / 2.5,
    resizeMode: "contain",
    alignSelf: "center"
  },
  time: {
    fontWeight: "700"
  },
  slider: {
    width: width / 1.3,
    justifyContent: "center",
    alignSelf: "center"
  },
  sliderRating: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width / 1.25,
    marginVertical: 5
  },
  helpful: {
    fontSize: 10,
    width: width / 6,
    textAlign: "center"
  },
  numbersRating: {
    flexDirection: "row",
    width: width / 1.3,
    justifyContent: "space-between",
    marginVertical: 5
  },
  numbers: {
    fontSize: 10,
    textAlign: "center"
  }
});
export default styles;
