import React from "react";
import PropTypes from "prop-types";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import globalStyles from "../../config/styles";
import styles from "./styles";

function CrisisModal(props) {
  return (
    <Modal animationType="fade" visible={props.isVisible} transparent={true}>
      <View style={styles.modal}>
        <Text style={styles.title}>Notice</Text>
        <Text style={styles.text}>
          Speakbox does not provide crisis support.
        </Text>
        <Text style={styles.text}>
          If you are in a crisis, please call 1-833-456-4566 (Canada's National
          Suicide Prevention Line) or visit https://kidshelpphone.ca
        </Text>
        <Text style={styles.text}>
          If your issue is an emergency, call 911 or go to your closest
          emergency department
        </Text>
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
            onPress={() => {
              props.toggleVisibility();
            }}
          >
            <Text style={styles.buttonText}>Got It</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </Modal>
  );
}

CrisisModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  toggleVisibility: PropTypes.func.isRequired
};

export default CrisisModal;
