import React from "react";
import PropTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import globalStyles from "../../config/styles";

const AskButton = props => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={[
        globalStyles.blueGradientColor.start.color,
        globalStyles.blueGradientColor.end.color
      ]}
      style={styles.linearGradientButton}
    >
      <TouchableOpacity
        style={styles.questionButton}
        onPress={() => {
          props.navigation.navigate("CommunityQuestion", {
            categoryID: props.categoryID
          });
        }}
      >
        <Text style={styles.questionButtonText}>Ask a question</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

AskButton.propTypes = {
  navigation: PropTypes.object.isRequired,
  categoryID: PropTypes.number
};

export default AskButton;
