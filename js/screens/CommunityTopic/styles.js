import { StyleSheet, Dimensions } from "react-native";
import globalStyles from "../../config/styles";
const { height, width } = Dimensions.get("window");

export default (style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10
  },
  dimContainer: {
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#A1A1A1",
    opacity: 0.42
  },
  header: {
    flex: 0.4,
    padding: 10
  },

  background: {
    width: width,
    height: height
  },

  headerDate: {
    color: "#9B9B9B",
    fontSize: 13,
    lineHeight: 18
  },

  headerName: {
    lineHeight: 16,
    fontSize: 12
  },

  headerTitle: {
    ...globalStyles.greyTextColor,
    fontSize: 16,
    lineHeight: 22
  },

  headerComment: {
    color: "#64BEBD",
    fontSize: 12,
    lineHeight: 16,
    textAlign: "right"
  },

  commentButton: {
    backgroundColor: "#FFFFFF",
    height: Dimensions.get("window").height / 8,
    borderRadius: 10,
    opacity: 0.9,
    padding: 5,
    justifyContent: "space-evenly",
    marginTop: 15
  },

  commentButtonName: {
    fontSize: 12,
    lineHeight: 14
  },

  commentButtonPlaceholder: {
    fontSize: 13,
    lineHeight: 18,
    color: "#B5ADAD"
  },

  commentText: {
    fontSize: 13,
    lineHeight: 18,
    ...globalStyles.greyTextColor
  },

  flatListContainer: {
    flex: 0.9
  }
}));
