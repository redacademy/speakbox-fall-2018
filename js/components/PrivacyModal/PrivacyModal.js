import React from "react";
import PropTypes from "prop-types";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";
import globalStyles from "../../config/styles";

const PrivacyModal = props => {
  return (
    <React.Fragment>
      <Modal animationType="fade" visible={props.isVisible} transparent={true}>
        <View style={styles.modal}>
          <Text style={styles.title}>Privacy</Text>
          <Text style={styles.text}>
            We protect your data on our servers, but we can't prevent you from
            giving out personal information.
          </Text>
          <Text style={styles.text}>Be mindful of what you post online</Text>
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
    </React.Fragment>
  );
};

PrivacyModal.propTypes = {};

export default PrivacyModal;
