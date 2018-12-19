import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/styles";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    alignItems: "center"
  },
  graphTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: width / 1.3,
    marginBottom: 30
  },
  graphTitleButton: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    height: height / 33,
    width: width / 4,
    alignItems: "center",
    justifyContent: "center"
  },
  graphTitleButtonHide: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    height: height / 33,
    width: width / 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F0EC",
    borderRadius: 20
  },
  graphTitle: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    textTransform: "uppercase"
  },
  graphContainer: {
    flexDirection: "row"
  },
  rating: {
    justifyContent: "space-between",
    height: height / 5,
    marginRight: 5
  },
  barContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    height: height / 5,
    width: width / 1.2,
    justifyContent: "space-around",
    borderColor: "#C5C5C5",
    borderLeftWidth: 1.5,
    borderBottomWidth: 1.5
  },
  bar: {
    shadowColor: "black",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    width: "5%",
    borderRadius: 9.5,
    marginBottom: 5
  },
  barHide: {
    width: "5%",
    backgroundColor: "transparent"
  },
  graphButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    width: width / 1.25,
    marginTop: 20
  },
  graphButton: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: 12,
    height: height / 33,
    width: width / 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginVertical: 3,
    shadowColor: "black",
    shadowOffset: { height: 1, width: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1
  },
  graphButtonText: {
    fontFamily: globalStyles.textFont.fontFamily,
    fontSize: globalStyles.textFont.fontSize,
    color: globalStyles.greyTextColor.color,
    textTransform: "uppercase"
  },
  gradient: {
    height: "100%",
    width: "100%",
    borderRadius: 20
  }
});

export default styles;
