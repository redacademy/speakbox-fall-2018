import React from "react";
import PropTypes from "prop-types";
import LinearGradient from "react-native-linear-gradient";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import globalStyles from "../../config/styles";

const FilterButton = props => {
  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#FBE3D7", "#FFB5BA"]}
      style={styles.filterButton}
    >
      <TouchableOpacity>
        <Text style={styles.filterButtonText}>{props.text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

FilterButton.propTypes = {};

export default FilterButton;
