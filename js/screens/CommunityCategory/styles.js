import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/styles";
export default (style = StyleSheet.create({
  linearGradient: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center"
  },

  topContainer: {
    alignItems: "center",
    padding: 5,
    height: Dimensions.get("window").height / 3
  },
  bottomContainer: {
    flex: 1
  },
  title: {
    fontSize: globalStyles.titleFont.fontSize,
    ...globalStyles.greyTextColor,
    letterSpacing: 2,
    textTransform: "uppercase"
  },
  filterContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 4,
    padding: 10
  },
  filters: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  sortBy: {
    fontSize: 13
  },

  filterButton: {},

  filterButtonText: {
    color: "white"
  }
}));
