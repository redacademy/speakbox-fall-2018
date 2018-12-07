import React from "react";
import PropTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import globalStyles from "../../config/styles";

const AskButton = props => {
  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[
        globalStyles.blueGradientColor.start.color,
        globalStyles.blueGradientColor.end.color
      ]}
      style={styles.linearGradientButton}
    >
      <TouchableOpacity
        style={styles.questionButton}
        onPress={() => {
          props.navigation.navigate("CommunityQuestion");
        }}
      >
        <Text style={styles.questionButtonText}>Ask a question</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

AskButton.propTypes = {};

export default AskButton;
