import React from "react";
import PropTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import globalStyles from "../../config/styles";

const FilterButton = props => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={[
        globalStyles.pinkGradientColor.start.color,
        globalStyles.pinkGradientColor.end.color
      ]}
      style={styles.filterButton}
    >
      <TouchableOpacity
        onPress={() => {
          props.getPosts(props.filterName);
        }}
      >
        <Text style={styles.filterButtonText}>{props.text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

FilterButton.propTypes = {
  filterName: PropTypes.string.isRequired,
  getPosts: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default FilterButton;
