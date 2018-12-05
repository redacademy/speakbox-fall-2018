import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%"
  },
  container: {
    flex: 1,
    marginTop: 100
  },
  pickActivity: {
    alignSelf: "center",
    marginBottom: 125
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
