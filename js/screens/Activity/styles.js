import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  background: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    height: Dimensions.get("window").height * 1.02
  },
  pickActivity: {
    alignSelf: "center",
    marginBottom: 30
  },
  title: {
    fontSize: 35
  },
  sectionTitle: {
    marginLeft: 10
  },
  theme: {
    fontSize: 25,
    marginBottom: 10
  },
  carousel: {
    marginLeft: 10
  },
  image: {
    marginRight: 10,
    width: Dimensions.get("window").width / 2,
    height: Dimensions.get("window").height / 5.5
  }
});
export default styles;
